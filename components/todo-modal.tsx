import { createTodo } from "@/lib/actions";
import Button from "./buttons/button";
import CloseModalButton from "./buttons/close-modal-button";

interface ModalProps {
  modal: string;
}

export default function TodoModal({ modal }: ModalProps) {
  const addMode = modal === "add";

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
          <form action={createTodo} className="flex flex-col grow">
            <label htmlFor="title" className="sr-only">
              title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="py-2 px-3 bg-slate-200 rounded w-full"
            />
            <div className="mt-auto">
              <Button>submit</Button>
            </div>
          </form>
        </div>
      </div>
    );
}
