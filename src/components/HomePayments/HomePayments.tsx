import React from "react";
import { useSelector } from "react-redux";
import { initialStateT } from "../../types/initialState.type"
import { CoinButton } from "./CoinButton/CoinButton";
import { BackButton } from "./BackButton/BackButton";
import "./HomePayments.scss";

export const HomePayments = () => {
  const cash = useSelector((state: initialStateT) => state.cash)

  return (
    <aside className="home-payments">
      <article className="payments-main">
        <p className="payments-current">Your money:<br/>{cash}$</p>
        <BackButton />
      </article>
      <div className="payments-coins">
        <CoinButton price={0.25}/>
        <CoinButton price={0.5}/>
        <CoinButton price={1}/>
        <CoinButton price={2}/>
        <CoinButton price={5}/>
      </div>
    </aside>
  )
}