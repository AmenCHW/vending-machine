import React from "react";
import { BaseButtonPropsT } from "../../types/commonComponentsProps.type";

export const BaseButton = ({type, text}: BaseButtonPropsT) => {
  return (
    <button type={type}>{text}</button>
  );
}
