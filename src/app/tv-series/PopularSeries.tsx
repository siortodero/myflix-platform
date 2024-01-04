/* eslint-disable @next/next/no-img-element */
"use client";

import { PreviewScroller } from "@/components";
import { ShowPreviewProps } from "@/components/ShowPreview/ShowPreview";
import { usePopularSeries } from "@/hooks";
import { map } from "lodash";
import { FC } from "react";

const PopularSeries: FC = () => {
  const { data } = usePopularSeries();

  return (
    <PreviewScroller
      title="categories.popular"
      showPreviews={map(
        data?.data.results,
        (r) =>
          ({
            title: r.name,
            imagePath: r.backdrop_path,
            id: r.id,
          }) as ShowPreviewProps
      )}
    />
  );
};

export default PopularSeries;
