type Props = { params: Promise<{ id: string }> };

export default async function PublicUserProfilePage({ params }: Props) {
  const { id } = await params;
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
        Kullanıcı profili
      </h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Kullanıcı ID: <span className="font-mono">{id}</span> — `GET
        /api/users/:id`, yorumlar `GET /api/reviews/:userId`
      </p>
      <div className="rounded-xl border border-dashed p-10 text-center text-sm text-zinc-500 dark:border-zinc-700">
        Ortalama puan ve yorum listesi placeholder.
      </div>
    </div>
  );
}
