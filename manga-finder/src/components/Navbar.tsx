import NavLeft from "./NavLeft";
import NavRight from "./NavRight";

function NavBar() {
  return (
    <nav className="Navbar bg-red-400 h-8 w-screen top-0 fixed flex justify-between z-40 sm:h-12 lg:h-16">
      <NavRight />
      <NavLeft />
    </nav>
  );
}
export default NavBar;
