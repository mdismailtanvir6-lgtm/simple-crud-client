import { UserCard } from "@/components/users/UserCard";
import { cacheLife, cacheTag } from "next/cache";
import Link from "next/link";
import React from "react";

async function getUsers() {
  "use cache";
  cacheLife("max");
  cacheTag("users");
  try {
    const response = await fetch("http://localhost:5000/users");

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    return response.json();
  } catch (error) {
    console.error("Users fetch error:", error);
    return [];
  }
}

const UsersPage = async () => {
  const users = await getUsers();
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Users</h1>
        <Link
          className="px-3 py-1 border border-foreground/60 rounded-md"
          href={"/users/create"}
        >
          Add user
        </Link>
      </div>

      {users.length === 0 ? (
        <p className="text-gray-500">No users found.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <UserCard key={user._id} user={user} />
          ))}
        </div>
      )}
    </main>
  );
};

export default UsersPage;
