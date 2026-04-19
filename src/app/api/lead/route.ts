import { NextRequest, NextResponse } from "next/server";

export interface LeadPayload {
  email: string;
  locale: string;
  questionnaire_params: Record<string, unknown>;
  matched_program_count: number;
  estimated_total_min: number;
  estimated_total_max: number;
  created_at: string;
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

    // V1: structured log — ready to wire to DB / Resend / Loops later
    console.log("[LEAD]", JSON.stringify(lead));

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
