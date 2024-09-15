"use client";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "danger";
  children: ReactNode;
}

export default function Button({ variant = "primary", children }: ButtonProps) {
  const router = useRouter();

  return (
    <button
      className={classNames({
        "bg-blue-600/70 px-5 py-2 rounded-lg text-white font-semibold capitalize":
          true,
      })}
    >
      {children}
    </button>
  );
}
