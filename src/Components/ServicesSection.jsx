import React, { useState } from "react";
import { Sparkles, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollAnimation from "./ScrollAnimation"; // Ensure the path is correct

export default function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      number: "01",
      title: "Piling Foundation Engineering",
      description:
        "GEO-Leaders specializes in the design and construction of deep foundations, including bored piles, and micropiles. Our expertise ensures that foundations are tailored to the specific soil conditions and load requirements of each project.",
      image: "/images/pilingImg.jpeg",
    },
    {
      id: 2,
      number: "02",
      title: "Ground Improvement Techniques",
      description:
        "We offer a range of ground improvement services aimed at enhancing the properties of soil to support construction activities. Our techniques improve load-bearing capacity, reduce settlement, and mitigate liquefaction risks.",
      image: "/images/groundImg.jpeg",
    },
    {
      id: 3,
      number: "03",
      title: "Slope Stability Analysis",
      description:
        "Our team conducts comprehensive slope stability analysis to assess and manage the risk of landslides and soil movement. We design effective stabilization measures, ensuring long-term stability and safety.",
      image: "/images/slopeImg.jpg",
    },
    {
      id: 4,
      number: "04",
      title: "Earth Retaining Shoring Structures",
      description:
        "Provides innovative solutions for earth retaining structures, including sheet piling, diaphragm walls, soldier piles, and reinforced earth systems. Designs are customized for temporary or permanent solutions.",
      image: "/images/shoringImg.jpg",
    },
  ];

  return (
    <ScrollAnimation direction="up">
      <div className="w-full bg-gray-50 py-16 md:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <ScrollAnimation direction="up" delay={0.1}>
            <div className="text-center mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-prim)] rounded-full">
                <Sparkles className="w-4 h-4 text-[var(--color-sec)]" />
                <span className="text-[var(--color-sec)] font-semibold text-sm uppercase tracking-wider">
                  Our Expertise
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[var(--color-head)] leading-tight">
                Our <span className="text-[var(--color-prim)]">Services</span>{" "}
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
                        ? "border-[var(--color-main)] scale-105"
                        : "border-gray-100"
                    }`}
                  >
                    {/* Number Badge */}
                    <div className="absolute top-6 right-6 z-10">
                      <div className="w-16 h-16 rounded-xl bg-[var(--color-main)] flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-all duration-500">
                        <span className="text-white font-bold text-xl">
                          {service.number}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative p-8 md:p-10 space-y-6">
                      {/* Image */}
                      <div className="inline-flex items-center justify-center w-40 h-40 rounded-2xl shadow-lg overflow-hidden group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                        <img
                          src={service.image}
                          loading="lazy"
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-head)] leading-tight">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed text-base">
                        {service.description}
                      </p>

                      {/* Learn More Link */}
                      <div className="pt-4">
                        <Link
                          to="/services"
                          className="inline-flex items-center gap-2 text-[var(--color-main)] font-semibold hover:gap-4 transition-all duration-300 group/btn"
                        >
                          <span>Learn More</span>
                          <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </div>
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
