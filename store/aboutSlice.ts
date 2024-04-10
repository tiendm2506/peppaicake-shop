import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from ".";

const initialState = {
    carts: []
}

export const CART = 'CartState/CART'

// export const addCart = createAsyncThunk(
//     CART,
//     async(cart)=>{
//         initialState.carts.push(cart)
//     }
// )

const cartSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {
        setCarts: (state, action)=>{
            state.carts = []
        }
    },
    extraReducers() {
    },
  })

  export default cartSlice.reducer

export const cartAction = cartSlice.actions

export const selectListCarts = (state: RootState)=>state.carts