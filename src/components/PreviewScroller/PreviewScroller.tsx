import { ShowType } from "@/infrastructure";
import { map } from "lodash";
import { FC } from "react";
import { Translation } from "..";
import ShowPreview, { ShowPreviewProps } from "../ShowPreview/ShowPreview";

export interface PreviewScrollerProps {
  title: string;
  showPreviews?: Array<ShowPreviewProps>;
  showType: ShowType;
}

const PreviewScroller: FC<PreviewScrollerProps> = ({
  title,
  showPreviews,
  showType,
}) => {
  return (
    <div>
      <h2 className="mb-2 text-xl font-semibold text-white">
        <Translation label={title} />
      </h2>
      <div className="max-w-full overflow-x-auto">
        <ul className="flex gap-x-4">
          {map(showPreviews, (s) => (
            <li key={s.id}>
              <ShowPreview {...s} showType={showType} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PreviewScroller;
