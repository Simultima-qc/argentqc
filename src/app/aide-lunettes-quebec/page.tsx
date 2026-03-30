import type { Metadata } from "next";
import SeoProgrammesPage from "@/components/SeoProgrammesPage";
import type { Programme } from "@/types";

export const metadata: Metadata = {
  title: "Aide pour lunettes Québec 2026 – Remboursements et crédits disponibles",
  description:
    "Découvrez les aides disponibles pour payer vos lunettes au Québec en 2026 : RAMQ, crédit d'impôt pour frais médicaux provincial et fédéral. Calculez votre remboursement.",
  keywords: ["aide lunettes Québec", "remboursement lunettes Québec 2026", "RAMQ lunettes", "crédit impôt frais médicaux lunettes"],
};

const programmes: Programme[] = [
  {
    id: "frais-medicaux-fed",
    nom: "Crédit d'impôt pour frais médicaux",
    organisme: "Gouvernement du Canada",
    niveau: "federal",
    categorie: "sante",
    montant_min: 0,
    montant_max: 2500,
    montant_affiche: "15% des dépenses admissibles",
    description: "Crédit d'impôt non remboursable de 15% sur vos frais médicaux admissibles dépassant le seuil de 3% de votre revenu net (ou 2 635 $ en 2026, selon le moins élevé). Les lunettes et verres de contact sont des dépenses admissibles.",
    conditions: [
      "Résider au Canada",
      "Produire une déclaration de revenus fédérale",
      "Conserver vos reçus de lunettes, montures, verres de contact",
      "Dépenses dépassant 3% de votre revenu net ou 2 635 $"
    ],
    lien_officiel: "https://www.canada.ca/fr/agence-revenu/services/impot/particuliers/sujets/tout-votre-declaration-revenus/declaration-revenus/remplir-declaration-revenus/deductions-credits-depenses/ligne-33099-33199-depenses-admissibles-frais-medicaux.html",
    criteres: { provinces: ["QC", "ON", "BC", "AB", "MB", "SK", "NB", "NS", "PE", "NL"] },
  },
  {
    id: "frais-medicaux-qc",
    nom: "Crédit d'impôt pour frais médicaux (Québec)",
    organisme: "Revenu Québec",
    niveau: "provincial",
    categorie: "sante",
    montant_min: 0,
    montant_max: 1500,
    montant_affiche: "Jusqu'à 20% des dépenses",
    description: "Crédit d'impôt remboursable du Québec pour frais médicaux, incluant les lunettes, verres correcteurs et verres de contact prescrits. Le taux varie selon votre revenu — les ménages à faible revenu obtiennent un crédit plus élevé.",
    conditions: [
      "Résider au Québec",
      "Produire une déclaration de revenus provinciale",
      "Lunettes ou verres prescrit par un optométriste ou médecin",
      "Conserver tous vos reçus"
    ],
    lien_officiel: "https://www.revenuquebec.ca/fr/citoyens/credits-dimpot/credit-dimpot-pour-frais-medicaux/",
    criteres: { provinces: ["QC"] },
  },
  {
    id: "credit-solidarite-sante",
    nom: "Crédit d'impôt pour solidarité",
    organisme: "Revenu Québec",
    niveau: "provincial",
    categorie: "credits_impot",
    montant_min: 150,
    montant_max: 2000,
    montant_affiche: "150 $ – 2 000 $",
    description: "Crédit remboursable pour les ménages à revenus modestes. Bien qu'il ne couvre pas directement les lunettes, il augmente le revenu disponible pour couvrir ces dépenses.",
    conditions: [
      "Résider au Québec",
      "Revenu familial sous les seuils établis",
      "Produire une déclaration de revenus au Québec"
    ],
    lien_officiel: "https://www.revenuquebec.ca/fr/citoyens/credits-dimpot/credit-dimpot-pour-solidarite/",
    criteres: { provinces: ["QC"], revenu_max: 60000 },
  },
];

const faqs = [
  {
    question: "Est-ce que la RAMQ couvre les lunettes au Québec ?",
    reponse: "La RAMQ couvre les examens de la vue pour les enfants de moins de 18 ans et les personnes de 65 ans et plus. Pour les lunettes, la RAMQ ne rembourse généralement pas les montures ni les verres pour la majorité des adultes, sauf pour les prestataires d'aide sociale. Par contre, les crédits d'impôt provincial et fédéral pour frais médicaux permettent de récupérer une partie du coût.",
  },
  {
    question: "Combien puis-je récupérer pour mes lunettes avec les crédits d'impôt ?",
    reponse: "Si vos lunettes coûtent 500 $ et que votre revenu est de 40 000 $, votre seuil fédéral est d'environ 1 200 $. Si vos dépenses médicales totales dépassent ce seuil, vous récupérez 15% de l'excédent. Avec le crédit provincial québécois, vous pouvez récupérer jusqu'à 20% supplémentaire selon votre revenu.",
  },
  {
    question: "Les verres de contact sont-ils des dépenses médicales admissibles ?",
    reponse: "Oui. Les verres de contact prescrits par un optométriste ou un médecin sont admissibles comme frais médicaux, tant au fédéral qu'au provincial. Conservez vos reçus et l'ordonnance.",
  },
  {
    question: "Dois-je avoir une prescription pour que mes lunettes soient admissibles ?",
    reponse: "Oui, pour être admissibles comme frais médicaux, les lunettes doivent être prescrites par un optométriste ou un médecin. Les lunettes de lecture achetées sans prescription en pharmacie ne sont généralement pas admissibles.",
  },
];

export default function AideLunettesQuebecPage() {
  return (
    <SeoProgrammesPage
      titre="Aide pour lunettes Québec 2026"
      sousTitre="Crédits d'impôt provincial et fédéral pour récupérer une partie du coût de vos lunettes."
      intro="Les lunettes coûtent cher, et beaucoup de Québécois ne savent pas qu'ils peuvent en récupérer une partie via les crédits d'impôt pour frais médicaux. Entre le crédit fédéral (15%) et le crédit provincial québécois (jusqu'à 20% selon le revenu), une famille qui cumule plusieurs dépenses médicales dans l'année peut obtenir un remboursement significatif. La clé : conserver tous ses reçus et les déclarer correctement."
      programmes={programmes}
      faqs={faqs}
      motCle="Aide lunettes Québec 2026"
    />
  );
}
