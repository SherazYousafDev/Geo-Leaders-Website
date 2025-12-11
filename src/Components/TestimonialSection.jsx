import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [counters, setCounters] = useState({
    experience: 0,
    awards: 0,
    projects: 0,
    customers: 0,
  });

  const testimonials = [
    {
      id: 1,
      name: "Jenifer Parker",
      role: "Happy Customer",
      image:
        "https://gracethemesdemo.com/dreambuild/wp-content/uploads/2024/07/team_image2.jpg",
      text: "We needed piling and ground improvement completed within a very tight deadline. GEO-Leaders not only delivered faster than expected but also maintained excellent quality throughout the project. Highly recommended for foundation works.",
    },
    {
      id: 2,
      name: "Mitchell Marsh",
      role: "Happy Customer",
      image:
        "https://gracethemesdemo.com/dreambuild/wp-content/uploads/2024/07/team_image3.jpg",
      text: "The use of modern equipment and skilled operators made a huge difference in our project. GEO-Leaders handled complex drilling and stone column installation smoothly, giving us full confidence in the ground stability.",
    },
    {
      id: 3,
      name: "Alice Capsey",
      role: "Happy Customer",
      image:
        "https://gracethemesdemo.com/dreambuild/wp-content/uploads/2024/07/team_image4.jpg",
      text: "Their team maintained transparent communication from start to finish. Every stage of the project was clearly explained, and all safety protocols were followed strictly. We look forward to working with them again",
    },
  ];

  const stats = [
    { label: "Experienced Workers", value: 426 },
    { label: "Construction Award", value: 25 },
    { label: "Complete Total Projects", value: 249 },
    { label: "Happy Customers", value: 30},
  ];

  // Counter animation
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = duration / steps;

    const timer = setInterval(() => {
      setCounters((prev) => ({
        experience:
          prev.experience < 25 ? Math.min(prev.experience + 1, 25) : 25,
        awards: prev.awards < 18 ? Math.min(prev.awards + 1, 18) : 18,
        projects: prev.projects < 88 ? Math.min(prev.projects + 2, 88) : 88,
        customers: prev.customers < 78 ? Math.min(prev.customers + 2, 78) : 78,
      }));
    }, increment);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="w-full">
      {/* Testimonials Section */}
      <div className="bg-[#010825] py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Content */}
            <div className="text-white space-y-2">
              <h5 className="text-sec font-semibold text-sm md:text-base uppercase tracking-wider">
                Client Testimonials
              </h5>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-md wrap-break-word mb-4">
                What They are Talking About Company?
              </h2>

              <p className="text-gray-300 leading-relaxed text-base max-w-md wrap-break-word">
                Our clients trust us because we deliver exactly what we promise
                strong foundations, reliable engineering, and consistent
                quality. Here’s what industry professionals and partners say
                about working with GEO-Leaders.
              </p>
            </div>

            {/* Right Side - Testimonial Card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600  p-8 md:p-10 shadow-2xl relative overflow-hidden">
                {/* Decorative Lines */}
                <div className="absolute top-8 left-8 flex items-center gap-2">
                  <div className="w-16 h-1 bg-white"></div>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>

                {/* Large Quote Icon - Top Right */}
                <div className="absolute top-6 right-6">
                  <Quote
                    className="w-20 h-20 text-main opacity-80"
                    fill="currentColor"
                  />
                </div>

                {/* Testimonial Content */}
                <div className="relative pt-16">
                  {/* Profile */}
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={testimonials[currentSlide].image}
                      alt={testimonials[currentSlide].name}
                      className="w-20 h-20 rounded-full border-4 border-white object-cover shadow-lg"
                    />
                    <div className="text-white">
                      <h5 className="text-xl font-bold">
                        {testimonials[currentSlide].name}
                      </h5>
                      <h6 className="text-sm opacity-90">
                        {testimonials[currentSlide].role}
                      </h6>
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-white leading-relaxed text-base mb-8">
                    {testimonials[currentSlide].text}
                  </p>

                  {/* Dots Navigation */}
                  <div className="flex items-center gap-3">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`transition-all duration-300 rounded-full ${
                          index === currentSlide
                            ? "w-3 h-3 bg-white"
                            : "w-2.5 h-2.5 bg-white/50 hover:bg-white/75"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Decorative Lines - Bottom Right */}
                <div className="absolute bottom-8 right-8 flex items-center gap-2">
                  <div className="w-16 h-1 bg-white"></div>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Counter Section */}
      <div className="bg-[#FEBC34] py-8 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Experience Counter */}
            <div className="text-center">
              <div className="flex items-baseline justify-center mb-2">
                <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900">
                  {counters.experience}
                </span>
                <span className="text-4xl md:text-5xl font-bold text-gray-900 ml-1">
                  +
                </span>
              </div>
              <p className="text-gray-900 font-semibold text-base md:text-lg">
                Year of Experience
              </p>
            </div>

            {/* Awards Counter */}
            <div className="text-center">
              <div className="flex items-baseline justify-center mb-2">
                <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900">
                  {counters.awards}
                </span>
                <span className="text-4xl md:text-5xl font-bold text-gray-900 ml-1">
                  +
                </span>
              </div>
              <p className="text-gray-900 font-semibold text-base md:text-lg">
                Winning Global Awards
              </p>
            </div>

            {/* Projects Counter */}
            <div className="text-center">
              <div className="flex items-baseline justify-center mb-2">
                <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900">
                  {counters.projects}
                </span>
                <span className="text-4xl md:text-5xl font-bold text-gray-900 ml-1">
                  +
                </span>
              </div>
              <p className="text-gray-900 font-semibold text-base md:text-lg">
                Complete Total Projects
              </p>
            </div>

            {/* Customers Counter */}
            <div className="text-center">
              <div className="flex items-baseline justify-center mb-2">
                <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900">
                  {counters.customers}
                </span>
                <span className="text-4xl md:text-5xl font-bold text-gray-900 ml-1">
                  +
                </span>
              </div>
              <p className="text-gray-900 font-semibold text-base md:text-lg">
                Happy Customers
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
