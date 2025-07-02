import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="absolute grid grid-cols-2 items-center justify-between w-full py-4 px-[5%]">
      <div>
        <p>DEVELOP.ME</p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/blog">Blog</Link>
        </div>
        <div className="flex justify-center items-center border border-b-2 pr-3 rounded-full py-1  ">
          <div className="border rounded-full p-3">
            <FaArrowRight />
          </div>
          <button>Start Project</button>
        </div>
      </div>
    </div>
  );
};
