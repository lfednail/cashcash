export default function LegalPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100">
      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Mentions Légales
        </h1>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">
              1. Informations légales
            </h2>
            <p>
              <strong>Éditeur du site :</strong> [CashCash]
              <br />
              <strong>Adresse :</strong> [Adresse complète]
              <br />
              <strong>Téléphone :</strong> [Numéro de téléphone]
              <br />
              <strong>Email :</strong> [cashcash@exemple.com]
              <br />
              <strong>Responsable de la publication :</strong> [Nom du
              responsable]
              <br />
              <strong>Hébergeur :</strong> [Nom de l&apos;hébergeur] - [Adresse
              de l&apos;hébergeur]
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">
              2. Conditions d&#39;utilisation
            </h2>
            <p>
              L&apos;utilisation de l&apos;application CashCash implique
              l&apos;acceptation pleine et entière des conditions
              d&apos;utilisation décrites ci-dessous. Tout utilisateur du site
              est réputé avoir lu, compris et accepté ces conditions.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">
              3. Données personnelles
            </h2>
            <p>
              Conformément à la loi n°78-17 du 6 janvier 1978 relative à
              l&apos;informatique, aux fichiers et aux libertés, les
              utilisateurs de l&apos;application CashCash disposent d&apos;un
              droit d&apos;accès, de modification, de rectification et de
              suppression des données personnelles les concernant. Pour exercer
              ce droit, veuillez nous contacter à [adresse email].
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">
              4. Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble du site CashCash est protégé par les lois
              françaises et internationales relatives au droit d&apos;auteur et
              à la propriété intellectuelle. Tous les droits sont réservés, y
              compris pour les documents téléchargeables et les représentations
              iconographiques et photographiques.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">
              5. Limitation de responsabilité
            </h2>
            <p>
              L&lsquo;éditeur de l&apos;application ne saurait être tenu
              responsable des erreurs, omissions ou de la disponibilité de
              l&apos;information contenue dans l&apos;application. Il ne peut
              garantir l&apos;absence d&lsquo;interruption ou d&apos;erreurs
              dans l&apos;accès au service.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">6. Droit applicable</h2>
            <p>
              Les présentes mentions légales sont régies par le droit français.
              En cas de litige, les tribunaux français seront seuls compétents.
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
