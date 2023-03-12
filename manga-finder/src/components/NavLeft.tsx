import { BsFilter } from "react-icons/bs";
import { MdLogin } from "react-icons/md";
import SearchBar from "./Searchbar";

function NavLeft() {
  return (
    <div className="nav-left h-full w-auto flex flex-row items-center justify-end">
      <SearchBar />
      {/* <button
        className="nav-button bg-transparent rounded-full"
        id="search-button"
      >
        <BiSearch />
      </button>
      <input
        type="text"
        placeholder="Search"
        className="search hidden lg:block rounded-lg bg-slate-50 placeholder:italic text-neutral-800 min-w-12 w-auto"
      /> */}
      <button
        className="nav-button bg-transparent rounded-full"
        id="filter-button"
      >
        <BsFilter />
      </button>
      <button
        className="nav-button bg-transparent rounded-full"
        id="login-button"
      >
        <MdLogin />
      </button>
    </div>
  );
}
export default NavLeft;
