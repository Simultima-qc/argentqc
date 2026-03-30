import type { Metadata } from "next";
import SeoProgrammesPage from "@/components/SeoProgrammesPage";
import type { Programme } from "@/types";

export const metadata: Metadata = {
  title: "Crédit de solidarité Québec 2026 – Montants et conditions",
  description:
    "Tout savoir sur le crédit d'impôt pour solidarité au Québec en 2026 : montants, conditions d'admissibilité, comment faire la demande. Jusqu'à 2 000 $ par année.",
  keywords: ["crédit solidarité Québec", "crédit impôt solidarité Québec 2026", "crédit solidarité montant"],
};

const programmes: Programme[] = [
  {
    id: "credit-loyer-qc",
    nom: "Crédit d'impôt pour solidarité",
    organisme: "Revenu Québec",
    niveau: "provincial",
    categorie: "credits_impot",
    montant_min: 150,
    montant_max: 2000,
    montant_affiche: "150 $ – 2 000 $",
    description: "Crédit d'impôt remboursable combinant trois composantes : TVQ, habitation et village nordique. Versé mensuellement ou annuellement selon le montant.",
    conditions: ["Résider au Québec au 31 décembre", "Revenu familial sous les seuils établis", "Produire une déclaration de revenus au Québec"],
    lien_officiel: "https://www.revenuquebec.ca/fr/citoyens/credits-dimpot/credit-dimpot-pour-solidarite/",
    criteres: { provinces: ["QC"], revenu_max: 60000 },
  },
  {
    id: "credit-tps-fed",
    nom: "Crédit pour la TPS/TVH",
    organisme: "Gouvernement du Canada",
    niveau: "federal",
    categorie: "credits_impot",
    montant_min: 100,
    montant_max: 700,
    montant_affiche: "Jusqu'à 700 $ par année",
    description: "Paiements trimestriels non imposables pour aider les personnes et familles à revenus faibles ou modestes à récupérer une partie de la TPS/TVH payée.",
    conditions: ["Résider au Canada", "Produire une déclaration de revenus", "Avoir 19 ans ou plus (ou avoir un conjoint/enfant)"],
    lien_officiel: "https://www.canada.ca/fr/agence-revenu/services/prestations-enfants-familles/credit-taxe-produits-services-taxe-vente-harmonisee-tps-tvh.html",
    criteres: { revenu_max: 50000 },
  },
  {
    id: "allocation-logement-qc",
    nom: "Allocation-logement (Québec)",
    organisme: "Société d'habitation du Québec (SHQ)",
    niveau: "provincial",
    categorie: "logement",
    montant_min: 100,
    montant_max: 2040,
    montant_affiche: "Jusqu'à 170 $ par mois",
    description: "Aide financière mensuelle pour les locataires à faible revenu qui consacrent une trop grande part de leurs revenus au loyer.",
    conditions: ["Être locataire au Québec", "Avoir 50 ans ou plus, ou avoir un enfant à charge", "Revenu annuel brut sous les seuils établis"],
    lien_officiel: "https://www.habitation.gouv.qc.ca/programme/programme/allocation-logement",
    criteres: { locataire: true, provinces: ["QC"], revenu_max: 35000 },
  },
];

const faqs = [
  {
    question: "C'est quoi exactement le crédit de solidarité ?",
    reponse: "Le crédit d'impôt pour solidarité est un crédit remboursable de Revenu Québec qui regroupe trois anciennes aides : le remboursement de la TVQ, le crédit pour habitation et l'allocation pour les résidents des villages nordiques. Il est versé mensuellement si le montant dépasse 800 $.",
  },
  {
    question: "Combien puis-je recevoir avec le crédit de solidarité ?",
    reponse: "Le montant dépend de votre revenu familial, de votre situation de logement (locataire ou propriétaire) et du nombre de personnes dans votre ménage. En 2026, une personne seule locataire peut recevoir entre 400 $ et 1 200 $ par année. Un couple avec enfants peut recevoir jusqu'à 2 000 $.",
  },
  {
    question: "Dois-je faire une demande pour le crédit de solidarité ?",
    reponse: "Oui, la première fois. Vous devez remplir l'annexe D de votre déclaration de revenus provinciale (TP-1). Par la suite, le crédit est recalculé automatiquement chaque année lors de votre déclaration.",
  },
  {
    question: "Puis-je cumuler le crédit de solidarité et le crédit TPS fédéral ?",
    reponse: "Oui, absolument. Les deux crédits sont indépendants et cumulables. Le crédit de solidarité est provincial (Revenu Québec) et le crédit TPS est fédéral (ARC). Vous pouvez recevoir les deux en même temps.",
  },
];

export default function CreditSolidariteQuebecPage() {
  return (
    <SeoProgrammesPage
      titre="Crédit de solidarité Québec 2026"
      sousTitre="Montants, conditions et comment faire votre demande — tout ce qu'il faut savoir."
      intro="Le crédit d'impôt pour solidarité est l'une des aides les plus accessibles au Québec : il s'adresse à la grande majorité des ménages à revenus faibles ou modestes, locataires ou propriétaires. Pourtant, des milliers de Québécois oublient de le réclamer chaque année. En le combinant avec le crédit fédéral pour la TPS/TVH et l'allocation-logement, certains ménages peuvent récupérer plus de 2 500 $ par année sans même s'en rendre compte."
      programmes={programmes}
      faqs={faqs}
      motCle="Crédit de solidarité Québec 2026"
      pagesRelies={[
        { href: "/allocation-logement-quebec", titre: "Allocation logement Québec" },
        { href: "/credit-impot-quebec", titre: "Tous les crédits d'impôt Québec" },
        { href: "/aide-famille-quebec", titre: "Aide financière famille Québec" },
      ]}
    />
  );
}
