import { Protected } from "@/components/auth/Protected";
import type { ReactNode } from "react";

export default function AuthedLayout({ children }: { children: ReactNode }) {
  return <Protected>{children}</Protected>;
}
