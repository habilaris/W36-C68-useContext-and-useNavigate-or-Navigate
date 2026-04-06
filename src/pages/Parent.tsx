import Child from "../components/Child";
import { useNavigate } from "react-router-dom";
import ThemeContext from "../contexts/ThemeContext";
import { useContext } from "react";

const Parent = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };

  const { darkMode, darkTheme, setDarkTheme } = useContext(ThemeContext)!;

  return (
    <div className="flex flex-col items-center ">
      <h1 className="text-7xl">Parent</h1>
      <Child />
      <button
        className="bg-blue-500 text-white px-5 py-2 rounded-xl w-fit self-center mt-5 cursor-pointer hover:bg-blue-400 transition-colors ease-in duration-150 active:bg-blue-600"
        onClick={handleNavigate}
      >
        Go Back
      </button>
      <button
        className="bg-blue-500 text-white px-5 py-2 rounded-xl w-fit self-center mt-5 cursor-pointer hover:bg-blue-400 transition-colors ease-in duration-150 active:bg-blue-600"
        onClick={() => {
          if (darkTheme) {
            setDarkTheme(false);
          } else {
            setDarkTheme(true);
          }
        }}
      >
        Toggle Theme
      </button>
      <h2>{darkMode && "I got the dark mode variable from context api"}</h2>
    </div>
  );
};

export default Parent;
