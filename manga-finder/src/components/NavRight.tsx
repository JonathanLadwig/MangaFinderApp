function NavRight() {
  return (
    <div className="nav-right bg-red-400 h-full w-auto flex flex-row items-center gap-4">
      <img
        src="../src/assets/mega-icon-logo.png"
        alt="Logo"
        className="app-logo
         w-8 h-8 mx-2 sm:w-12 sm:h-12 lg:w-16 lg:h-16"
      />
      <h1 className="header hidden lg:block text-2xl">MangaFinder</h1>
      <div className="pages flex justify-around align-middle w-1/2">
        <a
          href="#"
          className="library-link text-neutral-700 text-base m-4">
          Library
        </a>
        <a
          href="#"
          className="browse-link text-neutral-700 text-base m-4">
          Browse
        </a>
      </div>
    </div>
  );
}
export default NavRight;
