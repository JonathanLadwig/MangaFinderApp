import NavLeft from "./NavLeft";
import NavRight from "./NavRight";

function NavBar() {
  return (
    <nav className="Navbar bg-theme h-12 w-screen top-0 left-0 fixed flex justify-between z-40 lg:h-16">
      <NavRight />
      <NavLeft />
    </nav>
  );
}
export default NavBar;
