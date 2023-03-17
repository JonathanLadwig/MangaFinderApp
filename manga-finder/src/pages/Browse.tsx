import CardList from "../components/CardList";
import { IPagination } from "../models/IParam";

function Browse() {
  const paging: IPagination = {
    limit: 60,
    offset: 0,
  };

  return (
    <div className="browse">
      <CardList pages={paging} />
    </div>
  );
}

export default Browse;
