"use client";
import classNames from "classnames";
import { useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import { Loader2 } from "lucide-react";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "danger";
  route?: "add" | "edit";
  children: ReactNode;
}

export default function Button({
  variant = "primary",
  children,
  route,
}: ButtonProps) {
  const router = useRouter();
  const { pending } = useFormStatus();

  const handleRoute = () => {
    if (route) {
      router.push(`/?modal=${route}`);
    }
  };

  return (
    <button
      onClick={handleRoute}
      disabled={pending}
      className={classNames({
        "bg-blue-600/70 px-5 py-2 rounded-lg text-white font-semibold capitalize":
          true,
        "bg-red-600/70": variant === "danger",
      })}
    >
      {pending ? <Loader2 className="animate-spin" /> : children}
    </button>
  );
}
