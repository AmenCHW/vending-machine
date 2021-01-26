import React from "react";
import {BaseButtonPropsI} from "../../interfaces/commonComponentsProps.interface";

export const BaseButton = ({type, text}: BaseButtonPropsI) => {
  return (
    <button type={type}>{text}</button>
  );
}
