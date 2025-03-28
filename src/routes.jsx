import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Posts from "./pages/Posts";
import Comments from "./pages/Comments";
import Users from "./pages/UserInfo";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <Posts />
          </MainLayout>
        }
      />
      <Route
        path="/post/:postId/comments"
        element={
          <MainLayout>
            <Comments />
          </MainLayout>
        }
      />
      <Route
        path="/users/:id"
        element={
          <MainLayout>
            <Users />
          </MainLayout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
