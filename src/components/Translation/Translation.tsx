"use client";

import { InterpolationMap, TOptions } from "i18next";
import { isNil } from "lodash";
import { FC } from "react";
import { useTranslation } from "react-i18next";

export type TranslationOptions = TOptions & InterpolationMap<string>;

export interface TranslationOptionsProps {
  trOptions?: TranslationOptions;
}

export interface TranslationProps extends TranslationOptionsProps {
  label?: string | string[];
}

const Translation: FC<TranslationProps> = ({
  label,
  trOptions = undefined,
}: TranslationProps) => {
  const { t } = useTranslation();

  if (isNil(label)) {
    return label;
  }

  return t(label, trOptions);
};

export default Translation;
