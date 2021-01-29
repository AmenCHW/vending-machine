import React from "react";
import { HomePayments } from "components/HomePayments/HomePayments";
import { HomeContent } from "components/HomeContent/HomeContent";
import "./Home.scss";

export const Home = () => {
  return (
    <section className="home">
      <HomeContent />
      <HomePayments />
    </section>
  )
};
