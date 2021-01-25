import React from "react";
import { useDispatch } from "react-redux";
import { addItemAction } from "../store/actions/addItem";
import { itemI } from "../interfaces/item.interface";

const AddItem: React.FC = () => {
  const dispatch = useDispatch();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const item: itemI = {
      id: "test",
      title: "Cola",
      image_url: "https://bit.ly/2YcWUxc",
      quantity: 6
    }
    dispatch(addItemAction(item))
    console.log("clicked")
  }

  return (
    <button onClick={handleClick}>
      Add item
    </button>
  );
}

export default AddItem;