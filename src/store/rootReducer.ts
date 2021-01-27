import { createReducer } from "@reduxjs/toolkit";
import { initialStateT } from "../types/initialState.type";
import { addItemAction } from "./actions/addItem";
import { addCashAction } from "./actions/addCash";

const initialState: initialStateT = {
  items: [],
  cash: 0
}

const rootReducer = createReducer(initialState, {
  [addItemAction.type]: (state, action) => {
    return {...state, items: [...state.items, action.payload]}
  },
  [addCashAction.type]: (state, action) => {
    return {...state, cash: state.cash+action.payload}
  }
})

export default rootReducer;