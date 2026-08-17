import React from 'react'
import { MdLocalMovies } from "react-icons/md";
export default function Navbar() {
  return (
     <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <div className="flex items-center gap-3">
       <MdLocalMovies className="text-red-500" size={30} />
          <h1 className="text-2xl font-bold tracking-wide text-white">
            Movie Explorer
          </h1>
        </div>
        <nav>
          <ul className="hidden items-center gap-8 text-gray-300 md:flex">
            <li className="cursor-pointer transition hover:text-red-500">
              Home
            </li>

            <li className="cursor-pointer transition hover:text-red-500">
              Popular
            </li>

            <li className="cursor-pointer transition hover:text-red-500">
              Top Rated
            </li>
          </ul>
        </nav>
        </div>
    </header>
)
}
