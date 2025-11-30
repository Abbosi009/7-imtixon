import { z } from 'zod'

// O'zbek telefon raqami validatsiyasi
const phoneSchema = z
  .string()
  .regex(
    /^\+998\s?9[0-9]\s?[0-9]{3}\s?[0-9]{2}\s?[0-9]{2}$/,
    'Telefon raqami +998 91 ___ __ __ formatida bo\'lishi kerak'
  )

// Password validatsiyasi
const passwordSchema = z
  .string()
  .min(8, 'Password kamida 8 ta belgidan iborat bo\'lishi kerak')
  .regex(/[A-Z]/, 'Password kamida 1 ta katta harf o\'z ichiga olishi kerak')
  .regex(/[0-9]/, 'Password kamida 1 ta raqam o\'z ichiga olishi kerak')
  .regex(/[!@#$%^&*]/, 'Password kamida 1 ta maxsus belgi (!@#$%^&*) o\'z ichiga olishi kerak')

// Sign Up Schema
export const signUpSchema = z.object({
  username: z
    .string()
    .min(3, 'Username kamita 3 ta harfdan iborat bo\'lishi kerak')
    .max(50, 'Username 50 ta harfdan ko\'p bo\'lmasligi kerak'),
  email: z
    .string()
    .email('Email manzili noto\'g\'ri'),
  phone: phoneSchema,
  password: passwordSchema,
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Parollar mos kelmadi',
  path: ['confirmPassword'],
})

// Login Schema
export const loginSchema = z.object({
  email: z
    .string()
    .email('Email manzili noto\'g\'ri'),
  password: z
    .string()
    .min(1, 'Parolni kiriting')
})

// Product Schema
export const productSchema = z.object({
  name: z
    .string()
    .min(3, 'Mahsulot nomi kamida 3 ta harfdan iborat bo\'lishi kerak')
    .max(100, 'Mahsulot nomi 100 ta harfdan ko\'p bo\'lmasligi kerak'),
  price: z
    .number()
    .min(0, 'Narx nol yoki undan katta bo\'lishi kerak'),
  description: z
    .string()
    .min(10, 'Tavsif kamida 10 ta harfdan iborat bo\'lishi kerak')
    .max(500, 'Tavsif 500 ta harfdan ko\'p bo\'lmasligi kerak'),
  image: z
    .string()
    .url('Rasm URL noto\'g\'ri')
})
