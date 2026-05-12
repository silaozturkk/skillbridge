---
# Frontend Geliştirme Planı — SkillBridge

Hazırlık (macOS komutları)
1. Proje dizinine geç:
   - cd ~/Desktop/UpSchool-Project/frontend
2. Bağımlılıkları yükle:
   - npm install
   - (Next.js + Tailwind zaten varsa) npm run dev

Adım adım yol haritası (haftalık)

Hafta 1 — İskele ve Temel Yapı
- Next.js app router yapılandırması (pages veya app)
- Tailwind kurulumu ve temel theme
- Global layout (Header, Footer)
- Route yapısını oluştur: /auth, /jobs, /profile, /messages
- Komutlar:
  - npx create-next-app@latest . --typescript (gerekirse)
  - npx tailwindcss init -p

Hafta 2 — Authentication
- Login ve Register sayfaları + form validasyonu
- Auth context veya hook (useAuth)
- ProtectedRoute bileşeni
- Local token yönetimi

Hafta 3 — Profil ve Kullanıcı
- Profile görüntüleme sayfası
- Profile edit formu (avatar URL, bio, skills)
- API ile GET/PUT entegrasyonu

Hafta 4 — Job System
- JobList ve JobCard bileşenleri
- Job detay sayfası
- NewJob formu + edit/delete işlemleri

Hafta 5 — Proposals
- ProposalForm (ilan içinde)
- ProposalList (freelancer dashboard)
- Basit duplicate kontrolü (frontend)

Hafta 6 — Messaging & Reviews
- Conversation listesi ve tekil konuşma sayfası
- Mesaj gönderme UI
- Review formu ve profilde gösterim

Hafta 7 — UI İyileştirme ve Test
- Responsive düzen optimizasyonu
- Loading / Error durumları
- Basit unit / integration testler (RTL + Vitest/Jest)

Hafta 8 — Hazırlık ve Deploy
- Çevresel değişkenleri düzenle (.env.local)
- Vercel için hazırlık (build komutu: next build && next export if necessary)
- Deploy ve smoke test

Geliştirme Kuralları
- Küçük commit'ler (feature bazlı)
- Reusable component oluştur
- API hatalarını kullanıcıya açık göster
- Form doğrulamalarını hem client hem server ile koordine et

Örnek Dosya Yapısı (frontend)
- /app veya /pages
- /components
- /layouts
- /styles
- /services (api/axios)
- /context (auth)
- /hooks
- /tests

Hızlı Başlangıç Notu
- Geliştirmeye başlamadan önce mevcut Next.js projesinde route ve Tailwind konfigürasyonunu doğrula.
- Terminal: npm run dev (localhost:3000)