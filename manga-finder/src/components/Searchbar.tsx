import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";

function SearchBar() {
  const targetRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Search"
        className="nav-button bg-transparent rounded-full"
        id="search-button"
      >
        <BiSearch />
      </button>
      {isOpen && (
        <motion.input
          type="text"
          placeholder="Search"
          className="search rounded-lg bg-slate-50 placeholder:italic text-neutral-800 min-w-12 w-auto"
        />
      )}
    </motion.div>
  );
}

export default SearchBar;
