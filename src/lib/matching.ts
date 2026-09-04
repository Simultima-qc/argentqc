import type { Programme, ReponseQuestionnaire } from "@/types";
import type { Locale } from "@/i18n/routing";
import { programmes2026 } from "@/data/finance-2026";

const programmes = programmes2026 as Programme[];

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

// Bornes numériques réelles des tranches de revenu proposées par le questionnaire.
// Même principe que pour l'âge (issue #58) : le questionnaire ne collecte qu'une
// tranche, pas un revenu exact, donc le moteur doit comparer cet intervalle aux
// bornes revenu_min/revenu_max des programmes plutôt que de réduire la tranche à un
// revenu fictif représentatif (voir issue #67).
const REVENU_BUCKETS: Record<string, { min: number; max: number }> = {
  "0-30000": { min: 0, max: 30000 },
  "30000-50000": { min: 30000, max: 50000 },
  "50000-75000": { min: 50000, max: 75000 },
  "75000-100000": { min: 75000, max: 100000 },
  "100000+": { min: 100000, max: Infinity },
};

type Eligibilite = "admissible" | "exclu" | "incertain";

// Compare une tranche (âge ou revenu) répondue au questionnaire aux bornes min/max
// d'un critère de programme. Partagé entre l'âge (#58) et le revenu (#67) : les deux
// suivent exactement la même règle -- admissible si toute la tranche satisfait le
// critère, exclu si toute la tranche y échoue, incertain si la tranche chevauche un
// seuil ou si la tranche répondue est inconnue.
function evaluerTranche(
  intervalle: { min: number; max: number } | undefined,
  seuils: { min?: number; max?: number }
): Eligibilite {
  if (seuils.min === undefined && seuils.max === undefined) return "admissible";

  // Tranche inconnue/non répondue : ne jamais transformer l'absence d'info en
  // admissibilité ou exclusion certaine.
  if (!intervalle) return "incertain";

  if (seuils.min !== undefined && intervalle.max < seuils.min) return "exclu";
  if (seuils.max !== undefined && intervalle.min > seuils.max) return "exclu";

  const chevauche =
    (seuils.min !== undefined && intervalle.min < seuils.min) ||
    (seuils.max !== undefined && intervalle.max > seuils.max);

  return chevauche ? "incertain" : "admissible";
}

function evaluerAge(fourchette: string, criteres: Programme["criteres"]): Eligibilite {
  return evaluerTranche(AGE_BUCKETS[fourchette], { min: criteres.age_min, max: criteres.age_max });
}

// Exportée pour permettre des tests directs des seuils revenu_min/revenu_max/combinés
// (issue #67), y compris des combinaisons qui n'existent pas encore dans le catalogue.
export function evaluerRevenu(fourchette: string, criteres: Programme["criteres"]): Eligibilite {
  return evaluerTranche(REVENU_BUCKETS[fourchette], { min: criteres.revenu_min, max: criteres.revenu_max });
}

export function trouverProgrammes(reponses: ReponseQuestionnaire): Programme[] {
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

      // Revenu : seule une exclusion certaine (toute la tranche hors borne) retire
      // le programme des résultats. Un chevauchement reste affiché mais incertain
      // et n'entre pas dans le total calculé (voir issue #67).
      if (evaluerRevenu(reponses.revenu, c) === "exclu") return false;

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
      const ageIncertain = evaluerAge(reponses.age, p.criteres) === "incertain";
      const revenuIncertain = evaluerRevenu(reponses.revenu, p.criteres) === "incertain";
      if (!ageIncertain && !revenuIncertain) return p;
      return {
        ...p,
        ...(ageIncertain ? { admissibiliteAgeIncertaine: true as const } : {}),
        ...(revenuIncertain ? { admissibiliteRevenuIncertaine: true as const } : {}),
      };
    });
}

export function calculerTotal(programmes: Programme[]): { min: number; max: number } {
  return programmes
    .filter(
      (programme) =>
        programme.montant_sommable !== false &&
        !programme.admissibiliteAgeIncertaine &&
        !programme.admissibiliteRevenuIncertaine
    )
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
