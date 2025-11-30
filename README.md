# 🛍️ E-Commerce Admin Dashboard

Bu loyiha **React**, **Zustand**, **Zod** va **Tailwind CSS** yordamida yaratilgan to'liq authentication tizimi bilan Mini E-commerce veb-ilova.

## ✨ Xususiyatlar

- ✅ **Authentication System** - Sign up, Login, Logout
- ✅ **Validation** - Zod bilan server-side validation
- ✅ **Role-based Access** - Admin va User rollari
- ✅ **Protected Routes** - Faqat authorizatsiya qilingan foydalanuvchilar
- ✅ **Admin Dashboard** - Product CRUD operatsiyalari
- ✅ **State Management** - Zustand bilan global state
- ✅ **LocalStorage** - Foydalanuvchi va mahsulot ma'lumotlarini saqlash
- ✅ **Responsive Design** - Tailwind CSS + DaisyUI

## 🛠️ Tech Stack

- **Frontend**: React 18+
- **Routing**: React Router v6
- **State Management**: Zustand
- **Validation**: Zod
- **Styling**: Tailwind CSS + DaisyUI
- **Build Tool**: Vite
- **Package Manager**: npm

## 📦 O'rnatish

```bash
# Repositoriyani klonlash
git clone https://github.com/Abbosi009/7-imtixon.git
cd 7-imtixon-new

# Dependency-larni o'rnatish
npm install

# Loyihani ishga tushirish
npm run dev

# Production build yaratish
npm run build
```

## 📁 Loyiha Strukturasi

```
src/
├── components/          # Qayta foydalanish mumkin bo'lgan komponentlar
│   ├── Header.jsx      # Navigation header
│   ├── ProtectedRoute.jsx  # Route himoyalash
│   ├── ProductCard.jsx     # Product display component
│   ├── Loading.jsx         # Loading component
│   ├── ErrorBoundary.jsx   # Error handling component
│   └── index.js            # Components barrel export
│   ├── Home.jsx        # Bosh sahifa
│   ├── Login.jsx       # Login sahifasi
│   ├── SignUp.jsx      # Ro'yxatdan o'tish
│   ├── Products.jsx    # Mahsulotlar sahifasi
│   ├── Dashboard.jsx   # Admin dashboard
│   ├── Profile.jsx         # Foydalanuvchi profili
│   └── index.js            # Pages barrel export
│   ├── authStore.js    # Authentication state
│   └── productStore.js # Products state
├── schemas/            # Zod validation schemas
│   └── validationSchemas.js
├── hooks/                  # Custom React hooks
│   ├── useValidation.js    # Validation hook
│   └── index.js            # Hooks barrel export
├── utils/                  # Utility functions
│   ├── storage.js          # localStorage helpers
│   ├── formatters.js       # Formatting utilities
│   └── index.js            # Utils barrel export
│   └── index.css       # Global styles
├── App.jsx                 # Root component with ErrorBoundary
└── main.jsx                # Entry point
```

## 🔐 Authentication

### Demo Akkauntlar

**Admin:**
- Email: `admin@site.com`
- Password: `Admin123!`
- Role: `admin`

**Test User:**
- Email: `user@test.com`
- Password: `User123!`
- Role: `user`

### Password Talablari

- Kamida 8 ta belgidan iborat
- 1 ta katta harf (A-Z)
- 1 ta raqam (0-9)
- 1 ta maxsus belgi (!@#$%^&*)

### Telefon Raqami Formati

- +998 XX XXX XX XX (O'zbek formati)
- Misol: +998 91 123 45 67

## 📊 Admin Dashboard Imkoniyatlari

- ➕ Yangi mahsulot qo'shish
- ✏️ Mahsulotni tahrirlash
- 🗑️ Mahsulotni o'chirish
- 👀 Barcha mahsulotlarni ko'rish

## 👤 User Imkoniyatlari

- 📝 Ro'yxatdan o'tish
- 🔐 Login qilish
- 👀 Mahsulotlarni ko'rish
- 👤 Profilni ko'rish
- 🚪 Chiqish

## 💾 Ma'lumotlar Saqlash

Barcha ma'lumotlar `localStorage` da saqlanadi:
- `user` - Hozirgi foydalanuvchi ma'lumotlari
- `products` - Mahsulotlar ro'yxati

## 🚀 Deployment

### Vite Build

```bash
npm run build
# dist/ papkasida static fayllar yaratiladi
```

### Environment Variables (optional)

`.env` fayli yaratish (agar kerak bo'lsa):

```env
VITE_API_URL=https://api.example.com
```

## 🔗 Routes

- `/` - Bosh sahifa
- `/login` - Login
- `/signup` - Ro'yxatdan o'tish
- `/products` - Mahsulotlar
- `/profile` - Profil (protected)
- `/dashboard` - Admin dashboard (protected, admin only)

## ✅ Talablarni Bajarish

- [x] Authentication tizimi (Sign up, Login)
- [x] Email validation
- [x] Telefon raqami validation (O'zbek formati)
- [x] Password validation (kompleks)
- [x] Admin va User rollari
- [x] Default admin akkaunt
- [x] Protected routes
- [x] Product CRUD
- [x] State management (Zustand)
- [x] Validation library (Zod)
- [x] LocalStorage integration
- [x] Responsive design
- [x] Header adaptivity

## 📝 Litsenziya

ISC

## 👨‍💻 Muallif

Imtihon loyihasi - 2025

---

**Masalalar bo'lsa, GitHub Issues orqali xabar bering! 🎉**
