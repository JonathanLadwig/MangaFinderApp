import { BsFilter } from "react-icons/bs";
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
    </div>
  );
}
export default NavLeft;
