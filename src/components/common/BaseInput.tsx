import React from "react";
import { BaseInputPropsI } from "../../interfaces/commonComponentsProps.interface";

const BaseInput = (props: BaseInputPropsI) => {
  return (
    <input
      type={props.type} {...props}
    />
  );
}

export default BaseInput;