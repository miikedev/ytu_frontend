import React from "react";
import { AiFillHome, AiFillMail, AiFillPhone } from "react-icons/ai";

import footerData from "../data/footer";

function Footer() {
  const publicURL = process.env.PUBLIC_URL;
  return (
    <div className="bg-zinc-800 text-gray-200 divide-y divide-solid divide-gray-200">
      <div className="md:space-x-6 grid grid-cols-1 lg:grid-cols-3 px-6 py-8 md:px-12 lg:px-24 xl:px-36">
        {/* Info  */}
        <div className="flex max-w-md space-x-6">
          <img
            className="mx-auto object-cover h-16 w-16 md:h-24 md:w-24"
            src={footerData.mainSection.logo}
            alt="SU Logo"
          />
          <div className="">
            <p className="mb-5">{footerData.mainSection.title}</p>
            <div className="flex space-x-2">
              {footerData.mainSection.socialMedias.map((socialMedia) => {
                return (
                  <div
                    key={socialMedia.platform}
                    className="bg-white h-6 w-6 rounded-sm"
                  >
                    <a href={socialMedia.platformURL}>
                      <img
                        className="mx-auto py-1"
                        src={socialMedia.imgSrc}
                        alt={socialMedia.platform}
                      />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Other Pages  */}
        <div className="max-w-lg my-8 lg:my-0">
          <p className="pb-3 font-semibold">Other Pages</p>
          {footerData.otherPages.map((pageData) => {
            return (
              <div
                key={pageData.description}
                className="flex space-x-3 items-center pb-2"
              >
                <img src={pageData.imgSrc} alt={pageData.imgSrc} />
                <p className="text-sm">{pageData.description}</p>
              </div>
            );
          })}
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
