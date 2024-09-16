"use client";
import { createTodo, editTodo } from "@/lib/actions";
import Button from "./buttons/button";
import { ChangeEvent, useState } from "react";

interface TodoFormProps {
  addMode: boolean;
  todo: any;
  id?: string;
}

interface FormData {
  title: string;
  completed: boolean;
}

const initialState: FormData = {
  title: "",
  completed: false,
};

export default function TodoForm({ addMode, todo, id }: TodoFormProps) {
  const [formData, setFormData] = useState(initialState);

  const action = addMode ? createTodo : editTodo;

  console.log("id", id);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form action={action} className="flex flex-col grow">
      {id && <input type="hidden" name="id" value={id} />}
      <label htmlFor="title" className="sr-only">
        title
      </label>
      <input
        type="text"
        name="title"
        defaultValue={todo?.title}
        onChange={handleChange}
        placeholder="Title"
        className="py-2 px-3 bg-slate-200 rounded w-full"
      />
      <div className="mt-auto">
        <Button>submit</Button>
      </div>
    </form>
  );
}
