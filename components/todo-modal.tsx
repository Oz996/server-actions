import Button from "./button";

interface ModalProps {
  modal: string;
}

export default function TodoModal({ modal }: ModalProps) {
  const addMode = modal === "add";

  if (modal)
    return (
      <div className="fixed flex items-center justify-center inset-0 backdrop-blur-[3px]">
        <div className="bg-white border border-slate-300 rounded p-5 size-[30rem] space-y-5">
          <h2 className="text-2xl font-semibold capitalize text-center">
            {addMode ? "add todo" : "edit todo"}
          </h2>
          <form>
            <label htmlFor="title" className="sr-only">
              title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="py-2 px-3 bg-slate-200 rounded w-full"
            />
            <div>
              <Button>submit</Button>
            </div>
          </form>
        </div>
      </div>
    );
}
