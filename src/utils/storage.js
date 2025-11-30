// Foydalanuvchi ma'lumotlarini localStorage-ga saqlash
export const saveUser = (user) => {
  try {
    localStorage.setItem('user', JSON.stringify(user))
  } catch (error) {
    console.error('Foydalanuvchi saqlashda xatolik:', error)
  }
}

// Foydalanuvchi ma'lumotlarini localStorage-dan olish
export const getUser = () => {
  try {
    const user = localStorage.getItem('user')
    return user ? JSON.parse(user) : null
  } catch (error) {
    console.error('Foydalanuvchi olishda xatolik:', error)
    return null
  }
}

// Foydalanuvchi ma'lumotlarini localStorage-dan o'chirish
export const removeUser = () => {
  try {
    localStorage.removeItem('user')
  } catch (error) {
    console.error('Foydalanuvchi o\'chirishda xatolik:', error)
  }
}

// Mahsulot ma'lumotlarini localStorage-ga saqlash
export const saveProducts = (products) => {
  try {
    localStorage.setItem('products', JSON.stringify(products))
  } catch (error) {
    console.error('Mahsulotlarni saqlashda xatolik:', error)
  }
}

// Mahsulot ma'lumotlarini localStorage-dan olish
export const getProducts = () => {
  try {
    const products = localStorage.getItem('products')
    return products ? JSON.parse(products) : []
  } catch (error) {
    console.error('Mahsulotlarni olishda xatolik:', error)
    return []
  }
}
