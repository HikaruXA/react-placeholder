import { useState, useCallback } from "react";
import { getPosts, getComments, getUser } from "../api/posts";

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState(null); // State to store the user data (object or null)

  const fetchPosts = useCallback(async () => {
    try {
      const fetchedPosts = await getPosts();
      setPosts(fetchedPosts || []); // ✅ Ensures posts is always an array
    } catch (error) {
      console.error("Failed to fetch posts", error);
      setPosts([]); // ✅ Prevents undefined state
    }
  }, []);

  const fetchComments = useCallback(async (id) => {
    try {
      const fetchedComments = await getComments(id);
      setComments(fetchedComments || []); // ✅ Ensures comments is always an array
      console.log("Fetched Comments:", fetchedComments);
    } catch (error) {
      console.error("Failed to fetch comments", error);
      setComments([]); // ✅ Prevents undefined state
    }
  }, []);

  const fetchUser = useCallback(async (userId) => {
    try {
      const fetchedUser = await getUser(userId);
      setUser(fetchedUser || null); // ✅ Ensures user is always an object or null
      console.log("Fetched User:", fetchedUser);
    } catch (error) {
      console.error("Failed to fetch users", error);
      setUser(null); // ✅ Ensures user is reset to null on error
    }
  }, []);

  return { posts, comments, user, fetchPosts, fetchComments, fetchUser };
};

export default usePosts;
