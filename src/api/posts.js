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
