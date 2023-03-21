import { useState } from "react";
import { BsFilter } from "react-icons/bs";
import SearchBar from "./Searchbar";

function NavLeft() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="nav-left h-full w-auto flex flex-row items-center justify-end">
      <SearchBar />
      <button
        aria-label="Filter results"
        className="nav-button bg-transparent rounded-full mx-4"
        id="filter-button"
        // onClick={(FilterBar(isOpen), setIsOpen(!isOpen))}
      >
        <BsFilter />
      </button>
    </div>
  );
}
export default NavLeft;
