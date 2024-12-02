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
        }
    }
});

export const { adicionar } = cartSlice.actions;
export default cartSlice.reducer;