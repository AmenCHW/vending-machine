import React from "react";
import { useDispatch } from "react-redux";
import { addCashAction } from "../../../store/actions/addCash";
import "./CoinButton.scss";

export const CoinButton = ({ price }: any) => {
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