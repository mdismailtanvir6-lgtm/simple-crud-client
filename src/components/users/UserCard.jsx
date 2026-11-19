"use client";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "../ui/button";
import { updateUsersCache } from "@/app/users/create/updateUsersCache";
import { UserDialog } from "./UserDialog";

export function UserCard({ user }) {
  // === hanlde delete user ===
  const handleDelete = async (userId) => {
    try {
      const response = await fetch(`http://localhost:5000/users/${userId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete user");
      }
      // cache update
      await updateUsersCache();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <Card className="mx-auto w-full max-w-sm pt-0 py-2 px-0">
      <CardHeader>
        <CardTitle>{user.name}</CardTitle>
        <CardDescription>{user.email}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-center">
        <Button>
          <Link href={`/users/${user._id}`}>View Details</Link>
        </Button>

        <UserDialog user={user} className="ml-2 cursor-pointer">
          Edit
        </UserDialog>

        <Button
          onClick={() => handleDelete(user._id)}
          variant="destructive"
          className="ml-2 cursor-pointer"
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}
