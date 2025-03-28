import React, { useEffect } from "react";
import usePosts from "../hooks/usePosts";
import { useNavigate } from "react-router-dom";

const Posts = () => {
  const { posts, fetchPosts } = usePosts();
  const navigate = useNavigate();

  useEffect(() => {
    fetchPosts(); // ✅ Now stable and won't cause infinite loops
  }, [fetchPosts]); // ✅ Stable dependency

  const handleViewComments = (postId) => {
    console.log("Navigating to comments for post:", postId);
    navigate(`/post/${postId}/comments`); // ✅ Pass postId correctly
  };

  const handleViewUser = (userId) => {
    console.log("Navigating to user:", userId);
    navigate(`/users/${userId}`); // ✅ Pass userId correctly
  };

  return (
    <div>
      <h1>Posts</h1>
      {Array.isArray(posts) && posts.length > 0 ? ( // ✅ Prevents crashes
        posts.map((post) => (
          <div
            key={post.id}
            style={{
              marginBottom: "20px",
              padding: "10px",
              border: "1px solid #ccc",
            }}
          >
            <h2 onClick={() => handleViewUser(post.userId)}>{post.userId}</h2>
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
