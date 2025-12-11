import React from 'react';
import { FileEdit, MousePointer, Package, Truck } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation'; // adjust the path

export default function WorkingProcessSection() {
  const steps = [
    {
      id: 1,
      number: "01",
      title: "Online Quote",
      icon: FileEdit,
      iconBg: "bg-gray-50"
    },
    {
      id: 2,
      number: "02",
      title: "Picking Product",
      icon: MousePointer,
      iconBg: "bg-gray-50"
    },
    {
      id: 3,
      number: "03",
      title: "Product Packaging",
      icon: Package,
      iconBg: "bg-gray-50"
    },
    {
      id: 4,
      number: "04",
      title: "Product Transport",
      icon: Truck,
      iconBg: "bg-gray-50"
    }
  ];

  return (
    <div className="w-full bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <ScrollAnimation direction="up">
          <div className="text-center mb-16">
            <h5 className="text-sec font-semibold text-sm md:text-base uppercase tracking-wider mb-3">
              Easy Steps
            </h5>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-main leading-tight">
              Our Working Process
            </h2>
          </div>
        </ScrollAnimation>

        {/* Process Steps - Desktop View */}
        <div className="hidden lg:block relative">
          <div className="flex justify-between items-start">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <ScrollAnimation 
                  key={step.id} 
                  direction={index % 2 === 0 ? "left" : "right"} 
                  delay={0.1 + index * 0.1}
                >
                  <div className="relative flex-1 flex flex-col items-center">
                    
                    {/* Step Container */}
                    <div className="relative group">
                      {/* Number Badge */}
                      <div className="absolute -top-4 -right-4 z-20 w-14 h-14 bg-prim rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-lg">{step.number}</span>
                      </div>

                      {/* Circle Container */}
                      <div className="relative w-48 h-48 rounded-full border-4 border-sec bg-gray-50 flex items-center justify-center group-hover:shadow-2xl group-hover:border-sec transition-all duration-300">
                        <Icon 
                          className="w-20 h-20 text-gray-700 group-hover:text-sec group-hover:scale-110 transition-all duration-300" 
                          strokeWidth={1.5}
                        />
                      </div>

                      {/* Arrow - Show for all except last */}
                      {index < steps.length - 1 && (
                        <div className="absolute top-1/2 -right-[60px] transform -translate-y-1/2 z-10">
                          <svg 
                            className="w-24 h-8 text-sec" 
                            viewBox="0 0 100 40" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path 
                              d="M0,20 Q50,20 95,20" 
                              stroke="currentColor" 
                              strokeWidth="3" 
                              fill="none"
                            />
                            <path 
                              d="M85,12 L100,20 L85,28" 
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 text-center mt-8 group-hover:text-orange-500 transition-colors duration-300">
                      {step.title}
                    </h3>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>

        {/* Process Steps - Mobile/Tablet View */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <ScrollAnimation key={step.id} direction="up" delay={0.1 + index * 0.1}>
                <div className="relative flex flex-col items-center group">
                  
                  {/* Number Badge */}
                  <div className="absolute -top-4 -right-4 z-20 w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>

                  {/* Circle Container */}
                  <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full border-4 border-orange-500 bg-gray-50 flex items-center justify-center group-hover:shadow-2xl group-hover:border-orange-600 transition-all duration-300">
                    <Icon 
                      className="w-16 h-16 sm:w-20 sm:h-20 text-gray-700 group-hover:text-orange-500 group-hover:scale-110 transition-all duration-300" 
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 text-center mt-6 group-hover:text-orange-500 transition-colors duration-300">
                    {step.title}
                  </h3>
                </div>
              </ScrollAnimation>
            );
          })}
        </div>

      </div>
    </div>
  );
}
