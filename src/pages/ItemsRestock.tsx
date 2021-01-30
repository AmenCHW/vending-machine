import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActualStateType, restockItemsAction } from "../store/rootReducer";
import { useHistory } from "react-router-dom";
import toast from "toasted-notes";


export const ItemsRestock = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const earnedCash = useSelector((state: ActualStateType) => state.earnedCash);

  const handleClick = () => {
    if (earnedCash === 0) {
      toast.notify("No items to restock");
    } else {
      dispatch(restockItemsAction());
    }
    history.push("/");
  }

  return (
    <section className="centered-section restock">
      <div className="card">
        <h1 className="card-title">Total earned cash is equal to {earnedCash.toFixed(2)}$</h1>
        <button
          className="card-btn"
          onClick={handleClick}
        >Restock</button>
      </div>
    </section>
  )
}
