import CardRow from "../components/CardRow";
import { IOrder, IPagination } from "../models/IParam";

function Home() {
  const popPaging: IPagination = {
    limit: 10,
    offset: 0,
  };

  const popOrder: IOrder = {
    type: "createdAt",
    direction: "desc",
  };

  return (
    <div className="home-page">
      <h2 className=" bg-dark w-full">Popular</h2>
      <CardRow pages={popPaging} order={popOrder} />
      <h2 className=" bg-dark w-full">Top</h2>
      {/* <CardRow /> */}
      <h2 className="bg-dark w-full">Latest</h2>
      {/* <CardRow /> */}
    </div>
  );
}

export default Home;
