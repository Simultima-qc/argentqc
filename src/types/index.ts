export type Categorie =
  | "renovation"
  | "energie"
  | "famille"
  | "transport"
  | "logement"
  | "credits_impot"
  | "sante"
  | "agriculture"
  | "education";

export interface Programme {
  id: string;
  nom: string;
  organisme: string;
  niveau: "federal" | "provincial" | "municipal";
  categorie: Categorie;
  montant_min: number;
  montant_max: number;
  montant_affiche: string; // ex: "Jusqu'à 10 000 $" ou "500 $ – 10 000 $"
  montant_sommable?: boolean;
  preselection_only?: boolean;
  /**
   * Computed by trouverProgrammes(), not stored in the catalogue: true when the
   * user's age bucket overlaps an age_min/age_max boundary so eligibility cannot
   * be determined from the questionnaire alone (see issue #58).
   */
  admissibiliteAgeIncertaine?: boolean;
  /**
   * Computed by trouverProgrammes(), not stored in the catalogue: true when the
   * user's income bucket overlaps a revenu_min/revenu_max boundary so eligibility
   * cannot be determined from the questionnaire alone (see issue #67).
   */
  admissibiliteRevenuIncertaine?: boolean;
  description: string;
  conditions: string[];
  lien_officiel: string;
  criteres: {
    proprietaire?: boolean;
    locataire?: boolean;
    provinces?: string[];
    revenu_max?: number; // revenu familial brut max
    revenu_min?: number;
    enfants?: boolean;
    retraite?: boolean;
    vehicule_elec?: boolean;
    renovation?: boolean;
    age_min?: number;
    age_max?: number;
    etudiant?: boolean;
  };
}

export interface ReponseQuestionnaire {
  province: string;
  statut_logement: "proprietaire" | "locataire";
  situation_familiale: "seul" | "couple" | "famille";
  enfants: boolean;
  revenu: string; // fourchette ex: "0-30000"
  vehicule_elec: string; // "oui" | "non" | "prevu"
  renovation: boolean;
  retraite: boolean;
  age: string; // fourchette ex: "18-30"
  etudiant: boolean;
}
