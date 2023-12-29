import { map } from "lodash";
import { FC } from "react";
import ShowPreview, { ShowPreviewProps } from "../ShowPreview/ShowPreview";

export interface PreviewScrollerProps {
  title: string;
  showPreviews?: Array<ShowPreviewProps>;
}

const PreviewScroller: FC<PreviewScrollerProps> = ({ title, showPreviews }) => {
  return (
    <div>
      <h2 className="mb-2 text-xl font-semibold text-white">{title}</h2>
      <ul>
        {map(showPreviews, (s) => (
          <li key={s.id}>
            <ShowPreview {...s} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PreviewScroller;
