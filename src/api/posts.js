import axiosInstance from "./axiosInstance";

export const getPosts = async () => {
  try {
    const response = await axiosInstance.get("/posts");
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
};

export const getComments = async (postId) => {
  try {
    const response = await axiosInstance.get(`/posts/${postId}/comments`);
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
};

export const getUser = async (userId) => {
  try {
    const response = await axiosInstance.get(`/users/${userId}`); // Now correctly fetching one user
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
};
