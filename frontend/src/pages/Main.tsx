import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Signup from "./Signup";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default Main;
