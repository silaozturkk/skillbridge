export default function ProposalsDashboardPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
        Tekliflerim
      </h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Freelancer teklif panosu; ilan bazlı listeler `GET
        /api/proposals/job/:jobId` ile beslenecek.
      </p>
      <div className="rounded-xl border border-dashed p-10 text-center text-sm text-zinc-500 dark:border-zinc-700">
        Teklif özeti placeholder.
      </div>
    </div>
  );
}
