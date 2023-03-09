import NavLeft from "./NavLeft";
import NavRight from "./NavRight";

function NavBar() {
  return (
    <nav className="Navbar bg-slate-500 h-16 w-screen top-0 fixed flex justify-between z-40">
      <NavRight />
      <NavLeft />
    </nav>
  );
}
export default NavBar;
