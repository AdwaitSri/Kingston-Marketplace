
import './App.css';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import {Route, Routes} from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
      <Route path='/Signup' element={<Signup></Signup>}></Route>
      <Route path='/Signin' element={<Signin></Signin>}></Route>
      
      </Routes>
    </div>
  );
}

export default App;
