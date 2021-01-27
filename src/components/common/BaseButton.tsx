import React from "react";
import { BaseButtonPropsT } from "../../types/commonComponentsProps.type";

export const BaseButton = (props: BaseButtonPropsT) => {
  return (
    <button {...props}>{props.text}</button>
  );
}
