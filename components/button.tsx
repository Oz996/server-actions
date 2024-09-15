"use client";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

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

  const handleRoute = () => {
    if (route) {
      router.push(`/?modal=${route}`);
    }
  };

  return (
    <button
      onClick={handleRoute}
      className={classNames({
        "bg-blue-600/70 px-5 py-2 rounded-lg text-white font-semibold capitalize":
          true,
      })}
    >
      {children}
    </button>
  );
}
