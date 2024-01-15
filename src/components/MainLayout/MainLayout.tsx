/* eslint-disable @next/next/no-img-element */
"use client";

import { initIconSet, initLocalization } from "@/infrastructure";
import { Dialog, Transition } from "@headlessui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import cns from "classnames";
import Link from "next/link";
import { FC, Fragment, PropsWithChildren, useState } from "react";
import { Icon } from "..";
import MainHeader, { NavLink } from "../MainHeader/MainHeader";

initIconSet();
initLocalization();

// Initialize react-query client
const initQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false, // If you focus back to the window, react-query defaults refetch windows queries
        retry: false,
      },
      mutations: {
        retry: false,
      },
    },
  });

const navigation = [
  { label: "menu.tv-series", link: "/tv-series", current: true },
  { label: "menu.movies", link: "/movies", current: false },
  { label: "menu.my-list", link: "/my-list", current: false },
];

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <QueryClientProvider client={initQueryClient()}>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-[rgb(20,20,20)]/60" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <Icon
                          icon={"times"}
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[rgb(20,20,20)] px-6 pb-4">
                    <div className="flex h-16 shrink-0 items-center">
                      <Link href={"/"}>
                        <img
                          src="/assets/myflix-logo.png"
                          alt="MyFlix"
                          className="relative h-8 w-auto"
                          title="Home"
                        />
                      </Link>
                    </div>

                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.label}>
                                <NavLink
                                  link={item.link}
                                  label={item.label}
                                  className={cns(
                                    "hover:bg-[rgb(60,60,60)] hover:text-white",
                                    "group flex gap-x-3 rounded p-2 text-sm font-semibold leading-6"
                                  )}
                                />
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <div>
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-[rgb(60,60,60)] bg-[rgb(20,20,20)] px-4 shadow-sm sm:gap-x-4 sm:px-6 lg:border-none lg:px-8">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-[rgb(20,20,20)] lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Icon
                icon={"bars"}
                className="h-6 w-6 text-white"
                aria-hidden="true"
              />
            </button>
            <MainHeader />
          </div>

          <main>{children}</main>
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default MainLayout;
