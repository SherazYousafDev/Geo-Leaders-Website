import React, { useState } from "react";
import { Sparkles, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  GiDrill,
  GiGroundbreaker,
  GiMountainCave,
  GiBrickWall,
} from "react-icons/gi";

import ScrollAnimation from "./ScrollAnimation"; // Make sure the path is correct

export default function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      number: "01",
      title: "Piling Foundation Engineering",
      description:
        "GEO-Leaders specializes in the design and construction of deep foundations, including bored piles, and micropiles. Our expertise ensures that foundations are tailored to the specific soil conditions and load requirements of each project, providing a stable and durable base for structures of all sizes.",
      icon: GiDrill,
      gradient: "from-orange-500 to-red-600",
      bgPattern: "bg-orange-50",
    },
    {
      id: 2,
      number: "02",
      title: "Ground Improvement Techniques",
      description:
        "We offer a range of ground improvement services aimed at enhancing the properties of soil to support construction activities. Our techniques include soil stabilization, compaction grouting, vibro-compaction and vibro-replacement which improve the load-bearing capacity, reduce settlement, and mitigate liquefaction risks in challenging ground conditions.",
      icon: GiGroundbreaker,
      gradient: "from-blue-500 to-indigo-600",
      bgPattern: "bg-blue-50",
    },
    {
      id: 3,
      number: "03",
      title: "Slope Stability Analysis",
      description:
        "Our team conducts comprehensive slope stability analysis to assess and manage the risk of landslides and soil movement on sloped terrains. We utilize advanced modeling and analysis tools to design effective stabilization measures, such as retaining walls, soil nails, and geosynthetics, ensuring long-term stability and safety.",
      icon: GiMountainCave,
      gradient: "from-green-500 to-emerald-600",
      bgPattern: "bg-green-50",
    },
    {
      id: 4,
      number: "04",
      title: "Earth Retaining Shoring Structures",
      description:
        "Provides innovative solutions for earth retaining structures, including sheet piling, diaphragm walls, soldier piles, and reinforced earth systems. Our designs are customized to meet the specific needs of each site, whether for temporary excavation support or permanent retaining walls, ensuring structural integrity and safety.",
      icon: GiBrickWall,
      gradient: "from-purple-500 to-pink-600",
      bgPattern: "bg-purple-50",
    },
  ];

  return (
    <ScrollAnimation direction="up">
      {" "}
      {/* Animate entire section */}
      <div className="w-full bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 md:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <ScrollAnimation direction="up" delay={0.1}>
            <div className="text-center mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full">
                <Sparkles className="w-4 h-4 text-orange-500" />
                <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">
                  Our Expertise
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#181D4E] leading-tight">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                  Services
                </span>{" "}
                That We Provide
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                Comprehensive geotechnical solutions tailored to your project's
                unique requirements
              </p>
            </div>
          </ScrollAnimation>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isHovered = hoveredCard === service.id;

              return (
                <ScrollAnimation
                  key={service.id}
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={index * 0.2}
                >
                  <div
                    onMouseEnter={() => setHoveredCard(service.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 h-full ${
                      isHovered
                        ? "border-orange-500 scale-105"
                        : "border-gray-100"
                    }`}
                  >
                    {/* Background Pattern */}
                    <div
                      className={`absolute top-0 right-0 w-64 h-64 ${service.bgPattern} rounded-full blur-3xl opacity-30 transform translate-x-20 -translate-y-20 group-hover:scale-150 transition-transform duration-700`}
                    ></div>

                    {/* Number Badge */}
                    <div className="absolute top-6 right-6 z-10">
                      <div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-all duration-500`}
                      >
                        <span className="text-white font-bold text-xl">
                          {service.number}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="relative p-8 md:p-10 space-y-6">
                      {/* Icon Circle */}
                      <div
                        className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500`}
                      >
                        <Icon className="w-10 h-10 text-white" />
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-red-600 transition-all duration-300">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed text-base">
                        {service.description}
                      </p>

                      {/* Read More Link */}
                      <div className="pt-4">
                        <Link
                          to="/services"
                          className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:gap-4 transition-all duration-300 group/btn"
                        >
                          <span>Learn More</span>
                          <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </div>

                      {/* Decorative Line */}
                      <div
                        className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${
                          service.gradient
                        } transform origin-left ${
                          isHovered ? "scale-x-100" : "scale-x-0"
                        } transition-transform duration-500`}
                      ></div>
                    </div>

                    {/* Corner Accent */}
                    <div className="absolute bottom-0 left-0 w-24 h-24">
                      <div
                        className={`absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr ${
                          service.gradient
                        } opacity-10 rounded-tr-full transform ${
                          isHovered ? "scale-100" : "scale-0"
                        } transition-transform duration-500 origin-bottom-left`}
                      ></div>
                    </div>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}
