import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";

// Lazy load pages
const Home = React.lazy(() => import("./Pages/Home"));
const About = React.lazy(() => import("./Pages/About"));
const Services = React.lazy(() => import("./Pages/Services"));
const Contact = React.lazy(() => import("./Pages/Contact"));
const Certificates = React.lazy(() => import("./Pages/Certificates"));
const Machinery = React.lazy(() => import("./Pages/Machinery"));

function App() {
  useEffect(() => {
    // Disable right-click on the whole site
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);
    return () => document.removeEventListener("contextmenu", handleContextMenu);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />

      {/* Suspense wrapper for lazy loaded pages */}
      <Suspense
        fallback={
          <div className="w-full h-screen flex flex-col items-center justify-center gap-4 text-gray-700">
            <div className="w-12 h-12 border-4 border-gray-300 border-t-[var(--color-prim)] rounded-full animate-spin"></div>
            <span>Loading, please wait...</span>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/machinery" element={<Machinery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
