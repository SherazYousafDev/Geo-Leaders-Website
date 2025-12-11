import React, { useState } from "react";
import { Phone, Mail } from "lucide-react";
import Header from "../Components/Header";
import FooterSection from "../Components/FooterSection";
import ScrollAnimation from "../Components/ScrollAnimation";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Header />

      {/* Contact Form */}
      <div className="w-full bg-slate-100 py-16 md:py-20 lg:py-24 relative  overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Title Animation */}
          <ScrollAnimation direction="up" delay={0.1}>
            <div className="text-center">
              <span className="text-sec font-bold text-sm uppercase text-center">
                {" "}
                CONTACT US{" "}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-main  mb-16">
                Get in touch with us
              </h2>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* LEFT SIDE */}
            <ScrollAnimation direction="left" delay={0.2}>
              <div className="space-y-6">
                <div className="bg-main rounded-3xl p-10 shadow-2xl">
                  {/* Phone Section */}
                  <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-400/20 rounded-full mb-6">
                      <Phone className="w-10 h-10 text-sec" strokeWidth={1.5} />
                    </div>
                    <p className="text-gray-300 text-sm mb-3">
                      Call Support Center 24/7
                    </p>
                    <a
                      href="tel:+971557745783"
                      className="text-white text-2xl font-bold hover:text-sec transition-colors duration-300"
                    >
                      +971 55 774 5783
                    </a>
                  </div>

                  {/* Email Section */}
                  <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-400/20 rounded-full mb-6">
                      <Mail className="w-10 h-10 text-sec" strokeWidth={1.5} />
                    </div>
                    <p className="text-gray-300 text-sm mb-3">Write To Us</p>
                    <a
                      href="mailto:Geoleaders.uae@gmail.com"
                      className="text-white text-xl font-bold hover:text-sec transition-colors duration-300"
                    >
                      Geoleaders.uae@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* RIGHT SIDE - FORM */}
            <ScrollAnimation direction="right" delay={0.3}>
              <div className="bg-white rounded-3xl p-8 md:p-10 lg:p-12 shadow-xl">
                {/* Form */}
                <div className="space-y-6">
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter Your name"
                      className="w-full px-4 py-4 border-b-2 border-gray-200 focus:border-yellow-400 outline-none transition-colors duration-300 bg-transparent text-gray-900 placeholder-gray-400"
                    />

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter Your email"
                      className="w-full px-4 py-4 border-b-2 border-gray-200 focus:border-yellow-400 outline-none transition-colors duration-300 bg-transparent text-gray-900 placeholder-gray-400"
                    />
                  </div>

                  {/* Subject */}
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full px-4 py-4 border-b-2 border-gray-200 focus:border-yellow-400 outline-none transition-colors duration-300 bg-transparent text-gray-900 placeholder-gray-400"
                  />

                  {/* Message */}
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Message"
                    className="w-full px-4 py-4 border-b-2 border-gray-200 focus:border-yellow-400 outline-none transition-colors duration-300 bg-transparent text-gray-900 placeholder-gray-400 resize-none"
                  ></textarea>

                  {/* Button */}
                  <button
                    onClick={handleSubmit}
                    className="bg-main hover:bg-sec hover:text-head text-white font-bold px-12 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="w-full h-96 ">
        <iframe
          title="Office Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.989691620147!2d55.0868033150186!3d24.98793548404353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f116fbc6bb2d3%3A0x2bcbb2c4adf3c15c!2sJebel%20Ali%2C%20Dubai%2C%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
          width="100%"
          height="100%"
          className="border-0 rounded-xl"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <FooterSection />
    </>
  );
}
