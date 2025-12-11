import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { motion } from "framer-motion";
import ScrollAnimation from './ScrollAnimation';

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: 1,
      image: "https://www.geo-leaders.com/wp-content/uploads/2023/12/31e87d4d-ed98-4a1b-94ed-6d2f45965bb1-500x500.jpg",
      category: "Commercial",
      title: "2 Villas (B+G+1) Green Scape contracting At Umm Suqeim.",
      description: ""
    },
    {
      id: 2,
      image: "https://www.geo-leaders.com/wp-content/uploads/2023/12/WhatsApp-Image-2021-10-28-at-10.58.41-AM-500x500.jpeg",
      category: "Commercial",
      title: "NEW Shams 400KV Transmission Line",
      description: ""
    },
    {
      id: 3,
      image: "https://www.geo-leaders.com/wp-content/uploads/2024/01/istockphoto-1536575562-612x612-1-408x500.jpg",
      category: "Commercial",
      title: "(B+G+M) Warehouse & offices at Nadd al Hamer",
      description:
        "GEO-Leader was awarded the contract for the design and execution of shoring works for a warehouse and office building project in Nadd Al Hamar."
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <div className="w-full bg-gray-100 py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollAnimation direction="up">
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            {/* Section Label */}
            <h5 className="text-[var(--color-sec)] font-semibold text-sm uppercase tracking-wider mb-2">
              Our Recent Work
            </h5>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--color-prim)] leading-tight">
              Recently Completed{" "}
              <span className="text-[var(--color-sec)]">Projects</span>
            </h2>

            {/* Optional Subheading */}
            <p className="text-gray-600 text-base md:text-lg mt-3">
              Explore some of our latest geotechnical projects that showcase
              quality, innovation, and reliability.
            </p>
          </div>
        </ScrollAnimation>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollAnimation
              key={project.id}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={0.1 + index * 0.1}
            >
              <ProjectCard project={project} />
            </ScrollAnimation>
          ))}
        </div>

        {/* Mobile & Tablet Carousel */}
        <div className="lg:hidden relative mt-6">
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: -currentIndex * 100 + "%" }}
              transition={{ type: "spring", stiffness: 70, damping: 20 }}
              className="flex"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="w-full flex-shrink-0 px-4"
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white hover:bg-sec text-gray-800 hover:text-white rounded-full shadow-lg flex items-center justify-center"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white hover:bg-sec text-gray-800 hover:text-white rounded-full shadow-lg flex items-center justify-center"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------------- CARD ------------------------ */

function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${project.image})` }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-900/90" />
      <div className={`absolute inset-0 bg-blue-900/70 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
        <div className={`transition-all duration-500 ${isHovered ? 'opacity-0 -translate-y-4' : 'opacity-100'}`}>
          <div className="inline-block px-3 py-1 bg-sec rounded text-xs font-semibold mb-3">
            {project.category}
          </div>
          <h3 className="text-2xl font-bold">{project.title}</h3>
        </div>
      </div>

      {/* Hover content */}
      <div className={`absolute inset-0 flex flex-col justify-center items-center p-8 text-white text-center transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="inline-block px-3 py-1 bg-sec rounded text-xs font-semibold mb-4">
          {project.category}
        </div>

        <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

        {project.description && (
          <p className="text-sm text-gray-200 mb-6 leading-relaxed max-w-md">
            {project.description}
          </p>
        )}

        <button className="group/btn flex items-center gap-2">
          <span className="w-12 h-12 bg-sec rounded-full flex items-center justify-center group-hover/btn:translate-x-2 transition-all duration-300">
            <ArrowRight className="w-5 h-5" />
          </span>
        </button>
      </div>
    </div>
  );
}
