import React from "react";
import { BaseInputPropsT } from "../../types/commonComponentsProps.type";

export const BaseInput = (props: BaseInputPropsT) => {
  return (
    <input
      type={props.type} {...props}
    />
  );
}

export default BaseInput;