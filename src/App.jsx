import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { PrivateRoute } from './components/navigation/PrivateRoute';
import { PublicRoute } from './components/navigation/PublicRoute';
import { Home, LoginPage, RegisterPage, Statistic } from './pages';
import { getCurrentUser } from './redux/userAuth/userAuthOperations';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ModalTransactions } from './components/modal/modal';
import LoginPage from './pages/loginPage/loginPage';
import RegistrationPage from './pages/registrationPage/registrationPage';
import { getCurrentUser } from './redux/userAuth/userAuthOperations';

// import RegistrationPage from "./pages/registrationPage/registrationPage";

function App() {
  const dispatch = useDispatch();
  const { token } = useSelector(state => state.userData);

// import RegistrationPage from "./pages/registrationPage/registrationPage";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>

      <Suspense fallback={false}>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Layout />
              </PrivateRoute>
            }
          >
            <Route index element={<Home />} />
            <Route path="statistic" element={<Statistic />} />
          </Route>
          <Route
            path="login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="registration"
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
