import { BsFillCompassFill } from "react-icons/bs";
import { ImBook, ImHome } from "react-icons/im";

function Tabs() {
  return (
    <div className="pages flex justify-evenly align-middle w-full">
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
  );
}
export default Tabs;
