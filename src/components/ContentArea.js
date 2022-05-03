import { useState } from "react";

function ContentArea() {
  return (
    <main className="flex-grow bg-slate-200 dark:bg-black">
      <div className="lg:flex md:flex">
        <div className="lg:w-1/2 md:w-1/2 lg:h-60 sm:h-48 h-40  bg-slate-300 dark:bg-slate-800 border-2 border-cyan-500 m-2">
          <ul>
            <li>
              <h1 className="text-black dark:text-white text-xl ml-6">
                Learning:
              </h1>
            </li>
            <li>
              <h3 className="text-black dark:text-white text-l ml-6">
                TailwindCSS
              </h3>
            </li>
            <li>
              <h3 className="text-black dark:text-white text-l ml-6">React</h3>
            </li>
            <li>
              <h3 className="text-black dark:text-white text-l ml-6">NextJS</h3>
            </li>
          </ul>
        </div>
        <div className="lg:w-1/2 md:w-1/2  lg:h-60 sm:h-48 h-40  bg-slate-300 dark:bg-slate-800 border-2 border-cyan-500 m-2">
          <ul>
            <li>
              <h1 className="text-black dark:text-white text-xl ml-6">
                Learning:
              </h1>
            </li>
            <li>
              <h3 className="text-black dark:text-white text-l ml-6">
                TailwindCSS
              </h3>
            </li>
            <li>
              <h3 className="text-black dark:text-white text-l ml-6">React</h3>
            </li>
            <li>
              <h3 className="text-black dark:text-white text-l ml-6">NextJS</h3>
            </li>
            <li>
              <h3 className="text-black dark:text-white text-l ml-6">React</h3>
            </li>
            <li>
              <h3 className="text-black dark:text-white text-l ml-6">NextJS</h3>
            </li>
          </ul>
        </div>
      </div>
      <h1 className="text-black dark:text-white text-xl ml-2">Portfolio</h1>
      <div className="lg:flex md:flex">
        <div className="lg:w-1/2 sm:w-screen lg:h-60 sm:h-48 h-40  bg-indigo-500 dark:bg-slate-800 border-2 border-cyan-500 m-2">
          <h1 className="text-black dark:text-white text-l ml-6">Card</h1>
        </div>
        <div className="lg:w-1/2 sm:w-screen lg:h-60 sm:h-48 h-40  bg-slate-300 dark:bg-slate-800 border-2 border-cyan-500 m-2">
          <p className="text-black dark:text-white text-l ml-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
          </p>
        </div>
      </div>
      <div className="lg:flex md:flex">
        <div className="lg:w-1/2 sm:w-screen lg:h-60 sm:h-48 h-40  bg-slate-300 dark:bg-slate-800 border-2 border-cyan-500 m-2">
          <h1 className="text-black dark:text-white text-l ml-6">Card3</h1>
        </div>
        <div className="lg:w-1/2 sm:w-screen lg:h-60 sm:h-48 h-40  bg-slate-300 dark:bg-slate-800 border-2 border-cyan-500 m-2">
          <h1 className="text-black dark:text-white text-l ml-6">Card4</h1>
        </div>
      </div>
    </main>
  );
}

export default ContentArea;
