import NavLeft from "./NavLeft";
import NavRight from "./NavRight";

function NavBar() {
  return (
    <nav className="Navbar bg-theme shadow-black shadow-sm h-12 w-full top-0 left-0 absolute flex justify-between z-40 lg:h-16">
      <NavRight />
      <NavLeft />
    </nav>
  );
}
export default NavBar;
