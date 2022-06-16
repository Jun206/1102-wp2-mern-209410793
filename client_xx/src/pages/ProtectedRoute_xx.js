import { useAppContext } from '../context/appContext_xx';
import { Navigate } from 'react-router-dom';

const ProtectedRoute_xx = ({ children }) => {
  const { user } = useAppContext();
  if (!user) {
    return <Navigate to='/landing' />;
  }
  return children;
};

export default ProtectedRoute_xx;
