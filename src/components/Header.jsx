import React from "react";
import { IoCall } from "react-icons/io5";

const Header = () => {
  return (
    <div className='bg-[url("/header_bg.svg")] h-[100vh] w-[100wh] bg-no-repeat bg-cover'>
      <div className="pl-14 pt-52 font-bold text-7xl/loose font-grotesqueb ">
        <p>
          Trusted{" "}
          <span className="bg-black text-white px-4 rounded-lg">Partner</span>{" "}
          for <br /> Your Website{" "}
          <span className="bg-black text-white px-4 rounded-md">Develop.</span>
        </p>
      </div>
      <div className="grid grid-cols-4 pt-14 font-grotesque">
        <div>
          <p>link</p>
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
            <div className="border border-b-2 rounded-full flex items-center py-2">
              <div className="border border-b-2 p-5 rounded-full">
                <IoCall />
              </div>
              <button>Schedule a Call</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
