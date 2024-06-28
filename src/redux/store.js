import { configureStore } from "@reduxjs/toolkit";

import { contactReducer } from "./contacts/slice";
import { filtersReducer } from "./filters/slice";
import { authReducer } from "./auth/slice";
 const rootReducer = {
   contacts: contactReducer,
   filters: filtersReducer,
   auth: authReducer


}
export const store = configureStore({
  reducer: rootReducer
    
    
})