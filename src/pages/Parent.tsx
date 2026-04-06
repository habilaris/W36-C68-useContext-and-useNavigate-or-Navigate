import Child from "../components/Child";
import { useNavigate } from "react-router-dom";

const Parent = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };
  return (
    <div className="flex flex-col">
      <h1 className="text-7xl">Parent</h1>
      <Child />
      <button
        className="bg-blue-500 px-5 py-2 rounded-xl w-fit self-center mt-5 cursor-pointer hover:bg-blue-400 transition-colors ease-in duration-150 active:bg-blue-600"
        onClick={handleNavigate}
      >
        Go Back
      </button>
    </div>
  );
};

export default Parent;
