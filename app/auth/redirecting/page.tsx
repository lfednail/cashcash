// app/auth/redirecting/page.tsx
import { getUser } from "@/lib/auth-server";
import { redirect } from "next/navigation";

export default async function RedirectingPage() {
  const user = await getUser();

  if (!user) {
    redirect("/auth/signin");
  }

  // Supposons que ton modèle User a un champ `role`
  // Ex: "GESTIONNAIRE", "TECHNICIEN", ou "admin"

  if (role === "GESTIONNAIRE") {
    redirect("/dashboard/gestionnaire");
  } else if (role === "TECHNICIEN") {
    redirect("/dashboard/technicien");
  } else {
    // Fallback (ex: admin ou rôle inconnu)
    redirect("/dashboard");
  }
}
