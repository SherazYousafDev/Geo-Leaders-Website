import React from 'react';
import { Users, Award, GraduationCap, Lightbulb } from 'lucide-react';
import ScrollAnimation from '../ScrollAnimation'; // your wrapper

export default function AboutUsTeam() {
  const expertiseAreas = [
    {
      id: 1,
      number: "01",
      title: "Leadership Team",
      description: "GEO-Leaders is led by Engr. Basel Adel, the Founder and CEO, who brings over 12 years of extensive experience in the geotechnical contracting industry. His expertise spans across key areas such as piling, shoring, soil improvement, and dewatering, making him a distinguished leader in the field.",
      icon: Users,
      gradient: "from-blue-600 to-cyan-600",
      position: "left"
    },
    {
      id: 2,
      number: "02",
      title: "Experience",
      description: "At GEO-Leaders, we are committed to ensuring that every member of our team is a leader in their respective field, contributing to the stability and quality assurance that our company is known for. Our engineers and workers are not only highly skilled but also bring a wealth of experience to every project.",
      icon: Award,
      gradient: "from-orange-600 to-red-600",
      position: "right"
    },
    {
      id: 3,
      number: "03",
      title: "Certifications & Training",
      description: "At GEO-Leader, we prioritize the training and development of our team to ensure that they meet the highest standards of safety and quality in every aspect of their work. From our certified technical team and experienced site management to our skilled laborers and riggers, every member of our workforce is equipped with the knowledge and skills.",
      icon: GraduationCap,
      gradient: "from-green-600 to-emerald-600",
      position: "left"
    },
    {
      id: 4,
      number: "04",
      title: "Technology & Innovation",
      description: "At GEO-Leaders, we leverage cutting-edge software solutions to ensure that our designs are both cost-effective and optimized for the unique requirements of each project. Our use of advanced industry software allows us to create precise and efficient designs that not only meet our clients' specifications but also adhere to the highest standards of safety and performance.",
      icon: Lightbulb,
      gradient: "from-purple-600 to-pink-600",
      position: "right"
    }
  ];

  return (
    <div className="w-full bg-[#E9F7FE] py-16 md:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <ScrollAnimation direction="up">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">
                Why Choose Us
              </span>
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Team & Expertise
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Developed in close collaboration with our partners and clients, combines industry knowledge, decades of experience, ingenuity and adaptability to deliver excellence to our clients.
            </p>
          </div>
        </ScrollAnimation>

        {/* Zigzag Layout */}
        <div className="space-y-16 md:space-y-24">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon;
            const isLeft = area.position === 'left';
            return (
              <ScrollAnimation key={area.id} direction="up" delay={index * 0.15}>
                <div className={`flex flex-col ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}>
                  
                  {/* Content Side */}
                  <div className={`flex-1 ${isLeft ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <div className="group bg-white rounded-3xl p-8 md:p-10 lg:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orange-200 relative overflow-hidden">
                      
                      {/* Background Gradient Glow */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                      
                      {/* Number Badge */}
                      <div className="absolute -top-4 -right-4 w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                        <span className="text-white font-bold text-2xl">{area.number}</span>
                      </div>

                      <div className="relative space-y-6">
                        <div>
                          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-red-600 transition-all duration-300">
                            {area.title}
                          </h3>
                          <div className={`h-1.5 w-24 rounded-full bg-gradient-to-r ${area.gradient} group-hover:w-full transition-all duration-700`}></div>
                        </div>

                        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                          {area.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Icon Side */}
                  <div className="flex-1 flex justify-center">
                    <div className="relative group">
                      
                      <div className={`absolute inset-0 bg-gradient-to-br ${area.gradient} rounded-full blur-3xl opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700`}></div>
                      
                      <div className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br ${area.gradient} p-1 shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-700`}>
                        <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                          <Icon className="w-32 h-32 md:w-40 md:h-40 text-gray-800 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                        </div>
                      </div>

                      <div className="absolute -top-4 -right-4 w-4 h-4 bg-orange-500 rounded-full animate-bounce"></div>
                      <div className="absolute -bottom-4 -left-4 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>

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
