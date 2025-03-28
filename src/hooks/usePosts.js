import { useState, useCallback } from "react";
import { getPosts, getComments, getUser } from "../api/posts";

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState(null); // State to store the user data (object or null)
  const [users, setUsers] = useState({}); // Store users in an object for quick access

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

  const fetchUsers = useCallback(
    async (userIds) => {
      const uniqueUserIds = [...new Set(userIds)]; // Remove duplicates
      const newUsers = { ...users }; // Copy existing users to avoid refetching

      const userFetchPromises = uniqueUserIds
        .filter((id) => !users[id]) // Fetch only if not already cached
        .map(async (id) => {
          try {
            const user = await getUser(id);
            newUsers[id] = user || { name: "Unknown User" };
          } catch (error) {
            console.error(`Failed to fetch user ${id}`, error);
            newUsers[id] = { name: "Unknown User" };
          }
        });

      await Promise.all(userFetchPromises); // Fetch all users concurrently
      setUsers(newUsers); // Update state with new users
    },
    [users]
  );

  return {
    posts,
    comments,
    user,
    users,
    fetchPosts,
    fetchComments,
    fetchUser,
    fetchUsers,
  };
};

export default usePosts;
