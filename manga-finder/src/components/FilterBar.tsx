import React from "react";

function FilterBar(isOpen: boolean) {
  const [state, setState] = React.useState({
    gender: false,
    love: false,
  });

  function handleToggle() {
    console.log("hello");
  }

  isOpen = false;

  if (isOpen) {
    return (
      <form className="Navbar bg-gray-400 h-24 w-fully flex justify-evenly z-40 lg:h-16">
        {Object.keys(state).map((key) => (
          <input
            type="checkbox"
            onChange={handleToggle}
            key={key}
            name={key}
            checked={state.gender}
          />
        ))}
      </form>
    );
  } else {
    return null;
  }
}
export default FilterBar;
