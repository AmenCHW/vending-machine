import React from "react";
import BaseButton from "../components/common/BaseButton";
import BaseInput from "../components/common/BaseInput";


const AddItem: React.FC = () => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <BaseInput />
      <BaseButton type="submit" text="Добавить товар"/>
    </form>
  );
}

export default AddItem;