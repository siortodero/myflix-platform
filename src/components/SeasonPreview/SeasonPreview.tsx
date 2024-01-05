/* eslint-disable @next/next/no-img-element */
import { FC } from "react";

export interface SeasonPreviewProps {
  imagePath: string;
  title: string;
  id: number;
}

const SeasonPreview: FC<SeasonPreviewProps> = ({ id, title, imagePath }) => {
  return (
    <div className="relative mb-2 h-32 w-[185px] flex-none overflow-y-hidden">
      <img
        src={process.env.NEXT_PUBLIC_BASE_IMAGE_URI + "w185/" + imagePath}
        alt={title}
        className="translate-y-[-33%]"
      />
      <h4 className="absolute bottom-4 w-full bg-[rgb(20,20,20)] bg-opacity-60 px-2 py-2 font-semibold text-white">
        {title}
      </h4>
    </div>
  );
};

export default SeasonPreview;
