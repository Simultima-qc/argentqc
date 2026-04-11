export interface Article {
  slug: string;
  titre: string;
  description: string;
  date: string;
  categorie: string;
  tempsLecture: string;
}

// Liste des articles du blogue — le plus récent en premier.
// L'agent automatique ajoute chaque nouvel article ici.
const articles: Article[] = [
  {
    slug: "aide-sociale-quebec-2026",
    titre: "Aide sociale Québec 2026 : Montants, conditions et comment faire une demande",
    description: "Aide sociale et solidarité sociale 2026 : montants de 780 $ à 1 870 $/mois selon votre situation, conditions d'admissibilité, démarches de demande et avantages connexes.",
    date: "2026-04-11",
    categorie: "Aide sociale",
    tempsLecture: "6 min",
  },
  {
    slug: "securite-vieillesse-quebec-2026",
    titre: "Sécurité de la vieillesse 2026 : Montants, admissibilité et comment faire votre demande",
    description: "Pension SV 2026 : jusqu'à 800 $/mois à 75 ans, bonification de 36 % si vous reportez à 70 ans, et cumul avec le SRG pour les aînés à faible revenu.",
    date: "2026-04-06",
    categorie: "Retraite",
    tempsLecture: "6 min",
  },
  {
    slug: "rap-reer-premier-acheteur-quebec-2026",
    titre: "RAP 2026 : Comment utiliser votre REER pour acheter votre première maison au Québec",
    description: "Le RAP vous permet de retirer jusqu'à 35 000 $ de votre REER sans impôt pour votre première maison. Cumulable avec le CELIAPP pour un couple : jusqu'à 150 000 $ de mise de fonds.",
    date: "2026-04-02",
    categorie: "Immobilier",
    tempsLecture: "6 min",
  },
  {
    slug: "frais-garde-enfants-quebec-2026",
    titre: "Frais de garde d'enfants au Québec 2026 : récupérez jusqu'à 75% de vos dépenses",
    description: "Le crédit d'impôt pour frais de garde peut couvrir jusqu'à 75% de vos frais de garderie. Montants 2026, conditions et comment cumuler provincial et fédéral.",
    date: "2026-03-30",
    categorie: "Famille",
    tempsLecture: "5 min",
  },
  {
    slug: "renoclimat-2026-guide-complet",
    titre: "Rénoclimat 2026 : Guide complet pour obtenir votre subvention",
    description: "Tout ce que vous devez savoir sur Rénoclimat : montants, travaux admissibles, étapes pour faire votre demande et comment maximiser votre remboursement.",
    date: "2026-03-29",
    categorie: "Rénovation",
    tempsLecture: "6 min",
  },
];

export default articles;
