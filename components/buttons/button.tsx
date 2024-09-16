"use client";
import classNames from "classnames";
import { useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import { Loader2 } from "lucide-react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  route?: "add" | "edit" | "delete";
  children: ReactNode;
  todoId?: number;
  sm?: boolean;
}

export default function Button({ children, todoId, route, sm }: ButtonProps) {
  const router = useRouter();
  const { pending } = useFormStatus();

  const handleRoute = () => {
    if (route === "add") {
      router.push(`/?modal=add`);
    } else {
      router.push(`/?modal=edit&id=${todoId}`);
    }
  };

  return (
    <button
      onClick={handleRoute}
      disabled={pending}
      className={classNames({
        "bg-blue-600/70 rounded-lg text-white font-semibold capitalize": true,
        "px-5 py-2": !sm,
        "p-2": sm,
      })}
    >
      {pending ? <Loader2 className="animate-spin" /> : children}
    </button>
  );
}
