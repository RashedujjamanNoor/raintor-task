import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <div>
        <p>DEVELOP.ME</p>
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/blog">Blog</Link>
      </div>
      <div>
        <button>Start Project</button>
      </div>
    </div>
  );
};
