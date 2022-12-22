import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(state => state.userData.isLoggedIn);
  const isPending = useSelector(state => state.userData.isPending);
  return isLoggedIn && !isPending ? children : <Navigate to="/login" />;
};
