import { SearchBox } from "@/components";
import { FC } from "react";

const SearchPage: FC = () => {
  return (
    <div className="p-8">
      <div className="flex min-h-[calc(50vh)] flex-grow items-center justify-center">
        <SearchBox defaultOpen />
      </div>
    </div>
  );
};

export default SearchPage;
