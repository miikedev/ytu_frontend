import React from "react";

import { Link } from "react-router-dom";
import { Menu } from "@headlessui/react";

const dropdownItem = {
  name: "News",
  targetURL: "/news",
  dropdownItems: [
    {
      name: "Statements",
      targetURL: "/news/statements",
    },
    {
      name: "Recent News",
      targetURL: "/news/recent-news",
    },
  ],
};

function DropDown(props) {
  const { name, dropdownItems } = props.dropdownItem;
  return (
    <Menu as="div" className="relative">
      <Menu.Button
        type="button"
        className="text-gray-500 group p-2 inline-flex items-center rounded-md bg-white text-base font-normal hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
        aria-expanded="false"
      >
        <span>{name}</span>
        <svg
          className="text-gray-400 ml-1 h-4 w-4 group-hover:text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </Menu.Button>

      <Menu.Items className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
        {/* Drop down elements  */}
        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
          {/* Drop down elements  */}
          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
            {dropdownItems.map((dditem) => {
              return (
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to={`${dditem.targetURL}`}
                      className={`-m-3 flex items-start rounded-lg p-3 
                        ${
                          active ? "bg-gray-50 text-gray-900 " : "text-gray-500"
                        }
                        `}
                    >
                      <div className="ml-4">
                        <p className="text-base font-medium">{dditem.name}</p>
                      </div>
                    </Link>
                  )}
                </Menu.Item>
              );
            })}
          </div>
        </div>
      </Menu.Items>
    </Menu>
  );
}

export default DropDown;
