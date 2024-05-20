"use client";
import React from "react";
import Header from "../components/Header";
import Image from "next/image";

function Hero() {
  return (
    <div className="bg-white dark:bg-slate-900 h-screen">
      <Header />
      <div className="flex w-full h-screen justify-center items-center">
        <div className="w-full flex justify-center flex-col items-center">
          <Image src="/dummy.png" width={200} height={200} alt="wlee" />
          <div className="font-bold text-2xl text-[#1E1E1E] dark:text-white mt-4 text-center">
            Mohon maaf webnya masih dibikin, harap bersabar ini ujian...
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
