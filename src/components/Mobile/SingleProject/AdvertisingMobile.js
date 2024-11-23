import React from "react";
import fondoMobile from "../../../images/Mobile/fondoMobile.png";
import casaImage from "../../../images/Mobile/casa.png"; 
import advertising from "../../../images/Mobile/advertising.png";

function AdvertisingMobile() {
  return (
    <div className="w-full h-auto">
      <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>
      <div
        className="relative z-10 flex flex-col items-center justify-start h-full px-0"
        style={{
          backgroundImage: `url(${fondoMobile})`,
          backgroundSize: "cover",
        }}
      >
        <div className="flex items-start mt-4">
          <img
            src={advertising}
            alt="Advertising"
            className="w-[47px] h-[38px] flex-shrink-0"
          />
          <div className="flex flex-col ml-4">
            <p
              className="text-black font-fira-sans text-[13.76px] font-medium leading-[20.015px]"
              style={{ width: "254.328px" }}
            >
              Advertising Internet Online Opportunities To Explore
            </p>
          </div>
        </div>
        <p
          className="mt-4 text-black font-fira-sans text-[11.259px] font-normal leading-[17.513px]"
          style={{ width: "329px" }}
        >
          From ads that dance or sing to MTV-like commercials, online
          advertisers are now using a new type of technology called “rich media”
          to attract consumers.
        </p>

        {/* Horizontal Line */}
        <div className="w-[330px] h-[1px] bg-[#00942C] my-4"></div>

        {/* Repeated Text with House Image */}
        <div className="flex items-center justify-between w-full px-4">
          <p
            className="ml-12 text-black text-right font-fira-sans text-[13.76px] font-medium leading-[20.015px]"
            style={{ width: "254.328px" }}
          >
            Advertising Internet Online Opportunities To Explore
          </p>
          <img
            src={casaImage}
            alt="Casa"
            className="w-[48.618px] h-[32px] flex-shrink-0 ml-4"
          />
        </div>
        <p
          className="text-right mt-4 text-black font-fira-sans text-[11.259px] font-normal leading-[17.513px]"
          style={{ width: "329px" }}
        >
          From ads that dance or sing to MTV-like commercials, online
          advertisers are now using a new type of technology called “rich media”
          to attract consumers.
        </p>
        <div className="w-[99px] h-[1px] bg-[#00942C] my-4"></div>
      </div>
    </div>
  );
}

export default AdvertisingMobile;
