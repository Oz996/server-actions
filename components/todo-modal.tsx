import { Todo } from "@prisma/client";
import CloseModalButton from "./buttons/close-modal-button";
import TodoForm from "./todo-form";

interface ModalProps {
  modal: string;
  id?: string;
  todo?: Todo;
}

export default function TodoModal({ modal, id, todo }: ModalProps) {
  const addMode = modal === "add";

  console.log("todo", todo);

  if (modal)
    return (
      <div className="fixed flex items-center justify-center inset-0 backdrop-blur-[3px]">
        <div className="bg-white flex flex-col gap-5 border border-slate-300 rounded p-5 size-[30rem]">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold capitalize">
              {addMode ? "add todo" : "edit todo"}
            </h2>
            <CloseModalButton />
          </div>
          <TodoForm todo={todo} addMode={addMode} id={id} />
        </div>
      </div>
    );
}
