import logo from "./logo.svg";
import "./App.css";
import Home from "./home.js/home";
import About from "./about.js/about";
import { useState } from "react";
import Contact from "./contact/contact";

function App() {
  const [page, setPage] = useState("home");
  return (
    <div className="App">
      <h1>Website</h1>
      {page == "home" && <Home setPage={setPage} />}
      {page == "about" && <About setPage={setPage} />}
      {page == "contact" && <Contact setPage={setPage} />}
    </div>
  );
}

export default App;
