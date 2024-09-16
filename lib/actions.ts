"use server";

import { revalidatePath } from "next/cache";
import prisma from "./prisma";
import { redirect } from "next/navigation";

export const getTodos = async () => await prisma.todo.findMany();

export const getTodo = async (id: number) => {
  return await prisma.todo.findUnique({
    where: {
      id,
    },
  });
};

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

export const deleteTodo = async (id: number) => {
  await prisma.todo.delete({
    where: {
      id,
    },
  });
  revalidatePath("/");
  redirect("/");
};

export const editTodo = async (formData: FormData) => {
  const title = formData.get("title") as string;
  const completed = Boolean(formData.get("completed"));
  const id = Number(formData.get("id"));

  await prisma.todo.update({
    where: {
      id,
    },
    data: {
      title,
      completed,
    },
  });
  revalidatePath("/");
  redirect("/");
};
