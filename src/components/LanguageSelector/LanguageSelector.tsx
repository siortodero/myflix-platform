"use client";

import { ChangeEvent, FC, useCallback } from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector: FC = () => {
  const { i18n, t } = useTranslation();

  const handleChangeLanguage = useCallback(
    (evt: ChangeEvent<HTMLSelectElement>) => {
      i18n.changeLanguage(evt.target.value);
    },
    [i18n]
  );

  return (
    <select
      className="bg-[rgb(20,20,20)] text-white"
      onChange={handleChangeLanguage}
      value={i18n.language}
      title={t("common.change-language")}
    >
      <option value={"it"}>Italiano</option>
      <option value={"en"}>English</option>
    </select>
  );
};

export default LanguageSelector;
