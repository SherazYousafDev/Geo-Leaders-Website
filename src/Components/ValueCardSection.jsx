import React from "react";
import {
  Layers,
  Shield,
  Hammer,
  ShieldCheck,
  UserCheck,
  Leaf,
  Sparkles,
} from "lucide-react";

import ScrollAnimation from "./ScrollAnimation";

export default function ValuesCardsSection() {
  const values = [
    {
      id: 1,
      title: "Safety",
      description:
        "At GEO-Leaders, we prioritize the safety of our employees, clients, and the communities we serve. Every project is executed with a stringent focus on safety protocols and standards.",
      icon: ShieldCheck,
      color: "from-green-500 to-green-600",
    },
    {
      id: 2,
      title: "Integrity",
      description:
        "Honesty and transparency are at the heart of everything we do. We build trust through open communication and ethical business practices.",
      icon: Shield,
      color: "from-blue-600 to-blue-700",
    },
    {
      id: 3,
      title: "Innovation",
      description:
        "We embrace innovation and continually seek out new technologies and methods to improve our services, ensuring that we deliver the best possible outcomes for our clients.",
      icon: Hammer,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 4,
      title: "Quality",
      description:
        "We are dedicated to delivering work of the highest quality, adhering to industry standards and best practices to ensure the success of every project.",
      icon: Layers,
      color: "from-orange-500 to-orange-600",
    },
    {
      id: 5,
      title: "Customer Focus",
      description:
        "Our clients' needs are central to our operations. We work closely with our clients to understand their challenges and provide tailored solutions that meet their specific requirements.",
      icon: UserCheck,
      color: "from-pink-500 to-pink-600",
    },
    {
      id: 6,
      title: "Sustainability",
      description:
        "We are committed to environmentally responsible practices that minimize our impact on the environment and contribute to the sustainability of the communities we work in.",
      icon: Leaf,
      color: "from-green-400 to-green-500",
    },
  ];

  return (
    <ScrollAnimation direction="up">
      <div className="w-full bg-white py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <ScrollAnimation direction="up" delay={0.1}>
            <div className="mb-16 space-y-4 text-left max-w-4xl">
              {/* Small Label / Section Tag */}
              <div className="flex items-center gap-2">
                <span className="text-sec font-semibold text-sm uppercase tracking-wider">
                  What We Stand For
                </span>
                <div className="flex-1 h-px bg-[var(--color-prim)]"></div>
              </div>

              {/* Main Heading */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--color-prim)] leading-tight">
                Our <span className="text-[var(--color-sec)]">Core</span>{" "}
                Values
              </h2>

              {/* Optional Subheading / Description */}
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl">
                We provide top-notch geotechnical solutions designed to meet the
                unique requirements of every project, ensuring quality, safety,
                and reliability in every step.
              </p>
            </div>
          </ScrollAnimation>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <ScrollAnimation
                  key={value.id}
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={0.2 + index * 0.2}
                >
                  <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[var(--color-prim)] h-full">
                    {/* Card Content */}
                    <div className="p-8 space-y-6">
                      {/* Title with Accent */}
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-8 bg-[var(--color-prim)] rounded-full flex-shrink-0"></div>
                        <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-head)] group-hover:text-[var(--color-prim)] transition-colors duration-300">
                          {value.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed text-base">
                        {value.description}
                      </p>

                      {/* Icon Box */}
                      <div className="pt-6">
                        <div
                          className={`inline-flex items-center justify-center w-24 h-24 bg-[var(--color-prim)] rounded-lg shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                        >
                          <Icon
                            className="w-12 h-12 text-[var(--color-sec)]"
                            strokeWidth={2}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Animated Border */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--color-prim)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                    {/* Subtle Background Pattern */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-prim)]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
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
