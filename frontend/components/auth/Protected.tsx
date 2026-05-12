"use client";

import { ROUTES } from "@/lib/routes";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect, type ReactNode } from "react";

/**
 * Client guard for MVP “protected routes”. Pair with middleware/cookies when
 * the API issues httpOnly tokens.
 */
export function Protected({ children }: { children: ReactNode }) {
  const { isAuthenticated, isReady } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isReady || isAuthenticated) return;
    router.replace(ROUTES.login);
  }, [isReady, isAuthenticated, router]);

  if (!isReady) {
    return (
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        Oturum kontrol ediliyor…
      </p>
    );
  }

  if (!isAuthenticated) {
    return (
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        Giriş sayfasına yönlendiriliyor…
      </p>
    );
  }

  return <>{children}</>;
}
