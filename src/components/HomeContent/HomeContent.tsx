import React from "react";
import { ContentItems } from "./ContentItems/ContentItems";
import "./HomeContent.scss";

export const HomeContent = () => {
  return (
    <section className="home__content">
      <main className="content__machine">
        <h1 className="machine__title">Some title</h1>
        <div className="machine__items">
          <ContentItems />
        </div>
      </main>
    </section>
  )
}