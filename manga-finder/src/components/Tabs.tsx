import { BsFillCompassFill } from "react-icons/bs";
import { ImHome } from "react-icons/im";
import { useNavigate } from "react-router-dom";

function Tabs() {
  const navigate = useNavigate();

  return (
    <div className="pages flex justify-evenly align-middle w-full">
      <div className="flex flex-row gap-0">
        <button
          onClick={() => navigate("/")}
          className="home-link text-light m-2 hover:text-dark text-xl sm:hidden"
          aria-label="Home"
        >
          <ImHome />
        </button>
        <button
          onClick={() => navigate("/")}
          className="home-link text-light text-base m-2 hidden sm:block hover:text-dark"
        >
          Home
        </button>
      </div>
      <div className="flex flex-row gap-0">
        <button
          onClick={() => navigate("/browse")}
          className="browse-link text-light m-2 hover:text-dark text-xl sm:hidden"
          aria-label="Browse Manga"
        >
          <BsFillCompassFill />
        </button>
        <button
          onClick={() => navigate("/browse")}
          className="browse-link text-light text-base m-2 hidden sm:block hover:text-dark"
        >
          Browse
        </button>
      </div>
    </div>
  );
}
export default Tabs;
