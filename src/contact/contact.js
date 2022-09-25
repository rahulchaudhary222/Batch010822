import React from "react";

const Contact = ({ setPage }) => {
  return (
    <div>
      <h1>This is Contact Page</h1>
      <button
        onClick={() => {
          setPage("home");
        }}
      >
        Home
      </button>
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

export default Contact;
