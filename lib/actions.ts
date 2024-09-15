"use server";

import prisma from "./prisma";

export const createTodo = async (formData: FormData) => {
  const title = formData.get("title") as string;
  await prisma.todo.create({
    data: {
      title,
      completed: false,
    },
  });
};

export const getTodos = async () => await prisma.todo.findMany();
