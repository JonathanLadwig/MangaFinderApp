import NavLeft from "./NavLeft";
import NavRight from "./NavRight";

function NavBar() {
  return (
    <nav className="Navbar bg-theme h-12 w-full top-0 left-0 sticky flex justify-between z-40 lg:h-16">
      <NavRight />
      <NavLeft />
    </nav>
  );
}
export default NavBar;
