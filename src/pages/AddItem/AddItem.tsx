import React, { useState } from "react";
import { BaseButton } from "../../components/common/BaseButton";
import { BaseInput } from "../../components/common/BaseInput";

export const AddItem: React.FC = () => {
  const [value, setValue] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(value)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <BaseInput type="text" value={value} onChange={handleChange}/>
      <BaseButton type="submit" text="Добавить товар"/>
    </form>
  );
}