import { motion } from "framer-motion";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [search, setSearch] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
    if (!search) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
      setSearch(e.currentTarget.value);
    }
  };

  function searchLogic() {
    if (isOpen) {
      navigate("/browse/" + search);
    } else {
      setIsOpen(false);
    }
  }

  function searchButton() {
    if (isEmpty) {
      setIsOpen(!isOpen);
    } else {
      searchLogic();
    }
  }

  return (
    <motion.div className="flex">
      <button
        onClick={searchButton}
        aria-label="Search"
        className="nav-button bg-transparent rounded-full mr-2"
        id="search-button"
      >
        <BiSearch />
      </button>
      {isOpen && (
        <motion.input
          type="text"
          placeholder="Search"
          id="searchinput"
          className="search rounded-lg bg-slate-50 placeholder:italic text-neutral-800 min-w-12 w-auto pl-2 mr-2"
          onChange={onChange}
        />
      )}
    </motion.div>
  );
}

export default SearchBar;
