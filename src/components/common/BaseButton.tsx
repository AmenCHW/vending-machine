import React from "react";
import {BaseButtonPropsI} from "../../interfaces/commonComponentsProps.interface";

const BaseButton = ({type, text}: BaseButtonPropsI) => {
  return (
    <button type={type}>{text}</button>
  );
}

export default BaseButton;