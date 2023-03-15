import CardRow from "../components/CardRow";

function Home() {
  return (
    <div className="home-page">
      <h2 className=" bg-dark w-full">Popular</h2>
      <CardRow />
      <h2 className="bg-dark w-full">Latest</h2>
      <CardRow />
    </div>
  );
}

export default Home;
