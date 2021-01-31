import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import toast from "toasted-notes";
import { ActualStateType, restockItemsAction } from "../store/rootReducer";
import { CenteredSection } from "components/CenteredSection/CenteredSection";
import { Card } from "components/Card/Card";


export const ItemsRestock = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const earnedCash = useSelector((state: ActualStateType) => state.earnedCash);
  const title = `Total earned cash is equal to ${earnedCash.toFixed(2)}$`;

  const handleClick = () => {
    if (earnedCash === 0) {
      toast.notify("No items to restock");
    } else {
      dispatch(restockItemsAction());
    }
    history.push("/");
  }

  return (
    <CenteredSection>
      <Card key={title} title={title}>
        <button
          className="card-btn"
          onClick={handleClick}
        >Restock</button>
      </Card>
    </CenteredSection>
  )
}
