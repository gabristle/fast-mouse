import { Outlet, Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const PublicRoutes: React.FC = () => {
  const { user, loading } = useAuth()
  const location = useLocation()

  if (loading) {
    return <></>
  }

  return user ? <Navigate to={location.state?.from || '/room'}/> : <Outlet />
}

export default PublicRoutes