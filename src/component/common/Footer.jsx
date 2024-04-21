import React from 'react'
import { COMPANY } from '../../lib/templateConstants';

const Footer = () => {
  return (
    <footer className="w-full hidden sm:flex justify-center lg:justify-between py-40 px-0 lg:px-40  shadow-md bg-info">
      <div className="grid w-full grid-cols-4 gap-10 ">
        <div className=" grid-rows-3 gap-10 grid">
          <div>
            <p className="font-black text-6xl text-white">{COMPANY}</p>
            <font className="w-full">slogan of the company</font>
          </div>
          <div>
            <p className=" text-white">
              Donec neque massa, faucibus nec lorem vitae feugiat pharetra sem.
              Nulla elementum eget lectus dapibus amatug mix finibus.
            </p>
          </div>
          <div className="flex gap-2">
            <button className="h-14 w-14 rounded-full focus:outline-none focus:shadow-outline bg-white">s</button>
          </div>
        </div>
        <div className="grid grid-rows-3 col-span-3">
          <div>asdasd</div>
          <div>sfdwfwdf</div>
          <div>sfgerge</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer