import { configureStore } from "@reduxjs/toolkit";

import { contactReducer } from "./contacts/slice";
import { filtersReducer } from "./filters/slice";
 const rootReducer = {
   contacts: contactReducer,
   filters: filtersReducer

}
export const store = configureStore({
    reducer: rootReducer
})