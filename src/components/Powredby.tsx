"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";

export function Powredby() {
  return (
    <div className="h-fit my-7 w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h2 className="text-3xl font-thin bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#999999] text-transparent">powered by</h2>
      <h1 className="md:text-7xl text-7xl lg:text-9xl font-thin text-center bg-clip-text bg-gradient-to-r from-[#25E4B4] to-[#885AF4] text-transparent relative z-20">
      SolaNa
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
