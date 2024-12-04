import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { LiaBarsSolid } from "react-icons/lia";
import { AiOutlineClose } from "react-icons/ai";
import TopBar from "./topBar";

import { Button } from "@nextui-org/react";

const nav = () => {
  return (
    <>
      <TopBar className="hidden md:block" />
      <Disclosure as="nav" className="bg-blue-500 shadow">
        <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex px-2 lg:px-0">
              <div className="flex shrink-0 items-center ">
                <div className="relative -top-5 z-10">
                  <div className="bg-white p-4 rounded-lg shadow-md w-32">
                    <img
                      src="/logoipsum-297.svg"
                      alt="Logo"
                      className="w-32 h-24"
                    />
                  </div>
                </div>
              </div>
              <div className="hidden lg:ml-6 lg:flex lg:space-x-8 text-white font-bold text-md pl-16">
                {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                <a
                  href="#"
                  className="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1"
                >
                  Dashboard
                </a>
                <a
                  href="#"
                  className="inline-flex items-center border-transparent px-1 pt-1 hover:border-indigo-800 border-b-3 hover:text-blue-100"
                >
                  Team
                </a>
                <a
                  href="#"
                  className="inline-flex items-center border-transparent px-1 pt-1 hover:border-indigo-800 border-b-3 hover:text-blue-100"
                >
                  Projects
                </a>
                <a
                  href="#"
                  className="inline-flex items-center border-transparent px-1 pt-1 hover:border-indigo-800 border-b-3 hover:text-blue-100"
                >
                  Calendar
                </a>
              </div>
            </div>
            <div className="flex items-center lg:hidden">
              {/* Mobile menu button */}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <LiaBarsSolid
                  aria-hidden="true"
                  className="block size-6 group-data-[open]:hidden"
                />
                <AiOutlineClose
                  aria-hidden="true"
                  className="hidden size-6 group-data-[open]:block"
                />
              </DisclosureButton>
            </div>
            <div className="hidden lg:ml-4 lg:flex lg:items-center">
              <Button
                variant="bordered"
                radius="full"
                className="border-blue-300 text-white"
              >
                Some Button
              </Button>
            </div>
          </div>
        </div>

        <DisclosurePanel className="lg:hidden">
          <div className="space-y-1 pb-3 pt-2">
            {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
            <DisclosureButton
              as="a"
              href="#"
              className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
            >
              Dashboard
            </DisclosureButton>
            <DisclosureButton
              as="a"
              href="#"
              className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
            >
              Team
            </DisclosureButton>
            <DisclosureButton
              as="a"
              href="#"
              className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
            >
              Projects
            </DisclosureButton>
            <DisclosureButton
              as="a"
              href="#"
              className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
            >
              Calendar
            </DisclosureButton>
          </div>
          <div className="border-t border-gray-200 pb-3 pt-4">
            <div className="flex items-center px-4">
              <div className="shrink-0">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="size-10 rounded-full"
                />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">
                  Tom Cook
                </div>
                <div className="text-sm font-medium text-gray-500">
                  tom@example.com
                </div>
              </div>
            </div>
            <div className="mt-3 space-y-1">
              <DisclosureButton
                as="a"
                href="#"
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
              >
                Your Profile
              </DisclosureButton>
              <DisclosureButton
                as="a"
                href="#"
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
              >
                Settings
              </DisclosureButton>
              <DisclosureButton
                as="a"
                href="#"
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
              >
                Sign out
              </DisclosureButton>
            </div>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </>
  );
};

export default nav;
