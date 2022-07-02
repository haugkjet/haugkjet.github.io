function ContentArea() {
  return (
    <main className="flex-grow bg-slate-200 dark:bg-black opacity-90">
      <div className="lg:flex md:flex">
        <div className="lg:w-1/2 md:w-1/2 lg:h-60 sm:h-48 h-40   bg-white dark:bg-slate-800 shadow shadow-cyan-700 dark:shadow-cyan-300 border border-cyan-500 rounded-md m-2">
          <ul>
            <li>
              <h1 className="text-black dark:text-white text-xl ml-6 font-bold">
                About me:
              </h1>
              <h3 className="text-black dark:text-white text-l ml-6">
                Passionate about developing and bringing 3D content to the web
                using free and open source software.
              </h3>
            </li>
          </ul>
        </div>
        <div className="lg:w-1/2 md:w-1/2  lg:h-60 sm:h-48 h-40  flex bg-white dark:bg-slate-800  shadow shadow-cyan-700 dark:shadow-cyan-300 border border-cyan-500 rounded-md m-2">
          <img
            className="flex-item  object-contain w-1/4 m-5"
            src="./blender.png"
            alt="Test1"
          ></img>

          <img
            className="flex-item  object-contain w-1/4 m-5"
            src="./Three.js.png"
            alt="Test1"
          ></img>
          <img
            className="flex-item  object-contain w-1/4 m-5"
            src="./Godot_icon.svg.png"
            alt="Test1"
          ></img>
        </div>
      </div>
      <h1 className="text-black dark:text-white text-xl ml-6">Projects</h1>
      <div className="lg:flex md:flex">
        <div className="flex-row lg:w-1/2 sm:w-screen lg:h-60 sm:h-48 h-40  hover:border-green-500 bg-white dark:bg-slate-800 shadow shadow-cyan-700 dark:shadow-cyan-300 border border-cyan-500 rounded-md m-2">
          <a href="https://haugkjet.github.io/threejs-test/client/">
            <img
              className="object-fill h-full w-full"
              src="./iceworld.png"
              alt="Test1"
            ></img>
          </a>
        </div>
        <div className="flex-row lg:w-1/2 sm:w-screen lg:h-60 sm:h-48 h-40  hover:border-green-500 bg-white dark:bg-slate-800 shadow shadow-cyan-700 dark:shadow-cyan-300 border border-cyan-500 rounded-md m-2">
          <a href="https://haugkjet.github.io/portfolio-viewer">
            <img
              className="object-fill h-full w-full"
              src="./threejschart.png"
              alt="Test2"
            ></img>
          </a>
        </div>
      </div>
      <div className="lg:flex md:flex">
        <div className="flex-row lg:w-1/2 sm:w-screen lg:h-60 sm:h-48 h-40  hover:border-green-500 bg-white dark:bg-slate-800 shadow shadow-cyan-700 dark:shadow-cyan-300 border border-cyan-500 rounded-md m-2">
          <a href="https://haugkjet.github.io/gallery3d/client/">
            <h3 className="text-black dark:text-white text-l ml-6 font-bold">
              3D gallery using Blender and Threejs
            </h3>
            <h3 className="text-black dark:text-white text-l ml-6">(Test)</h3>
          </a>
        </div>

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
      </div>
    </main>
  );
}

export default ContentArea;
