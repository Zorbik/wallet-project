import { Suspense } from 'react';
// import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home, Statistic } from './pages';
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
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="statistic" element={<Statistic />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
