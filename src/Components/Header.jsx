import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaLinkedin,
  FaSearch,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Phone, MapPin } from "lucide-react";
import { IoIosArrowDown } from "react-icons/io";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  // const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="w-full ">
      {/* 🔶 TOP STRIP */}
      <div className="relative w-full h-10 py-2 overflow-hidden hidden sm:block">
        {/* Background Layers */}
        <div className="absolute inset-0 bg-[#FEBC34]"></div>
        <div
          className="hidden md:block absolute top-0 bottom-0 left-1/2 right-0 bg-[#FF5E15] 
    transform -skew-x-12 origin-left"
        ></div>

        {/* Content */}
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
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row md:justify-between md:items-center h-24">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <a href="/" className="block">
              <img className="w-48 md:w-60" src="/logo.png" />
            </a>
          </div>

          {/* Contact Items */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-20 mt-4 md:mt-0">
            {/* Call Us */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                <Phone className="text-white" size={24} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-gray-900 font-light text-sm sm:text-base">
                  Call Us Now
                </span>
                <span className="text-gray-900 font-medium text-base sm:text-lg">
                  +971 55 774 5783
                </span>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                <MapPin
                  className="text-white"
                  size={24}
                  strokeWidth={2.5}
                  fill="white"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-gray-900 font-light text-sm sm:text-base">
                  Office Address
                </span>
                <span className="text-gray-900 font-medium text-base sm:text-lg">
                  Jabil Ali – Dubai - UAE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔵 NAVIGATION BAR */}
      <nav className="bg-[#00245C] text-white relative w-full">
        <div className="container flex justify-between items-center h-16 px-4">
          {/* Menu Items */}
          <ul className="hidden md:flex gap-12 font-medium text-lg">
            <li>
              <a href="/" className="hover:text-[#FEBC34]">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-[#FEBC34]">
                About
              </a>
            </li>

            {/* Dropdown */}
            <li className="relative group">
              {/* Button */}
              <button className="hover:text-[#FEBC34] flex items-center gap-2 ">
                Services <IoIosArrowDown />
              </button>

              {/* Dropdown */}
              <ul
                className="absolute left-0 top-full mt-2 bg-white text-black shadow-xl rounded-lg 
                 border border-gray-100 w-56 opacity-0 invisible group-hover:opacity-100 
                 group-hover:visible transition-all duration-300 z-50"
              >
                <li className="px-4 py-3 hover:bg-gray-50 border-b">
                  <a href="/services#piling">Piling Foundation Engineering</a>
                </li>

                <li className="px-4 py-3 hover:bg-gray-50 border-b">
                  <a href="/services#ground">Ground Improvement Techniques</a>
                </li>

                <li className="px-4 py-3 hover:bg-gray-50 border-b">
                  <a href="/services#slope">Slope Stability Analysis</a>
                </li>

                <li className="px-4 py-3 hover:bg-gray-50">
                  <a href="/services#shoring">
                    Earth Retaining & Shoring Structures
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="/contact" className="hover:text-[#FEBC34]">
                Contact
              </a>
            </li>
          </ul>

          {/* Right — Search + Button */}
          <div className="flex items-center gap-4">
            {/* Search Toggle */}
            {/* <button onClick={() => setSearchOpen(!searchOpen)}>
              <FaSearch className="text-white text-lg hover:text-[#FEBC34]" />
            </button> */}

            {/* Quote Button */}
            <a
              href="/contact"
              className="bg-[#FEBC34] text-black px-8 py-[21px] font-semibold hover:bg-[#FF5E15] hover:text-white hidden md:block"
            >
              GET A FREE QUOTE
            </a>

            {/* Mobile Menu Button */}
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

        {/* Mobile Nav */}
        {navOpen && (
          <ul className="md:hidden bg-[#0a2d57] text-center py-4 space-y-4">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        )}

        {/* Search Box */}
        {/* {searchOpen && (
          <div className="absolute right-96 top-18 bg-slate-500 border border-b-orange-600 p-4 shadow-lg rounded w-64">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border px-3 py-2 rounded"
            />
          </div>
        )} */}
      </nav>
    </header>
  );
}
