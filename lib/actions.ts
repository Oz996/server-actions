"use server";

import { revalidatePath } from "next/cache";
import prisma from "./prisma";
import { redirect } from "next/navigation";
import { Todo } from "@prisma/client";

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
  revalidate();
};

export const deleteTodo = async (id: number) => {
  await prisma.todo.delete({
    where: {
      id,
    },
  });
  revalidate();
};

export const editTodo = async (formData: FormData) => {
  const title = formData.get("title") as string;
  const id = Number(formData.get("id"));

  await prisma.todo.update({
    where: {
      id,
    },
    data: {
      title,
    },
  });
  revalidate();
};

export const editCompleted = async (todo: Todo) => {
  await prisma.todo.update({
    where: {
      id: todo.id,
    },
    data: {
      completed: !todo.completed,
    },
  });
  revalidatePath("/");
};

const revalidate = () => {
  revalidatePath("/");
  redirect("/");
};
