import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

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
    </div>
  );
}

export default Reader;
