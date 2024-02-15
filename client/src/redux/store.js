import {configureStore} from '@reduxjs/toolkit'
import authReducer from './userSlice/authSlice';
import { apiSlice } from './userSlice/apiSlice';
// import adminReducer from './Slices/AdminSlice/authSlice';
// import {adminApiSlice} from './Slices/AdminSlice/apiSlice' 



const store = configureStore({
    reducer:{
       auth:authReducer,
      //  adminAuth:adminReducer,
    //    [adminApiSlice.reducerPath] : adminApiSlice.reducer,
       [apiSlice.reducerPath] : apiSlice.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware),
    devTools:true
})

export default store;