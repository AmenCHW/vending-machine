import React from "react";
import { CenteredSection } from "components/CenteredSection/CenteredSection";
import { Card } from "components/Card/Card";

type ErrorTemplatePropsType = {
  message: string,
  instructions: string
}

export const ErrorTemplate = ({ message, instructions }: ErrorTemplatePropsType) => {
  return (
    <CenteredSection>
      <Card title={message}>
        <p className="card-subtitle">{instructions}</p>
      </Card>
    </CenteredSection>
  )
}
