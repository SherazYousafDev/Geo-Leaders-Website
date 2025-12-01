import React from "react";
import ScrollAnimation from "./ScrollAnimation";
import Certificate from "../assets/images/Certificate.png";

export default function CertificateSection() {
  const certificate = {
    title: "Commercial License",
    issuer: "Government of Dubai / Dubai Economy and Tourism",
    year: "2024",
    image: Certificate, // Path to your uploaded image
  };

  return (
    <ScrollAnimation direction="up">
      <div className="w-full bg-[#fef9f5] py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <ScrollAnimation direction="up">
            <div className="text-center mb-16 space-y-4">
              <div className="inline-flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">
                  Our Certification
                </span>
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                Official Commercial License
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                Recognized by the Government of Dubai, this certification
                affirms our compliance with regulatory standards and reflects
                our commitment to trust, transparency, and professional
                excellence.
              </p>
            </div>
          </ScrollAnimation>

          {/* Single Certificate Card */}
          <ScrollAnimation direction="up" delay={0.2}>
            <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-orange-200 mx-auto max-w-md">
              {/* Certificate Image */}
              <div className="overflow-hidden">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Certificate Info */}
              {/* <div className="p-6 space-y-2 text-center">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors duration-300">
                  {certificate.title}
                </h3>
                <p className="text-gray-600 text-sm">{certificate.issuer}</p>
                <p className="text-gray-400 text-xs">{certificate.year}</p>
              </div> */}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </ScrollAnimation>
  );
}
