import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./component/home/home";
import Contact from "./component/contacts/contact";
import About from "./component/about/about";
function App() {
  const [page, setPage] = useState("home");
  const navigate = useNavigate();
  return (
    <div className="App">
      <div className="navBar">
        <span
          onClick={() => {
            navigate("/");
          }}
        >
          HOMEaosdflkasdflsd
        </span>
        <span
          onClick={() => {
            navigate("/about");
          }}
        >
          ABOUTlksdbdhfbjsNklabsdfalkjsd
        </span>
        <span
          onClick={() => {
            navigate("/contact");
          }}
        >
          CONTACTSadlsfnadlsfnad
        </span>
      </div>
      <h1>Website</h1>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
