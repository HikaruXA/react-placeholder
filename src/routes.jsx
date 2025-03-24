import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Posts from "./pages/Posts";

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
      ></Route>
    </Routes>
  );
};

export default AppRoutes;
