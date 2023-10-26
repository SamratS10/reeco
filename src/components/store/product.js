import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './index'

const store = configureStore({
    reducer:{
        cart:cartReducer
    }
})

export default store
