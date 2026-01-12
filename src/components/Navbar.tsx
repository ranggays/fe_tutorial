"use client";

import { useState } from "react";

export default function Navbar(){
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return(
        <nav className=" bg-slate-50 text-black p-6 ">
          <div className="flex flex-row justify-between items-center">
            
            <div>
              <h1 className="hidden sm:flex tracking-tight font-serif text-black text-lg">Area</h1>
            </div>
            <div className="hidden sm:flex flex-row gap-2 w-max text-sm font-light fixed top-7 left-1/2 -translate-x-1/2 z-10 rounded-2xl  backdrop-blur-2xl p-2 font-serif text-black tracking-tighter">
              <a className="hover:text-green-600" href="#">Benefits</a>
              <a href="#">Spesifications</a>
              <a href="#">How-to</a>
              <a href="#">Contact Us</a>
            </div>

            <div className="hidden sm:flex bg-[#8FA877] rounded-lg p-2">
              <button className="text-sm font-serif tracking-tighter hover:font-extralight cursor-pointer">Learn More</button>
              <span></span>
            </div>

            <div className="sm:hidden fixed w-full p-4 backdrop-blur-lg shadow-lg z-100 rounded-lg top-0 left-0">
              <div className="flex flex-row justify-between items-center">
                <h1 className="tracking-tight font-medium text-lg font-mono">Area</h1>
                <button onClick={() => setIsOpen(!isOpen)}>
                    <span className="cursor-pointer">{isOpen ? "X" : "☰"}</span>
                </button>
              </div>
            </div>

            { isOpen && (
                <div className="fixed top-20 right-6 z-40 w-11/12 rounded-2xl shadow-2xl border border-slate-100 p-4 flex flex-col gap-4 text center sm:hidden animate-in fade-in slide-in-from-top-5 backdrop-blur-2xl text-center">
                    <a href="#">Benefits</a>
                    <a href="#">Spesifications</a>
                    <a href="#">How-to</a>
                    <a href="#">Contact Us</a>
                    <button className="bg-green-500 rounded-lg">
                        Learn More
                    </button>
                </div>
            )}
            
          </div>
        </nav>
    )
}