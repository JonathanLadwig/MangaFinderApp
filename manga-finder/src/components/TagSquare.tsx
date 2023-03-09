import { ITag } from "../models/ITag";

function TagSquare(tag: ITag) {
  return (
    <div className="tag h-4 w-auto px-1 bg-neutral-500 text-neutral-50 rounded-sm text-sm text-center mx-0.5">
      {tag.name}
    </div>
  );
}
export default TagSquare;
