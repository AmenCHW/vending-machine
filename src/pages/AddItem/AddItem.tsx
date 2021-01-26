import React, { useState } from "react";
import { nanoid } from "nanoid"
import { BaseButton } from "../../components/common/BaseButton";
import { BaseInput } from "../../components/common/BaseInput";
import { itemT } from "../../types/item.type";

export const AddItem = () => {
  const [item, setItem] = useState<itemT>({
    id: "",
    title: "",
    image_url: "",
    quantity: 0
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    setItem({...item, id: nanoid().toString()})
    e.preventDefault();
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setItem({...item, [e.target.name]: e.target.value});
  }

  return (
    <form onSubmit={handleSubmit}>
      <BaseInput
        placeholder="Title" name="title"
        value={item.title} onChange={handleChange}
      />
      <BaseInput
        placeholder="Image URL" name="image_url"
        value={item.image_url} onChange={handleChange}
      />
      <BaseInput
        type="number" placeholder="Item quantity" name="quantity"
        value={item.quantity.toString()} onChange={handleChange}
      />
      <BaseButton type="submit" text="Добавить товар"/>
    </form>
  );
}