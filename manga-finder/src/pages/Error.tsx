import NavBar from "../components/Navbar";

function Error() {
  return (
    <div className="error-page">
      <NavBar />
      <div className="error-404 mt-16 flex flex-col text-2xl">
        <h2>Whoops! Error404</h2>
        <img
          src="./src/assets/baka.jpeg"
          alt="baka!"
        />
      </div>
    </div>
  );
}

export default Error;
