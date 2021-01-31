import React from "react";
import { Card } from "components/Card/Card";
import "./ErrorTemplate.scss";

type ErrorTemplatePropsType = {
  message: string,
  instructions: string
}

export const ErrorTemplate = ({ message, instructions }: ErrorTemplatePropsType) => {
  return (
    <section className="centered-section error__section">
      <Card title={message}>
        <p className="card-subtitle">{instructions}</p>
      </Card>
    </section>
  )
}
