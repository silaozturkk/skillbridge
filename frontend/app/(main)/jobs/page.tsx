export default function JobsPage() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            İş ilanları
          </h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Arama ve kategori filtresi MVP’de; veri `GET /api/jobs` ile
            yüklenecek.
          </p>
        </div>
      </div>
      <div className="rounded-xl border border-dashed p-10 text-center text-sm text-zinc-500 dark:border-zinc-700">
        İlan kartları burada listelenecek.
      </div>
    </div>
  );
}
