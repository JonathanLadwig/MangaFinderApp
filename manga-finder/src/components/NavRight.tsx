import { useMediaQuery } from "react-responsive";
import Tabs from "./Tabs";

function NavRight() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <div className="nav-right h-full w-auto flex flex-row items-center justify-between">
      <img
        src="../src/assets/icon.png"
        alt="Logo"
        className="app-logo
         w-8 h-8 mx-3 sm:w-12 sm:h-12 lg:w-16 lg:h-16"
      />
      <h1 className="header lg:block text-2xl mr-4 font-bold">
        Manga<span className=" text-neutral-800">Finder</span>
      </h1>
      {isTabletOrMobile ? null : <Tabs />}
    </div>
  );
}
export default NavRight;
