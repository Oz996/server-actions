"use client";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CloseModalButton() {
  const router = useRouter();

  const handleCloseModal = () => {
    router.push("/");
  };

  return (
    <button
      onClick={handleCloseModal}
      className="bg-transparent rounded-full p-2 hover:bg-slate-200 duration-200 group"
    >
      <X
        size={18}
        className="text-slate-500 group-hover:text-slate-400 duration-200"
      />
    </button>
  );
}
