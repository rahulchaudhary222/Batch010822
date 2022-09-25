import React from "react";

const About = ({ setPage }) => {
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

export default About;
