# POTENTIAL Design System

> Bu dokuman, POTENTIAL platformunun gorsel tutarliligini saglamak icin tum design token'larini ve component pattern'lerini icerir.
> E-learning sitesi dahil tum alt projeler bu kurallara uygunluk saglamalidir.

---

## 1. Brand & Identity

- **Platform Adi:** POTENTIAL
- **Alan:** AgriTech / Precision Agriculture
- **Tech Stack:** React 19 + Vite + TailwindCSS
- **CSS Framework:** TailwindCSS (custom config ile extend edilmis). Asagidaki tum token'lar `tailwind.config.js`'te tanimli. Tailwind class'lari (`bg-primary-green`, `text-heading-1`, `rounded-card`, vb.) dogrudan kullanilabilir. CSS variable'lar da ayrica `index.css`'te tanimli.
- **Renk Felsefesi:** Dogadan ilham alan yesil tonlari. Tarim, toprak ve bitki sagligini cagristiran, goz yormayan bir palet.
- **Font:** Mulish - modern, okunakli, hem baslik hem govde metni icin uygun.
- **Ikon Seti:** RemixIcon v4.6.0
- **Dark Mode:** TailwindCSS `dark:` prefix + CSS variable override (`[data-theme="dark"]` selector)

---

## 2. Color Palette

### 2.1 Primary Colors

| Token | Light Mode | Dark Mode | Kullanim |
|-------|-----------|-----------|----------|
| `--primary-green` | `#5A7D3A` | `#7BA352` | Ana marka rengi, butonlar, vurgular |
| `--primary-green-light` | `#9BB88A` | `#4A6741` | Hover state, secondary vurgular |
| `--primary-green-dark` | `#2F4F2F` | `#5A7D3A` | Koyu vurgular, hover dark |
| `--accent-green` | `#6B8F47` | `#6B8F47` | Gradient orta noktasi, aksan |
| `--secondary-green` | `#A4C639` | `#A4C639` | Parlak yesil vurgular |
| `--secondary-green-light` | `#F0F8E8` | `#F0F8E8` | Cok acik yesil arka plan |
| `--tertiary-green` | `#7CB518` | `#7CB518` | Enerji/canlilik vurgusu |
| `--sage-green` | `#8FBC8F` | `#8FBC8F` | Yumusak, adaçayi tonu |

### 2.2 Neutral Colors

| Token | Light Mode | Dark Mode | Kullanim |
|-------|-----------|-----------|----------|
| `--neutral-black` | `#151515` | `#F0F0F0` | Baslik metni, ana metin |
| `--dark-gray` | `#333333` | `#A0A0A0` | Ikincil basliklar |
| `--text-gray` | `#555555` | `#A0A0A0` | Govde metni, aciklamalar |
| `--light-gray` | `#E8F2EB` | `rgba(123,163,82,0.15)` | Border, divider |
| `--background-white` | `#FFFFFF` | `#0F1A12` | Sayfa arka plani |
| `--section-background` | `#F8FCF6` | `#1E2E23` | Section arka plani |
| `--subtle-green` | `#F0F8F2` | `#1E2E23` | Hafif vurgulu arka plan |

### 2.3 Semantic / Status Colors

| Anlam | Renk | Hex | Kullanim |
|-------|------|-----|----------|
| Error / High Threat | Red | `#ef4444` | Hata mesajlari, yuksek tehdit badge |
| Warning / Medium Threat | Amber | `#f59e0b` | Uyari mesajlari, orta tehdit badge |
| Success / Low Threat | Emerald | `#10b981` | Basari mesajlari, dusuk tehdit badge |
| Info | Blue | `#3b82f6` | Bilgilendirme mesajlari |

### 2.4 Badge Background Colors (10% opacity)

```css
/* High threat */
background: rgba(239, 68, 68, 0.1);   color: #ef4444;

/* Medium threat */
background: rgba(245, 158, 11, 0.1);  color: #f59e0b;

/* Low threat */
background: rgba(16, 185, 129, 0.1);  color: #10b981;

/* Info */
background: rgba(59, 130, 246, 0.1);  color: #3b82f6;
```

---

## 3. Typography

### 3.1 Font Family

