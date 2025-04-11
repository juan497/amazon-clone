import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Balls from "./Balls";
import Home from "./Home";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
            <Route path="/" element={<Home text="home page" />} />
            <Route path="/login" element={<Balls text="login" />} />
            <Route path="/checkout" element={<Balls text="checkout" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
