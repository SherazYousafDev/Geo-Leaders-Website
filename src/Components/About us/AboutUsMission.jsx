import React from 'react';
import { Target, Eye, Gem } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutUsMission() {
  const sections = [
    {
      id: 1,
      icon: Target,
      title: "Our Mission",
      description: "At GEO-Leaders, our mission is to provide exceptional geotechnical services that ensure the safety, stability, and longevity of our clients' projects. We are committed to leveraging our expertise and state-of-the-art technologies to deliver efficient, cost-effective solutions that exceed expectations.",
      gradient: "from-yellow-400 to-orange-500",
      bgGlow: "bg-yellow-400/10",
      hoverGlow: "group-hover:bg-yellow-400/20"
    },
    {
      id: 2,
      icon: Eye,
      title: "Our Vision",
      description: "Our vision is to be the leading provider of innovative piling, shoring, and soil improvement solutions in the construction industry. We aim to set new standards of excellence, continually expanding our capabilities and adapting to the evolving needs of our clients, while contributing to the sustainable development of the built environment.",
      gradient: "from-yellow-400 to-orange-500",
      bgGlow: "bg-yellow-400/10",
      hoverGlow: "group-hover:bg-yellow-400/20"
    },
    {
      id: 3,
      icon: Gem,
      title: "Our Values",
      description: "At GEO-Leaders, our values guide every decision we make and every project we deliver. Safety is at the heart of our operations, and we believe that simple, consistent actions help protect our people, our clients, and our worksites. Each employee is empowered to work safely every day, ensuring they return home without harm.",
      gradient: "from-yellow-400 to-orange-500",
      bgGlow: "bg-yellow-400/10",
      hoverGlow: "group-hover:bg-yellow-400/20"
    }
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.div
      className="w-full bg-gradient-to-b from-gray-50 to-white py-16 md:py-20 lg:py-28 relative overflow-hidden"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Decorative Background Elements */}
      <motion.div className="absolute top-10 left-10 w-2 h-2 bg-yellow-400 rounded-full" animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />
      <motion.div className="absolute top-20 right-20 w-3 h-3 bg-orange-400 rounded-full opacity-50" animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }} />
      <motion.div className="absolute bottom-20 left-1/4 w-2 h-2 bg-yellow-400 rounded-full opacity-70" animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div className="text-center mb-16 space-y-4" variants={fadeUp}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 rounded-full">
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <span className="text-yellow-600 font-semibold text-sm uppercase tracking-wider">Who We Are</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            Our <span className=" bg-clip-text text-main">Foundation</span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={container}>
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.id}
                className="group relative bg-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-yellow-200"
                variants={fadeUp}
              >
                {/* Background Glow Effect */}
                <div className={`absolute inset-0 ${section.bgGlow} ${section.hoverGlow} rounded-3xl transition-all duration-500 blur-xl opacity-0 group-hover:opacity-100`} />

                {/* Content */}
                <div className="relative space-y-6">
                  {/* Icon */}
                  <div className="inline-flex">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${section.gradient} p-0.5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                      <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                        <Icon className="w-10 h-10 text-yellow-500" strokeWidth={2} />
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-500 group-hover:to-orange-500 transition-all duration-300">
                    {section.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-base">
                    {section.description}
                  </p>

                  {/* Decorative Bottom Line */}
                  <div className="pt-6">
                    <div className={`h-1 rounded-full bg-gradient-to-r ${section.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden rounded-tr-3xl">
                  <div className={`absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br ${section.gradient} opacity-10 group-hover:opacity-20 rounded-full transition-opacity duration-500`} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
}
