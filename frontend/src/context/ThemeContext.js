import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(
    localStorage.getItem("darkMode") === "true"
  );

 useEffect(() => {
  document.documentElement.setAttribute(
    "data-theme",
    dark ? "dark" : "light"
  );
  localStorage.setItem("darkMode", dark);
}, [dark]);


  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
}