```css
font-family: 'Mulish', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
             'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', sans-serif;
```

**Google Fonts import:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
```

### 3.2 Font Weights

| Agirlik | Deger | Kullanim |
|---------|-------|----------|
| Light | 300 | Dekoratif basliklar |
| Regular | 400 | Govde metni |
| Medium | 500 | Vurgulu govde, form label |
| Semibold | 600 | Card basliklari, buton metni |
| Bold | 700 | Sayfa basliklari, buyuk degerler |

### 3.3 Typography Scale

| Token | Size | Weight | Kullanim |
|-------|------|--------|----------|
| `heading-1` | 72px | 700 (bold) | Hero baslik |
| `heading-2` | 60px | 400-700 | Section baslik |
| `heading-3` | 48px | 400-700 | Alt section baslik |
| `heading-4` | 36px | 600-700 | Buyuk card baslik |
| `heading-5` | 30px | 600 | Orta baslik |
| `heading-6` | 24px | 600 | Kucuk baslik |
| `p1-semibold` | 20px | 600 | Vurgulu paragraf, card baslik |
| `p2-regular` | 18px | 400 | Buyuk govde metni |
| `p2-semibold` | 18px | 600 | Vurgulu buyuk metin |
| `p3-regular` | 16px | 400 | Standart govde metni |
| `p3-medium` | 16px | 500 | Orta vurgulu govde |
| `p4-regular` | 14px | 400 | Kucuk metin, form input |
| `p4-medium` | 14px | 500 | Kucuk vurgulu metin |
| `p4-semibold` | 14px | 600 | Label, badge |
| `p5-semibold` | 12px | 600 | Caption, overline, kucuk label |

### 3.4 Line Heights

| Kullanim | Line Height |
|----------|-------------|
| Basliklar (tight) | 1.1 - 1.2 |
| Alt basliklar | 1.3 - 1.4 |
| Govde metni | 1.5 - 1.6 |
| Relaxed (uzun paragraflar) | 1.625 (relaxed) |

### 3.5 Letter Spacing

| Kullanim | Deger |
|----------|-------|
| Buyuk basliklar | `tight` (-0.025em) |
| Normal metin | Normal (0) |
| Label / Overline | `wide` (0.025em) veya `wider` (0.05em) |
| Uppercase label | `wider` (0.05em) |

### 3.6 Responsive Typography

| Breakpoint | heading-1 | heading-2 | heading-3 | heading-4 |
|------------|-----------|-----------|-----------|-----------|
| Desktop (>1200px) | 72px | 60px | 48px | 36px |
| Tablet (<=1200px) | 60px | 48px | 40px | 32px |
| Mobile (<=640px) | 48px | 40px | 36px | 28px |
| Small (<=480px) | 36px | 32px | 28px | 24px |

---

## 4. Spacing & Layout

### 4.1 Base Grid
4px base unit. Tum spacing degerleri 4'un katlari.

### 4.2 Spacing Scale

| Token | Deger | Kullanim |
|-------|-------|----------|
| 1 | 4px | Minimum bosluk |
| 2 | 8px | Icon-text arasi |
| 3 | 12px | Compact card padding |
| 4 | 16px | Standart card padding, gap |
| 5 | 20px | Genis element padding |
| 6 | 24px | Section ici bosluk |
| 8 | 32px | Gutter |
| 10 | 40px | Buyuk section bosluk |
| 12 | 48px | Card padding (desktop) |
| 16 | 64px | Buyuk section padding |

### 4.3 Layout Tokens

| Token | Deger | Responsive |
|-------|-------|------------|
| `--container-width` | 1440px | - |
| `--section-padding` | 100px | Tablet: 80px, Mobile: 60px, Small: 40px |
| `--gutter` | 32px | Mobile: 16px |

### 4.4 Responsive Breakpoints

| Ad | Deger | Kullanim |
|----|-------|----------|
| sm | 640px | Mobil cihazlar |
| md | 768px | Tablet |
| lg | 1024px | Kucuk desktop |
| xl | 1200px | Desktop |

---

## 5. Border Radius

| Token | Deger | Kullanim |
|-------|-------|----------|
| `none` | 0px | Kare kenarlar |
| `sm` | 4px | Kucuk elementler |
| `DEFAULT` | 8px | Butonlar |
| `md` | 12px | Cardlar, modal |
| `lg` | 16px | Buyuk cardlar |
| `xl` | 20px | Ozel vurgular |
| `2xl` | 24px | Hero cardlar |
| `3xl` | 32px | Dekoratif |
| `full` | 9999px | Badge, pill, avatar |
| `button` | 8px | Buton default |
| `card` | 12px | Card default |

---

## 6. Shadows

### Light Mode

| Seviye | Deger | Kullanim |
|--------|-------|----------|
| sm | `0 1px 2px rgba(0,0,0,0.05)` | Card default |
| md | `0 4px 6px rgba(0,0,0,0.07)` | Hover state |
| lg | `0 10px 15px rgba(0,0,0,0.1)` | Modal, dropdown |

### Dark Mode

| Seviye | Deger | Kullanim |
|--------|-------|----------|
| sm | `0 1px 3px rgba(0,0,0,0.3)` | Card default |
| md | `0 2px 6px rgba(0,0,0,0.4)` | Hover state |
| none | - | Bazi elemanlar shadow'suz |

---

## 7. Button Variants

### 7.1 Primary Button

```css
background: #5A7D3A;
color: #FFFFFF;
border: 1px solid #5A7D3A;
border-radius: 16px;
padding: 10px 16px;  /* md size */
font-weight: 500;
font-size: 16px;

