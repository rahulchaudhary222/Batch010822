import React from "react";

const About = () => {
  return (
    <div>
      <h1>This is Home Page</h1>
      <button
        onClick={() => {
          setPage("home");
        }}
      >
        Home
      </button>
    </div>
  );
};

export default About;
