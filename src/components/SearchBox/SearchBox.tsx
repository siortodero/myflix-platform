"use client";

import { useOnClickOutside } from "@/hooks";
import cns from "classnames";
import { isNil } from "lodash";
import { useParams } from "next/navigation";
import {
  FC,
  InputHTMLAttributes,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import { match } from "ts-pattern";
import { Icon } from "..";
import { IconProps } from "../Icon/Icon";

export interface SearchBoxProps {
  defaultOpen?: boolean;
}

const SearchBox: FC<SearchBoxProps> = ({ defaultOpen = false }) => {
  const { searchTerm } = useParams<{ searchTerm?: string }>();
  const decodedSearchTerm = decodeURIComponent(searchTerm || "");
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isOpen, setOpen] = useState<boolean>(defaultOpen);
  const [searchValue, setSearchValue] = useState<string>(decodedSearchTerm);
  const { t } = useTranslation();

  useEffect(() => {
    if (defaultOpen) {
      inputRef.current?.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useOnClickOutside<HTMLDivElement>(containerRef, () => {
    if (!defaultOpen) {
      setOpen(false);
    }
  });

  const handleSearchKeyUp = (evt: KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === "Enter" && !isNil(searchValue)) {
      window.location.href = "/search/" + searchValue;
    }
  };

  const { iconProps, inputProps } = match(isOpen)
    .with(false, () => ({
      iconProps: {
        className: "cursor-pointer p-2",
        onClick: () => {
          setOpen(true);
          if (!isNil(inputRef.current)) {
            inputRef.current.focus();
          }
        },
      } as Partial<IconProps>,
      inputProps: {
        className: "w-0 p-0 border-none pl-0",
      } as Partial<InputHTMLAttributes<HTMLInputElement>>,
    }))
    .with(true, () => ({
      iconProps: {
        className: "fixed cursor-pointer pl-2",
      } as Partial<IconProps>,
      inputProps: {
        className: "w-48 lg:w-80 p-2 pl-8",
      } as Partial<InputHTMLAttributes<HTMLInputElement>>,
    }))
    .exhaustive();

  return (
    <div ref={containerRef}>
      <div className="flex min-h-10 items-center ">
        <Icon icon={"search"} {...iconProps} title={t("common.search")} />
        <input
          ref={inputRef}
          placeholder={t("common.search")}
          type="search"
          className={cns([
            "rounded border bg-transparent text-white",
            inputProps.className,
          ])}
          onKeyUp={handleSearchKeyUp}
          onChange={(evt) => setSearchValue(evt.target.value)}
          value={searchValue}
        />
      </div>
    </div>
  );
};

export default SearchBox;
