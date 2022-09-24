import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import About from "./components/about/about";
import Contact from "./components/contact/conatct";
import { useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <div className="navBar">
        <span
          onClick={() => {
            navigate("/");
          }}
        >
          home
        </span>
        <span
          onClick={() => {
            navigate("/contact");
          }}
        >
          contact
        </span>
        <span
          onClick={() => {
            navigate("/about");
          }}
        >
          about
        </span>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
