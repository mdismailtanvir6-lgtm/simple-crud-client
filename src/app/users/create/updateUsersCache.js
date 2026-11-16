"use server";

import { updateTag } from "next/cache";

export async function updateUsersCache() {
  updateTag("users");
}