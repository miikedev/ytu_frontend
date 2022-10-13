import React from "react";

import { Menu } from "@headlessui/react";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";

function DesktopNavBar(props) {
  const publicURL = process.env.PUBLIC_URL;
  const navLinks = props.navLinks;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="flex items-center justify-between border-b-2 border-gray-100 py-3 md:justify-start xl:space-x-8 space-x-3">
        {/* Logo  */}
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <Link to={publicURL}>
            <span className="sr-only">Yangon Technological University SU</span>
            <img
              className="w-auto h-14"
              src={`${publicURL}/utils/su_logo.png`}
              alt=""
            />
          </Link>
        </div>

        {/* Mobile : Hamburger  */}
        <Menu as="div" className="-my-2 -mr-2 md:hidden">
          <Menu.Button
            type="button"
            className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-expanded="false"
          >
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
        </Menu>

        <nav className="hidden space-x-3 xl:space-x-6 md:flex">
          {navLinks.map((navLink) => {
            return navLink["dropdownItems"] ? (
              <DropDown key={`nav_${navLink["name"]}`} dropdownItem={navLink} />
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
        <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0"></div>
      </div>
    </div>
  );
}

export default DesktopNavBar;
