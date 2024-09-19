import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoutes: React.FC = () => {
  const { user, loading } = useAuth()

  if (loading) {
    return <></>
  }

  return user ? (
      <Outlet />
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRoutes