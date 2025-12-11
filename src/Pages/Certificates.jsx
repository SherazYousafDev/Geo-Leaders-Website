import React from "react";
import { useEffect } from "react";
import Header from "../Components/Header";
import FooterSection from "../Components/FooterSection";
import Certificate from "../assets/images/Certificate.png";
import TopArrow from "../Components/TopArrow";
import CTABannerSection from "../Components/CTABannerSection";

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
  // {
  //   title: "IFG ABU DHABI - ISO 9001 | 2015",
  //   desc: "ISO CERTIFICATE",
  //   img: "https://ifguae.com/wp-content/uploads/2025/08/IFG-ABU-DHABI-ISO-9001-2015-768x1086.jpg",
  // },
  // {
  //   title: "IFG ABU DHABI - ISO 14001 | 2015",
  //   desc: "ISO CERTIFICATE",
  //   img: "https://ifguae.com/wp-content/uploads/2025/08/IFG-ABU-DHABI-ISO-14001-2015-768x1086.jpg",
  // },
  // {
  //   title: "IFG ABU DHABI - ISO 45001 | 2018",
  //   desc: "ISO CERTIFICATE",
  //   img: "https://ifguae.com/wp-content/uploads/2025/08/IFG-ABU-DHABI-ISO-45001-2018-768x1086.jpg",
  // },
  // {
  //   title: "ADSSC",
  //   desc: "Appreciation Certificate",
  //   img: "https://ifguae.com/wp-content/uploads/2025/09/cifg-768x544.jpg",
  // },
  // {
  //   title: "Nakheel",
  //   desc: "Appreciation Certificate",
  //   img: "https://ifguae.com/wp-content/uploads/2025/08/Cover-Appreciation-Certificate-Nakheel.jpg",
  // },
];

export default function Certificates() {
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();

    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <>
      <Header />
      <TopArrow />

      <div className="w-full bg-white py-16" id="resources-grid">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-2 text-[#1C3867] font-semibold">
            <i className="fas fa-angle-double-right"></i>
            <span>Certificates</span>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold mt-2">
            Some of our Certificates
          </h3>
        </div>

        {/* Certificates Grid */}
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10  px-4">
          {certificates.map((item, i) => (
            <div
              key={i}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border-gray-300 border "
            >
              <div className="w-full h-80 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-fit h-fit object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-4 text-center bg-[#1C3867] text-white">
                <h4 className="font-semibold text-lg">{item.title}</h4>
                <p className="text-gray-100 mt-1">{item.desc}</p>
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
