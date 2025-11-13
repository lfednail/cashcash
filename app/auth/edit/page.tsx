// app/auth/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getUser } from "@/lib/auth-server";
import { redirect } from "next/navigation";
import { AccountForme } from "./account-form";

export default async function AuthPage() {
  const user = await getUser();

  if (!user) {
    redirect("/auth/unauthorized");
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Edit Account
          </CardTitle>
        </CardHeader>
        <CardContent>
          <AccountForme
            defaultValues={{
              name: user.name ?? "",
              image: user.image ?? null,
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
}
