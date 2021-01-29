import React from "react";
import "./BackButton.scss";
import {useDispatch, useSelector} from "react-redux";
import { initialStateT } from "../../../types/initialState.type";
import { addCashAction } from "../../../store/rootReducer";

export const BackButton = () => {
  const cash = useSelector((state: initialStateT) => state.cash);
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