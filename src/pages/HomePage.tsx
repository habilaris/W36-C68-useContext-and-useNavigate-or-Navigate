import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/parent");
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-7xl">Hello, World! This is the Home Page.</h1>
      <button
        className="bg-blue-500 text-white px-5 py-2 rounded-xl w-fit self-center mt-5 cursor-pointer hover:bg-blue-400 transition-colors ease-in duration-150 active:bg-blue-600"
        onClick={handleNavigate}
      >
        Go to Parent
      </button>
    </div>
  );
};

export default HomePage;
