import { create } from 'zustand'

// Mock users database
const mockUsers = [
  {
    id: 1,
    username: 'admin',
    email: 'admin@site.com',
    password: 'Admin123!',
    phone: '+998912345678',
    role: 'admin'
  },
  {
    id: 2,
    username: 'testuser',
    email: 'user@test.com',
    password: 'User123!',
    phone: '+998935555555',
    role: 'user'
  }
]

const useAuthStore = create((set) => ({
  user: (() => {
    try {
      const stored = localStorage.getItem('user')
      return stored ? JSON.parse(stored) : null
    } catch {
      return null
    }
  })(),
  
  isAuthenticated: (() => {
    try {
      return !!localStorage.getItem('user')
    } catch {
      return false
    }
  })(),

  login: (email, password) => {
    const user = mockUsers.find(u => u.email === email && u.password === password)
    if (user) {
      const { password, ...userWithoutPassword } = user
      localStorage.setItem('user', JSON.stringify(userWithoutPassword))
      set({ user: userWithoutPassword, isAuthenticated: true })
      return { success: true, user: userWithoutPassword }
    }
    return { success: false, error: 'Email yoki password noto\'g\'ri' }
  },

  signup: (data) => {
    const existingUser = mockUsers.find(u => u.email === data.email)
    if (existingUser) {
      return { success: false, error: 'Bu email allaqachon ro\'yxatdan o\'tgan' }
    }

    const newUser = {
      id: mockUsers.length + 1,
      username: data.username,
      email: data.email,
      password: data.password,
      phone: data.phone,
      role: 'user'
    }

    mockUsers.push(newUser)
    const { password, ...userWithoutPassword } = newUser
    localStorage.setItem('user', JSON.stringify(userWithoutPassword))
    set({ user: userWithoutPassword, isAuthenticated: true })
    return { success: true, user: userWithoutPassword }
  },

  logout: () => {
    localStorage.removeItem('user')
    set({ user: null, isAuthenticated: false })
  }
}))

export default useAuthStore
