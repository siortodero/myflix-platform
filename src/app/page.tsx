"use client";

import { Translation } from "@/components";
import { FC } from "react";

const Home: FC = () => {
  return (
    <div className="flex min-h-[calc(100vh-64px)] flex-col items-center p-24">
      <h1 className="mb-8 text-6xl font-semibold text-white">
        <Translation label="coming-soon.title" />
      </h1>
      <p className="text-white">
        <Translation label="coming-soon.description" />
      </p>
    </div>
  );
};

export default Home;
