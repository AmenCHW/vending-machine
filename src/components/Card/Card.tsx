import React from "react";
import "./Card.scss";

type CardPropsType = {
  title: string,
  children?: React.ReactNode
}

export const Card= ({ title, children }: CardPropsType) => {
  return (
    <article className="card">
      <h1 className="card-title">{title}</h1>
      {children}
    </article>
  )
}
