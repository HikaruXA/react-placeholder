export const getSavedTheme = () => {
  return localStorage.getItem("theme") || "light";
};

export const saveTheme = (theme) => {
  localStorage.setItem("theme", theme);
};

export const applyTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
};
