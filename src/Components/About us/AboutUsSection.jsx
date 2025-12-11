import React from "react";
import { CheckCircle2, Phone } from "lucide-react";
import ScrollAnimation from '../ScrollAnimation'; 

export default function AboutUsHeroSection() {
  const features = [
    "Comprehensive Services",
    "Advanced Technology",
    "Transparent Communication",
  ];

  return (
    <div className="w-full bg-white py-16 md:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Image */}
          <ScrollAnimation direction="right">
            <div className="relative order-2 lg:order-1">
              <div className="relative">
                {/* Main Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://demo.awaikenthemes.com/builtup/wp-content/uploads/2024/06/about-us-img.png"
                    alt="Construction Team"
                    className="w-full h-auto object-cover "
                    loading="lazy"
                  />
                </div>

               

              
              </div>
            </div>
          </ScrollAnimation>

          {/* Right Side - Content */}
          <ScrollAnimation direction="up">
            <div className="space-y-8 order-1 lg:order-2">
              {/* Subtitle */}
              <div>
                <span className="inline-block text-main font-bold text-sm md:text-base uppercase tracking-widest">
                  ABOUT US
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Crafting structures that last a lifetime
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Crafting structures that last a lifetime requires a holistic
                approach that integrates advanced materials, resilient design,
                regular maintenance, and sustainability practices. By learning
                from historical examples and leveraging modern technology.
              </p>

              {/* Features Box */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 md:p-8 space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-yellow-500 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="text-gray-800 font-medium text-base md:text-lg">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons Row */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                {/* Phone Support */}
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="relative">
                    {/* Pulsing Ring Effect */}
                    <div className="absolute inset-0 bg-yellow-400 rounded-full animate-ping opacity-20"></div>
                    <div className="relative w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center group-hover:bg-yellow-500 transition-all duration-300 shadow-lg">
                      <Phone
                        className="w-7 h-7 text-gray-900"
                        strokeWidth={2.5}
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm font-medium">
                      call support center 24X7
                    </p>
                    <a
                      href="tel:+18091206705"
                      className="text-gray-900 text-lg md:text-xl font-bold hover:text-yellow-500 transition-colors duration-300"
                    >
                      +971 55 774 5783
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}
