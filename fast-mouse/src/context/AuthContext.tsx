import { User, onAuthStateChanged, signOut as firebaseSignOut, getAuth } from 'firebase/auth'
import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { auth } from '../services/firebase/config'

interface AuthContextType {
    user: User | null;
    loading: boolean;
    logout: () => Promise<void>
  }

interface AuthContextProps {
    children: ReactNode
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: AuthContextProps){
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      const auth = getAuth()
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if(user) {
            setUser(user);
            sessionStorage.setItem('auth', 'true')
          }else {
            setUser(null)
            sessionStorage.removeItem('auth')
          }
          setLoading(false)
        })
    
        return unsubscribe
    }, [])

    const logout = async () => {
      try{
        const auth = getAuth()
        await firebaseSignOut(auth)
        sessionStorage.removeItem('auth')
      } catch(error) {
        console.error('Sign out error: ', error)
      }
    }

    return (
        <AuthContext.Provider value={{ user, loading, logout }}>
          {children}
        </AuthContext.Provider>
    )
}  

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}