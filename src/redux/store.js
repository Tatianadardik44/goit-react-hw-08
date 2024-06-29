import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import { contactReducer } from "./contacts/slice";
import { filtersReducer } from "./filters/slice";
import { authReducer } from "./auth/slice";
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'


const persistConfig = {
  key: 'aythSlice',
  storage,
  whitelist:['token']
} 
const persistedReducer = persistReducer(persistConfig, authReducer)


 const rootReducer = {
   contacts: contactReducer,
   filters: filtersReducer,
   auth: persistedReducer,
   


}
export const store = configureStore({
  reducer: rootReducer,
     middleware: (getDefaultMiddleware) =>
       getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }), 
    
})
 export const persistor = persistStore(store)