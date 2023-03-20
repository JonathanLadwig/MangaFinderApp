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
      console.log("empty");
    } else {
      setIsEmpty(false);
      setSearch(e.currentTarget.value);
      console.log("not empty");
    }
  };

  function searchLogic() {
    if (isOpen) {
      console.log("searching");
      navigate("/browse/" + search);
    } else {
      console.log("searching");
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
    <motion.div>
      <button
        onClick={searchButton}
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
