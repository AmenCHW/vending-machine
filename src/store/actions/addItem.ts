import { createAction } from "@reduxjs/toolkit";
import { itemT } from "../../types/item.type"

export const addItemAction = createAction<itemT>("item/add")
