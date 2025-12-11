import React from "react";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation"; // adjust the path

export default function CTABannerSection() {
  return (
    <div
      className="w-full relative bg-cover bg-center bg-no-repeat py-20 md:py-28 lg:py-32"
      style={{
        backgroundImage: `linear-gradient(rgba(251, 191, 36, 0.85), rgba(251, 191, 36, 0.85)), url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&h=600&fit=crop')`,
      }}
    >
      {/* Construction Crane Silhouette Overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute right-0 top-0 w-64 h-full">
          <svg
            viewBox="0 0 200 400"
            className="w-full h-full text-yellow-700"
            fill="currentColor"
            opacity="0.3"
          >
            <path
              d="M100,50 L100,350 M60,100 L140,100 M70,80 L130,80 L130,350 M60,100 L100,60 L140,100"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
            />
          </svg>
        </div>
        <div className="absolute left-10 top-10 w-48 h-full">
          <svg
            viewBox="0 0 200 400"
            className="w-full h-full text-yellow-700"
            fill="currentColor"
            opacity="0.2"
          >
            <path
              d="M100,100 L100,380 M80,150 L120,150 M85,130 L115,130 L115,380"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimation direction="up">
          <div className="text-center space-y-6">
            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
              Leading in Building & Civil Construction
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-800 leading-relaxed max-w-3xl mx-auto">
              Whether you have a project in mind and you’re looking for a
              reliable construction partner or you’re looking to take the next
              step in your career, we want to hear from you!
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              {/* Phone Button */}
              <a
                href="tel:1800124544578"
                className="group inline-flex items-center gap-3 bg-gray-900 hover:bg-gray-800 text-white font-bold px-8 py-4 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 min-w-[240px] justify-center"
              >
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-lg">+971 55 774 5783</span>
              </a>

              {/* Discover More Button */}
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-main hover:bg-head text-white font-bold px-8 py-4 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 min-w-[200px] justify-center"
              >
                <span className="text-lg">Discover More</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </ScrollAnimation>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500"></div>
    </div>
  );
}
