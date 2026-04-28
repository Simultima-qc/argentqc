import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export interface LeadPayload {
  email: string;
  locale: string;
  questionnaire_params: Record<string, unknown>;
  matched_program_count: number;
  estimated_total_min: number;
  estimated_total_max: number;
  created_at: string;
}

function formatMontant(n: number): string {
  return new Intl.NumberFormat("fr-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  }).format(n);
}

function buildConfirmationHtml(lead: LeadPayload): string {
  const isFr = lead.locale !== "en";
  const min = formatMontant(lead.estimated_total_min);
  const max = formatMontant(lead.estimated_total_max);
  const count = lead.matched_program_count;
  const url = "https://argentqc.ca/fr/questionnaire";

  if (isFr) {
    return `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><title>Vos résultats ArgentQC.ca</title></head>
<body style="font-family:sans-serif;color:#1a1a2e;max-width:600px;margin:auto;padding:24px">
  <h1 style="color:#2563eb">Vos résultats ArgentQC.ca</h1>
  <p>Bonjour,</p>
  <p>Voici un résumé de votre diagnostic :</p>
  <table style="border-collapse:collapse;width:100%;margin:16px 0">
    <tr style="background:#f1f5f9">
      <td style="padding:10px 14px;font-weight:600">Programmes trouvés</td>
      <td style="padding:10px 14px">${count}</td>
    </tr>
    <tr>
      <td style="padding:10px 14px;font-weight:600">Estimation basse</td>
      <td style="padding:10px 14px">${min}</td>
    </tr>
    <tr style="background:#f1f5f9">
      <td style="padding:10px 14px;font-weight:600">Estimation haute</td>
      <td style="padding:10px 14px"><strong>${max}</strong></td>
    </tr>
  </table>
  <p>Vous avez des questions ou souhaitez refaire le diagnostic ?</p>
  <p><a href="${url}" style="background:#2563eb;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;display:inline-block">Refaire le diagnostic</a></p>
  <p style="color:#6b7280;font-size:13px;margin-top:32px">ArgentQC.ca — Trouvez les programmes gouvernementaux auxquels vous avez droit.</p>
</body>
</html>`;
  }

  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>Your ArgentQC.ca results</title></head>
<body style="font-family:sans-serif;color:#1a1a2e;max-width:600px;margin:auto;padding:24px">
  <h1 style="color:#2563eb">Your ArgentQC.ca results</h1>
  <p>Hello,</p>
  <p>Here is a summary of your diagnostic:</p>
  <table style="border-collapse:collapse;width:100%;margin:16px 0">
    <tr style="background:#f1f5f9">
      <td style="padding:10px 14px;font-weight:600">Programs found</td>
      <td style="padding:10px 14px">${count}</td>
    </tr>
    <tr>
      <td style="padding:10px 14px;font-weight:600">Low estimate</td>
      <td style="padding:10px 14px">${min}</td>
    </tr>
    <tr style="background:#f1f5f9">
      <td style="padding:10px 14px;font-weight:600">High estimate</td>
      <td style="padding:10px 14px"><strong>${max}</strong></td>
    </tr>
  </table>
  <p>Want to redo the diagnostic or have questions?</p>
  <p><a href="${url}" style="background:#2563eb;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;display:inline-block">Redo the diagnostic</a></p>
  <p style="color:#6b7280;font-size:13px;margin-top:32px">ArgentQC.ca — Find the government programs you qualify for.</p>
</body>
</html>`;
}

function buildNotificationText(lead: LeadPayload): string {
  return [
    `Nouveau lead — ${new Date(lead.created_at).toLocaleString("fr-CA")}`,
    ``,
    `Email    : ${lead.email}`,
    `Locale   : ${lead.locale}`,
    `Programmes : ${lead.matched_program_count}`,
    `Estimation : ${formatMontant(lead.estimated_total_min)} – ${formatMontant(lead.estimated_total_max)}`,
    ``,
    `Paramètres questionnaire :`,
    JSON.stringify(lead.questionnaire_params, null, 2),
  ].join("\n");
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as LeadPayload;

    if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json({ error: "Email invalide" }, { status: 400 });
    }

    const lead: LeadPayload = {
      email: body.email,
      locale: body.locale,
      questionnaire_params: body.questionnaire_params,
      matched_program_count: body.matched_program_count,
      estimated_total_min: body.estimated_total_min,
      estimated_total_max: body.estimated_total_max,
      created_at: new Date().toISOString(),
    };

    // Always log — useful in Netlify function logs
    console.log("[LEAD]", JSON.stringify(lead));

    const apiKey = process.env.RESEND_API_KEY;
    const notifyEmail = process.env.LEAD_NOTIFY_EMAIL;

    if (!apiKey) {
      console.warn("[LEAD] RESEND_API_KEY absent — email non envoyé");
      return NextResponse.json({ success: true });
    }

    const resend = new Resend(apiKey);
    const from = "ArgentQC.ca <noreply@argentqc.ca>";
    const isFr = lead.locale !== "en";

    const subject = isFr
      ? `Vos résultats ArgentQC.ca — jusqu'à ${formatMontant(lead.estimated_total_max)} à récupérer`
      : `Your ArgentQC.ca results — up to ${formatMontant(lead.estimated_total_max)} to claim`;

    const notifySubject = `[ArgentQC] Nouveau lead — ${lead.matched_program_count} programmes, ${formatMontant(lead.estimated_total_max)}`;

    try {
      await Promise.all([
        resend.emails.send({
          from,
          to: lead.email,
          subject,
          html: buildConfirmationHtml(lead),
        }),
        notifyEmail
          ? resend.emails.send({
              from,
              to: notifyEmail,
              subject: notifySubject,
              text: buildNotificationText(lead),
            })
          : Promise.resolve(),
      ]);
    } catch (err) {
      // Resend failure must not degrade UX
      console.error("[LEAD] Resend error:", err);
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
