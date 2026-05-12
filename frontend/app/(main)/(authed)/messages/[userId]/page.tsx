type Props = { params: Promise<{ userId: string }> };

export default async function ConversationPage({ params }: Props) {
  const { userId } = await params;
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
        Konuşma
      </h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Kullanıcı ID: <span className="font-mono">{userId}</span> — `POST
        /api/messages`, `GET /api/messages/:userId`
      </p>
      <div className="rounded-xl border border-dashed p-10 text-center text-sm text-zinc-500 dark:border-zinc-700">
        Mesaj thread arayüzü placeholder.
      </div>
    </div>
  );
}
