import React from 'react';
import { Check } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation'; // make sure path is correct

export default function WhyChooseUsSection() {
  const features = [
    "Accurate Measurements",
    "Constant Maintenance",
    "We create solutions",
    "Modern Methods",
    "Best Sustainability",
    "Detailed Planning",
    "Certified Engineers",
    "Qualified Specialists"
  ];

  

  return (
    <div className="w-full bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Images */}
          <ScrollAnimation direction="left">
            <div className="relative flex gap-6 justify-center lg:justify-start">
              {/* Tall Image */}
              <div className="relative w-[45%] max-w-[280px]">
                <img
                  src="https://gracethemesdemo.com/dreambuild/wp-content/uploads/2024/07/choose_us_large.jpg"
                  alt="Construction Site"
                  className="w-full h-auto rounded-2xl shadow-xl object-cover"
                />
              </div>
              
              {/* Shorter Image - Offset */}
              <div className="relative w-[45%] max-w-[280px] mt-12">
                <img
                  src="https://gracethemesdemo.com/dreambuild/wp-content/uploads/2024/07/choose_us_small.jpg"
                  alt="Construction Workers"
                  className="w-full h-auto rounded-2xl shadow-xl object-cover"
                />
              </div>
            </div>
          </ScrollAnimation>

          {/* Right Side - Content */}
          <ScrollAnimation direction="right">
            <div className="space-y-6">
              {/* Subtitle */}
              <h5 className="text-main font-semibold text-sm md:text-base uppercase tracking-wider">
                Why Choose Us
              </h5>

              {/* Main Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-head leading-tight">
                Why We Are Different than Other Company
              </h2>

              {/* Description */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 leading-relaxed text-base">
                  We deliver reliable, engineered solutions built on experience, innovation, and a strong commitment to quality and safety. Our team ensures every project is completed with precision, transparency, and on-time execution.
                </p>
              </div>

              {/* Features List - Two Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                {features.map((feature, index) => (
                  <ScrollAnimation
                    key={index}
                    direction={index % 2 === 0 ? "up" : "down"}
                    delay={0.1 + index * 0.1}
                  >
                    <div className="flex items-center gap-3 group cursor-pointer">
                      <div className="flex-shrink-0 w-5 h-5 bg-sec rounded flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                      </div>
                      <span className="text-gray-700 font-medium group-hover:text-sec transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </ScrollAnimation>

        </div>
      </div>

      
    </div>
  );
}
