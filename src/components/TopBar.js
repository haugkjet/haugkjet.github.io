import { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function TopBar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-slate-100 dark:bg-black p-6 w-screen">
      <div className="flex items-center flex-shrink-0 text-black dark:text-white mr-6">
        <span className="font-semibold text-3xl">Welcome</span>
      </div>
      <div className="flex">
        <div className="flex items-center flex-shrink-0 text-black dark:text-white mr-16">
          <span className="font-semibold text-base">About</span>
        </div>
        <div className="flex items-center flex-shrink-0  text-black dark:text-white mr-16">
          <a
            className="font-semibold text-base"
            href="https://www.w3schools.com"
          >
            Portfolio
          </a>
        </div>
        <div className="flex items-center flex-shrink-0  text-black dark:text-white mr-16">
          <span className="font-semibold text-base">Blog</span>
        </div>
        <div className="flex items-center flex-shrink-0  text-black dark:text-white mr-16">
          <span className="font-semibold text-base">Contact</span>
        </div>
        <div className="flex items-center flex-shrink-0  text-black dark:text-white mr-16">
          <MdDarkMode />
          <MdLightMode />
        </div>
      </div>
    </nav>
  );
}

export default TopBar;
