import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Phone, MapPin } from "lucide-react";
import { IoIosArrowDown } from "react-icons/io";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="w-full">
      {/* 🔶 TOP STRIP */}
      <div className="relative w-full h-10 py-2 overflow-hidden hidden sm:block">
        <div className="absolute inset-0 bg-sec"></div>
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 right-0 bg-prim transform -skew-x-12 origin-left"></div>

        <div className="relative z-10 container mx-auto px-4 flex flex-col gap-2 md:flex-row md:justify-between md:items-center">
          {/* Contact Info */}
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 text-black text-sm md:text-base">
            <div className="flex items-center gap-2">
              <FaPhoneAlt size={16} />
              <span className="font-medium">+971 55 774 5783</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope size={16} />
              <span className="font-medium">Geoleaders.uae@gmail.com</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-4 text-white mt-1 md:mt-0">
            <button className="hover:scale-110 transition-transform">
              <FaFacebookF size={18} />
            </button>
            <button className="hover:scale-110 transition-transform">
              <FaXTwitter size={18} />
            </button>
            <button className="hover:scale-110 transition-transform">
              <FaLinkedin size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* 🔷 MIDDLE HEADER */}
      <div className="relative border-b">
        {/* Subtle Radial Pattern Background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "#ecedf0",
            backgroundImage:
              "radial-gradient(rgba(0, 0, 0, 0.200) 1px, transparent 0)",
            backgroundSize: "30px 30px",
            backgroundPosition: "-5px -5px",
            width: "100%",
            height: "100%",
          }}
        ></div>

        {/* Content */}
        <div className="relative container mx-auto px-4 py-4 flex flex-col md:flex-row md:justify-between md:items-center h-24">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <Link to="/" className="block">
              <img className="w-48 md:w-60" src="/logo.png" />
            </Link>
          </div>

          {/* Contact Items */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-20 mt-4 md:mt-0">
            {/* Call Us */}
            {/* Call Us */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-prim rounded-full flex items-center justify-center">
                <Phone className="text-white" size={24} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-gray-900 font-light text-sm sm:text-base">
                  Call Us Now
                </span>
                <a
                  href="tel:+971557745783"
                  className="text-gray-900 font-medium text-base sm:text-lg hover:text-prim transition-colors duration-300"
                >
                  +971 55 774 5783
                </a>
              </div>
            </div>

            

            {/* Address */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-prim rounded-full flex items-center justify-center">
                <MapPin className="text-white" size={24} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-gray-900 font-light text-sm sm:text-base">
                  Office Address
                </span>
                <a
                  href="https://www.google.com/maps/place/Jebel+Ali,+Dubai,+United+Arab+Emirates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 font-medium text-base sm:text-lg hover:text-prim transition-colors duration-300"
                >
                  Jabil Ali – Dubai - UAE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔵 NAVIGATION BAR */}
      <nav className="bg-main text-white relative w-full">
        <div className="container flex justify-between items-center h-16 px-4">
          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-12 font-medium text-lg">
            <li>
              <Link to="/" className="hover:text-sec">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-sec">
                About
              </Link>
            </li>

            {/* Services Dropdown */}
            <li className="relative group">
              <button className="hover:text-sec flex items-center gap-2">
                Services <IoIosArrowDown />
              </button>

              <ul
                className="absolute left-0 top-full mt-2 bg-white text-black shadow-xl rounded-lg 
                 border border-gray-100 w-56 opacity-0 invisible group-hover:opacity-100 
                 group-hover:visible transition-all duration-300 z-50"
              >
                <li className="px-4 py-3 hover:bg-gray-50 border-b">
                  <Link to="/services">Piling Foundation Engineering</Link>
                </li>

                <li className="px-4 py-3 hover:bg-gray-50 border-b">
                  <Link to="/services">Ground Improvement Techniques</Link>
                </li>

                <li className="px-4 py-3 hover:bg-gray-50 border-b">
                  <Link to="/services">Slope Stability Analysis</Link>
                </li>

                <li className="px-4 py-3 hover:bg-gray-50">
                  <Link to="/services">
                    Earth Retaining & Shoring Structures
                  </Link>
                </li>
              </ul>
            </li>

            {/* Certificates (new) */}
            <li>
              <Link to="/certificates" className="hover:text-sec">
                Certificates
              </Link>
            </li>

            <li>
              <Link to="/machinery" className="hover:text-sec">
                Machinery
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-sec">
                Contact
              </Link>
            </li>
          </ul>

          {/* RIGHT SIDE BUTTON */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="bg-sec text-black px-8 py-[21px] font-semibold hover:bg-white hover:text-main hidden md:block"
            >
              GET A FREE QUOTE
            </Link>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setNavOpen(!navOpen)}
              className="md:hidden flex flex-col gap-1"
            >
              <span className="w-6 h-0.5 bg-white"></span>
              <span className="w-6 h-0.5 bg-white"></span>
              <span className="w-6 h-0.5 bg-white"></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {navOpen && (
          <ul className="md:hidden bg-[#0a2d57] text-center py-4 space-y-4">
            <li>
              <Link to="/" onClick={() => setNavOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setNavOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={() => setNavOpen(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/certificates" onClick={() => setNavOpen(false)}>
                Certificates
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setNavOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
