"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function SigninPage() {
  const router = useRouter();

  async function onSubmit(formData: FormData) {
    const email = formData.get("email");
    await authClient.forgetPassword(
      {
        email: String(email),
        redirectTo: "/reset-password",
      },
      {
        onSuccess: () => {
          router.push("/auth");
          router.refresh();
        },

        onError: (error) => {
          toast.error(error.error.message);
        },
      }
    );
  }
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Reset Password
          </CardTitle>
          <CardDescription>
            Enter your email and password to sign in to your account. If
            you&apos;ve forgottent your password, you can reset it using the
            link below
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4" action={onSubmit}>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Reset Password
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
