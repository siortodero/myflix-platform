"use client";

import { PreviewScroller, Translation } from "@/components";
import { ShowPreviewProps } from "@/components/ShowPreview/ShowPreview";
import { useSearchMovies, useSearchSeries } from "@/hooks";
import { map } from "lodash";
import { FC } from "react";

export interface SearchPageProps {
  params: {
    searchTerm: string;
  };
}

const SearchPage: FC<SearchPageProps> = ({ params: { searchTerm } }) => {
  const decodedSearchTerm = decodeURIComponent(searchTerm);
  const { data: movies } = useSearchMovies(decodedSearchTerm);
  const { data: series } = useSearchSeries(decodedSearchTerm);

  return (
    <div className="p-8">
      <h3 className="mb-4 text-3xl font-semibold text-white">
        <Translation label="common.searched-for" /> &ldquo;{decodedSearchTerm}
        &ldquo;
      </h3>
      <div className="flex gap-x-4">
        <PreviewScroller
          title="Movies"
          showPreviews={map(
            movies?.data.results,
            (r) =>
              ({
                title: r.title,
                imagePath: r.backdrop_path,
                id: r.id,
              }) as ShowPreviewProps
          )}
        />
        <PreviewScroller
          title="TV series"
          showPreviews={map(
            series?.data.results,
            (r) =>
              ({
                title: r.name,
                imagePath: r.backdrop_path,
                id: r.id,
              }) as ShowPreviewProps
          )}
        />
      </div>
    </div>
  );
};

export default SearchPage;
