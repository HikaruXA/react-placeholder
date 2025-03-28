import React, { useEffect } from "react";
import usePosts from "../hooks/usePosts";
import { useNavigate } from "react-router-dom";

const Posts = () => {
  const { posts, users, fetchPosts, fetchUsers } = usePosts();
  const navigate = useNavigate();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  useEffect(() => {
    if (posts.length > 0) {
      const userIds = posts.map((post) => post.userId);
      fetchUsers(userIds); // Fetch all user data in one call
    }
  }, [posts, fetchUsers]);

  const handleViewComments = (postId) => {
    navigate(`/post/${postId}/comments`);
  };

  const handleViewUser = (userId) => {
    navigate(`/users/${userId}`);
  };

  return (
    <div>
      <h1>Posts</h1>
      {Array.isArray(posts) && posts.length > 0 ? (
        posts.map((post) => (
          <div
            key={post.id}
            style={{
              marginBottom: "20px",
              padding: "10px",
              border: "1px solid #ccc",
            }}
          >
            <h2 onClick={() => handleViewUser(post.userId)}>
              {users[post.userId]?.name || "Loading..."}
            </h2>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button onClick={() => handleViewComments(post.id)}>
              View Comments
            </button>
          </div>
        ))
      ) : (
        <p>Loading posts...</p>
      )}
    </div>
  );
};

export default Posts;
