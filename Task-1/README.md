# THE HALIA Restaurant

## Project haqqında

THE HALIA — restoran veb-saytıdır. Sayt restoranın haqqında məlumat, menyu, qalereya və əlaqə formasını təqdim edir. İstifadəçilər mobil və desktop cihazlarda rahat şəkildə saytdan istifadə edə bilərlər.

## İstifadə olunan texnologiyalar

- **HTML5** — semantik markup
- **CSS3** — Mobile First responsive dizayn, BEM metodologiyası
- **JavaScript (Vanilla)** — mobil menyu, form validasiyası
- **Font Awesome** — ikonlar

## Xüsusiyyətlər

- Sticky navbar ilə naviqasiya
- Mobil hamburger menyu (`aria-expanded` dəstəyi ilə)
- Anchor linklər üçün `scroll-margin-top`
- Menyu kartları və hover effektləri
- Qatlı (overlapping) qalereya dizaynı (`position`, `z-index`)
- Əlaqə forması validasiyası (alert olmadan)
- Google Maps inteqrasiyası
- Footer naviqasiya və sosial media linkləri

## Responsive yanaşma

Layihə **Mobile First** prinsipi ilə qurulub:

- **Əsas stillər** mobil cihazlar üçün yazılıb
- **768px və yuxarı** — tablet üçün `@media (min-width: 768px)`
- **1024px və yuxarı** — desktop üçün `@media (min-width: 1024px)`

Desktop-first `@media (max-width: ...)` sorğuları tamamilə aradan qaldırılıb.

## Form validation

Form validasiyası `form.js` faylında həyata keçirilir:

- `alert()` istifadə olunmur
- Hər input üçün HTML-də `<span class="error"></span>` elementi var
- Xəta mesajları həmin span-lərdə göstərilir
- İstifadəçi inputu düzəltdikdə xəta mesajı avtomatik silinir
- Uğurlu göndərmə `#form-success` span-ində göstərilir

Validasiya qaydaları:
- **Name** — boş ola bilməz
- **Email** — boş ola bilməz və düzgün formatda olmalıdır
- **Message** — boş ola bilməz

## Qovluq strukturu

```
Task-1/
├── index.html      # Əsas HTML səhifə
├── style.css       # Mobile First CSS (BEM)
├── script.js       # Mobil menyu funksionallığı
├── form.js         # Form validasiyası
└── README.md       # Layihə sənədləşməsi
```

## Necə işə salınır

1. Layihə qovluğuna daxil olun:
   ```bash
   cd Task-1
   ```

2. `index.html` faylını brauzerdə açın:
   - Fayla iki dəfə klik edin, və ya
   - Live Server (VS Code extension) istifadə edin

3. Brauzerdə sayt açılacaq — naviqasiya, menyu, qalereya və əlaqə formasını yoxlaya bilərsiniz.

Internet bağlantısı lazımdır (Font Awesome CDN, şəkillər və xəritə üçün).
