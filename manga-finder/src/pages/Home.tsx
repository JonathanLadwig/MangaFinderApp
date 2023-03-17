import CardRow from "../components/CardRow";
import { IOrder, IPagination } from "../models/IParam";

function Home() {
  const paging: IPagination = {
    limit: 10,
    offset: 0,
  };

  const popOrder: IOrder = {
    type: "followedCount",
    direction: "desc",
  };

  const topOrder: IOrder = {
    type: "rating",
    direction: "desc",
  };

  const latestOrder: IOrder = {
    type: "createdAt",
    direction: "desc",
  };

  return (
    <div className="home-page">
      <h2 className=" bg-dark w-full">Popular</h2>
      <CardRow pages={paging} order={popOrder} qKey={"popularQuery"} />
      <h2 className=" bg-dark w-full">Top</h2>
      <CardRow pages={paging} order={topOrder} qKey={"topQuery"} />
      <h2 className="bg-dark w-full">Latest</h2>
      <CardRow pages={paging} order={latestOrder} qKey={"latestQuery"} />
    </div>
  );
}

export default Home;
