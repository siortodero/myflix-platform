/* eslint-disable @next/next/no-img-element */
import cns from "classnames";
import Link from "next/link";
import { FC } from "react";
import { LanguageSelector, SearchBox, Translation } from "..";
import { TranslationOptionsProps } from "../Translation/Translation";

export interface NavLinkProps extends TranslationOptionsProps {
  label: string;
  link: string;
  className?: string;
}

export const NavLink: FC<NavLinkProps> = ({
  label,
  link,
  trOptions,
  className,
}) => {
  return (
    <Link href={link} className={cns(["text-white", className])}>
      <Translation label={label} trOptions={trOptions} />
    </Link>
  );
};

const MainHeader: FC = () => (
  <header className="flex flex-1 items-center gap-x-4 self-stretch lg:gap-x-6">
    <Link href={"/"}>
      <img
        src="/assets/myflix-logo.png"
        alt="MyFlix"
        className="relative h-8 w-auto"
        title="Home"
      />
    </Link>
    <ul className="hidden flex-grow items-center gap-x-6 lg:flex">
      <li>
        <NavLink link="/tv-series" label="menu.tv-series" />
      </li>
      <li>
        <NavLink link="/movies" label="menu.movies" />
      </li>
      <li>
        <NavLink link="/my-list" label="menu.my-list" />
      </li>
    </ul>
    <div className="relative right-0 hidden gap-x-4 lg:flex">
      <SearchBox />
      <LanguageSelector />
    </div>
  </header>
);

export default MainHeader;
