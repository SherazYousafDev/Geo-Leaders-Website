import React from "react";
import {
  FaCogs,
  FaToolbox,
  FaHammer,
  FaDrumstickBite,
  FaWrench,
} from "react-icons/fa";
import ScrollAnimation from "../Components/ScrollAnimation";
import Header from "../Components/Header";
import TopArrow from "../Components/TopArrow";
import CTABannerSection from "../Components/CTABannerSection";
import FooterSection from "../Components/FooterSection";

const Machinery = () => {
  const machines = [
    {
      name: "Bauer BG20 H",
      quantity: 1,
      model: 2006,
      usage: "Rig machine",
      image: "/images/machines/BauerImg.webp",
    },
    {
      name: "Soilmec SR40",
      quantity: 1,
      model: 2007,
      usage: "Rig machine",
      image: "/images/machines/Soilmec.webp",
    },
    {
      name: "Stone Column Prob 135KW",
      quantity: 3,
      model: 2017,
      usage: "Stone Column",
      image: "/images/machines/StoneImg.webp",
    },
    {
      name: "Stone Column Prob 75KW",
      quantity: 2,
      model: 2017,
      usage: "Stone Column",
      image: "/images/machines/StoneImg.webp",
    },
    {
      name: "A.B.I Machine ZEPPELIN",
      quantity: 1,
      model: 2010,
      usage: "Stone Column",
      image: "/images/machines/ABI.webp",
    },
    {
      name: "Crawler Crane",
      quantity: 2,
      model: 2010,
      usage: "I-Beam/Sheet Pile installation",
      image: "/images/machines/Crane.webp",
    },
    {
      name: "Excavator",
      quantity: 1,
      model: 2010,
      usage: "General Earthwork",
      image: "/images/machines/excavator.webp",
    },
    {
      name: "Vibro Hammer",
      quantity: 1,
      model: 2013,
      usage: "Excavation",
      image: "/images/machines/Vibro.webp",
    },
  ];

  const tools = [
    {
      name: "Casing 100 cm",
      quantity: 8,
      usage: "Piling 100cm",
      icon: FaHammer,
    },
    {
      name: "Casing 80 cm",
      quantity: 10,
      usage: "Piling 80cm",
      icon: FaHammer,
    },
    { name: "Augur", quantity: 3, usage: "Drilling", icon: FaDrumstickBite },
    { name: "Buckets", quantity: 2, usage: "Drilling", icon: FaWrench },
  ];

  return (
    <>
      <Header />
      <TopArrow />

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Section Header */}
        <ScrollAnimation direction="up">
          <div className="text-center mb-20 space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-main leading-tight">
              Our Equipments
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              High-performance machines and tools engineered for precision
              geotechnical excellence
            </p>
          </div>
        </ScrollAnimation>

        {/* Machines */}
        <section className="mb-24">
          <ScrollAnimation direction="left">
            <h2 className="text-4xl font-bold mb-12 text-gray-800 flex items-center gap-4 justify-center">
              <FaCogs className="w-10 h-10 text-[var(--color-prim)]" />
              Heavy Machinery
            </h2>
          </ScrollAnimation>

          <ScrollAnimation direction="up">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {machines.map((machine, index) => (
                <div
                  key={index}
                  className="group bg-white/90 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-white/50 hover:border-[var(--color-prim)]/20"
                >
                  {/* Image */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={machine.image}
                      alt={machine.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 will-change-transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 pr-4 flex-1 line-clamp-1">
                        {machine.name}
                      </h3>
                      <span className="bg-[var(--color-prim)]/10 text-[var(--color-prim)] px-3 py-1 rounded-full text-sm font-semibold">
                        {machine.model}
                      </span>
                    </div>
                    <div className="space-y-2 text-gray-700">
                      <p className="flex items-center gap-2">
                        <span className="text-gray-500 font-medium">
                          Usage:
                        </span>
                        {machine.usage}
                      </p>
                      <p className="flex items-center gap-2 text-lg font-semibold text-[var(--color-prim)]">
                        <span className="text-gray-500">Qty:</span>
                        {machine.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </section>

        {/* Tools */}
        <section>
          <ScrollAnimation direction="right">
            <h2 className="text-4xl font-bold mb-12 text-gray-800 flex items-center gap-4 justify-center">
              <FaToolbox className="w-10 h-10 text-[var(--color-prim)]" />
              Specialized Tools
            </h2>
          </ScrollAnimation>

          <ScrollAnimation direction="up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {tools.map((tool, index) => {
                const Icon = tool.icon;
                return (
                  <div
                    key={index}
                    className="group bg-gradient-to-r from-[var(--color-prim)]/5 to-[var(--color-prim)]/10 rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-[var(--color-prim)]/20 hover:border-[var(--color-prim)]/40 flex flex-col items-center gap-4"
                  >
                    <Icon className="text-[var(--color-prim)] w-12 h-12" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {tool.name}
                    </h3>
                    <p className="text-gray-700 text-lg mb-2">
                      Usage: {tool.usage}
                    </p>
                    <div className="text-3xl font-bold text-[var(--color-prim)]">
                      {tool.quantity}
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollAnimation>
        </section>
      </div>

      <CTABannerSection />
      <FooterSection />
    </>
  );
};

export default Machinery;
