import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import usePosts from "../hooks/usePosts";

const UserInfo = () => {
  const { id: userId } = useParams();
  const { user, fetchUser } = usePosts();

  useEffect(() => {
    if (userId) {
      fetchUser(userId);
    }
  }, [userId, fetchUser]);

  if (!user) return <p>Loading user information...</p>; // ✅ Handle loading state

  return (
    <div>
      <h1>User Details</h1>
      <div
        style={{
          marginBottom: "20px",
          padding: "10px",
          border: "1px solid #ccc",
        }}
      >
        <h2>{user.name}</h2>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Address:</strong> {user.address.street}, {user.address.suite},{" "}
          {user.address.city}, {user.address.zipcode}
        </p>
      </div>
    </div>
  );
};

export default UserInfo;
