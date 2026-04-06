import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Parent from "./pages/Parent";


const App = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-neutral-800 text-white">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/parent" element={<Parent />} />
      </Routes>
    </div>
  );
};

export default App;
