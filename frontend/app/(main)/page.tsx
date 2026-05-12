import Link from "next/link";
import { ROUTES } from "@/lib/routes";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="rounded-2xl border bg-white/80 p-8 shadow-sm dark:bg-zinc-900/80">
        <p className="text-sm font-medium uppercase tracking-wide text-zinc-500">
          SkillBridge
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Hafif ve kullanımı kolay bir freelance pazaryeri
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          İş ilanları, teklifler, mesajlaşma ve değerlendirmeler — MVP kapsamında
          tanımlanan akışlar için sayfa iskeletleri hazır; backend bağlandığında
          formlar ve listeler doldurulacak.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={ROUTES.jobs}
            className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
          >
            İlanlara göz at
          </Link>
          <Link
            href={ROUTES.register}
            className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-800"
          >
            Kayıt ol
          </Link>
        </div>
      </section>
      <section className="grid gap-4 sm:grid-cols-2">
        {[
          {
            title: "İstemciler",
            body: "Profil, iş ilanı oluşturma, teklifleri inceleme ve mesaj.",
          },
          {
            title: "Freelancerlar",
            body: "İlanları listeleme, teklif verme, sohbet ve yorumlar.",
          },
        ].map((card) => (
          <div
            key={card.title}
            className="rounded-xl border p-5 dark:border-zinc-800"
          >
            <h2 className="font-semibold text-zinc-900 dark:text-zinc-100">
              {card.title}
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {card.body}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
