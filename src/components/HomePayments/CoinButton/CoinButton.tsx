import React from "react";
import { useDispatch } from "react-redux";
import { addCashAction } from "store/rootReducer";
import "./CoinButton.scss";

export const CoinButton: React.FC<{price: number}> = ({ price }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addCashAction(price))
  }
  return (
    <button
      className="coin-btn"
      onClick={handleClick}
    >
      {price}$
    </button>
  )
}