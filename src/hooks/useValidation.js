import { useCallback } from 'react'
import { ZodSchema } from 'zod'

export const useValidation = () => {
  const validate = useCallback((schema, data) => {
    try {
      const result = schema.parse(data)
      return { isValid: true, data: result, errors: {} }
    } catch (error) {
      const errors = {}
      error.errors?.forEach((err) => {
        const path = err.path.join('.')
        errors[path] = err.message
      })
      return { isValid: false, data: null, errors }
    }
  }, [])

  return { validate }
}
