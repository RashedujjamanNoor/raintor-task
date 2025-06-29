import React from "react";

const Footer = () => {
  return (
    <div className="bg-black rounded-4xl text-white px-20 pt-14 pb-16 grid grid-cols-3">
      <div className="flex flex-col justify-between">
        <div className="text-[#C5FF41] text-xl">
          <p>DEVELOP.ME</p>
        </div>
        <div>
          <p>BESNIK</p>
        </div>
      </div>
      <div className="col-span-2">
        <div className="text-4xl mb-16">
          <p>As you can</p>
        </div>
        <div className="grid grid-cols-3 justify-center text-xs">
          <div>
            <div className="mb-6">
              <p className="text-gray-400 mb-3">Say hello</p>
              <div className="flex flex-col gap-2">
                <p>HELLO@DEVLOP.ME.COM</p>
                <p>MAHBUBUL@ME.COM</p>
              </div>
            </div>
            <div>
              <p className="text-gray-400 mb-3">Call</p>
              <div className="flex flex-col gap-2">
                <p>+784549 4981 00</p>
                <p>+8845 0100 211</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-gray-400 mb-3">Menu</p>
            <div className="flex flex-col gap-2">
              <p>HOME</p>
              <p>ABOUT</p>
              <p>PORTFOLIO</p>
              <p>BLOG</p>
            </div>
          </div>
          <div>
            <p className="text-gray-400 mb-3">Social</p>
            <div className="flex flex-col gap-2">
              <p>TWITTER</p>
              <p>INSTAGRAM</p>
              <p>FACEBOOK</p>
              <p>BEHANCE</p>
              <p>DRIBBBLE</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center  pt-20 text-gray-400 text-xs">
          <p>© devlop.me 2022</p>
          <p>PRIVACY - TERMS</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
