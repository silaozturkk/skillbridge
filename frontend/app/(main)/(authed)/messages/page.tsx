export default function MessagesIndexPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
        Mesajlar
      </h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Konuşma listesi; bir kullanıcı seçildiğinde `GET
        /api/messages/:userId` ile geçmiş yüklenecek.
      </p>
      <div className="rounded-xl border border-dashed p-10 text-center text-sm text-zinc-500 dark:border-zinc-700">
        Sohbet listesi placeholder.
      </div>
    </div>
  );
}
