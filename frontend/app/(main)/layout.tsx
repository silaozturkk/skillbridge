import { MainShell } from "@/components/layouts/MainShell";
import type { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return <MainShell>{children}</MainShell>;
}
