import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import "./output.css";

function App() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;
