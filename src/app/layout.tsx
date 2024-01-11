import { MainLayout } from "@/components";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import { FC, PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Myflix platform",
  description: "Welcome to Myflix",
  applicationName: "MyFlix",
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html className="h-full">
      <body className="h-full">
        <MainLayout>{children}</MainLayout>
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
