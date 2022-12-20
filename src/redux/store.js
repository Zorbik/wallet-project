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
import { categoriesReducer } from './transactions/transactionsSlice';
import {userAuthSlice} from './userAuth/userAuthSlice'
 
const persistConfig = {
  key: 'userData',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    categoriesData: categoriesReducer,
    userData: persistReducer(persistConfig, userAuthSlice.reducer),
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
