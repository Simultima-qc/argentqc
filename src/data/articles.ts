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
