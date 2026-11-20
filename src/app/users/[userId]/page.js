import { apiUrl } from "@/lib/api";
import React, { Suspense } from "react";

const UserDetails = async ({ params }) => {
  const { userId } = await params;

  const response = await fetch(apiUrl(`/users/${userId}`));
  const user = await response.json();

  return (
    <div>
      <h1>User Details : {userId}</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

const UserDetailsPage = ({ params }) => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-2">
      <Suspense fallback={<p>Loading user details...</p>}>
        <UserDetails params={params} />
      </Suspense>
    </section>
  );
};

export default UserDetailsPage;
