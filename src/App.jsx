// import { Suspense, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { Route, Routes } from 'react-router-dom';
// import { Layout, PrivateRoute, PublicRoute } from './components';
// import { Contacts, Home, Login, NotFoundPage, Registration } from './pages';
// import { getCurrentUser } from './redux/userAuthOperations';

import LoginPage from "./pages/loginPage/loginPage";
import RegistrationPage from "./pages/registrationPage/registrationPage";

function App() {
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(getCurrentUser());
  //   }, [dispatch]);

  return (
    <>
      <LoginPage />
      {/* <Suspense fallback={false}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="contacts"
              element={
                <PrivateRoute>
                  <Contacts />
                </PrivateRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute restricted>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="registration"
              element={
                <PublicRoute restricted>
                  <Registration />
                </PublicRoute>
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense> */}
    </>
  );
}

export default App;
