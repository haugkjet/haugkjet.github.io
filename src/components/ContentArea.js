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
        <div className="lg:w-1/2 sm:w-screen lg:h-60 sm:h-48 h-40  bg-white dark:bg-slate-800 shadow shadow-cyan-700 dark:shadow-cyan-300 border border-cyan-500 rounded-md m-2">
          <div class="skill">
            <a
              className="text-black dark:text-white text-l ml-6 font-bold"
              href="http://www.utbytteinfo.com"
            >
              Utbytteinfo.com
            </a>
          </div>
          <ul>
            <li>
              <h3 className="text-black dark:text-white text-l ml-6">
                Lists dividends
              </h3>
            </li>
            <li>
              <h3 className="text-black dark:text-white text-l ml-6">
                LAMP stack
              </h3>
            </li>
            <li>
              <h3 className="text-black dark:text-white text-l ml-6">
                From 2012
              </h3>
            </li>
          </ul>
        </div>
        <div className="lg:w-1/2 sm:w-screen lg:h-60 sm:h-48 h-40   bg-white dark:bg-slate-800 shadow shadow-cyan-700 dark:shadow-cyan-300 border border-cyan-500 rounded-md m-2">
          <div class="skill">
            <a
              className="text-black dark:text-white text-l ml-6 font-bold"
              href="https://haugkjet.github.io/portfolio-viewer"
            >
              Three.js test
            </a>
          </div>
          <ul>
            <li>
              <h3 className="text-black dark:text-white text-l ml-6">
                (Under construction)
              </h3>
            </li>
          </ul>{" "}
        </div>
      </div>
      <div className="lg:flex md:flex">
        <div className="lg:w-1/2 sm:w-screen lg:h-60 sm:h-48 h-40   bg-white dark:bg-slate-800 shadow shadow-cyan-700 dark:shadow-cyan-300 border border-cyan-500 rounded-md m-2">
          <div class="skill">
            <a
              className="text-black dark:text-white text-l ml-6 font-bold"
              href="https://haugkjet.github.io/financial-dashboard/public"
            >
              Dashboard
            </a>
          </div>
          <ul>
            <li>
              <h3 className="text-black dark:text-white text-l ml-6">
                (Under construction)
              </h3>
            </li>
          </ul>{" "}
        </div>
        <div className="lg:w-1/2 sm:w-screen lg:h-60 sm:h-48 h-40   bg-white dark:bg-slate-800 shadow shadow-cyan-700 dark:shadow-cyan-300 border border-cyan-500 rounded-md m-2">
          <div class="skill">
            <a
              className="text-black dark:text-white text-l ml-6 font-bold"
              href="https://personal-portfolio-haugkjet.vercel.app/"
            >
              Personal financial portfolio
            </a>
          </div>
          <ul>
            <li>
              <h3 className="text-black dark:text-white text-l ml-6">
                (Under Construction)
              </h3>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default ContentArea;
