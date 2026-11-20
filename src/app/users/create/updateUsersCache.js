"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export async function updateUsersCache() {
  // Update users tag
  // revalidateTag("users", "max");

  // Public user pages
  revalidatePath("/");
  revalidatePath("/users");
}