/* Hover */
background: #2F6B2F;  /* green-700 approx */
border-color: #2F6B2F;

/* Disabled */
background: #D1D5DB;
border-color: #D1D5DB;
cursor: not-allowed;
```

### 7.2 Secondary Button

```css
background: #FFFFFF;
color: #5A7D3A;
border: 1px solid #5A7D3A;
border-radius: 16px;

/* Dark mode */
background: #1E2E23;

/* Hover */
background: rgba(90,125,58,0.1);
```

### 7.3 Ghost Button

```css
background: transparent;
color: #5A7D3A;
border: 1px solid transparent;
border-radius: 16px;

/* Hover */
background: rgba(90,125,58,0.1);
```

### 7.4 Danger Button

```css
background: #DC2626;
color: #FFFFFF;
border: 1px solid #DC2626;
border-radius: 16px;

/* Hover */
background: #B91C1C;
border-color: #B91C1C;
```

### 7.5 Button Sizes

| Size | Padding | Font Size | Min Height |
|------|---------|-----------|------------|
| sm | 8px 12px | 14px | 32px |
| md | 10px 16px | 16px | 40px |
| lg | 12px 24px | 18px | 48px |

### 7.6 Focus State (tum butonlar)

```css
outline: none;
box-shadow: 0 0 0 2px rgba(90,125,58,0.2);
```

---

## 8. Form Elements

### 8.1 Text Input

```css
width: 100%;
padding: 12px 16px;
border: 1px solid #D1D5DB;  /* gray-300 */
border-radius: 16px;
font-size: 14px;
font-family: 'Mulish', sans-serif;
transition: all 0.2s;

/* Hover */
border-color: #9CA3AF;  /* gray-400 */

/* Focus */
border-color: #5A7D3A;
box-shadow: 0 0 0 2px rgba(90,125,58,0.2);
outline: none;

/* Error */
border-color: #ef4444;
box-shadow: 0 0 0 2px rgba(239,68,68,0.2);

/* Disabled */
background: #F9FAFB;
color: #6B7280;
cursor: not-allowed;

/* Dark mode */
background: #0F1A12;
color: #F0F0F0;
border-color: rgba(123,163,82,0.15);
```

### 8.2 Input with Icon

```css
/* Sol tarafta icon varsa */
padding-left: 40px;

/* Sag tarafta toggle varsa (password) */
padding-right: 48px;
```

### 8.3 Label

```css
display: block;
font-size: 14px;
font-weight: 500;
color: #374151;  /* gray-700 */
margin-bottom: 4px;

/* Dark mode */
color: #A0A0A0;
```

### 8.4 Helper / Error Text

```css
font-size: 14px;
margin-top: 4px;

