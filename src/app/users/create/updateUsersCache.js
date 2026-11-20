"use server";

import { revalidateTag } from "next/cache";

export async function updateUsersCache() {
  revalidateTag("users", "max");
}
