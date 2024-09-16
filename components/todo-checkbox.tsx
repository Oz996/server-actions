"use client";

import { editCompleted } from "@/lib/actions";
import { Todo } from "@prisma/client";

interface TodoCheckboxProps {
  todo: Todo;
}

export default function TodoCheckbox({ todo }: TodoCheckboxProps) {
  return (
    <input
      type="checkbox"
      className="border-none outline-none size-8 place-self-center bg-slate-200 rounded-lg"
      onChange={() => editCompleted(todo)}
      defaultChecked={todo.completed}
    />
  );
}
