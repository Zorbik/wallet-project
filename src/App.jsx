import { Suspense } from 'react';
// import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { PrivateRoute } from './components/navigation/PrivateRoute';
import { Home, LoginPage, RegisterPage, Statistic } from './pages';
// import { getCurrentUser } from './redux/userAuthOperations';

// import RegistrationPage from "./pages/registrationPage/registrationPage";

function App() {
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(getCurrentUser());
  //   }, [dispatch]);

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
          <Route path="login" element={<LoginPage />} />
          <Route path="registration" element={<RegisterPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
