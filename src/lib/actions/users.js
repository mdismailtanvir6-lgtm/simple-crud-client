"use server";

import { revalidatePath, updateTag } from "next/cache";
import { redirect } from "next/navigation";
import { apiUrl } from "@/lib/api";

/**
 * Invalidate every cached view of the users collection after a mutation.
 *
 * `updateTag` is used instead of `revalidateTag("users", "max")` because:
 * - it expires the server cache immediately, so the next request waits for
 *   fresh data instead of serving the stale list (read-your-own-writes).
 * - it also invalidates the client router/prefetch cache.
 */
export async function updateUsersCache() {
  updateTag("users");
  revalidatePath("/users");
}

/**
 * Create a user through a Server Action and redirect to the list.
 *
 * Doing the mutation and the navigation in the same Server Action avoids the
 * extra client-side refetch that can hit a stale cached RSC response.
 */
export async function createUser(previousState, formData) {
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
  };

  try {
    const response = await fetch(apiUrl("/users"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-store",
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      return { error: result.message || "Failed to create user" };
    }
  } catch (error) {
    console.error("User creation failed:", error);
    return { error: error.message || "Failed to create user" };
  }

  await updateUsersCache();
  redirect("/users");
}
