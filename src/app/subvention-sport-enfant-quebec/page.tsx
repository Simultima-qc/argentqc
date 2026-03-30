import type { Metadata } from "next";
import SeoProgrammesPage from "@/components/SeoProgrammesPage";
import type { Programme } from "@/types";

export const metadata: Metadata = {
  title: "Subvention sport enfant Québec 2026 – Aides disponibles",
  description:
    "Aides financières pour inscrire vos enfants au sport au Québec en 2026 : allocation famille, ACE, programmes municipaux et crédit pour frais de garde. Calculez votre droit.",
  keywords: ["subvention sport enfant Québec", "aide inscription sport enfant Québec 2026", "programme sport jeunesse Québec"],
};

const programmes: Programme[] = [
  {
    id: "irapvf-qc-sport",
    nom: "Allocation famille (Québec)",
    organisme: "Retraite Québec",
    niveau: "provincial",
    categorie: "famille",
    montant_min: 100,
    montant_max: 2782,
    montant_affiche: "Jusqu'à 2 782 $ par enfant/année",
    description: "Versements mensuels non imposables pour les familles québécoises ayant des enfants de moins de 18 ans. Ce revenu supplémentaire peut couvrir les frais d'inscription aux activités sportives.",
    conditions: [
      "Résider au Québec",
      "Avoir au moins un enfant de moins de 18 ans",
      "Être le principal responsable de l'enfant"
    ],
    lien_officiel: "https://www.retraitequebec.gouv.qc.ca/fr/enfants/allocation-famille/Pages/allocation-famille.aspx",
    criteres: { enfants: true, provinces: ["QC"] },
  },
  {
    id: "ace-fed-sport",
    nom: "Allocation canadienne pour enfants (ACE)",
    organisme: "Gouvernement du Canada",
    niveau: "federal",
    categorie: "famille",
    montant_min: 1000,
    montant_max: 7787,
    montant_affiche: "Jusqu'à 7 787 $ par enfant/année",
    description: "Paiement mensuel non imposable pour les familles avec enfants de moins de 18 ans. Une des principales sources d'aide pour couvrir les activités sportives et de loisirs des enfants.",
    conditions: [
      "Avoir au moins un enfant de moins de 18 ans",
      "Résider au Canada",
      "Produire sa déclaration de revenus annuellement"
    ],
    lien_officiel: "https://www.canada.ca/fr/agence-revenu/services/prestations-enfants-familles/allocation-canadienne-enfants-apercu.html",
    criteres: { enfants: true },
  },
  {
    id: "frais-garde-qc",
    nom: "Crédit d'impôt pour frais de garde d'enfants",
    organisme: "Revenu Québec",
    niveau: "provincial",
    categorie: "famille",
    montant_min: 200,
    montant_max: 3000,
    montant_affiche: "Jusqu'à 75% des frais admissibles",
    description: "Crédit d'impôt remboursable couvrant une partie des frais de garde, incluant certains camps sportifs et de jour reconnus. Le taux varie entre 26% et 75% selon votre revenu familial.",
    conditions: [
      "Enfant de moins de 16 ans (ou sans limite d'âge si handicap)",
      "Résider au Québec",
      "Frais payés à une garderie, camp de jour ou service de garde reconnu",
      "Reçus officiels requis"
    ],
    lien_officiel: "https://www.revenuquebec.ca/fr/citoyens/credits-dimpot/credit-dimpot-pour-frais-de-garde-denfants/",
    criteres: { enfants: true, provinces: ["QC"] },
  },
];

const faqs = [
  {
    question: "Y a-t-il une subvention directe pour le sport des enfants au Québec ?",
    reponse: "Il n'existe pas de subvention provinciale ou fédérale directe pour les inscriptions sportives en 2026 (le crédit fédéral pour la condition physique des enfants a été éliminé en 2017). Cependant, plusieurs programmes indirects aident les familles : l'allocation famille, l'ACE et le crédit pour frais de garde pour les camps sportifs. Plusieurs municipalités offrent aussi des programmes d'accès au sport pour les familles à faible revenu — vérifiez auprès de votre ville.",
  },
  {
    question: "Est-ce que les camps sportifs sont couverts par le crédit pour frais de garde ?",
    reponse: "Oui, les camps de jour sportifs sont admissibles au crédit d'impôt pour frais de garde d'enfants au Québec, à condition que l'enfant soit âgé de moins de 16 ans et que le camp soit offert pendant que vous travaillez ou étudiez. Demandez toujours un reçu officiel avec le numéro d'enregistrement de l'organisme.",
  },
  {
    question: "Ma municipalité offre-t-elle une aide pour le sport des enfants ?",
    reponse: "Beaucoup de villes québécoises ont des programmes d'accès aux loisirs pour les familles à faible revenu. Par exemple, Montréal a le programme « Accès loisirs », Québec a « Accès-Famille ». Contactez le service des loisirs de votre municipalité pour connaître les programmes disponibles.",
  },
  {
    question: "Puis-je combiner l'ACE et le crédit pour frais de garde ?",
    reponse: "Oui, absolument. L'ACE est un paiement mensuel et le crédit pour frais de garde est un crédit d'impôt annuel — ils sont entièrement cumulables. Une famille avec deux enfants peut recevoir l'ACE (jusqu'à 15 574 $/an) et utiliser le crédit pour frais de garde pour les camps sportifs en été.",
  },
];

export default function SubventionSportEnfantPage() {
  return (
    <SeoProgrammesPage
      titre="Aides financières pour le sport des enfants au Québec 2026"
      sousTitre="Allocation famille, ACE et crédit pour frais de garde — les programmes qui aident à payer les activités sportives."
      intro="Bien qu'il n'existe pas de subvention directe pour les inscriptions sportives au Québec en 2026, plusieurs programmes gouvernementaux permettent aux familles de couvrir ces coûts. L'Allocation canadienne pour enfants (ACE) et l'Allocation famille du Québec représentent ensemble jusqu'à 10 000 $ par année pour certaines familles — argent qui peut servir aux sports et activités. De plus, les camps sportifs d'été peuvent être réclamés dans le crédit pour frais de garde, remboursé jusqu'à 75% pour les familles à faible revenu."
      programmes={programmes}
      faqs={faqs}
      motCle="Subvention sport enfant Québec 2026"
      pagesRelies={[
        { href: "/aide-famille-quebec", titre: "Aide financière famille Québec" },
        { href: "/allocation-enfant-quebec", titre: "Allocation enfant Québec – montants" },
        { href: "/credit-impot-frais-medicaux-quebec", titre: "Crédit d'impôt frais médicaux Québec" },
      ]}
    />
  );
}
