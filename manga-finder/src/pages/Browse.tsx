import { useState } from "react";
import { useParams } from "react-router-dom";
import CardList from "../components/CardList";
import SortBar from "../components/Sort";
import { IOrder, IPagination } from "../models/IParam";

function Browse() {
  const params = useParams();

  const [sort, setSort] = useState("");

  const childToParent = (childData: string) => {
    setSort(childData);
  };

  const paging: IPagination = {
    limit: 60,
    offset: 0,
  };

  const orderBy: IOrder = {
    type: sort,
    direction: "desc",
  };

  return (
    <div className="browse">
      <SortBar childToParent={childToParent} />
      <CardList
        qKey={"browseQuery" + params.query + orderBy.type + orderBy.direction}
        pages={paging}
        search={params.query}
        order={orderBy}
      />
    </div>
  );
}

export default Browse;
