import Link from "next/link";
import { ROUTES } from "@/lib/routes";

export default function LoginPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          Giriş yap
        </h1>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          `POST /api/auth/login` — form bir sonraki adımda bağlanacak.
        </p>
      </div>
      <div className="rounded-lg border border-dashed p-6 text-center text-sm text-zinc-500 dark:border-zinc-700">
        Login formu placeholder
      </div>
      <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">
        Hesabın yok mu?{" "}
        <Link href={ROUTES.register} className="font-medium underline">
          Kayıt ol
        </Link>
      </p>
    </div>
  );
}
