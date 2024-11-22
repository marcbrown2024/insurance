"use client";

// react/nextjs components
import React from "react";
import Image from "next/image";
import Link from "next/link";

// custom hooks
import { useMediaQuery } from "@/hooks/UseMediaQuery";

const HeadSection = () => {
  const isSmallMobile = useMediaQuery("(max-width: 1024px)");

  return (
    <div className="h-72 flex lg:hidden flex-col xl:flex-row items-center justify-between mx-auto mt-28">
      <Image
        src="/lglogo.jpg"
        alt="logo"
        height={isSmallMobile ? "300" : "220"}
        width={isSmallMobile ? "300" : "220"}
      />
      {!isSmallMobile && (
        <p className="text-2xl xl:text-4xl text-[#f15e63] font-lulo">
          919-341-0606
        </p>
      )}
      <Link
        href="https://bit.ly/AutoQuoteForYou"
        target="blank"
        rel="noopener noreferrer"
        className="h-16 xl:h-[50px] w-[17rem] xl:w-64 flex items-center justify-center text-white text-xl xl:text-base xl:font-bold font-sans tracking-[0.2rem] uppercase bg-[#ff3941] rounded-full"
      >
        <span>Request a Quote</span>
      </Link>
      {isSmallMobile && (
        <p className="text-2xl xl:text-4xl text-[#f15e63] font-lulo">
          919-341-0606
        </p>
      )}
    </div>
  );
};

export default HeadSection;