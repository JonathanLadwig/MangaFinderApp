import { BsFilter } from "react-icons/bs";
import { MdLogin } from "react-icons/md";
import SearchBar from "./Searchbar";

function NavLeft() {
  return (
    <div className="nav-left h-full w-auto flex flex-row items-center justify-end">
      <SearchBar />
      <button
        aria-label="Filter results"
        className="nav-button bg-transparent rounded-full"
        id="filter-button"
      >
        <BsFilter />
      </button>
      <button
        aria-label="Log In"
        className="nav-button bg-transparent rounded-full"
        id="login-button"
      >
        <MdLogin />
      </button>
    </div>
  );
}
export default NavLeft;
