
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Balls from "./Balls";
import Home from "./Home";
import Checkout from "./Checkout";

function App() {
  return (
    <div>

      <Router>
      
      <div className="app">
        <Routes>
            <Route path="/" element={<Home text="home page" />} />
            <Route path="/login" element={<Balls text="login" />} />
            <Route path="/checkout" element={<Checkout text="checkout" />} />
        </Routes>
      </div>
    </Router>


      
    </div>
  );
}

export default App;
