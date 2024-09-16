"use client";
import { useTransition } from "react";
import { ButtonProps } from "./button";
import { deleteTodo } from "@/lib/actions";
import { Loader2 } from "lucide-react";

export default function DeleteButton({ todoId, children }: ButtonProps) {
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    startTransition(async () => {
      await deleteTodo(todoId as number);
    });
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isPending}
      className="bg-red-600/70 p-2 rounded-lg text-white font-semibold capitalize"
    >
      {isPending ? <Loader2 className="animate-spin" /> : children}
    </button>
  );
}
