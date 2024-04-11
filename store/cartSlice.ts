import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import { Product } from "@/models";

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
        addCarts: (state, action: PayloadAction)=>{
            console.log('action: ',action.payload)
            state.carts.push({
                    name: action.payload.name,
                    price: action.payload.price,
                    quantity: 1,
                    thumb: action.payload.thumb
                })
        }
    },
    extraReducers() {
    },
})

export default cartSlice.reducer

export const cartAction = cartSlice.actions

export const selectListCarts = (state: RootState)=>state.carts.carts