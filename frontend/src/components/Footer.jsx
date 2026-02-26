import { assets } from '@/assets/frontend_assets/assets';
import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#FFFDF9] to-[#F8F1EA] text-gray-800 pt-24 pb-14 px-6 sm:px-12 overflow-hidden">

      {/* Subtle Silk Overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('/silk-texture.png')] bg-cover bg-center pointer-events-none"></div>

      {/* Elegant Gold Divider */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-60 h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full opacity-60"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ================= TOP NEWSLETTER SECTION ================= */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-[Playfair_Display] font-semibold bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-400 bg-clip-text text-transparent">
            Stay Inspired With Elegance
          </h2>

          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Subscribe to receive new saree launches, festive collections, and exclusive wholesale updates.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8B1E3F] w-full"
            />
            <button className="bg-[#8B1E3F] text-white px-6 py-3 rounded-full hover:bg-[#5C1A1B] transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* ================= MAIN FOOTER GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

          {/* Brand Section */}
          <div>
            <Link to="/" className="text-3xl font-[Playfair_Display] text-[#8B1E3F] tracking-wide">
              Maa Kripa Trends
            </Link>

            <p className="mt-5 text-gray-600 text-sm leading-relaxed">
              Established in 2005, we craft timeless sarees blending Indian heritage
              with modern elegance. Trusted by 1000+ retailers across India.
            </p>

            <div className="flex gap-4 mt-6 text-lg text-[#8B1E3F]">
              <FaInstagram className="hover:scale-110 transition cursor-pointer" />
              <FaFacebookF className="hover:scale-110 transition cursor-pointer" />
              <FaWhatsapp className="hover:scale-110 transition cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-[#5C1A1B]">Company</h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="hover:text-[#8B1E3F] transition cursor-pointer">Home</li>
              <li className="hover:text-[#8B1E3F] transition cursor-pointer">About Us</li>
              <li className="hover:text-[#8B1E3F] transition cursor-pointer">Collections</li>
              <li className="hover:text-[#8B1E3F] transition cursor-pointer">Wholesale</li>
              <li className="hover:text-[#8B1E3F] transition cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-[#5C1A1B]">Support</h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="hover:text-[#8B1E3F] transition cursor-pointer">Privacy Policy</li>
              <li className="hover:text-[#8B1E3F] transition cursor-pointer">Shipping Policy</li>
              <li className="hover:text-[#8B1E3F] transition cursor-pointer">Terms & Conditions</li>
              <li className="hover:text-[#8B1E3F] transition cursor-pointer">Return Policy</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-[#5C1A1B]">Get In Touch</h3>

            <ul className="space-y-4 text-gray-600 text-sm">
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#8B1E3F]" /> +91 98765 43210
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#8B1E3F]" /> contact@maakripatrends.com
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#8B1E3F]" /> Surat, Gujarat, India
              </li>
            </ul>
          </div>

        </div>

        {/* ================= TRUST BADGES ================= */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-sm text-gray-600">

          <div className="p-6 bg-white rounded-2xl shadow-sm">
            🇮🇳 Serving 1000+ Retailers Across India
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-sm">
            🔒 Secure Payments & Trusted Manufacturing
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-sm">
            🚚 Fast Dispatch & Bulk Order Support
          </div>

        </div>

        {/* ================= PAYMENT ICONS ================= */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm mb-4">We Accept</p>
          <div className="flex justify-center gap-6 opacity-70">
            <img src={assets.visa_icon} alt="" className="h-6" />
            <img src={assets.mastercard_icon} alt="" className="h-6" />
            <img src={assets.upi_icon} alt="" className="h-6" />
          </div>
        </div>

        {/* ================= COPYRIGHT ================= */}
        <div className="mt-14 border-t border-gray-300 pt-6 text-center text-gray-500 text-sm">
          © 2026 Maa Kripa Trends Pvt. Ltd. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;