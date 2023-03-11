import NavBar from "../components/Navbar";

function Error() {
  return (
    <div className="error-page">
      <NavBar />
      <div className="error-page-content mt-16 flex flex-col"></div>
      <div className="error-404">
        Whoops! Error404
        <img
          src="./src/assets/baka.jpeg"
          alt="baka!"
        />
      </div>
    </div>
  );
}

export default Error;
