import { AuthScaffold } from "@/components/layouts/AuthScaffold";
import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return <AuthScaffold>{children}</AuthScaffold>;
}
