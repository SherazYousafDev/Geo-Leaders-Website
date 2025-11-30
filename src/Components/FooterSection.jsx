import React, { useState } from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Phone,
  Mail,
  MapPin,
  Send,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function FooterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  const usefulLinks = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Services", url: "/services" },
    { name: "Contact", url: "/contact" },
  ];

  const services = [
    "Piling Foundation Engineering",
    "Ground Improvement Techniques",
    "Slope Stability Analysis",
    "Earth Retaining Shoring Structures",
  ];

  return (
    <footer className="w-full bg-[#001C47]">
      {/* Main Footer Content */}
      <div className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Column 1 - Logo & Description */}
            <div className="space-y-6">
              {/* Logo */}
              <div>
                <a href="/" className="block">
                  <img className="w-40" src="/logo.png" />
                </a>
              </div>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed text-sm text-justify">
                At GEO – Leaders, our mission is to provide exceptional
                geotechnical services that ensure the safety, stability, and
                longevity of our clients’ projects. We are committed to
                leveraging our expertise and state-of-the-art technologies to
                deliver efficient, cost-effective solutions that exceed
                expectations.
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all duration-300 group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-white" fill="white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all duration-300 group"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 text-white" fill="white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all duration-300 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-white" fill="white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all duration-300 group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

            {/* Column 2 - Useful Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">
                Useful Links
              </h3>
              <ul className="space-y-3">
                {usefulLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.url}
                      className="text-gray-300 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Our Services */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">
                Our Services
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href="/services"
                      className="text-gray-300 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      <span>{service}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 - Newsletter */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Newsletter</h3>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                Subscribe to our newsletter Stay always in touch!
              </p>

              {/* Newsletter Input */}
              <div className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-4 py-3 bg-blue-800 border border-blue-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors duration-300"
                />
                <button
                  onClick={handleSubmit}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl"
                >
                  <span>Sign up</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="flex items-start gap-4 group cursor-pointer">
              <div className="shrink-0 w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-all duration-300">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Call Us On</p>
                <a
                  href="tel: +971 55 774 5783"
                  className="text-white text-lg font-semibold hover:text-orange-500 transition-colors duration-300"
                >
                  +971 55 774 5783
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 group cursor-pointer">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-all duration-300">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Email</p>
                <a
                  href="mailto:info@sitename.com"
                  className="text-white text-lg font-semibold hover:text-orange-500 transition-colors duration-300"
                >
                  Geoleaders.uae@gmail.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4 group cursor-pointer">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-all duration-300">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Location</p>
                <p className="text-white text-lg font-semibold">
                  Jabil Ali – Dubai - UAE
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-blue-800 bg-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm ">
              © Copyright 2025 Geo Leaders. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
