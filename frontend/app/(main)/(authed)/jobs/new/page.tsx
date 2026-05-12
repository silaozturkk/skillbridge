export default function NewJobPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
        Yeni ilan
      </h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Form alanları: başlık, açıklama, bütçe, kategori — `POST /api/jobs`.
      </p>
      <div className="rounded-xl border border-dashed p-10 text-center text-sm text-zinc-500 dark:border-zinc-700">
        İlan oluşturma formu placeholder.
      </div>
    </div>
  );
}
