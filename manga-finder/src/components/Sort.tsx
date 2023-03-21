function SortBar({ childToParent }: { childToParent: (data: string) => void }) {
  let data = "";

  function setOrderType() {
    const data = (document.getElementById("orderType") as HTMLInputElement)
      .value;
    childToParent(data);
  }

  return (
    <div className=" bg-dark h-6 w-fullflex justify-between z-40 sticky">
      <label htmlFor="orderType">Order By: </label>
      <select
        name="orderType"
        id="orderType"
        onChange={setOrderType}
        className=" text-dark bg-light"
      >
        <option value="">Relevance</option>
        <option value="followedCount">Follows</option>
        <option value="rating">Rating</option>
        <option value="createdAt">Latest</option>
      </select>
    </div>
  );
}
export default SortBar;
