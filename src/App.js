import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Balls from "./Balls";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
            <Route path="/" element={<Balls text="ok" />} />
            <Route path="/about" element={<Balls text="what" />} />
            <Route path="/contact" element={<Balls text="damn" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
