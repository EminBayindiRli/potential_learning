# Potential Learning Platform

Potential Panel'in kullanımını öğreten interaktif web platformu. Uydu, drone ve çevresel veri analizi ile akıllı patates tarımı için rehber niteliğinde bir öğrenme merkezi.

## Teknolojiler

- **React 19** + **Vite** — SPA framework ve build tool
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — kart giriş animasyonları
- **i18next** — çoklu dil desteği (TR, EN, PL)
- **AWS Amplify** — deployment

## Özellikler

- Panel tasarım diliyle tutarlı UI
- Animasyonlu hero section (NDVI haritası, verim trendi, tarla istatistikleri)
- Scroll-triggered reveal animasyonları
- Dark/light mode
- Responsive tasarım
- SSS (FAQ) accordion bileşeni

## Klasör Yapısı

```
src/
├── components/
│   ├── layout/          # Navbar, Footer
│   ├── sections/        # Hero, About, HowToUse, Video, Knowledge, FAQ
│   └── ui/              # Preloader, FAQItem
├── hooks/               # useScrollReveal
├── locales/             # en/, tr/, pl/ çeviri dosyaları
├── pages/               # Home
├── data/                # Statik veri
├── i18n/                # i18next konfigürasyonu
└── index.css            # CSS design system & değişkenler
```

## Kurulum

```bash
npm install
npm run dev
```
