import { Routes, Route } from "react-router-dom";
import "./output.css";
import './App.css';
import Home from './pages/Home';
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/signup' element={<Signup></Signup>}></Route>
            <Route path='/signin' element={<Signin></Signin>}></Route>
        </Routes>
    </div>
  );
}

export default App;
