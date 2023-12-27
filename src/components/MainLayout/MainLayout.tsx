import { FC, PropsWithChildren } from "react";
import { MainHeader } from "..";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
