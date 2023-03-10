import { ITag } from "../models/ITag";

function TagSquare(tag: ITag) {
  return (
    <div className="tag px-1 bg-neutral-500 text-neutral-50 border-neutral-50 border-1 divide-solid flex items-center rounded-sm text-center mx-0.5 text-xs h-4 w-auto">
      {tag.name}
    </div>
  );
}
export default TagSquare;
