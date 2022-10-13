import React from "react";
import { Menu } from "@headlessui/react";
import { Link } from "react-router-dom";

import DropDown from "./DropDown";

function MobileNavBar(props) {
  const navLinks = props.navLinks;
  const publicURL = process.env.PUBLIC_URL;
  return (
    <div className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden z-50">
      <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
        <Menu as="div" className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <img
                className="w-auto h-14"
                src={`${publicURL}/utils/su_logo.png`}
                alt=""
              />
            </div>
            <div className="-mr-2">
              <Menu.Button
                type="button"
                className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                {/* Cross Logo  */}
                {/* <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg> */}
                <span className="sr-only">Open menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </Menu.Button>
            </div>
          </div>
          <Menu.Items className="mt-6">
            <nav className="grid gap-y-5">
              {navLinks.map((navLink) => {
                return navLink["dropdownItems"] ? (
                  <DropDown
                    key={`nav_${navLink["name"]}`}
                    dropdownItem={navLink}
                  />
                ) : (
                  <Link
                    key={`nav_${navLink["name"]}`}
                    to={navLink["targetURL"]}
                    className="text-gray-500 group p-2 inline-flex items-center rounded-md bg-white text-base font-normal hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:text-gray-900"
                  >
                    {navLink["name"]}
                  </Link>
                );
              })}
            </nav>
          </Menu.Items>
        </Menu>
      </div>
    </div>
  );
}

export default MobileNavBar;
