import { ChangeEvent } from "react";

export type BaseButtonPropsT = {
  type?: "submit" | "reset" | "button",
  text: string,
}

export type BaseInputPropsT = {
  type?: string,
  placeholder?: string,
  name?: string,
  value: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
}