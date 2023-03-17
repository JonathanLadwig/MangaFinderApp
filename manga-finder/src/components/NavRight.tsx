import Tabs from "./Tabs";

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
      <Tabs />
    </div>
  );
}
export default NavRight;
