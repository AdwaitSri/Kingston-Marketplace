import { Routes, Route } from "react-router-dom";
import "./output.css";
import './App.css';
import Home from './pages/Home';
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Listing from "./pages/Listing";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/signup' element={<Signup></Signup>}></Route>
            <Route path='/signin' element={<Signin></Signin>}></Route>
            <Route path='/listings' element={<Listing></Listing>}></Route>
        </Routes>
    </div>
  );
}

export default App;
