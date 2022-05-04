function Footer() {
  return (
    <div className="flex items-center justify-center flex-wrap bg-white dark:bg-black p-6 w-screen">
      <div className="flex items-center flex-shrink-0 text-black dark:text-white mr-16">
        <a className="fa fa-github fa-2x" href="https://github.com/haugkjet">
          {" "}
        </a>
      </div>
      <div className="flex items-center flex-shrink-0 text-black dark:text-white mr-16">
        <a className="fa fa-twitter fa-2x" href="https://twitter.com/haugkjet">
          {" "}
        </a>
      </div>
      <div className="flex items-center flex-shrink-0 text-black dark:text-white">
        <a className="fa fa-gitlab fa-2x" href="https://gitlab.com/haugkjet">
          {" "}
        </a>
      </div>
    </div>
  );
}

export default Footer;
