import React from "react";
import { Link } from "react-router-dom";
import { Check, ExternalLink } from "lucide-react";
import comp1 from "../assets/images/comp1.jpg";
import comp2 from "../assets/images/comp2.jpeg";
import ScrollAnimation from "./ScrollAnimation"; // <-- Import your wrapper

export default function ConstructionAboutSection() {
  return (
    <ScrollAnimation direction="up">
      {" "}
      {/* Animate entire section from bottom */}
      <div className="w-full bg-white py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Images */}
            <ScrollAnimation direction="left" delay={0.1}>
              {" "}
              {/* Image slides from left */}
              <div className="relative">
                <div className="relative z-10 ">
                  <img
                    src={comp1}
                    alt="Construction Site"
                    className="w-[80%] h-[500px] object-cover rounded-lg shadow-lg  "
                  />
                </div>

                <div className="absolute -bottom-20 right-0 lg:right-[50px] w-[280px] h-[320px] z-20">
                  <img
                    src={comp2}
                    alt="Engineer Team"
                    className="w-full h-full object-cover rounded-lg shadow-xl border-8 border-main"
                  />
                </div>
              </div>
            </ScrollAnimation>

            {/* Right Side - Content */}
            <ScrollAnimation direction="right" delay={0.2}>
              {" "}
              {/* Content slides from right */}
              <div className="space-y-6">
                {/* Subtitle */}
                <h5 className="text-prim font-semibold text-sm md:text-base uppercase tracking-wider mt-14 md:mt-0">
                  Geo - LEaders
                </h5>

                {/* Main Heading */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-head leading-tight max-w-xl wrap-break-word">
                  On These Beams, We’re Building Dreams.
                </h2>

                {/* Description */}
                <p className="text-gray-500 leading-relaxed text-base">
                  Geo - Leaders Piling and Foundation Contracting was
                  established to provide specialized geotechnical services in
                  the construction industry. With a focus on piling, drilling,
                  and various shoring systems, we have built a reputation for
                  delivering reliable and innovative solutions tailored to the
                  unique challenges of each project. Leveraging years of
                  experience and cutting-edge technology, GEO-Leaders has
                  quickly become a trusted name in the industry, known for its
                  commitment to quality and excellence in foundation and soil
                  improvement works .
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0">
                      <div className="w-14 h-14 rounded-full flex items-center justify-center">
                        <img
                          src="https://gracethemesdemo.com/dreambuild/wp-content/uploads/2024/07/company_icon1.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">
                        Building Quality Standards
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="shrink-0">
                      <div className="w-14 h-14 rounded-full flex items-center justify-center">
                        <img
                          src="https://gracethemesdemo.com/dreambuild/wp-content/uploads/2024/07/company_icon2.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">
                        Certified Engineer <br /> Team
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Checklist Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  {[
                    "100% Satisfaction",
                    "Trained Employees",
                    "Worldwide Services",
                    "Quality Control System",
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Check
                        className="w-5 h-5 text-main shrink-0"
                        strokeWidth={3}
                      />
                      <span className="text-gray-700 font-medium">{text}</span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <div className="pt-4">
                  <Link
                    to="/about"
                    className="bg-main hover:bg-sec hover:text-main text-white font-semibold px-8 py-4 rounded-md transition-all duration-300 flex items-center gap-2 group shadow-lg hover:shadow-xl"
                  >
                    Discover More
                    <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}
