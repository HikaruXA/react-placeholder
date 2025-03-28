import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import usePosts from "../hooks/usePosts";

const Comments = () => {
  const { postId } = useParams(); // ✅ Get postId from URL
  const { comments, fetchComments } = usePosts();

  useEffect(() => {
    if (postId) {
      fetchComments(postId); // ✅ Fetch comments only when postId exists
    }
  }, [postId]); // ✅ Only runs when postId changes

  return (
    <div>
      <h1>Comments</h1>
      {Array.isArray(comments) && comments.length > 0 ? ( // ✅ Prevents crashes
        comments.map((comment) => (
          <div
            key={comment.id}
            style={{
              marginBottom: "20px",
              padding: "10px",
              border: "1px solid #ccc",
            }}
          >
            <h2>{comment.name}</h2>
            <p>{comment.body}</p>
          </div>
        ))
      ) : (
        <p>Loading comments...</p>
      )}
    </div>
  );
};

export default Comments;
