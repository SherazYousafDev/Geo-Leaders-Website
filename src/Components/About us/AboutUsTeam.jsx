import React from "react";
import ScrollAnimation from "../ScrollAnimation";

export default function AboutUsTeam() {
  const expertiseAreas = [
    {
      id: 1,
      number: "01",
      title: "Leadership Team",
      description:
        "GEO-Leaders is led by Engr. Basel Adel, the Founder and CEO, who brings over 12 years of extensive experience in the geotechnical contracting industry. His expertise spans across key areas such as piling, shoring, soil improvement, and dewatering, making him a distinguished leader in the field.",
      image: "/images/img1.jpg",
      gradient: "from-blue-600 to-cyan-600",
      position: "left",
    },
    {
      id: 2,
      number: "02",
      title: "Experience",
      description:
        "At GEO-Leaders, we are committed to ensuring that every member of our team is a leader in their respective field, contributing to the stability and quality assurance that our company is known for. Our engineers and workers are not only highly skilled but also bring a wealth of experience to every project.",
      image: "/images/img-2.webp",
      gradient: "from-orange-600 to-red-600",
      position: "right",
    },
    {
      id: 3,
      number: "03",
      title: "Certifications & Training",
      description:
        "At GEO-Leader, we prioritize the training and development of our team to ensure that they meet the highest standards of safety and quality in every aspect of their work. From our certified technical team and experienced site management to our skilled laborers and riggers, every member of our workforce is equipped with the knowledge and skills.",
      image: "/images/img3.webp",
      gradient: "from-green-600 to-emerald-600",
      position: "left",
    },
    {
      id: 4,
      number: "04",
      title: "Technology & Innovation",
      description:
        "At GEO-Leaders, we leverage cutting-edge software solutions to ensure that our designs are both cost-effective and optimized for the unique requirements of each project. Our use of advanced industry software allows us to create precise and efficient designs that not only meet our clients' specifications but also adhere to the highest standards of safety and performance.",
      image: "/images/img4.jpg",
      gradient: "from-purple-600 to-pink-600",
      position: "right",
    },
  ];

  return (
    <div className="w-full bg-gray-100 py-16 md:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
              Our team combines decades of experience, leadership, and
              innovation to deliver outstanding performance.
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
                  } gap-10 items-center`}
                >
                  {/* Text */}
                  <div className={`flex-1 ${isLeft ? "lg:pr-10" : "lg:pl-10"}`}>
                    <div className="group bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden">
                      {/* Number Bubble */}
                      <div className="absolute -top-5 -right-5 w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                        <span className="text-white font-bold text-2xl">
                          {area.number}
                        </span>
                      </div>

                      <div className="space-y-6">
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                          {area.title}
                        </h3>

                        {/* Gradient Line */}
                        <div
                          className={`h-1.5 w-24 rounded-full bg-gradient-to-r ${area.gradient} group-hover:w-full transition-all duration-700`}
                        ></div>

                        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                          {area.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="flex-1 flex justify-center">
                    <div className="w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-xl bg-white">
                      <img
                        src={area.image}
                        alt={area.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
