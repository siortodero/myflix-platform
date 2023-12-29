"use client";

import { useOnClickOutside } from "@/hooks";
import cns from "classnames";
import { isNil } from "lodash";
import { useParams } from "next/navigation";
import {
  FC,
  InputHTMLAttributes,
  KeyboardEvent,
  useRef,
  useState,
} from "react";
import { match } from "ts-pattern";
import { Icon } from "..";
import { IconProps } from "../Icon/Icon";

const SearchBox: FC = () => {
  const { searchTerm } = useParams<{ searchTerm?: string }>();
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [inFocus, setFocus] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>(searchTerm || "");

  useOnClickOutside<HTMLDivElement>(containerRef, () => {
    setFocus(false);
  });

  const handleSearchKeyUp = (evt: KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === "Enter") {
      window.location.href = "/search/" + searchValue;
    }
  };

  const { iconProps, inputProps } = match(inFocus)
    .with(false, () => ({
      iconProps: {
        className: "cursor-pointer p-2",
        onClick: () => {
          setFocus(true);
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
        className: "w-80",
      } as Partial<InputHTMLAttributes<HTMLInputElement>>,
    }))
    .exhaustive();

  return (
    <div ref={containerRef}>
      <div className="flex min-h-10 items-center ">
        <Icon icon={"search"} {...iconProps} />
        <input
          ref={inputRef}
          placeholder="Search"
          type="search"
          className={cns([
            "rounded border bg-transparent p-2 pl-8 text-white",
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
