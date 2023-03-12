import CardList from "../components/CardList";
import NavBar from "../components/Navbar";

function Home() {
  return (
    <div className="home-page">
      <NavBar />
      <div className="">Popular</div>
      <CardList />
      <div>Latest</div>
      <CardList />
    </div>
  );
}

export default Home;
