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

// Bornes numériques réelles des tranches d'âge proposées par le questionnaire.
// Le questionnaire ne collecte qu'une tranche, pas un âge exact : le moteur doit
// comparer cet intervalle aux bornes age_min/age_max des programmes plutôt que de
// réduire la tranche à un âge fictif représentatif (voir issue #58).
const AGE_BUCKETS: Record<string, { min: number; max: number }> = {
  "18-30": { min: 18, max: 30 },
  "31-45": { min: 31, max: 45 },
  "46-65": { min: 46, max: 65 },
  "65+": { min: 65, max: Infinity },
};

type AgeEligibilite = "admissible" | "exclu" | "incertain";

function evaluerAge(fourchette: string, criteres: Programme["criteres"]): AgeEligibilite {
  const { age_min, age_max } = criteres;
  if (age_min === undefined && age_max === undefined) return "admissible";

  const intervalle = AGE_BUCKETS[fourchette];
  // Tranche inconnue/non répondue : ne jamais transformer l'absence d'info en
  // admissibilité ou exclusion certaine.
  if (!intervalle) return "incertain";

  if (age_min !== undefined && intervalle.max < age_min) return "exclu";
  if (age_max !== undefined && intervalle.min > age_max) return "exclu";

  const chevauche =
    (age_min !== undefined && intervalle.min < age_min) ||
    (age_max !== undefined && intervalle.max > age_max);

  return chevauche ? "incertain" : "admissible";
}

export function trouverProgrammes(reponses: ReponseQuestionnaire): Programme[] {
  const revenu = parseRevenu(reponses.revenu);

  return programmes
    .filter((p) => {
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

      // Âge : seule une exclusion certaine (toute la tranche hors borne) retire
      // le programme des résultats. Un chevauchement reste affiché mais incertain.
      if (evaluerAge(reponses.age, c) === "exclu") return false;

      // Étudiant
      if (c.etudiant === true && !reponses.etudiant) return false;

      return true;
    })
    .map((p) => {
      if (evaluerAge(reponses.age, p.criteres) !== "incertain") return p;
      return { ...p, admissibiliteAgeIncertaine: true };
    });
}

export function calculerTotal(programmes: Programme[]): { min: number; max: number } {
  return programmes
    .filter((programme) => programme.montant_sommable !== false && !programme.admissibiliteAgeIncertaine)
    .reduce(
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
