import { BsFillCompassFill } from "react-icons/bs";
import { ImBook, ImHome } from "react-icons/im";

function NavRight() {
  return (
    <div className="nav-right h-full w-auto flex flex-row items-center justify-between">
      <img
        src="../src/assets/mega-icon-logo.png"
        alt="Logo"
        className="app-logo
         w-8 h-8 mx-2 sm:w-12 sm:h-12 lg:w-16 lg:h-16"
      />
      <h1 className="header hidden lg:block text-2xl mr-4">MangaFinder</h1>
      <div className="pages flex justify-around align-middle w-1/2">
        <div className="flex flex-row gap-0">
          <a
            href="/"
            className="home-link text-dark m-2 hover:text-light text-xl sm:hidden"
          >
            <ImHome />
          </a>
          <a
            href="/"
            className="home-link text-dark text-base m-2 hidden sm:block hover:text-light"
          >
            Home
          </a>
        </div>
        <div className="flex flex-row gap-0">
          <a
            href="/library"
            className="library-link text-dark m-2 hover:text-light text-xl sm:hidden"
          >
            <ImBook />
          </a>
          <a
            href="/library"
            className="library-link text-dark text-base m-2 hidden sm:block hover:text-light"
          >
            Library
          </a>
        </div>
        <div className="flex flex-row gap-0">
          <a
            href="/browse"
            className="browse-link text-dark m-2 hover:text-light text-xl sm:hidden"
          >
            <BsFillCompassFill />
          </a>
          <a
            href="/browse"
            className="browse-link text-dark text-base m-2 hidden sm:block hover:text-light"
          >
            Browse
          </a>
        </div>
      </div>
    </div>
  );
}
export default NavRight;
