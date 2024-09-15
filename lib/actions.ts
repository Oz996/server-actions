"use server";

import { revalidatePath } from "next/cache";
import prisma from "./prisma";
import { redirect } from "next/navigation";

export const createTodo = async (formData: FormData) => {
  const title = formData.get("title") as string;
  await prisma.todo.create({
    data: {
      title,
      completed: false,
    },
  });
  revalidatePath("/");
  redirect("/");
};

export const getTodos = async () => await prisma.todo.findMany();
