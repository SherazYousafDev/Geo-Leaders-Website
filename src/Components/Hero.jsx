import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="relative w-full h-[600px] md:h-[650px] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center h-full">
        <div className="container text-white mt-16 md:mt-0">
          <h2 className="text-3xl md:text-6xl font-bold mb-4 max-w-xl">
            We Build Quality Construction
          </h2>

          <p className="mb-6 max-w-xl">
            Our diverse portfolio represents decades of construction experience
            backed by a passion for quality, outstanding client service and the
            latest industry.
          </p>

          <div className="flex gap-4">
            <Link
              to="/about"
              className="px-10 py-4 bg-white text-black font-semibold hover:bg-[#FF5E15] transition text-xs md:text-sm lg:text-base"
            >
              Discover More
            </Link>

            <Link
              to="/services"
              className="px-10 py-4 bg-[#FEBC34] text-black font-semibold hover:bg-[#FF5E15] transition text-xs md:text-sm lg:text-base"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
