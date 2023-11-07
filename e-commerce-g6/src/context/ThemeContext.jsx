import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(null);

export function ThemeContextProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    let value = JSON.parse(localStorage.getItem("theme"));
    if (value !== undefined) {
      setIsDarkMode(value);
    }
  }, []);

  function handleTheme() {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", JSON.stringify(!isDarkMode));
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
