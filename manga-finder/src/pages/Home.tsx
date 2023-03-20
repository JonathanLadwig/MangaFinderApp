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
    direction: "asc",
  };

  return (
    <div className="home-page mt-4">
      <h2 className=" w-full ml-4 mt-4 text-3xl">Popular</h2>
      <CardRow pages={paging} order={popOrder} qKey={"popularQuery"} />
      <h2 className="w-full ml-4 text-3xl">Top</h2>
      <CardRow pages={paging} order={topOrder} qKey={"topQuery"} />
      <h2 className="w-full ml-4 text-3xl">Latest</h2>
      <CardRow pages={paging} order={latestOrder} qKey={"latestQuery"} />
    </div>
  );
}

export default Home;
