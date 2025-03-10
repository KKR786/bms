import { useState } from 'react'
import { useAuthContext } from './useAuth'

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()


  const login = async (data) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('/api/user/signin', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json))
      console.log(json)
      // update the auth context
      dispatch({type: 'LOGIN', payload: json})
      console.log('User login action dispatched:', json)
      // update loading state
      setIsLoading(false)
    }
  }

  return { login, isLoading, error }
}