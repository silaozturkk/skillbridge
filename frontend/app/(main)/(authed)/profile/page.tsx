export default function ProfileEditPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
        Profilim
      </h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Bio, yetenekler, profil fotoğrafı — `PUT /api/users/:id` (yalnızca kendi
        kaydı).
      </p>
      <div className="rounded-xl border border-dashed p-10 text-center text-sm text-zinc-500 dark:border-zinc-700">
        Profil düzenleme formu placeholder.
      </div>
    </div>
  );
}
