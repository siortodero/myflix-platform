"use client";

import { FC } from "react";
import { useTranslation } from "react-i18next";

export interface GenreLabelProps {
  genre: string;
}

const GenreLabel: FC<GenreLabelProps> = ({ genre }) => {
  const { t } = useTranslation();

  return (
    <span
      className="mr-0.5 rounded bg-gray-500 px-1 py-0.5 text-xs text-white"
      title={t("common.genre") + ": " + genre}
    >
      {genre}
    </span>
  );
};

export default GenreLabel;
