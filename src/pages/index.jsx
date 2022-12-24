import { lazy } from 'react';

export const Home = lazy(() => import('./Home/Home'));
export const Statistic = lazy(() => import('./Statistic/Statistic'));
export const LoginPage = lazy(() => import('./loginPage/loginPage'));
export const RegisterPage = lazy(() =>
  import('./registrationPage/registrationPage')
);
export const CurrencyMobPage = lazy(() => import('./CurrencyMob/CurrencyMob'));
