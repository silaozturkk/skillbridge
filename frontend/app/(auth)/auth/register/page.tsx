import Link from "next/link";
import { ROUTES } from "@/lib/routes";

export default function RegisterPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          Kayıt ol
        </h1>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          `POST /api/auth/register` — rol (istemci / freelancer) alanı MVP’de.
        </p>
      </div>
      <div className="rounded-lg border border-dashed p-6 text-center text-sm text-zinc-500 dark:border-zinc-700">
        Register formu placeholder
      </div>
      <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">
        Zaten hesabın var mı?{" "}
        <Link href={ROUTES.login} className="font-medium underline">
          Giriş yap
        </Link>
      </p>
    </div>
  );
}
