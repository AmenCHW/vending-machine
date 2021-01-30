import React from "react";
import "./ErrorTemplate.scss";

type ErrorTemplatePropsType = {
  message: string,
  instructions: string
}

export const ErrorTemplate= ({ message, instructions }: ErrorTemplatePropsType) => {
  return (
    <section className="error__section">
      <div className="error__card">
        <h1 className="card__title">{message}</h1>
        <p className="card__subtitle">{instructions}</p>
      </div>
    </section>
  )
}
