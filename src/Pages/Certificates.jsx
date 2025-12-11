import React, { useEffect } from "react";
import Header from "../Components/Header";
import FooterSection from "../Components/FooterSection";
import TopArrow from "../Components/TopArrow";
import CTABannerSection from "../Components/CTABannerSection";
import Certificate from "../assets/images/Certificate.png";

const certificates = [
  {
    title: "IFG DUBAI - ISO 9001 | 2015",
    desc: "ISO CERTIFICATE",
    img: Certificate,
  },
  {
    title: "IFG DUBAI - ISO 14001 | 2015",
    desc: "ISO CERTIFICATE",
    img: Certificate,
  },
  {
    title: "IFG DUBAI - ISO 45001 | 2018",
    desc: "ISO CERTIFICATE",
    img: Certificate,
  },
];

export default function Certificates() {
  return (
    <>
      <Header />
      <TopArrow />

      <div className="w-full bg-white py-16" id="resources-grid">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-2 text-sec font-semibold">
            <span>Certificates</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mt-2">
            Some of our <span className="text-main">Certificates</span>
          </h3>
        </div>

        {/* Certificates Grid */}
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4">
          {certificates.map((item, i) => (
            <div
              key={i}
              className="w-[300px] shadow-md rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Certificate Image */}
              <div className="w-[300px] flex items-center justify-center p-2">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="max-w-full max-h-[350px] object-cover transition-transform duration-300 hover:scale-105 will-change-transform"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <CTABannerSection />
      <FooterSection />
    </>
  );
}
