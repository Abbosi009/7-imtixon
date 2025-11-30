# 🧪 Testing Guide

Bu loyiha uchun test sinab olish va tekshirish qo'llanmasi.

## 🔐 Authentication Testing

### Sign Up Test

1. `/signup` sahifasiga boring
2. Quyidagi ma'lumotlarni kiriting:
   - Username: `testuser123` (3+ harf)
   - Email: `test@example.com`
   - Phone: `+998 91 234 56 78` (O'zbek formati)
   - Password: `TestPass123!` (kamida 8 harf, 1 katta, 1 raqam, 1 belgi)
   - Confirm Password: `TestPass123!`
3. "Ro'yxatdan o'tish" tugmasini bosing
4. Muvaffaqiyatli ro'yxatdan o'tish haqida xabar ko'rinishi kerak

### Login Test

1. `/login` sahifasiga boring
2. Demo akkauntlardan birini sinab olish:
   - **Admin:**
     - Email: `admin@site.com`
     - Password: `Admin123!`
   - **User:**
     - Email: `user@test.com`
     - Password: `User123!`
3. Login tugmasini bosing
4. Bosh sahifaga redirect bo'lishi kerak

### Logout Test

1. Login qiling
2. Header-dagi dropdown menuni oching
3. "Chiqish" tugmasini bosing
4. Login sahifasiga redirect bo'lishi kerak

## 👮 Role-Based Access Testing

### Admin Dashboard Test

1. Admin akkaunt bilan login qiling
2. Header-da "Dashboard" link ko'rinishi kerak
3. Dashboard-ga boring
4. Product CRUD operatsiyalari ishlashi kerak

### User Dashboard Test (Should Fail)

1. Oddiy user akkaunt bilan login qiling
2. Header-da "Dashboard" link ko'rinmasligi kerak
3. URL orqali `/dashboard` ga kirsa, login sahifasiga redirect bo'lishi kerak

## 📦 Product Management Testing

### Product Add Test (Admin)

1. Admin bilan login qiling
2. Dashboard-ga boring
3. "Mahsulot Qo'shish" tugmasini bosing
4. Mahsulot ma'lumotlarini kiriting:
   - Name: `Yangi Mahsulot`
   - Price: `1000`
   - Description: `Bu juda yaxshi mahsulot`
   - Image: `https://via.placeholder.com/300`
5. "Qo'shish" tugmasini bosing
6. Mahsulot gridda ko'rinishi kerak

### Product Edit Test

1. Mahsulotda "Tahrirlash" tugmasini bosing
2. Ma'lumotlarni o'zgartiring
3. "O'zartirish" tugmasini bosing
4. O'zgartirishlar saqlanishi kerak

### Product Delete Test

1. Mahsulotda "O'chirish" tugmasini bosing
2. Confirmation dialog ko'rinishi kerak
3. "Ha" tugmasini bosing
4. Mahsulot o'chirilishi kerak

### Product View Test (User)

1. Oddiy user bilan login qiling
2. `/products` sahifasiga boring
3. Mahsulotlarni ko'rishi kerak
4. Edit/Delete tugmalari ko'rinmasligi kerak

## ✅ Validation Testing

### Email Validation

- ❌ `test@` - Noto'g'ri
- ❌ `test.com` - Noto'g'ri
- ✅ `test@example.com` - To'g'ri

### Phone Validation

- ❌ `+998912345678` (bo'sh joylar yo'q) - Noto'g'ri
- ❌ `+998 12 345 67 89` (2-raqam 1 bo'lishi kerak) - Noto'g'ri
- ✅ `+998 91 234 56 78` - To'g'ri
- ✅ `+998 93 123 45 67` - To'g'ri

### Password Validation

- ❌ `password` - Noto'g'ri (katta harf, raqam, belgi yo'q)
- ❌ `Pass1234` - Noto'g'ri (belgi yo'q)
- ❌ `Pass123!` - Noto'g'ri (7 harf)
- ✅ `Pass123!` - To'g'ri

### Product Validation

- Name: Min 3, Max 100 harf
- Price: 0 yoki undan katta
- Description: Min 10, Max 500 harf
- Image: Haqiqiy URL bo'lishi kerak

## 💾 LocalStorage Testing

### User Data

1. Browser Developer Tools (F12) oching
2. Application tab-ni oching
3. LocalStorage-da `user` key mavjudligini tekshiring
4. Logout qiling
5. `user` key o'chirilishi kerak

### Product Data

1. Yangi product qo'shing
2. Developer Tools-da `products` key-ni tekshiring
3. Refresh qiling
4. Product ko'rinmasligi kerak (LocalStorage ta'sir etadi)
5. Refresh qilgach ham ko'rinishi kerak

## 🌐 Responsive Design Testing

- **Desktop** (1920x1080): Barcha element to'g'ri ko'rinishi kerak
- **Tablet** (768x1024): Grid 2 ustun bo'lishi kerak
- **Mobile** (375x812): Grid 1 ustun bo'lishi kerak

## 🔄 Browser Compatibility

Quyidagi brauzerlar-da test qiling:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## 📋 Test Checklist

### Authentication
- [ ] Sign Up muvaffaqiyatli
- [ ] Validation qaytarish
- [ ] Login muvaffaqiyatli
- [ ] Logout muvaffaqiyatli
- [ ] Protected routes ishladi

### Products
- [ ] Mahsulotlarni ko'rish
- [ ] Product qo'shish (Admin)
- [ ] Product tahrirlash (Admin)
- [ ] Product o'chirish (Admin)
- [ ] User tahrirlash/o'chira olmadi

### UI/UX
- [ ] Header responsive
- [ ] Pagination/Grid responsive
- [ ] Form validation xatalari ko'rinadi
- [ ] Success xabarlari ko'rinadi
- [ ] Error xabarlari ko'rinadi

### Performance
- [ ] Loading spinner ishladi
- [ ] Sahifalar tez yuklandi
- [ ] Error boundary ishladi

---

**Test qo'llanmalarni eslashni va test qo'llanmasini yangilashni unutmang! 🎉**
