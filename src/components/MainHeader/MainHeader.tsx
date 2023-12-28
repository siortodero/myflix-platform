/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FC } from "react";

const MainHeader: FC = () => (
  <header className="sticky flex h-16 gap-x-6 bg-[rgb(20,20,20)] px-10 py-3">
    <Link href={"/"}>
      <img
        src="/assets/myflix-logo.png"
        alt="MyFlix"
        className="relative h-10"
      />
    </Link>
    <ul className="flex items-center gap-x-6">
      <li>
        <Link href={"/tv-series"} className="text-white">
          TV Series
        </Link>
      </li>
      <li>
        <Link href={"/movies"} className="text-white">
          Movies
        </Link>
      </li>
      <li>
        <Link href={"/my-list"} className="text-white">
          My list
        </Link>
      </li>
    </ul>
  </header>
);

export default MainHeader;
