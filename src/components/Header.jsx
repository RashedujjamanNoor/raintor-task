import React from "react";

const Header = () => {
  return (
    <div className='bg-[url("/header_bg.svg")] h-[100vh] w-[100wh] bg-no-repeat bg-cover'>
      <div className="pl-14 pt-52 font-bold text-7xl">
        <p>
          Trusted <span>Partner</span> for <br /> Your Website{" "}
          <span>Develop.</span>
        </p>
      </div>
      <div className="grid grid-cols-2">
        <div>
          <p>link</p>
        </div>
        <div>
          <div>
            <p>
              Building the worlds best marketing websites for over a decade.
              Your trusted partner for strategy, design, and dev.
            </p>
          </div>
          <div>
            <button>Schedule a Call</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
