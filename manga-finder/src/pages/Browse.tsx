import { useParams } from "react-router-dom";
import CardList from "../components/CardList";
import { IPagination } from "../models/IParam";

function Browse() {
  const params = useParams();

  const paging: IPagination = {
    limit: 60,
    offset: 0,
  };

  return (
    <div className="browse">
      <CardList
        qKey={"browseQuery" + params.query}
        pages={paging}
        search={params.query}
      />
    </div>
  );
}

export default Browse;
