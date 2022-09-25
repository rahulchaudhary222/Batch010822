import React from "react";

const Home = ({ setPage }) => {
  return (
    <div>
      <h1>This is Home Page</h1>
      <button
        onClick={() => {
          setPage("about");
        }}
      >
        About
      </button>
      <button
        onClick={() => {
          setPage("contact");
        }}
      >
        Contact
      </button>
    </div>
  );
};

export default Home;
