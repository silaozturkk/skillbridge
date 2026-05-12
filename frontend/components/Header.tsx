"use client";

import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import { useAuth } from "@/hooks/useAuth";

const navClass = "text-sm text-zinc-700 hover:underline dark:text-zinc-300";

export default function Header() {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <header className="w-full border-b border-zinc-200 bg-white/90 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/90">
      <div className="container mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-4">
        <Link href={ROUTES.home} className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          SkillBridge
        </Link>
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <Link href={ROUTES.jobs} className={navClass}>
            İlanlar
          </Link>
          {isAuthenticated ? (
            <>
              <Link href={ROUTES.dashboard} className={navClass}>
                Panel
              </Link>
              <Link href={ROUTES.proposals} className={navClass}>
                Teklifler
              </Link>
              <Link href={ROUTES.messages} className={navClass}>
                Mesajlar
              </Link>
              <Link href={ROUTES.profile} className={navClass}>
                Profil
              </Link>
              {user ? (
                <span className="text-xs text-zinc-500 dark:text-zinc-400">
                  {user.username}
                </span>
              ) : null}
              <button
                type="button"
                onClick={() => logout()}
                className="text-sm text-zinc-700 underline-offset-4 hover:underline dark:text-zinc-300"
              >
                Çıkış
              </button>
            </>
          ) : (
            <>
              <Link href={ROUTES.login} className={navClass}>
                Giriş
              </Link>
              <Link
                href={ROUTES.register}
                className="rounded-md bg-zinc-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
              >
                Kayıt ol
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
