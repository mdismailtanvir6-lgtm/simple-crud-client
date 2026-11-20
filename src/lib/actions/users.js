"use server";

import { revalidatePath, updateTag } from "next/cache";

export async function updateUsersCache() {
  updateTag("users");

  // Refresh the users list route.
  revalidatePath("/users");
}
