
import './App.css';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import {Route, Routes} from "react-router-dom";
import Creation from "./pages/Creation";
import Listings from './pages/Listings';

function App() {
  return (
    <div>
        <Routes>
            
            <Route path="/signup" element={<Signup />} />
            <Route path="/creation" element={<Creation />} />
            <Route path="/listings" element={<Listings/>}></Route>
        </Routes>
    </div>
  );
}


export default App;
