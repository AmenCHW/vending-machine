import React from "react";
import "./ErrorTemplate.scss";

type ErrorTemplatePropsType = {
  message: string,
  instructions: string
}

export const ErrorTemplate= ({ message, instructions }: ErrorTemplatePropsType) => {
  return (
    <section className="centered-section error__section">
      <div className="card">
        <h1 className="card-title">{message}</h1>
        <p className="card-subtitle">{instructions}</p>
      </div>
    </section>
  )
}
