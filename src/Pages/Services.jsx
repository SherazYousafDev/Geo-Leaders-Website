import React from "react";
import { Sparkles } from "lucide-react";

import pilingImg from "../assets/images/pilingImg.jpeg";
import groundImg from "../assets/images/groundImg.jpeg";
import slopeImg from "../assets/images/slopeImg.JPG";
import shoringImg from "../assets/images/shoringImg.jpg";

import ScrollAnimation from "../Components/ScrollAnimation";
import Header from "../Components/Header";
import FooterSection from "../Components/FooterSection";
import TopArrow from "../Components/TopArrow";

const Services = () => {
  const services = [
    {
      id: "piling",
      title: "Piling Foundation Engineering",
      description:
        "GEO-Leaders specializes in designing and constructing deep foundations, including bored piles and micropiles. Our expert engineers ensure each foundation suits its soil and load requirements, guaranteeing long-term stability and performance.",
      image: pilingImg,
    },
    {
      id: "ground",
      title: "Ground Improvement Techniques",
      description:
        "We offer a range of advanced ground improvement solutions such as soil stabilization, compaction grouting, vibro-compaction, and vibro-replacement that optimize soil conditions, enhance strength, and reduce settlement risks in complex projects.",
      image: groundImg,
    },
    {
      id: "slope",
      title: "Slope Stability Analysis",
      description:
        "Our team performs comprehensive slope stability assessments to manage risks of landslides and ground movement. Using advanced modeling, we design stabilization systems like retaining walls, soil nailing, and geosynthetics for long-term safety.",
      image: slopeImg,
    },
    {
      id: "shoring",
      title: "Earth Retaining & Shoring Structures",
      description:
        "We provide efficient, innovative designs for retaining and shoring systems, including sheet piling, diaphragm walls, and soldier piles. Each solution is tailored to site-specific conditions, ensuring strength, durability, and construction safety.",
      image: shoringImg,
    },
  ];

  return (
    <>
      <Header />
      <TopArrow />

      <div className="max-w-6xl mx-auto px-6 py-20 border-b-2 border-[var(--color-prim)]">
        {/* Section Header (Appears Instantly) */}
        <div className="text-center mb-20 space-y-6 opacity-100 transition-opacity duration-700">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-[var(--color-prim)] rounded-full shadow-sm">
            <Sparkles className="w-5 h-5 text-[var(--color-sec)]" />
            <span className="text-[var(--color-sec)] font-semibold text-sm uppercase tracking-wider">
              Our Expertise
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-[var(--color-head)] leading-tight">
            Our{" "}
            <span className="text-[var(--color-prim)]">
              Professional Services
            </span>
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Innovative geotechnical solutions designed to meet every project’s
            technical and environmental demands.
          </p>
        </div>

        {/* Services Cards */}
        <div className="space-y-24">
          {services.map((service, index) => {
            // First card appears instantly, others scroll-animate
            if (index === 0) {
              return (
                <section
                  key={service.id}
                  id={service.id}
                  className={`flex flex-col md:flex-row items-center gap-12`}
                >
                  {/* Image */}
                  <div className="w-full md:w-1/2 relative group">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-[400px] object-cover rounded-2xl shadow-lg transform group-hover:scale-105 transition duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/20 rounded-2xl group-hover:bg-black/10 transition" />
                  </div>

                  {/* Content */}
                  <div className="w-full md:w-1/2 space-y-4">
                    <h3 className="text-3xl font-semibold text-[var(--color-head)]">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </section>
              );
            } else {
              return (
                <ScrollAnimation
                  key={service.id}
                  direction="up"
                  delay={0.2 + index * 0.15}
                  distance={20}
                  duration={0.7}
                  once
                >
                  <section
                    id={service.id}
                    className={`flex flex-col md:flex-row items-center gap-12 ${
                      index % 2 !== 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Image */}
                    <div className="w-full md:w-1/2 relative group">
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        className="w-full h-[400px] object-cover rounded-2xl shadow-lg transform group-hover:scale-105 transition duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-black/20 rounded-2xl group-hover:bg-black/10 transition" />
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-1/2 space-y-4">
                      <h3 className="text-3xl font-semibold text-[var(--color-head)]">
                        {service.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </section>
                </ScrollAnimation>
              );
            }
          })}
        </div>
      </div>

      <FooterSection />
    </>
  );
};

export default Services;
