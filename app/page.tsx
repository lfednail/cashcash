"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Gestion des interventions{" "}
            <span className="text-gray-700 dark:text-gray-300">simplifiée</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            CashCash centralise la gestion de vos interventions, clients et
            équipements. Optimisez votre flux de travail et gagnez en
            efficacité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/technicien">
              <Button
                size="lg"
                className="bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 px-8 py-6"
              >
                Espace Technicien
              </Button>
            </Link>
            <Link href="/auth/gestionnaire">
              <Button variant="outline" size="lg" className="px-8 py-6">
                Espace Gestionnaire
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Fonctionnalités principales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Gestion des interventions",
                description:
                  "Créez, planifiez et suivez toutes vos interventions en temps réel.",
              },
              {
                title: "Suivi des clients",
                description:
                  "Accédez à l'historique des interventions et aux informations clients.",
              },
              {
                title: "Gestion des équipements",
                description:
                  "Répertoriez et gérez les équipements associés à chaque intervention.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Interventions gérées" },
              { value: "120+", label: "Clients satisfaits" },
              { value: "98%", label: "Taux de réussite" },
              { value: "24/7", label: "Support disponible" },
            ].map((stat, index) => (
              <div key={index}>
                <p className="text-3xl md:text-4xl font-bold">{stat.value}</p>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800 dark:bg-gray-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à optimiser votre gestion ?
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Rejoignez des dizaines d&apos;entreprises qui utilisent déjà
            CashCash pour simplifier leur gestion d&apos;interventions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup">
              <Button
                size="lg"
                className="bg-white text-gray-800 hover:bg-gray-200 px-8 py-6"
              >
                Créer un compte
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-gray-800 px-8 py-6"
              >
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Image
                src="/images/cashcash-logov2.png"
                alt="CashCash Logo"
                width={120}
                height={32}
                className="object-contain"
              />
            </div>
            <div className="flex space-x-8">
              <Link
                href="/autres//about"
                className="hover:text-gray-600 dark:hover:text-gray-300"
              >
                À propos
              </Link>
              <Link
                href="/autres//contact"
                className="hover:text-gray-600 dark:hover:text-gray-300"
              >
                Contact
              </Link>
              <Link
                href="/autres/legal"
                className="hover:text-gray-600 dark:hover:text-gray-300"
              >
                Mentions légales
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} CashCash - Tous droits réservés
          </div>
        </div>
      </footer>
    </div>
  );
}
