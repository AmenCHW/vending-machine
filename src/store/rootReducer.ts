import { createReducer } from "@reduxjs/toolkit";
import { initialStateT } from "../types/initialState.type";
import { addItemAction } from "./actions/addItem";
import { addCashAction } from "./actions/addCash";
import { buyItemAction } from "./actions/buyItem";
import { nanoid } from "nanoid";

const initialState: initialStateT = {
  items: [
    {
      id: nanoid().toString(),
      title: "Cookie",
      price: 0.1,
      quantity: 3,
      image_url: "https://art.pixilart.com/67a5851268e95c0.png"
    },
    {
      id: nanoid().toString(),
      title: "Cookie",
      price: 0.1,
      quantity: 3,
      image_url: "https://art.pixilart.com/67a5851268e95c0.png"
    },
    {
      id: nanoid().toString(),
      title: "Cookie",
      price: 0.1,
      quantity: 3,
      image_url: "https://art.pixilart.com/67a5851268e95c0.png"
    },
    {
      id: nanoid().toString(),
      title: "Cookie",
      price: 0.1,
      quantity: 3,
      image_url: "https://art.pixilart.com/67a5851268e95c0.png"
    },
    {
      id: nanoid().toString(),
      title: "Cookie",
      price: 0.1,
      quantity: 0,
      image_url: "https://art.pixilart.com/67a5851268e95c0.png"
    }
  ],
  cash: 0
}

const rootReducer = createReducer(initialState, builder => {
    builder.addCase(addItemAction, (state, action) => {
      state.items.push(action.payload);
    })
    builder.addCase(addCashAction, (state, action) => {
      state.cash += action.payload;
    })
    builder.addCase(buyItemAction, (state, action) => {
      const itemIndex = state.items.findIndex(i => i.id === action.payload);
      state.items[itemIndex].quantity -= 1;
      state.cash -= state.items[itemIndex].price;
    })
  }
)

export default rootReducer;