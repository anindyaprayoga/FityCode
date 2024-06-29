import Image from "next/image";
import React from "react";
import logo from "../public/assets/FITYCODE.png";

const NavbarLanding = () => {
  return (
    <div className="items-center flex justify-between bg- text-black px-20 bg-blue-50 rounded-b-full sticky top-0 z-10">
      <div className="flex items-center">
        <Image
          alt="logo"
          width={400}
          height={400}
          className="w-20 rounded-full"
          src={logo}
        />
        <h1 className="text-xl">FityCode</h1>
      </div>
      <a className="flex justify-center" href="/beranda">
        <button className="bg-blue-500 text-blue-50 p-4 rounded-3xl text-base">
          Mulai Belajar
        </button>
      </a>
    </div>
  );
};

export default NavbarLanding;
