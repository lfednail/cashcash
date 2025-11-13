// types/better-auth.d.ts
import type { DefaultUser } from "better-auth";

declare module "better-auth" {
  interface User extends DefaultUser {
    role?: string | null;
  }
}
