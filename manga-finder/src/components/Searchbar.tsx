import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";

function SearchBar() {
  const targetRef = useRef(null);
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  let isEmpty = true;

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
    if (!search) {
      isEmpty = true;
    } else {
      isEmpty = false;
    }
  };

  function SearchButton() {
    if (isEmpty) {
      setIsOpen(!isOpen);
    } else {
      SubmitEvent;
    }
  }

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
          id="searchinput"
          className="search rounded-lg bg-slate-50 placeholder:italic text-neutral-800 min-w-12 w-auto"
          onChange={onChange}
        />
      )}
    </motion.div>
  );
}

export default SearchBar;
