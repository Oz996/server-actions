"use client";

import { deleteTodo } from "@/lib/actions";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import { useTransition } from "react";

interface TodoButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  todoId: number;
  mode: "edit" | "delete";
  children: ReactNode;
}

export default function TodoButton({
  mode,
  children,
  todoId,
}: TodoButtonProps) {
  const editMode = mode === "edit";
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const handleClick = async (id: number) => {
    if (editMode) {
      router.push(`/?modal=edit&id=${id}`);
    } else {
      startTransition(async () => {
        await deleteTodo(id);
      });
    }
  };

  return (
    <button
      onClick={() => handleClick(todoId)}
      disabled={isPending}
      className="bg-gray-300/80 rounded-lg size-9"
    >
      {isPending ? (
        <Loader2 size={20} className="animate-spin m-auto" />
      ) : (
        children
      )}
    </button>
  );
}
