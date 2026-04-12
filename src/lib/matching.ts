import type { Programme, ReponseQuestionnaire } from "@/types";
import type { Locale } from "@/i18n/routing";
import { programmes2026 } from "@/data/finance-2026";

const programmes = programmes2026 as Programme[];

function parseRevenu(fourchette: string): number {
  const map: Record<string, number> = {
    "0-30000": 15000,
    "30000-50000": 40000,
    "50000-75000": 62500,
    "75000-100000": 87500,
    "100000+": 120000,
  };
  return map[fourchette] ?? 50000;
}

function parseAge(fourchette: string): number {
  const map: Record<string, number> = {
    "18-30": 25,
    "31-45": 38,
    "46-65": 55,
    "65+": 70,
  };
  return map[fourchette] ?? 40;
}

export function trouverProgrammes(reponses: ReponseQuestionnaire): Programme[] {
  const revenu = parseRevenu(reponses.revenu);
  const age = parseAge(reponses.age);

  return programmes.filter((p) => {
    const c = p.criteres;

    // Province
    if (c.provinces && !c.provinces.includes(reponses.province)) return false;

    // Propriétaire/locataire
    if (c.proprietaire === true && reponses.statut_logement !== "proprietaire") return false;
    if (c.locataire === true && reponses.statut_logement !== "locataire") return false;

    // Enfants
    if (c.enfants === true && !reponses.enfants) return false;

    // Revenu max
    if (c.revenu_max !== undefined && revenu > c.revenu_max) return false;

    // Revenu min
    if (c.revenu_min !== undefined && revenu < c.revenu_min) return false;

    // Véhicule électrique
    if (
      c.vehicule_elec === true &&
      reponses.vehicule_elec !== "oui" &&
      reponses.vehicule_elec !== "prevu"
    ) return false;

    // Rénovation
    if (c.renovation === true && !reponses.renovation) return false;

    // Retraite
    if (c.retraite === true && !reponses.retraite) return false;

    // Âge min
    if (c.age_min !== undefined && age < c.age_min) return false;

    // Âge max
    if (c.age_max !== undefined && age > c.age_max) return false;

    return true;
  });
}

export function calculerTotal(programmes: Programme[]): { min: number; max: number } {
  return programmes.reduce(
    (acc, p) => ({
      min: acc.min + p.montant_min,
      max: acc.max + p.montant_max,
    }),
    { min: 0, max: 0 }
  );
}

export function formaterArgent(montant: number, locale: Locale = "fr"): string {
  return new Intl.NumberFormat(locale === "fr" ? "fr-CA" : "en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  }).format(montant);
}
