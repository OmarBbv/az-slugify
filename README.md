# az-slugify 🇦🇿

[![NPM Package](https://img.shields.io/npm/v/az-slugify.svg)](https://www.npmjs.com/package/az-slugify)

Azərbaycan dilindəki xüsusi hərfləri (ə, ö, ü, ş, ç, ğ, ı) mükəmməl şəkildə ingilis hərflərinə çevirən və mətni URL-dostu (slug) formata salan minimalist bir kitabxanadır.

## 🚀 Özəlliklər

- **Sıfır Dependency**: Heç bir kənar kitabxanadan asılı deyil.
- **TypeScript Dəstəyi**: Tam tip təhlükəsizliyi təmin edir.
- **Yüngül**: Çox kiçik ölçülü və sürətlidir.
- **Senior-Ready**: Testləri yazılıb və təmiz kod prinsiplərinə uyğundur.

## 📦 Quraşdırılma

```bash
npm install az-slugify
```

## 💻 İstifadə

**ES Modules (ESM) və ya TypeScript ilə:**

```typescript
import { azSlugfy } from "az-slugify";

const title = "Azərbaycan dilində proqramlaşdırma dərsləri: Yeni başlayanlar üçün!";
const slug = azSlugfy(title);

console.log(slug);
// Nəticə: azerbaycan-dilinde-proqramlasdirma-dersleri-yeni-baslayanlar-ucun
```

**CommonJS (CJS) ilə:**

```javascript
const { azSlugfy } = require("az-slugify");

const slug = azSlugfy("Gözəl həyat");
console.log(slug);
// Nəticə: gozel-heyat
```
