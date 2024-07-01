import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";
const setAuthHeader = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`; 
}
const clearAuthHeader = () => {
    axios.defaults.headers.common["Authorization"] = "";  
 }
export const register = createAsyncThunk("auth/register",
    async (credentials, thunkAPI) => {
       try {
           const response = await axios.post("/users/signup", credentials);
            setAuthHeader(response.data.token)
           return response.data;
          } catch (error) {
           return thunkAPI.rejectWithValue(error.message)
        }
        
 }   
)
export const login = createAsyncThunk("auth/login",
    async (value, thunkAPI) => {
        
       try {
           const response = await axios.post("/users/login", value);
            setAuthHeader(response.data.token)
           return response.data;
          } catch (error) {
           return thunkAPI.rejectWithValue(error.message)
        }
        
 }   
)
export const logOut = createAsyncThunk("auth/logout",
    async (_, thunkAPI) => {
        try {
            await axios.post("/users/logout");
         clearAuthHeader()
          } catch (error) {
           return thunkAPI.rejectWithValue(error.message)
        }
        
 }   
)
export const refreshUser = createAsyncThunk("auth/refresh", 
    async (_, thunkAPI) => {
        try {
           const reduxState = thunkAPI.getState();
        const savedTokin = reduxState.auth.token;
        setAuthHeader(savedTokin);
            const response = await axios.get("/users/current");
           return response.data
        } catch (error) {
            clearAuthHeader()
         return thunkAPI.rejectWithValue(error.message)   
      }
       
    }, {
        condition: (_, { getState }) => {
            const reduxState = getState();
            const savedTokin = reduxState.auth.token; 
            return savedTokin !== null;
        }
    }
)
 