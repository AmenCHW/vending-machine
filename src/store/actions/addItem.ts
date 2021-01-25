import { createAction } from "@reduxjs/toolkit";
import { itemI } from "../../interfaces/item.interface"

export const addItemAction = createAction<itemI>("item/add")
