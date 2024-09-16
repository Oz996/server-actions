import Button from "@/components/buttons/button";
import TodoButton from "@/components/buttons/todo-button";
import TodoCheckbox from "@/components/todo-checkbox";
import TodoModal from "@/components/todo-modal";
import { getTodo, getTodos } from "@/lib/actions";
import { Todo } from "@prisma/client";
import classNames from "classnames";
import { Pencil, Trash } from "lucide-react";

export default async function Todos({
  searchParams,
}: {
  searchParams: { modal: string; id?: string };
}) {
  const id = Number(searchParams?.id);
  const todos: Todo[] = await getTodos();
  const todo = searchParams?.id ? ((await getTodo(id)) as Todo) : undefined;

  const formatDate = (date: Date) => {
    return date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  return (
    <section className="flex flex-col items-center justify-center w-screen h-screen gap-10">
      <h1 className="text-4xl font-bold text-gray-600 uppercase">todo list</h1>
      <div className="flex flex-col gap-3 w-[60rem]">
        <div className="flex gap-3">
          <Button route="add">add task</Button>
        </div>
        <div className="bg-slate-200 rounded-lg w-full p-6">
          <ul className="flex flex-col gap-5">
            {todos.map((todo) => (
              <li key={todo.id} className="flex w bg-white rounded-lg p-2 px-3">
                <TodoCheckbox todo={todo} />
                <div className="space-y-2 ml-3">
                  <p
                    className={classNames({
                      "font-semibold capitalize": true,
                      "line-through": todo.completed,
                    })}
                  >
                    {todo.title}
                  </p>
                  <span className="text-sm">{formatDate(todo.createdAt)}</span>
                </div>
                <div className="ml-auto flex gap-3 items-center">
                  <TodoButton mode="delete" todoId={todo.id}>
                    <Trash size={20} className="m-auto" />
                  </TodoButton>
                  <TodoButton mode="edit" todoId={todo.id}>
                    <Pencil size={20} className="m-auto" />
                  </TodoButton>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <TodoModal modal={searchParams.modal} todo={todo} id={searchParams?.id} />
    </section>
  );
}
