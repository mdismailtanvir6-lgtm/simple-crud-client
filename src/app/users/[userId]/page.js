import React from "react";

const UserDetailsPage = async ({ params }) => {
  const { userId } = await params;

  const response = await fetch(`http://localhost:5000/users/${userId}`);
  const user = await response.json();

  return (
    <div>
      <h1>User Details : {userId}</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserDetailsPage;
