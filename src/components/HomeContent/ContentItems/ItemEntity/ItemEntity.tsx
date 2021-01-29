import React from "react";
import { itemT } from "../../../../types/item.type";
import { useDispatch, useSelector } from "react-redux";
import { initialStateT } from "../../../../types/initialState.type";
import { buyItemAction } from "../../../../store/rootReducer";
import "./ItemEntity.scss";


export const ItemEntity = ({id, title, price, quantity, image_url}: itemT) => {
  const dispatch = useDispatch();
  const cash = useSelector((state: initialStateT) => state.cash);

  const handleClick = () => {
    if (quantity === 0) {
      console.log("Out of stock");
    } else if (cash < price) {
      console.log("Not enough money");
    } else {
      dispatch(buyItemAction(id));
    }
  }

  return (
    <article
      className="items-unit"
      onClick={handleClick}
    >
      <img src={image_url} alt="Product Preview" className="unit__img"/>
      <span className="unit__title">{title} {price}$</span>
      <p className="unit__subtitle">
        {quantity ? `Available items ${quantity}` : "Out of stock"}
      </p>
    </article>
  )
}