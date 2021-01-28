import React from "react";
import { itemT } from "../../../../types/item.type";
import { useSelector } from "react-redux";
import { initialStateT } from "../../../../types/initialState.type";
import "./ItemEntity.scss";


export const ItemEntity = ({id, title, price, quantity, image_url}: itemT) => {
  const cash = useSelector((state: initialStateT) => state.cash);

  const handleClick = () => {
    if (quantity === 0) {
      console.log("Out of stock")
    } else if (cash < price) {
      console.log("Not enough money")
    } else {
      console.log("Buy item")
    }
  }

  return (
    <article
      className="items-unit"
      onClick={handleClick}
    >
      <img src={image_url} alt="Product Preview" className="unit__img"/>
      <span className="unit__title">{title} {price}$</span>
      <p className="unit__subtitle">Available items: {quantity}</p>
    </article>
  )
}