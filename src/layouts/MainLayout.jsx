import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTheme } from "../context/ThemeContext";

const MainLayout = ({ children }) => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        background: theme === "light" ? "#f4f4f4" : "#333",
        color: theme === "light" ? "#333" : "#f4f4f4",
        transition: "all 0.5s linear",
        minHeight: "100vh", // Ensure it covers the entire screen
      }}
    >
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
