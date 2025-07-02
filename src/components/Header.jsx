import React from "react";
import { IoCall } from "react-icons/io5";
import { TiSocialTwitter } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdHorizontalRule } from "react-icons/md";
import { Navbar } from "./Navbar";

const Header = () => {
  return (
    <div className='bg-[url("/header_bg.svg")] h-[100vh] w-[100vw] bg-no-repeat bg-cover '>
      <Navbar />
      <div className=" pt-52 font-bold text-7xl/loose font-grotesqueb pl-[5%]">
        <p>
          Trusted{" "}
          <span className="bg-black text-white px-4 rounded-lg">Partner</span>{" "}
          for <br /> Your Website{" "}
          <span className="bg-black text-white px-4 rounded-md">Develop.</span>
        </p>
      </div>
      <div className="grid grid-cols-4 pt-14 font-grotesque pl-[5%]">
        <div className="">
          <div>
            <p>@wiliamrey</p>
          </div>
          <div className="flex items-center gap-3 text-2xl pt-4">
            <MdHorizontalRule />
            <FaFacebook />
            <FaInstagram />
            <TiSocialTwitter />
          </div>
        </div>
        <div className="col-span-2 text-lg grid justify-center">
          <div>
            <p>
              Building the worlds best marketing websites for over a decade.{" "}
              <br />
              Your trusted partner for strategy, design, and dev.
            </p>
          </div>
          <div>
            <div className="border border-b-2 rounded-full inline-block py-1 mt-5">
              <div className="flex justify-center items-center pr-4">
                <div className="border border-b-2 p-3 rounded-full inline-block">
                  <IoCall />
                </div>
                <button>Schedule a Call</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
