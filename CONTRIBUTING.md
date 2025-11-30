# 🤝 Loyihaga Hissa Qo'shish

Loyihaga hissa qo'shish uchun raxmat! Quyida qo'llanmani topishingiz mumkin.

## 🚀 Boshlash

1. Repositoriyani fork qiling
2. O'zingizning branch-ni yarating (`git checkout -b feature/AmazingFeature`)
3. O'zgartirishlarni commit qiling (`git commit -m 'Add some AmazingFeature'`)
4. Branch-ga push qiling (`git push origin feature/AmazingFeature`)
5. Pull Request ochling

## 📝 Commit Xabar Standarti

Commit xabarlari quyidagi formatda bo'lishi kerak:

```
<type>: <subject>

<body>

<footer>
```

### Types:
- `feat`: Yangi xususiyat
- `fix`: Xatolarni tuzatish
- `docs`: Dokumentatsiya
- `style`: Code style (whitespace, semicolons, etc.)
- `refactor`: Code refactoring
- `test`: Test qo'shish
- `chore`: Build, dependencies, etc.

### Misol:
```
feat: Add user authentication

Implement email and password validation for user registration
and login functionality. Added Zod for schema validation.

Closes #123
```

## 🎯 Qollanmalar

- Hozirgi code style-ni ko'rib chiqing
- React best practices-ni eslang
- Componetlarni qayta foydalanish mumkin qilishga harakat qiling
- Props drilling-dan qoching (Zustand bilan)
- Qo'shimcha test qo'shishga harakat qiling

## 🐛 Bug Report

Bug topinga, quyidagilarni o'z ichiga olgan issue oching:

- Bug tavsifi
- Qadam-qadam reproduksiya qilish
- Kutilgan va actual natija
- Screenshot (agar kerak bo'lsa)
- Environment ma'lumotlari

## 💡 Feature Request

Yangi xususiyat taklif qilish:

- Xususiyatning tavsifi
- Nima uchun kerakligini aytib bering
- Mumkin bo'lgan yechim
- Alternative variantlar

## 📚 Kod Standartlari

```javascript
// ✅ Yaxshi - Descriptive names
const handleUserLogin = async (email, password) => {
  // Logic here
}

// ❌ Yomon - Unclear names
const handleLogin = async (e, p) => {
  // Logic here
}

// ✅ Yaxshi - Explicit types and props
const ProductCard = ({ product, onEdit, onDelete, canEdit }) => {
  // JSX here
}

// ✅ Yaxshi - Use composition
const Dashboard = () => {
  return (
    <ErrorBoundary>
      <ProductList />
    </ErrorBoundary>
  )
}
```

## ✅ Before You Submit

- [ ] Code refactored bo'ldi
- [ ] ESLint errors yo'q
- [ ] Tests pass
- [ ] README yangilandi (agar kerak bo'lsa)
- [ ] Commit xabari clear va descriptive

## 📞 Savollar?

GitHub Issues orqali savollaringizni bering yoki Discussion-da muhokama qiling.

---

**Loyihaga hissa qo'shish uchun raxmat! 🎉**
