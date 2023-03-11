import { BiSearch } from "react-icons/bi";
import { BsFilter } from "react-icons/bs";
import { MdLogin } from "react-icons/md";

function NavLeft() {
  return (
    <div className="nav-left bg-red-400 h-full w-auto flex flex-row gap-4 items-center justify-end">
      <button
        className="nav-button bg-transparent"
        id="search-button">
        <BiSearch />
      </button>
      <input
        type="text"
        placeholder="Search"
        className="search hidden lg:block rounded-lg bg-slate-50 placeholder:italic text-neutral-800 min-w-12 w-auto"
      />
      <button
        className="nav-button"
        id="filter-button">
        <BsFilter />
      </button>
      <button
        className="nav-button"
        id="login-button">
        <MdLogin />
      </button>
    </div>
  );
}
export default NavLeft;
