function ContentArea() {
  return (
    <main className="flex-grow bg-slate-200 dark:bg-black">
      <div className="lg:flex md:flex">
        <div className="lg:w-1/2 md:w-1/2 lg:h-60 sm:h-48 h-40   bg-white dark:bg-slate-800 shadow shadow-cyan-700 dark:shadow-cyan-300 border border-cyan-500 rounded-md m-2">
          <ul>
            <li>
              <h1 className="text-black dark:text-white text-xl ml-6 font-bold">
                About me:
              </h1>
              <h3 className="text-black dark:text-white text-l ml-6">
                Exploring Web development, 3D and Finance
              </h3>
            </li>
          </ul>
        </div>
        <div className="lg:w-1/2 md:w-1/2  lg:h-60 sm:h-48 h-40   bg-white dark:bg-slate-800  shadow shadow-cyan-700 dark:shadow-cyan-300 border border-cyan-500 rounded-md m-2">
          <ul>
            <li>
              <h1 className="text-black dark:text-white text-xl ml-6 font-bold">
                Learning:
              </h1>
            </li>
            <li>
              <h3 className="text-black dark:text-white text-l ml-6">
                Three.js
              </h3>
            </li>
            <li>
              <h3 className="text-black dark:text-white text-l ml-6">Nextjs</h3>
            </li>
            <li>
              <h3 className="text-black dark:text-white text-l ml-6">
                Rust/Webassembly
              </h3>
            </li>
            <li>
              <h3 className="text-black dark:text-white text-l ml-6">
                Blender
              </h3>
            </li>
          </ul>
        </div>
      </div>
      <h1 className="text-black dark:text-white text-xl ml-6">Portfolio</h1>
      <div className="lg:flex md:flex">
        <div className="flex-row lg:w-1/2 sm:w-screen lg:h-60 sm:h-48 h-40  hover:border-green-500 bg-white dark:bg-slate-800 shadow shadow-cyan-700 dark:shadow-cyan-300 border border-cyan-500 rounded-md m-2">
          <a href="http://utbytteinfo.com">
            <h3 className="text-black dark:text-white text-l ml-6 font-bold">
              Utbytteinfo.com
            </h3>
            <h3 className="text-black dark:text-white text-l ml-6">
              Lists dividends
            </h3>
            <h3 className="text-black dark:text-white text-l ml-6">
              LAMP stack
            </h3>
            <h3 className="text-black dark:text-white text-l ml-6">
              From 2012
            </h3>
          </a>
        </div>

        <div className="flex-row lg:w-1/2 sm:w-screen lg:h-60 sm:h-48 h-40  hover:border-green-500 bg-white dark:bg-slate-800 shadow shadow-cyan-700 dark:shadow-cyan-300 border border-cyan-500 rounded-md m-2">
          <a href="https://haugkjet.github.io/portfolio-viewer">
            <h3 className="text-black dark:text-white text-l ml-6 font-bold">
              Three.js test
            </h3>
            <h3 className="text-black dark:text-white text-l ml-6">
              (Under construction)
            </h3>
          </a>
        </div>
      </div>
      <div className="lg:flex md:flex">
        <div className="flex-row lg:w-1/2 sm:w-screen lg:h-60 sm:h-48 h-40  hover:border-green-500 bg-white dark:bg-slate-800 shadow shadow-cyan-700 dark:shadow-cyan-300 border border-cyan-500 rounded-md m-2">
          <a href="https://haugkjet.github.io/financial-dashboard/public">
            <h3 className="text-black dark:text-white text-l ml-6 font-bold">
              Dashboard
            </h3>
            <h3 className="text-black dark:text-white text-l ml-6">
              (Under construction)
            </h3>
          </a>
        </div>
        <div className="flex-row lg:w-1/2 sm:w-screen lg:h-60 sm:h-48 h-40  hover:border-green-500 bg-white dark:bg-slate-800 shadow shadow-cyan-700 dark:shadow-cyan-300 border border-cyan-500 rounded-md m-2">
          <a href="https://personal-portfolio-haugkjet.vercel.app/">
            <h3 className="text-black dark:text-white text-l ml-6 font-bold">
              Personal Finance portfolio
            </h3>
            <h3 className="text-black dark:text-white text-l ml-6">
              (Under construction)
            </h3>
          </a>
        </div>
      </div>
    </main>
  );
}

export default ContentArea;
