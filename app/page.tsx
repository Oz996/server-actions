import Button from "@/components/button";
import TodoModal from "@/components/todo-modal";
import { getTodos } from "@/lib/actions";
import { Pencil, Trash } from "lucide-react";

export default async function Todos({
  searchParams,
}: {
  searchParams: { modal: string };
}) {
  const todos = await getTodos();

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
                <input
                  type="checkbox"
                  className="border-none outline-none size-8 place-self-center bg-slate-200 rounded-lg"
                />
                <div className="space-y-2 ml-3">
                  <p className="font-semibold capitalize">{todo.title}</p>
                  <span className="text-sm">{formatDate(todo.createdAt)}</span>
                </div>
                <div className="ml-auto flex gap-3 items-center">
                  <button className="bg-gray-300/80 rounded-lg size-9">
                    <Trash size={20} className="m-auto" />
                  </button>
                  <button className="bg-gray-300/80 rounded-lg size-9">
                    <Pencil size={20} className="m-auto" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <TodoModal modal={searchParams.modal} />
    </section>
  );
}
