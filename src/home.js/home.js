import React from "react";

const Home = () => {
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
    </div>
  );
};

export default Home;
