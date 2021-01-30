import React from "react";
import "./BackButton.scss";
import {useDispatch, useSelector} from "react-redux";
import { ActualStateType } from "store/rootReducer";
import { addCashAction } from "store/rootReducer";

export const BackButton = () => {
  const cash = useSelector((state: ActualStateType) => state.cash);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addCashAction(-cash));
  }

  return (
    <button
      className={`back-button ${!cash ? "disabled" : ""}`}
      onClick={handleClick}
    >Get your money back</button>
  )
}