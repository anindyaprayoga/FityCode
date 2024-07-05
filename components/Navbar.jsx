import Image from "next/image";
import React from "react";
import logo from "../public/assets/FITYCODE.png";
import avatar from "../public/assets/avatar.png";

const Navbar = () => {
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
      <div className="flex justify-between">
        <a
          href="/beranda"
          className="px-8 hover:text-blue-600 text-lg font-semibold"
        >
          Beranda
        </a>
        <a
          href="/kelas"
          className="px-8 hover:text-blue-600 text-lg font-semibold"
        >
          Kelas
        </a>
        <a
          href="/codeeditor"
          className="px-8 hover:text-blue-600 text-lg font-semibold"
        >
          Online Compiler
        </a>
        <a href="#" className="px-8 hover:text-blue-600 text-lg font-semibold">
          Virtual Pet
        </a>
      </div>
      <Image
        width={400}
        height={400}
        className="w-16 rounded-full"
        alt="avatar"
        src={avatar}
      />
    </div>
  );
};

export default Navbar;
