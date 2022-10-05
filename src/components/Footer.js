import React from "react";
import {
  AiFillFacebook,
  AiFillHome,
  AiFillMail,
  AiFillPhone,
} from "react-icons/ai";

function Footer() {
  return (
    <div className="bg-zinc-800 text-gray-200 divide-y divide-solid divide-gray-200">
      <div className="space-x-6 grid grid-cols-1 lg:grid-cols-3 px-12 py-8 md:px-12 lg:px-24 xl:px-36">
        {/* Info  */}
        <div className="flex max-w-md space-x-6">
          <img
            className="mx-auto object-cover h-24 w-24"
            src="./utils/su_logo.png"
            alt="SU Logo"
          />
          <div className="">
            <p className="mb-5">
              Yangon Technological University Students' Union
            </p>
            <div className="flex space-x-2">
              <div className="bg-white h-6 w-6 rounded-sm">
                <img
                  className="mx-auto py-1"
                  src="./utils/instagram.png"
                  alt="Instagram"
                />
              </div>
              <div className="bg-white h-6 w-6 rounded-sm">
                <img
                  className="mx-auto py-1"
                  src="./utils/instagram.png"
                  alt="Instagram"
                />
              </div>
              <div className="bg-white h-6 w-6 rounded-sm">
                <img
                  className="mx-auto py-1"
                  src="./utils/instagram.png"
                  alt="Instagram"
                />
              </div>
              <div className="bg-white h-6 w-6 rounded-sm">
                <img
                  className="mx-auto py-1"
                  src="./utils/instagram.png"
                  alt="Instagram"
                />
              </div>
              <div className="bg-white h-6 w-6 rounded-sm">
                <img
                  className="mx-auto py-1"
                  src="./utils/instagram.png"
                  alt="Instagram"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Other Pages  */}
        <div className="max-w-lg my-12 lg:my-0">
          <p className="pb-3 font-semibold">Other Pages</p>
          <div className="flex space-x-3 items-center pb-2">
            <img src="./utils/cdm.png" alt="CDM logo" />
            <p className="text-sm">CDM Support for RIT YIT YTU Heros</p>
          </div>
          <div className="flex space-x-3 items-center pb-2">
            <img src="./utils/cdm.png" alt="CDM logo" />
            <p className="text-sm">CDM Support for RIT YIT YTU Heros</p>
          </div>
        </div>

        {/* Contact Us  */}
        <div className="max-w-lg">
          <p className="pb-3 font-semibold">Contact Us</p>
          <div className="flex space-x-3 items-center pb-2">
            <div className="h-4 w-4">
              <AiFillHome />
            </div>
            <p className="text-sm">
              Insein Township, Gyogone, Near BPI Bus-stop, On Insein Road,
              Yangon, Myanmar (Burma)
            </p>
          </div>
          <div className="flex space-x-3 items-center pb-2">
            <div className="h-4 w-4">
              <AiFillMail />
            </div>
            <p className="text-sm">ytustudentsunion@outlook.com</p>
          </div>
          <div className="flex space-x-3 items-center pb-2">
            <div className="h-4 w-4">
              <AiFillPhone />
            </div>
            <p className="text-sm">+959 42266 6606</p>
          </div>
        </div>
      </div>
      <p className="text-center p-10">
        @2022 YTU Student Union. All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;
