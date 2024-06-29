import React from "react";
import Image from "next/image";
import logo from "@/assets/FITYCODE.png";
import Social from "./Social";

const Footer = () => {
  return (
    <div className="bg-sky-950">
      <div className="flex px-5 pt-5 pb-0">
        <Image className="w-32" src={logo} alt="logo" />
        <h1 className="text-blue-50 pt-8 text-2xl font-bold">FityCode</h1>
      </div>
      <div className="px-5">
        <Social />
      </div>
      <div className="bg-black text-center">
        <p class="cp-text">
          © Copyright 2015 Company Name. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
