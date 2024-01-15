"use client";

import cns from "classnames";
import { isNil } from "lodash";
import { FC } from "react";
import { useTranslation } from "react-i18next";

export interface VoteAverageProps {
  vote?: number;
}

const VoteAverage: FC<VoteAverageProps> = ({ vote }) => {
  const { t } = useTranslation();

  if (isNil(vote)) {
    return null;
  }

  const vFixed = vote.toFixed(1);

  return (
    <span
      className={cns([
        "rounded-md bg-gray-400 px-1 text-lg font-semibold text-white",
        {
          "bg-red-400": vote < 4,
          "bg-amber-400": vote >= 4 && vote <= 6,
          "bg-green-400": vote > 6,
        },
      ])}
      title={t("common.vote-average") + ": " + vFixed}
    >
      {vFixed}
    </span>
  );
};

export default VoteAverage;
