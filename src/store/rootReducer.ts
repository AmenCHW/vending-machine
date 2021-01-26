import { createReducer } from "@reduxjs/toolkit";
import { initialStateT } from "../types/initialState.type";
import { addItemAction } from "./actions/addItem";

const initialState: initialStateT = {
  items: []
}

const rootReducer = createReducer(initialState, {
  [addItemAction.type]: (state, action) => {
    return {...state, items: [...state.items, action.payload]}
  }
})

export default rootReducer;