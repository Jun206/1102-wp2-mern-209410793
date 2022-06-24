import { useAppContext } from '../context/appContext_93';
import { Navigate } from 'react-router-dom';

const ProtectedRoute_93 = ({ children }) => {
  const { user } = useAppContext();
  if (!user) {
    return <Navigate to='/landing' />;
  }
  return children;
};

export default ProtectedRoute_93;
