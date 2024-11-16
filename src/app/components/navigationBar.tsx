'use client'
import { useState } from "react";
import Image from "next/image";

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="flex justify-between items-center relative top-0 left-0 w-full bg-white shadow-md z-10 h-fit mx-auto mb-5">
            {/* Logo */}
            <a href="https://amandela-iut8.vercel.app/" className="h-10">
                <Image
                    src={'/amandela.svg'}
                    alt="amandela Logo"
                    loading="eager"
                    title="amandela logo"
                    className="px-2"
                    width={68}
                    height={68}
                />
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex justify-around items-center text-sm space-x-6 mr-2">
                <a href="https://amandela-iut8.vercel.app/about" >About</a>
                <a href="https://amandela-iut8.vercel.app/support" >Support</a>
                <a href="https://amandela-iut8.vercel.app/updates" >Updates</a>
                <a href="https://amandela-iut8.vercel.app/rules">Rules</a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
                className="block md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle navigation menu"
            >
               <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
      </svg>
            </button>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-9 left-0 w-full bg-white shadow-lg flex flex-col items-center space-y-4 py-4 md:hidden">
                    <a href="https://amandela-iut8.vercel.app/about" >About</a>
                    <a href="https://amandela-iut8.vercel.app/support" >Support</a>
                    <a href="https://amandela-iut8.vercel.app/updates" >Updates</a>
                    <a href="https://amandela-iut8.vercel.app/rules">Rules</a>
                </div>
            )}
        </nav>
    );
}
