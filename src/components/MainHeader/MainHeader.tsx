/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FC } from "react";
import { LanguageSelector, SearchBox, Translation } from "..";
import { TranslationOptionsProps } from "../Translation/Translation";

export interface NavLinkProps extends TranslationOptionsProps {
  label: string;
  link: string;
}

const NavLink: FC<NavLinkProps> = ({ label, link, trOptions }) => {
  return (
    <Link href={link} className="text-white">
      <Translation label={label} trOptions={trOptions} />
    </Link>
  );
};

const MainHeader: FC = () => (
  <header className="sticky flex h-16 gap-x-6 bg-[rgb(20,20,20)] px-10 py-3">
    <Link href={"/"}>
      <img
        src="/assets/myflix-logo.png"
        alt="MyFlix"
        className="relative h-10"
        title="Home"
      />
    </Link>
    <ul className="flex flex-grow items-center gap-x-6">
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
    <div className="relative right-0 flex gap-x-4">
      <SearchBox />
      <LanguageSelector />
    </div>
  </header>
);

export default MainHeader;
