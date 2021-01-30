import React from "react";
import { Link } from "react-router-dom";
import { HomePayments } from "components/HomePayments/HomePayments";
import { ContentItems } from "./ContentItems/ContentItems";
import "./HomeContent.scss";

export const HomeContent = () => {
  return (
    <section className="home__content">
      <main className="content__machine">
        <h1 className="machine__title">
          <Link to="/restock">VENDING MACHINE</Link>
        </h1>
        <HomePayments />
        <div className="machine__items">
          <ContentItems />
        </div>
      </main>
    </section>
  )
}
