import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <div style={{ display: "flex", gap: "1rem" }}>
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          Posts
        </Link>
      </div>

      <button
        onClick={toggleTheme}
        style={{
          padding: "0.5rem 1rem",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
        }}
      >
        {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </nav>
  );
};

export default Navbar;
