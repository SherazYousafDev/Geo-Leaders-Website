import React from "react";
import { FaCogs, FaToolbox } from "react-icons/fa";
import ScrollAnimation from "./ScrollAnimation";

const MachinesTools = () => {
  const machines = [
    { name: "Bauer BG20 H", quantity: 1, model: 2006, usage: "Rig machine" },
    { name: "Soilmec SR4O", quantity: 1, model: 2007, usage: "Rig machine" },
    {
      name: "Stone Column Prob 135KW",
      quantity: 3,
      model: 2017,
      usage: "Stone Column",
    },
    {
      name: "Stone Column Prob 75KW",
      quantity: 2,
      model: 2017,
      usage: "Stone Column",
    },
    {
      name: "A.B.I Machine ZEPPELIN",
      quantity: 1,
      model: 2010,
      usage: "Stone Column",
    },
    {
      name: "Crawler Crane",
      quantity: 2,
      model: 2010,
      usage: "I-Beam/Sheet Pile installation",
    },
    { name: "Pickup", quantity: 1, model: 2020, usage: "General" },
    { name: "Excavator", quantity: 1, model: 2010, usage: "General" },
    { name: "Vibro Hammer", quantity: 1, model: 2013, usage: "Excavation" },
    {
      name: "Power Back",
      quantity: 1,
      model: 2013,
      usage: "I-Beam/Sheet Pile installation",
    },
  ];

  const tools = [
    { name: "Casing 100 cm", quantity: 8, usage: "Piling 100cm" },
    { name: "Casing 80 cm", quantity: 10, usage: "Piling 80 cm" },
    { name: "Augur", quantity: 3, usage: "Drilling" },
    { name: "Backets", quantity: 2, usage: "Drilling" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 ">

      {/* Title */}
      <ScrollAnimation direction="up">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Machines & Tools
        </h1>
        <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-10">
          High-Performance Machines & Tools That Drive Excellence
        </p>
      </ScrollAnimation>

      {/* Machines Section */}
      <section className="mb-16">
        <ScrollAnimation direction="left">
          <h2 className="text-3xl font-semibold mb-8 text-gray-700 flex items-center gap-3">
            <FaCogs /> Machines
          </h2>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {machines.map((m, index) => (
            <ScrollAnimation
              key={index}
              direction="up"
              delay={index * 0.1}
            >
              <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {m.name}
                  </h3>
                  <span className="text-sm font-medium text-gray-500">
                    Model: {m.model}
                  </span>
                </div>
                <p className="text-gray-600 mb-2">Usage: {m.usage}</p>
                <p className="text-gray-600">Quantity: {m.quantity}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section>

        <ScrollAnimation direction="right">
          <h2 className="text-3xl font-semibold mb-8 text-gray-700 flex items-center gap-3">
            <FaToolbox /> Tools
          </h2>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((t, index) => (
            <ScrollAnimation
              key={index}
              direction="up"
              delay={index * 0.1}
            >
              <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800">{t.name}</h3>
                <p className="text-gray-600 mb-2">Usage: {t.usage}</p>
                <p className="text-gray-600">Quantity: {t.quantity}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MachinesTools;
