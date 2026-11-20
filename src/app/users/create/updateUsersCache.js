"use server";

import { revalidatePath, updateTag } from "next/cache";

export async function updateUsersCache() {
  updateTag("users");
  revalidatePath("/users");
}