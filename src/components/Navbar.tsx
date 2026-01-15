"use client";

import { useState } from "react";

export default function Navbar(){
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return(
        <nav className=" bg-slate-50 text-black p-6 ">
          <div className="flex flex-row justify-between items-center">
            
            <div>
              <h1 className="hidden sm:flex tracking-tighter font-serif text-black text-2xl">Area</h1>
            </div>
            <div className="hidden sm:flex flex-row gap-4 font-bold fixed top-7 left-1/2 -translate-x-1/2 z-10 rounded-2xl  backdrop-brightness-150 backdrop-blur-sm shadow-sm p-2 font-serif text-black tracking-tight font">
              <a className="hover:text-green-600 text-[75%]" href="#">Benefits</a>
              <a className="hover:text-green-600 text-[75%]" href="#">Spesifications</a>
              <a className="hover:text-green-600 text-[75%]" href="#">How-to</a>
              <a className="hover:text-green-600 text-[75%]" href="#">Contact Us</a>
            </div>

            <div className="hidden sm:flex bg-[#8FA877] rounded-lg p-2">
              <button className="text-sm font-serif text-white  tracking-tighter hover:font-extralight cursor-pointer">Learn More</button>
              <span></span>
            </div>

            {/* Nav Mobile */}
            <div className="sm:hidden fixed w-full p-4 backdrop-grayscale backdrop-blur-2xl z-100 rounded-lg top-0 left-0">
              <div className="flex flex-row justify-between items-center">
                <h1 className="tracking-tight font-medium text-lg font-mono">Area</h1>
                <button onClick={() => setIsOpen(!isOpen)}>
                    <span className="cursor-pointer">{isOpen ? "X" : "☰"}</span>
                </button>
              </div>
            </div>

            { isOpen && (
                <div className="fixed top-15 right-0 z-40 w-full rounded-b-2xl shadow-lg border  border-none p-4 flex flex-col gap-4 text center sm:hidden animate-in fade-in slide-in-from-top-5 backdrop-grayscale backdrop-blur-2xl text-center items-center font-mono tracking-tighter font-light">
                    <a href="#">Benefits</a>
                    <a href="#">Spesifications</a>
                    <a href="#">How-to</a>
                    <a href="#">Contact Us</a>
                    <button className="bg-[#8FA877] w-fit p-2 rounded-lg text-white cursor-pointer">
                        Learn More
                    </button>
                </div>
            )}
            
          </div>
        </nav>
    )
}