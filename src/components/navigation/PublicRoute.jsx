import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children, restricted = false }) => {
  const isLoggedIn = useSelector(state => state.userData.isLoggedIn);
  return !isLoggedIn && restricted ? children : <Navigate to="/" />;
};
