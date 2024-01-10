"use client";

import { ShowType } from "@/infrastructure";
import { map } from "lodash";
import { FC, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Translation } from "..";
import ShowPreview, { ShowPreviewProps } from "../ShowPreview/ShowPreview";

export interface PreviewScrollerProps {
  title: string;
  showPreviews?: Array<ShowPreviewProps>;
  showType: ShowType;
  onLoadNextPage: () => void;
}

const PreviewScroller: FC<PreviewScrollerProps> = ({
  title,
  showPreviews = [],
  showType,
  onLoadNextPage,
}) => {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      onLoadNextPage();
    }
  }, [onLoadNextPage, inView]);

  const half = Math.floor((showPreviews.length / 4) * 3);

  return (
    <div>
      <h2 className="mb-2 text-xl font-semibold text-white">
        <Translation label={title} />
      </h2>
      <div className="mb-4 max-w-full overflow-x-auto">
        <ul className="flex gap-x-4">
          {map(showPreviews, (s, idx) => {
            // Render next page trigger at 3/4 of scrolling current results.
            return (
              <li key={s.id}>
                <ShowPreview {...s} showType={showType} />
                {half === idx + 1 && (
                  <div ref={ref} aria-hidden="true" className="px-2" />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default PreviewScroller;
