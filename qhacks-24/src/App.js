import { Routes, Route } from "react-router-dom";
import "./output.css";
import './App.css';
import Home from './pages/Home';
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Listing from "./pages/Listing";
import Item from "./pages/Item";
import About from './pages/About';
import Context from './components/Context';
import { useState } from 'react';

function App() {

  const [data, setData] = useState([
    {
      condition: "Like New",
      description: "Test description",
      postalcode: "K7L 1E1",
      price: "8000",
      title: "Test title",
      category: "Unchecked"
    },
  ]);

  return (
    <div className="App">
      <Context.Provider value={{ data, setData }}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/signup' element={<Signup></Signup>}></Route>
            <Route path='/signin' element={<Signin></Signin>}></Route>
            <Route path='/listings' element={<Listing></Listing>}></Route>
            <Route path='/item' element={<Item></Item>}></Route>
            <Route path='/about' element={<About></About>}></Route>
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
