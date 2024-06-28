import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "./operations";

const authSlice = createSlice({
    name: "auth",
    initialState: {
  user: {
    name: null,
    email: null,
      },
  loading: false,
  error: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  },
  extraReducers: builder => builder
    .addCase(register.pending, (state) => {
       state.loading = true;
       state.error = false;
    })
    .addCase(register.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.loading = false;
    
   })
   .addCase(register.rejected, (state, action) => {
       state.loading = false;
     state.error = action.payload;
   })
   .addCase(login.pending, (state) => {
       state.loading = true;
       state.error = false;
   })
   .addCase(login.fulfilled, (state, action) => {
         state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.loading = false;
       
   })
   .addCase(login.rejected, (state) => {
       state.loading = false;
       state.error = true;
    })
})
// export default authSlice.reducer;
export const authReducer = authSlice.reducer