import { useState } from "react";

function SortBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" bg-gray-600 h-12 w-fullflex justify-between z-40 lg:h-16">
      <button>Sort</button>
      <form action=""></form>
    </div>
  );
}
export default SortBar;
