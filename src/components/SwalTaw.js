import React from "react";

const publicURL = process.env.PUBLIC_URL;

function SwalTaw() {
  return (
    <div className="mx-10 md:mx-16 lg:mx-36 md:pt-20 pt-10">
      <div className="w-full bg-gradient-to-r from-swaltaw via-white to-swaltaw grid grid-cols-7 rounded-2xl p-4 md:p-8 lg:p-12">
        <div className="col-span-7 md:col-span-4 lg:col-span-3">
          <div className="relative h-72">
            <div className="absolute left-0 h-44 top-10 w-3/5 border-solid border-2 border-gray-400 rounded-xl -skew-y-6"></div>
            <div className="absolute left-6 h-44 w-3/5 border-solid border-2 border-gray-400 rounded-xl -skew-y-6"></div>
            <div className="absolute left-12 -top-3 h-44 w-3/4">
              <img
                src={`${publicURL}/utils/swal_taw_yeik.png`}
                alt="Swal Taw Card"
              />
            </div>
          </div>
        </div>
        <div className="col-span-7 md:col-span-3 lg:col-span-4">
          <h1 className="text-2xl md:text-4xl inline-block text-cyan-900 tracking-tight w-full font-bold mb-9">
            "လစဉ်ထောက်ပို့ စွယ်တော်မြေဖို့"
          </h1>
          <h1 className="text-2xl md:text-4xl inline-block text-gray-700 tracking-tight w-full font-light mb-9 lg:mb-28">
            BIT-RIT-YIT-YTU
          </h1>
          <a href="https://google.com">
            <button className="px-3 py-2 text-sm md:text-base lg:text-lg lg:px-6 lg:py-3 rounded-md border-cyan-900 border-2 text-cyan-900">
              Donate Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SwalTaw;
