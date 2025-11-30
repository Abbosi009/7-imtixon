// Format telefon raqami
export const formatPhoneNumber = (phone) => {
  return phone.replace(/(\+998)(\d{2})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5')
}

// Telefon raqamini tekshirish (O'zbek formati)
export const isValidUzbekPhone = (phone) => {
  const phoneRegex = /^\+998\s?9[0-9]\s?[0-9]{3}\s?[0-9]{2}\s?[0-9]{2}$/
  return phoneRegex.test(phone)
}

// Email tekshirish
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// URL tekshirish
export const isValidUrl = (url) => {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

// Raqamni pul valyutasi sifatida formatlash
export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price)
}

// Sana formatlash
export const formatDate = (date) => {
  return new Intl.DateTimeFormat('uz-UZ', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date))
}
