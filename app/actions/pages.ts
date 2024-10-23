"use server";

import { Prisma } from "@prisma/client";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const createPage = async (options: {
  data: Prisma.Without<
    Prisma.PageCreateInput,
    Prisma.PageUncheckedCreateInput
  > &
    Prisma.PageUncheckedCreateInput;
}) => {
  try {
    const page = await prisma.page.create(options);
    revalidatePath("/dashboard");
    return page;
  } catch (error) {
    console.error(error);
    revalidatePath("/dashboard");
  }
};

export const updatePage = async (options: {
  where: Prisma.PageWhereUniqueInput;
  data: Prisma.PageUpdateInput;
}) => {
  try {
    const page = await prisma.page.update(options);
    revalidatePath("/dashboard");
    return page;
  } catch (error) {
    console.error(error);
    revalidatePath("/dashboard");
  }
};
