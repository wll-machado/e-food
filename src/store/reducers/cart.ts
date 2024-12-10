import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Cardapio } from "../../components/ProductDetails";

type CartState = {
    item: Cardapio[]
}

const initialState: CartState = {
    item: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        adicionar: (state, action:PayloadAction<Cardapio>)=> {
            const item = action.payload;
            state.item.push(item);
        },
        remove:(state, action: PayloadAction<number>)=> {
            state.item = state.item.filter(item => item.id !== action.payload)
          },
          clearCart: (state) => {
              state.item = []; 
          }
    }
});

export const { adicionar, remove, clearCart } = cartSlice.actions;
export default cartSlice.reducer;