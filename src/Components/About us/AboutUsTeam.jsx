import React from "react";
import ScrollAnimation from "../ScrollAnimation"; // your wrapper
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img-2.webp";
import img3 from "../../assets/images/img3.webp";
import img4 from "../../assets/images/img4.jpg";


export default function AboutUsTeam() {
  const expertiseAreas = [
    {
      id: 1,
      number: "01",
      title: "Leadership Team",
      description:
        "GEO-Leaders is led by Engr. Basel Adel, the Founder and CEO, who brings over 12 years of extensive experience in the geotechnical contracting industry. His expertise spans across key areas such as piling, shoring, soil improvement, and dewatering, making him a distinguished leader in the field.",
      image: img1, // your image path
      gradient: "from-blue-600 to-cyan-600",
      position: "left",
    },
    {
      id: 2,
      number: "02",
      title: "Experience",
      description:
        "At GEO-Leaders, we are committed to ensuring that every member of our team is a leader in their respective field, contributing to the stability and quality assurance that our company is known for. Our engineers and workers are not only highly skilled but also bring a wealth of experience to every project.",
      image: img2,
      gradient: "from-orange-600 to-red-600",
      position: "right",
    },
    {
      id: 3,
      number: "03",
      title: "Certifications & Training",
      description:
        "At GEO-Leader, we prioritize the training and development of our team to ensure that they meet the highest standards of safety and quality in every aspect of their work. From our certified technical team and experienced site management to our skilled laborers and riggers, every member of our workforce is equipped with the knowledge and skills.",
      image: img3,
      gradient: "from-green-600 to-emerald-600",
      position: "left",
    },
    {
      id: 4,
      number: "04",
      title: "Technology & Innovation",
      description:
        "At GEO-Leaders, we leverage cutting-edge software solutions to ensure that our designs are both cost-effective and optimized for the unique requirements of each project. Our use of advanced industry software allows us to create precise and efficient designs that not only meet our clients' specifications but also adhere to the highest standards of safety and performance.",
      image: img4,
      gradient: "from-purple-600 to-pink-600",
      position: "right",
    },
  ];

  return (
    <div className="w-full bg-gray-100 py-16 md:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation direction="up">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-3">
              <div className="w-2 h-2 bg-prim rounded-full"></div>
              <span className="text-sec font-semibold text-sm uppercase tracking-widest">
                Why Choose Us
              </span>
              <div className="w-2 h-2 bg-prim rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-prim">
              Team & Expertise
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Developed in close collaboration with our partners and clients,
              combines industry knowledge, decades of experience, ingenuity and
              adaptability to deliver excellence to our clients.
            </p>
          </div>
        </ScrollAnimation>

        {/* Zigzag Layout */}
        <div className="space-y-16 md:space-y-24">
          {expertiseAreas.map((area, index) => {
            const isLeft = area.position === "left";
            return (
              <ScrollAnimation
                key={area.id}
                direction="up"
                delay={index * 0.15}
              >
                <div
                  className={`flex flex-col ${
                    isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-8 lg:gap-16 items-center`}
                >
                  {/* Content Side */}
                  <div className={`flex-1 ${isLeft ? "lg:pr-8" : "lg:pl-8"}`}>
                    <div className="group bg-white rounded-3xl p-8 md:p-10 lg:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orange-200 relative overflow-hidden">
                      {/* Number Badge */}
                      <div className="absolute -top-4 -right-4 w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                        <span className="text-white font-bold text-2xl">
                          {area.number}
                        </span>
                      </div>

                      <div className="relative space-y-6">
                        <div>
                          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            {area.title}
                          </h3>
                          <div
                            className={`h-1.5 w-24 rounded-full bg-[${area.gradient}] group-hover:w-full transition-all duration-700`}
                          ></div>
                        </div>

                        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                          {area.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Image Side */}
                  <div className="flex-1 flex justify-center relative">
                    <div className="w-64 h-64 md:w-100 md:h-100 rounded-4xl overflow-hidden shadow-2xl group-hover:scale-105 transition-transform duration-500">
                      <img
                        src={area.image}
                        alt={area.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </div>
  );
}
