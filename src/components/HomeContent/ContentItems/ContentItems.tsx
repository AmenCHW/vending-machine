import React from "react";
import { useSelector } from "react-redux";
import { initialStateT } from "types/initialState.type";
import { ItemEntity } from "./ItemEntity/ItemEntity";
import "./ContentItems.scss";

export const ContentItems = () => {
  const items = useSelector((state: initialStateT) => state.items);

  return (
    <div className="content-items">{
      items.map((item) => (
        <ItemEntity {...item}/>
      ))
    }</div>
  );
}