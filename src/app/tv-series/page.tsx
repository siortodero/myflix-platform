import { FC } from "react";
import PopularSeries from "./PopularSeries";
import RatedSeries from "./RatedSeries";

const Series: FC = () => {
  return (
    <div className="flex flex-col gap-x-4 p-8">
      <PopularSeries />
      <RatedSeries />
    </div>
  );
};

export default Series;
