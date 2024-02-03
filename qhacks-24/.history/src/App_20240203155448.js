import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import "./output.css";
import Signup from "./pages/Signup";
import Creation from "./pages/Creation";
import Listings from "./pages/Listings";
import Item from "./pages/Item";

function App() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/creation" element={<Creation />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/item" element={<Item />} />
        </Routes>
    </div>
  );
}

export default App;
