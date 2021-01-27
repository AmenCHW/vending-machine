import React from "react";
import { useSelector } from "react-redux";
import { initialStateT } from "../../types/initialState.type"
import "./HomePayments.scss";

export const HomePayments = () => {
  const cash = useSelector((state: initialStateT) => state.cash)

  return (
    <aside className="home-payments">
      <main className="payments-main">
        <p className="payments-current">Your money:<br/>{cash}</p>
      </main>
    </aside>
  )
}