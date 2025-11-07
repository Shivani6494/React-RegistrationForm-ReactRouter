import {Route, Link, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import './App.css';


function App() {
  return (
    <div className="App">
      <nav style={{padding : '10px' , background : "pink"}}>
        <Link to="/" style={{marginRight : '10px'}}>Home</Link>
        <Link to="/register">Register</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
