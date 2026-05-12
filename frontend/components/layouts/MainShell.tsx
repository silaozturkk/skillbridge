import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { ReactNode } from "react";

export function MainShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <Header />
      <main className="flex-1 px-4 py-8">
        <div className="container mx-auto max-w-5xl">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
