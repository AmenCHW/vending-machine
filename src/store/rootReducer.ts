import { createReducer } from "@reduxjs/toolkit";
import { initialStateI } from "../interfaces/initialState.interface";
import { addItemAction } from "./actions/addItem";

const initialState: initialStateI = {
  items: []
}

const rootReducer = createReducer(initialState, {
  [addItemAction.type]: (state, action) => {
    return {...state, items: [...state.items, action.payload]}
  }
})

export default rootReducer;