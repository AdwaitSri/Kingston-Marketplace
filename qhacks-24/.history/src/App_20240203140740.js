import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import "./output.css";
import Signup from "./pages/Signup";
import Creation from "./pages/Creation";
import Listings from "./pages/Listings";

function App() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/creation" element={<Creation />} />
            <Route path="/listings" element={<Listings />} />
        </Routes>
    </div>
  );
}

export default App;
