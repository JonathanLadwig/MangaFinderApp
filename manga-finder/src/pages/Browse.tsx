import CardList from "../components/CardList";
import { IPagination } from "../models/IParam";

function Browse() {
  const paging: IPagination = {
    limit: 60,
    offset: 0,
  };

  const url: string = window.location.pathname;
  const searchString = url.split("/")[2];

  return (
    <div className="browse">
      <CardList qKey={"browseQuery"} pages={paging} search={searchString} />
    </div>
  );
}

export default Browse;
