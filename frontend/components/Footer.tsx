export default function Footer() {
  return (
    <footer className="w-full border-t">
      <div className="container mx-auto px-4 py-6 text-sm text-center">
        © {new Date().getFullYear()} SkillBridge
      </div>
    </footer>
  );
}