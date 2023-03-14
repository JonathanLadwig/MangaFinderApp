import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import MangaReader from "../components/MangaReader";

function Reader() {
  let navigate = useNavigate();
  return (
    <div className="mangareader">
      <nav className="readernav">
        <button
          aria-label="Go back"
          className="backbutton "
          onClick={() => navigate(-1)}
        >
          <BiArrowBack />
        </button>
      </nav>
      <MangaReader />
    </div>
  );
}

export default Reader;
