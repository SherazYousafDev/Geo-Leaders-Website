import React from "react";
import { Sparkles } from "lucide-react";

import pilingImg from "../assets/images/pilingImg.jpg";
import groundImg from "../assets/images/groundImg.jpg";
import slopeImg from "../assets/images/slopeImg.JPG";
import shoringImg from "../assets/images/shoringImg.jpg";
import ScrollAnimation from "../Components/ScrollAnimation";

import Header from "../Components/Header";
import MachinesTools from "../Components/MachinesTools";
import FooterSection from "../Components/FooterSection";

const Services = () => {
  const services = [
    {
      id: "piling",
      title: "Piling Foundation Engineering",
      description:
        "GEO-Leaders specializes in the design and construction of deep foundations, including bored piles, and micropiles. Our expertise ensures that foundations are tailored to the specific soil conditions and load requirements of each project, providing a stable and durable base for structures of all sizes...",
      image: pilingImg,
    },
    {
      id: "ground",
      title: "Ground Improvement Techniques",
      description:
        " We offer a range of ground improvement services aimed at enhancing the properties of soil to support construction activities. Our techniques include soil stabilization, compaction grouting, vibro-compaction and vibro-replacement which improve the load-bearing capacity, reduce settlement, and mitigate liquefaction risks in challenging ground conditions... ",
      image: groundImg,
    },
    {
      id: "slope",
      title: "Slope Stability Analysis",
      description:
        "Our team conducts comprehensive slope stability analysis to assess and manage the risk of landslides and soil movement on sloped terrains. We utilize advanced modeling and analysis tools to design effective stabilization measures, such as retaining walls, soil nails, and geosynthetics, ensuring long-term stability and safety....",
      image: slopeImg,
    },
    {
      id: "shoring",
      title: "Earth Retaining & Shoring Structures",
      description:
        "provides innovative solutions for earth retaining structures, including sheet piling, diaphragm walls, soldier piles, and reinforced earth systems. Our designs are customized to meet the specific needs of each site, whether for temporary excavation support or permanent retaining walls, ensuring structural integrity and safety....",
      image: shoringImg,
    },
  ];

  return (
    <>
      <Header />

      {/* Services Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 border-b-2 border-[#FF5E15]">
        {/* Section Header */}
        <ScrollAnimation direction="up">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full">
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">
                Our Expertise
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight">
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

        {/* Services List */}
        <div className="space-y-20">
          {services.map((service, index) => (
            <ScrollAnimation
              key={service.id}
              direction="up"
              delay={index * 0.15} // stagger animations
            >
              <section
                id={service.id}
                className={`flex flex-col md:flex-row items-center md:space-x-12 ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Left: Image */}
                <div className="w-full md:w-1/3 h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Right: Text */}
                <div className="w-full md:w-2/3 mt-8 md:mt-0">
                  <h2 className="text-3xl font-semibold mb-4 text-gray-800">
                    {service.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </section>
            </ScrollAnimation>
          ))}
        </div>
      </div>

      <MachinesTools />
      <FooterSection />
    </>
  );
};

export default Services;
