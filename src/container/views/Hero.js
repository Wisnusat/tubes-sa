"use client";
import React from "react";
import Header from "../components/Header";
import Image from "next/image";

function Hero() {
  return (
    <div className="bg-white dark:bg-slate-900 h-screen">
      <Header />
      <div className="w-full md:h-screen flex items-center justify-center">
        <div className="flex md:flex-row flex-col-reverse justify-between items-center md:w-4/5 md:mt-0 mt-10">
          <div className="flex flex-col gap-y-2 md:p-0 p-5">
            <div className="font-extrabold md:text-5xl text-3xl text-[#1E1E1E] dark:text-white md:!leading-snug !leading-normal">
              Your <span className="bg-[#8ECEF5] dark:bg-[#3174A2] p-2 rounded-sm">Budgeting</span> Assistance
            </div>
            <div className="font-medium text-xl text-[#737373] dark:text-white">
              Make daily money budgeting is easy <br /> Try it with us
            </div>
          </div>
          <Image src="/hero.png" width={500} height={500} alt="babi" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
