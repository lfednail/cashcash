export default function AboutPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100">
      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          À propos de CashCash
        </h1>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Notre entreprise</h2>
            <p>
              Fondée en 2025, CashCash est une société innovante spécialisée
              dans la gestion d&apos;interventions techniques. Avec 57 agences
              réparties sur le territoire national, nous nous engageons à offrir
              des services de proximité et une réactivité exceptionnelle à nos
              clients.
            </p>
            <p className="mt-4">
              Notre application web de gestion des interventions est conçue pour
              répondre aux besoins spécifiques des gestionnaires d&apos;agences
              et des techniciens, en centralisant toutes les informations
              relatives aux interventions, clients et équipements.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Notre mission</h2>
            <p>
              Faciliter la gestion des interventions techniques pour nos clients
              et nos équipes sur le terrain. Nous visons à améliorer
              l&apos;efficacité, la traçabilité et la communication entre tous
              les acteurs impliqués dans le processus d&#39;intervention.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Nos valeurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {[
                {
                  title: "Proximité",
                  description:
                    "Être proche de nos clients et de nos équipes sur le terrain.",
                },
                {
                  title: "Réactivité",
                  description:
                    "Répondre rapidement et efficacement aux demandes d'intervention.",
                },
                {
                  title: "Fiabilité",
                  description:
                    "Garantir la qualité et la fiabilité de nos services.",
                },
                {
                  title: "Innovation",
                  description:
                    "Proposer des outils numériques modernes et intuitifs.",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
                >
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Notre équipe</h2>
            <p>
              Notre équipe est composée de gestionnaires d&lsquo;agences
              experts, de techniciens qualifiés et de développeurs passionnés.
              Ensemble, nous travaillons à l&apos;amélioration continue de notre
              plateforme et de nos services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Notre engagement</h2>
            <p>
              CashCash s&apos;engage à respecter les plus hautes normes de
              sécurité et de confidentialité des données. Nous nous conformons
              aux réglementations en vigueur, notamment en matière de protection
              des données personnelles.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} CashCash - Tous droits réservés
      </footer>
    </div>
  );
}
