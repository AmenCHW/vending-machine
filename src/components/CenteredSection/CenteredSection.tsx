import React from "react";
import "./CenteredSection.scss";

export const CenteredSection: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <section className="centered-section">
      {children}
    </section>
  )
}
