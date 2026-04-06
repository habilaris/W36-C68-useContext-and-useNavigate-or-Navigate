import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Parent from "./pages/Parent";
import ThemeContext from "./contexts/ThemeContext";
import { useContext } from "react";

const App = () => {
  const { darkTheme } = useContext(ThemeContext)!;

  return (
    <div
      className={`${darkTheme ? ` bg-neutral-800 text-white` : `bg-neutral-200 text-neutral-900`} transition-colors duration-300 ease-out flex items-center justify-center h-screen`}
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/parent" element={<Parent />} />
      </Routes>
    </div>
  );
};

export default App;
