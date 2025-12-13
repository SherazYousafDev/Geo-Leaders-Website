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
    <header className="w-full overflow-hidden">
      {/* 🔶 TOP STRIP */}
      <div className="relative w-full h-10 py-2 overflow-hidden hidden lg:block">
        {/* Background colors / skew */}
        <div className="absolute inset-0 bg-sec"></div>
        <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 right-0 bg-prim transform -skew-x-12 origin-left"></div>

        <div className="relative z-10 container mx-auto px-4 flex flex-col gap-2 lg:flex-row lg:justify-between lg:items-center">
          {/* Contact Info */}
          <div className="hidden lg:flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-8 text-black text-sm lg:text-base">
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
          <div className="hidden lg:flex items-center justify-center gap-4 text-white mt-1 lg:mt-0">
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
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "#ecedf0",
            backgroundImage:
              "radial-gradient(rgba(0, 0, 0, 0.2) 1px, transparent 0)",
            backgroundSize: "30px 30px",
            backgroundPosition: "-5px -5px",
          }}
        ></div>

        <div className="relative container mx-auto px-4 py-4 flex items-center justify-center lg:justify-between h-25">
          {/* Logo */}
          <div className="shrink-0">
            <Link to="/" className="block">
              <img className="w-48 md:w-60" src="/logo.png" alt="Logo" />
            </Link>
          </div>

          {/* Contact Items - hidden on tablet and below */}
          <div className="hidden lg:flex items-center gap-8">
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
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-prim rounded-full flex items-center justify-center">
                <MapPin className="text-white" size={24} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-gray-900 font-light text-sm sm:text-base">
                  Office Address
                </span>
                <a
                  href="https://www.google.com/maps/place/25%C2%B010'11.1%22N+55%C2%B020'48.5%22E/@25.1697544,55.3442394,17z/data=!3m1!4b1!4m4!3m3!8m2!3d25.1697544!4d55.3468143?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-gray-900 wrap-break-word font-medium text-base sm:text-md hover:text-prim transition-colors duration-300"
                >
                  Office No.114 Al Khoory Hill Building Ras <br /> Al khor
                  industrial area 2, Dubai U.A.E
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔵 NAVIGATION BAR */}
      <nav className="bg-main text-white relative w-full">
        <div className="container flex justify-between items-center h-16 px-4">
          {/* Desktop Menu - only on lg+ */}
          <ul className="hidden lg:flex gap-12 font-medium text-lg">
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

              <ul className="absolute left-0 top-full mt-2 bg-white text-black shadow-xl rounded-lg border border-gray-100 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
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
              className="bg-sec text-black px-8 py-[21px] font-semibold hover:bg-white hover:text-main hidden lg:block"
            >
              GET A FREE QUOTE
            </Link>

            {/* Hamburger Menu - show on mobile & tablet */}
            <button
              onClick={() => setNavOpen(!navOpen)}
              className="flex lg:hidden flex-col gap-1"
            >
              <span className="w-6 h-0.5 bg-white"></span>
              <span className="w-6 h-0.5 bg-white"></span>
              <span className="w-6 h-0.5 bg-white"></span>
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Menu */}
        {navOpen && (
          <ul className="flex flex-col lg:hidden bg-[#0a2d57] text-center py-4 space-y-4">
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
              <Link to="/machinery" onClick={() => setNavOpen(false)}>
                Machinery
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
