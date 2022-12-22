import { configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { categoriesReducer } from './categoriesTransactions/categoriesSlice';
import { userAuthSlice } from './userAuth/userAuthSlice';
import { transactionsReducer } from './transactions/transactionsSlice';
import { statisticReducer } from './statistic/statisticSlice';

const persistConfig = {
  key: 'userData',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    categoriesData: categoriesReducer,
    userData: persistReducer(persistConfig, userAuthSlice.reducer),
    transactionsData: transactionsReducer,
    statisticData: statisticReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
