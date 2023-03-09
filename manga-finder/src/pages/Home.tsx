import CardList from "../components/CardList";
import NavBar from "../components/Navbar";

function Home() {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <NavBar />
      <CardList />
    </div>
  );
}

export default Home;
