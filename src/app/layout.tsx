import { MainLayout } from "@/components";
import "@/styles/globals.css";
import { Metadata } from "next";
import { FC, PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Myflix",
  description: "Welcome to Myflix",
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="it">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
};

export default RootLayout;