/* Helper */
color: #6B7280;  /* gray-500 */

/* Error */
color: #DC2626;  /* red-600 */
```

### 8.5 Checkbox

```css
width: 20px;
height: 20px;
border: 2px solid #D1D5DB;
border-radius: 6px;
transition: all 0.2s;

/* Checked */
background: #5A7D3A;
border-color: #5A7D3A;
/* Icerideki check ikonu: ri-check-line, beyaz */

/* Hover (unchecked) */
border-color: #9CA3AF;

/* Dark mode unchecked */
border-color: rgba(123,163,82,0.15);
```

---

## 9. Card Patterns

### 9.1 Base Card (en cok kullanilan)

```css
background: linear-gradient(to bottom right, #FFFFFF, #F8FCF6);
border: 1px solid #E8F2EB;
border-radius: 20px;  /* rounded-xl */
padding: 12px;
box-shadow: 0 1px 2px rgba(0,0,0,0.05);
transition: all 0.3s;

/* Hover */
box-shadow: 0 4px 6px rgba(0,0,0,0.07);

/* Dark mode */
background: linear-gradient(to bottom right, #0F1A12, #1E2E23);
border-color: rgba(123,163,82,0.15);
box-shadow: 0 1px 3px rgba(0,0,0,0.3);
```

### 9.2 Section Card

```css
border-radius: 12px;
box-shadow: 0 1px 3px rgba(0,0,0,0.06);

/* Hover */
box-shadow: 0 4px 6px rgba(0,0,0,0.08);
```

### 9.3 Feature Card (landing page)

```css
padding: 40px;
background: var(--section-background);  /* #F8FCF6 */
border-radius: 12px;

/* Hover */
transform: translateY(-4px);
box-shadow: 0 10px 30px rgba(0,0,0,0.08);
```

### 9.4 Icon Container (card icerisinde)

```css
width: 36px;
height: 36px;
border-radius: 16px;
display: flex;
align-items: center;
justify-content: center;
font-size: 18px;
color: #5A7D3A;
background: linear-gradient(to bottom right, rgba(90,125,58,0.12), rgba(90,125,58,0.06));
border: 1px solid rgba(90,125,58,0.15);
```

---

## 10. Badge & Status Indicators

### 10.1 Threat Level Badges

```css
/* Ortak stil */
font-size: 13px;
font-weight: 500;
padding: 4px 12px;
border-radius: 9999px;
display: inline-block;

/* High */
background: rgba(239,68,68,0.1);
color: #ef4444;

/* Medium */
background: rgba(245,158,11,0.1);
color: #ca8a04;  /* yellow-600 */

/* Low */
background: rgba(16,185,129,0.1);
color: #10b981;
```

### 10.2 Status Indicators

| Status | Renk | Hex |
|--------|------|-----|
| Normal / Good | Yesil | `#5A7D3A` |
| Warning | Sari | `#f59e0b` |
| Error / Critical | Kirmizi | `#ef4444` |
| Offline / Low | Gri | `#6B7280` |

### 10.3 Data Source Badge

```css
display: inline-flex;
align-items: center;
gap: 6px;
padding: 4px 10px;
background: #FFFBEB;  /* amber-50 */
border: 1px solid #FDE68A;  /* amber-200 */
border-radius: 9999px;
font-size: 12px;
font-weight: 500;
color: #B45309;  /* amber-700 */

/* Dark mode */
background: rgba(245,158,11,0.15);
border-color: rgba(245,158,11,0.3);
color: #FCD34D;  /* amber-300 */
```

---

## 11. Toast / Notification

### Ortak Stil

```css
display: flex;
align-items: center;
gap: 12px;
padding: 12px 16px;
border-radius: 16px;
border: 1px solid #E8F2EB;
box-shadow: 0 10px 15px rgba(0,0,0,0.1);
background: #F0F8F2;
color: #151515;

/* Dark mode */
background: #1E2E23;
border-color: rgba(123,163,82,0.2);
color: #F0F0F0;
```

### Toast Ikonlari

| Tip | Icon | Renk |
|-----|------|------|
| Success | `ri-check-circle-fill` | `#22c55e` (green-500) |
| Error | `ri-error-warning-fill` | `#ef4444` (red-500) |
| Warning | `ri-alert-fill` | `#eab308` (yellow-500) |
| Info | `ri-information-fill` | `#3b82f6` (blue-500) |

### Toast Container

```css
position: fixed;
top: 16px;
right: 16px;
z-index: 9999;
display: flex;
flex-direction: column;
gap: 8px;
max-width: 384px;
width: 100%;
```

---

## 12. Icon System

### RemixIcon v4.6.0

**CDN:**
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.6.0/remixicon.min.css">
```

**Kullanim:**
```html
<i class="ri-check-line"></i>
<i class="ri-close-line"></i>
<i class="ri-arrow-right-line"></i>
<i class="ri-information-line"></i>
<i class="ri-loader-4-line"></i>
```

**Sik kullanilan ikonlar:**
- Navigation: `ri-arrow-left-line`, `ri-arrow-right-line`, `ri-menu-line`, `ri-close-line`
- Status: `ri-check-circle-fill`, `ri-error-warning-fill`, `ri-alert-fill`, `ri-information-fill`
- Actions: `ri-search-line`, `ri-filter-line`, `ri-download-line`, `ri-refresh-line`
- Content: `ri-plant-line`, `ri-sun-line`, `ri-drop-line`, `ri-temp-hot-line`
- UI: `ri-eye-line`, `ri-eye-off-line`, `ri-loader-4-line`, `ri-check-line`
- Theme: `ri-sun-line` (light), `ri-moon-line` (dark)

**Dokumantasyon:** https://remixicon.com/

---

## 13. Dark Mode

### Strateji
- CSS custom properties (`:root` ve `[data-theme="dark"]`)
- HTML root elementine `data-theme="dark"` attribute eklenerek aktif edilir
- Kullanicinin sistem tercihi (`prefers-color-scheme`) otomatik algilanir
- localStorage'da tercih saklanir

### Renk Mapping Tablosu

| Light | Dark | Kullanim |
|-------|------|----------|
| `#FFFFFF` | `#0F1A12` | Ana arka plan |
| `#F8FCF6` | `#1E2E23` | Section arka plan |
| `#F0F8F2` | `#1E2E23` | Subtle arka plan |
| `#151515` | `#F0F0F0` | Ana metin |
| `#333333` | `#A0A0A0` | Ikincil metin |
| `#555555` | `#A0A0A0` | Govde metin |
| `#E8F2EB` | `rgba(123,163,82,0.15)` | Border |
| `#5A7D3A` | `#7BA352` | Primary green |
| `#9BB88A` | `#4A6741` | Primary light |
| `#2F4F2F` | `#5A7D3A` | Primary dark |
| `border-gray-200` | `rgba(123,163,82,0.15)` | Input border |
| `shadow-sm` | `0 1px 3px rgba(0,0,0,0.3)` | Card shadow |

### Sidebar Dark

```css
background: #162119;
```

### Overlay/Backdrop Dark

```css
background: rgba(123,163,82,0.1);  /* hover state */
background: rgba(123,163,82,0.15); /* active state */
```

---

## 14. Responsive Design

### Breakpoints

```css
/* Mobile first yaklasim */
/* Default: 0 - 639px (mobile) */
@media (min-width: 640px)  { /* sm - tablet */ }
@media (min-width: 768px)  { /* md - tablet landscape */ }
@media (min-width: 1024px) { /* lg - desktop */ }
@media (min-width: 1200px) { /* xl - wide desktop */ }
```

### Layout Responsive Degisimler

| Token | Desktop | Tablet (<=1200px) | Mobile (<=640px) | Small (<=480px) |
|-------|---------|-------------------|------------------|-----------------|
| Section Padding | 100px | 80px | 60px | 40px |
| Gutter | 32px | 32px | 16px | 16px |
| heading-1 | 72px | 60px | 48px | 36px |
| heading-2 | 60px | 48px | 40px | 32px |
| heading-3 | 48px | 40px | 36px | 28px |
| heading-4 | 36px | 32px | 28px | 24px |

### Grid Patterns

```css
/* 2-column responsive */
grid-template-columns: repeat(2, 1fr);  /* sm */
grid-template-columns: repeat(3, 1fr);  /* md */
grid-template-columns: repeat(4, 1fr);  /* lg */

/* Sidebar layout */
grid-template-columns: 240px 1fr;  /* desktop */
grid-template-columns: 1fr;        /* mobile (sidebar hidden) */
```

---

## 15. CSS Variables (Tam Liste)

### Copy-Paste Ready: Light Theme

```css
:root {
  /* Colors */
  --primary-green: #5A7D3A;
  --primary-green-light: #9BB88A;
  --primary-green-dark: #2F4F2F;
  --accent-green: #6B8F47;
  --secondary-green: #A4C639;
  --secondary-green-light: #F0F8E8;
  --tertiary-green: #7CB518;
  --sage-green: #8FBC8F;
  --neutral-black: #151515;
  --dark-gray: #333333;
  --text-gray: #555555;
  --light-gray: #E8F2EB;
  --background-white: #FFFFFF;
  --section-background: #F8FCF6;
  --subtle-green: #F0F8F2;

  /* Typography */
  --font-primary: 'Mulish', sans-serif;

  /* Typography Scale */
  --heading-1: 72px;
  --heading-2: 60px;
  --heading-3: 48px;
  --heading-4: 36px;
  --heading-5: 30px;
  --heading-6: 24px;
  --p1-semibold: 20px;
  --p2-regular: 18px;
  --p2-semibold: 18px;
  --p3-regular: 16px;
  --p3-medium: 16px;
  --p4-regular: 14px;
  --p4-medium: 14px;
  --p4-semibold: 14px;
  --p5-semibold: 12px;

  /* Spacing */
  --container-width: 1440px;
  --section-padding: 100px;
  --gutter: 32px;
}
```

### Copy-Paste Ready: Dark Theme

```css
[data-theme="dark"] {
  --primary-green: #7BA352;
  --primary-green-light: #4A6741;
  --primary-green-dark: #5A7D3A;
  --accent-green: #6B8F47;
  --secondary-green: #A4C639;
  --secondary-green-light: #F0F8E8;
  --tertiary-green: #7CB518;
  --sage-green: #8FBC8F;
  --neutral-black: #F0F0F0;
  --dark-gray: #A0A0A0;
  --text-gray: #A0A0A0;
  --light-gray: rgba(123, 163, 82, 0.15);
  --background-white: #0F1A12;
  --section-background: #1E2E23;
  --subtle-green: #1E2E23;
}
```

---

## 16. Gradient Patterns

### Card Gradient

```css
/* Light */
background: linear-gradient(to bottom right, #FFFFFF, #F8FCF6);

/* Dark */
background: linear-gradient(to bottom right, #0F1A12, #1E2E23);
```

### Primary Gradient (CTA buton, hero)

```css
background: linear-gradient(135deg, #5A7D3A 0%, #6B8F47 50%, #2F4F2F 100%);
```

### Icon Background Gradient

```css
background: linear-gradient(to bottom right, rgba(90,125,58,0.12), rgba(90,125,58,0.06));
```

---

## 17. Do's and Don'ts

### DO
- Tum renkleri CSS variable uzerinden kullan (`var(--primary-green)`)
- Dark mode destegini her component'ta dusun
- Mulish fontunu tum text icin kullan
- 4px grid'e uy (4, 8, 12, 16, 20, 24, 32...)
- Semantic HTML kullan (h1-h6 siralamasina dikkat)
- Focus state ekle (keyboard navigation icin)
- `aria-label` ekle (icon-only butonlara)
- Mobile-first responsive yaz
- Badge'lerde 10% opacity background + solid color text kullan

### DON'T
- Hardcoded renk degerleri kullanma (CSS variable kullan)
- 72px'den buyuk font size kullanma
- Mulish disinda font kullanma
- Shadow'lari abartma - sm ve md yeterli
- Border-radius'u karistirma - button icin 8px, card icin 12px, badge icin 9999px
- Dark mode'da beyaz (#FFFFFF) arka plan birakma
- Farkli icon seti kullanma (sadece RemixIcon)
- Z-index'i 9999'dan yukari cikartma (toast/modal icin max budur)
