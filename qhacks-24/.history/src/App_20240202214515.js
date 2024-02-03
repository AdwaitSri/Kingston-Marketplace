import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import "./output.css";
import Signup from "./pages/Signup";

function App() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    </div>
  );
}

export default App;
