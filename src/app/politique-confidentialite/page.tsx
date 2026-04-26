import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";

const DARK = "#060D1A";
const GOLD = "#F5C842";
const PARCH = "#F7F3EC";

export const metadata: Metadata = {
  title: "Politique de confidentialité – ArgentQC.ca",
  description:
    "Politique de confidentialité d'ArgentQC.ca : utilisation des données, cookies publicitaires (Google AdSense) et cookies d'analyse (Google Analytics).",
};

export default function PolitiqueConfidentialite() {
  return (
    <main className="min-h-screen" style={{ background: PARCH }}>
      <header
        className="sticky top-0 z-10 px-4 py-3 shadow-[0_1px_0_rgba(255,255,255,0.06)]"
        style={{ background: DARK }}
      >
        <div className="mx-auto flex max-w-2xl items-center justify-between">
          <Link
            href="/"
            className="text-[15px] font-extrabold no-underline"
            style={{ color: GOLD, fontFamily: "var(--font-playfair)" }}
          >
            ArgentQC.ca
          </Link>
          <Link
            href="/"
            className="text-xs no-underline"
            style={{ color: "rgba(240,235,224,0.5)" }}
          >
            ← Accueil
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-2xl px-4 py-12">
        <h1
          className="mb-3 text-3xl font-extrabold text-slate-800"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Politique de confidentialité
        </h1>
        <p className="mb-10 text-sm text-slate-500">
          Dernière mise à jour : avril 2026
        </p>

        <div className="flex flex-col gap-8 text-sm leading-7 text-slate-700">
          <section>
            <h2 className="mb-3 text-lg font-extrabold text-slate-800">
              1. Qui sommes-nous
            </h2>
            <p>
              ArgentQC.ca est un outil d&apos;information indépendant sur les finances personnelles et les programmes
              gouvernementaux au Québec et au Canada. Nous ne sommes pas affiliés au gouvernement.
              Pour nous contacter :{" "}
              <a href="mailto:contact@argentqc.ca" className="font-semibold text-blue-700 underline">
                contact@argentqc.ca
              </a>
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-extrabold text-slate-800">
              2. Données collectées
            </h2>
            <p>
              ArgentQC.ca ne collecte pas de données personnelles directement. Nous n&apos;exigeons pas d&apos;inscription
              et n&apos;enregistrons pas de comptes utilisateurs. Les seules données qui transitent par notre site
              sont celles liées à la navigation (voir les sections sur les cookies ci-dessous) et les messages
              envoyés volontairement à notre adresse courriel.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-extrabold text-slate-800">
              3. Google Analytics
            </h2>
            <p>
              Nous utilisons Google Analytics pour mesurer l&apos;audience de notre site (pages visitées, temps passé,
              provenance des visiteurs). Google Analytics utilise des cookies pour collecter des données de
              navigation anonymisées. Ces données sont traitées par Google selon sa propre politique de
              confidentialité.
            </p>
            <p className="mt-3">
              Pour en savoir plus ou vous opposer à la collecte Google Analytics, consultez :{" "}
              <span className="font-medium text-slate-600">
                tools.google.com/dlpage/gaoptout
              </span>
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-extrabold text-slate-800">
              4. Google AdSense et publicités
            </h2>
            <p>
              ArgentQC.ca utilise Google AdSense pour afficher des publicités. Google AdSense peut utiliser des
              cookies et des technologies similaires pour afficher des annonces personnalisées basées sur vos
              visites sur ce site et sur d&apos;autres sites.
            </p>
            <p className="mt-3">
              Google utilise le cookie DoubleClick pour diffuser des annonces pertinentes. Vous pouvez consulter
              la politique de confidentialité de Google et gérer vos préférences publicitaires sur :{" "}
              <span className="font-medium text-slate-600">
                adssettings.google.com
              </span>
            </p>
            <p className="mt-3">
              Les annonceurs tiers peuvent également utiliser des cookies pour mesurer les performances de
              leurs publicités. Ces cookies sont soumis aux politiques de confidentialité des annonceurs concernés,
              sur lesquelles nous n&apos;avons pas de contrôle.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-extrabold text-slate-800">
              5. Cookies
            </h2>
            <p>
              Les cookies sont de petits fichiers texte déposés sur votre appareil lors de la navigation.
              ArgentQC.ca utilise des cookies pour :
            </p>
            <ul className="mt-3 space-y-2 pl-5 list-disc">
              <li>Mesurer l&apos;audience et améliorer le contenu (Google Analytics)</li>
              <li>Afficher des publicités pertinentes (Google AdSense)</li>
              <li>Mémoriser des préférences d&apos;utilisation (ex. : état de la checklist déménagement)</li>
            </ul>
            <p className="mt-3">
              Vous pouvez désactiver les cookies dans les paramètres de votre navigateur, mais certaines
              fonctionnalités du site pourraient ne plus fonctionner correctement.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-extrabold text-slate-800">
              6. Liens externes
            </h2>
            <p>
              ArgentQC.ca contient des liens vers des sites gouvernementaux et des ressources tierces. Nous
              ne sommes pas responsables des pratiques de confidentialité de ces sites externes. Nous vous
              recommandons de lire leur politique de confidentialité respective.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-extrabold text-slate-800">
              7. Modifications
            </h2>
            <p>
              Nous pouvons mettre à jour cette politique de confidentialité à tout moment. La date de la
              dernière mise à jour est indiquée en haut de cette page. En continuant à utiliser ArgentQC.ca
              après une modification, vous acceptez la politique mise à jour.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-extrabold text-slate-800">
              8. Nous contacter
            </h2>
            <p>
              Pour toute question relative à cette politique de confidentialité, vous pouvez nous écrire à :{" "}
              <a href="mailto:contact@argentqc.ca" className="font-semibold text-blue-700 underline">
                contact@argentqc.ca
              </a>
            </p>
          </section>
        </div>
      </div>

      <SiteFooter
        legalText="Outil informatif non affilié au gouvernement."
        contactLabel="Contactez-nous"
        contentClassName="mx-auto max-w-2xl text-center"
        className="px-4 py-6"
        style={{ background: DARK }}
        legalStyle={{ color: "rgb(100 116 139)" }}
        linkStyle={{ color: "rgb(148 163 184)" }}
      />
    </main>
  );
}
