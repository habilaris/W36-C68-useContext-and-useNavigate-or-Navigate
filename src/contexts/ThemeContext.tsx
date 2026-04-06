import { createContext, useState } from "react";

interface ThemeContextType {
  darkMode: boolean;
  darkTheme: boolean;
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined); //default val parameters

export default ThemeContext;

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const darkMode = true;
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <ThemeContext.Provider value={{ darkMode, darkTheme, setDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
