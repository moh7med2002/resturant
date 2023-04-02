import { configureStore , combineReducers} from '@reduxjs/toolkit'
import themeSlice from './themeSlice';
import adminSlice from './adminSlice'


import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage';

  const persistConfig = {
    key: 'root1',
    version: 1,
    storage,
  }

  const persistConfig2 = {
    key: 'root2',
    version: 1,
    storage,
  }

  const rootReducer=combineReducers({
    theme : persistReducer(persistConfig, themeSlice),
    admin : persistReducer(persistConfig2 , adminSlice)
  })

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

export const  persistor = persistStore(store)