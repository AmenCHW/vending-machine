import { MouseEvent, ChangeEvent } from "react";

export type BaseButtonPropsT = {
  type?: "submit" | "reset" | "button",
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void,
  text: string,
}

export type BaseInputPropsT = {
  type?: string,
  placeholder?: string,
  name?: string,
  value: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
}