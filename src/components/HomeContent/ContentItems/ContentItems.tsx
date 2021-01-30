import React from "react";
import { useSelector } from "react-redux";
import { ActualStateType } from "store/rootReducer";
import { ItemEntity } from "./ItemEntity/ItemEntity";
import "./ContentItems.scss";

export const ContentItems = () => {
  const items = useSelector((state: ActualStateType) => state.items);

  return (
    <div className="content-items">{
      items.map((item) => (
        <ItemEntity {...item}/>
      ))
    }</div>
  );
}