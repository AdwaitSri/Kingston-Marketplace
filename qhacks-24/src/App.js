import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import "./output.css";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    </div>
  );
}

export default App;
