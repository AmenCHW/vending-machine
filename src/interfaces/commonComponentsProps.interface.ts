import { ChangeEvent } from "react";

export interface BaseButtonPropsI {
  type?: "submit" | "reset" | "button",
  text: string,
}

export interface BaseInputPropsI {
  type?: string,
  placeholder?: string,
  value: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
}