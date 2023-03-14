import CardRow from "../components/CardRow";
import NavBar from "../components/Navbar";

function Home() {
  return (
    <div className="home-page">
      <NavBar />
      <div className="mt-16 bg-dark w-screen">Popular</div>
      <CardRow />
      <div className="bg-dark w-screen">Latest</div>
      <CardRow />
    </div>
  );
}

export default Home;
