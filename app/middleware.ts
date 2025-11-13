// app/middleware.ts
import { authClient } from "@/lib/auth-client";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const session = await authClient.context.getSession({
    headers: request.headers,
  });

  if (!session?.session) {
    // Rediriger vers la page de connexion si non authentifié
    return NextResponse.redirect(new URL("/api/auth/sign-in", request.url));
  }

  const userRole = session.user.role; // Supposons que le rôle est dans l'objet utilisateur
  const pathname = request.nextUrl.pathname;

  // Exemple de logique de protection
  if (pathname.startsWith("/dashboard/gestionnaire")) {
    if (userRole !== "GESTIONNAIRE") {
      return NextResponse.redirect(new URL("/unauthorized", request.url)); // ou une page d'erreur
    }
  }

  if (pathname.startsWith("/dashboard/technicien")) {
    if (userRole !== "TECHNICIEN") {
      return NextResponse.redirect(new URL("/unauthorized", request.url));
    }
  }

  // Autoriser l'accès
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Ne pas matcher les fichiers internes de Next.js, les actifs statiques,
     * ou les routes d'API d'authentification.
     */
    "/((?!api/auth|_next/static|_next/image|favicon.ico).*)",
    "/gestionnaire/:path*", // Protéger les routes commençant par /gestionnaire
    "/technicien/:path*", // Protéger les routes commençant par /technicien
  ],
};
