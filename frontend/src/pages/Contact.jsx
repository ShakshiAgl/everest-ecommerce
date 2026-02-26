import React from "react";
import { assets } from "@/assets/frontend_assets/assets";

const Contact = () => {
  return (
    <div className="bg-[#F8F1EA] text-[#5C1A1B]">

      {/* ================= HERO SECTION ================= */}
      <div className="relative py-20 text-center bg-gradient-to-r from-[#5C1A1B] via-[#8B1E3F] to-[#5C1A1B] text-white overflow-hidden">
        <h1 className="text-4xl md:text-5xl font-serif tracking-wide animate-pulse">
          Get In Touch With Us
        </h1>
        <p className="mt-6 text-sm md:text-base max-w-2xl mx-auto text-[#F8EDE3]">
          Whether you're a valued retailer, wholesale partner, or customer —  
          we’re here to assist you with elegance and excellence.
        </p>

        {/* Gold Divider */}
        <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mt-8"></div>
      </div>

      {/* ================= CONTACT DETAILS SECTION ================= */}
      <div className="py-16 px-6 md:px-20 grid md:grid-cols-3 gap-10 text-center">

        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-500">
          <h3 className="text-xl font-semibold mb-4 text-[#8B1E3F]">📍 Address</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Maakripa Trendz Pvt. Ltd. <br />
            Millennium Textile Market 2, Surat, Gujarat, India
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-500">
          <h3 className="text-xl font-semibold mb-4 text-[#8B1E3F]">📞 Phone</h3>
          <p className="text-sm text-gray-600">
            +91 63549 69798 <br />
            +91 93778 82809
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-500">
          <h3 className="text-xl font-semibold mb-4 text-[#8B1E3F]">✉ Email</h3>
          <p className="text-sm text-gray-600">
            info@maakripatrendz.com <br />
            wholesale@maakripatrendz.com
          </p>
        </div>

      </div>

      {/* ================= CONTACT FORM SECTION ================= */}
      <div className="py-20 px-6 md:px-20 bg-white">

        <h2 className="text-3xl md:text-4xl text-center font-serif mb-14">
          Send Us A Message
        </h2>

        <div className="max-w-4xl mx-auto bg-[#F8F1EA] p-10 rounded-3xl shadow-xl">

          <form className="grid md:grid-cols-2 gap-8">

            <input
              type="text"
              placeholder="Your Name"
              className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8B1E3F]"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8B1E3F]"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8B1E3F]"
            />

            <select className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8B1E3F]">
              <option>Select Inquiry Type</option>
              <option>Retail Purchase</option>
              <option>Wholesale Inquiry</option>
              <option>Custom Design Order</option>
              <option>General Query</option>
            </select>

            <textarea
              rows="5"
              placeholder="Write your message..."
              className="md:col-span-2 p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8B1E3F]"
            ></textarea>

            <button
              type="submit"
              className="md:col-span-2 bg-gradient-to-r from-[#5C1A1B] to-[#8B1E3F] text-white py-4 rounded-xl hover:scale-105 transition duration-300 shadow-lg"
            >
              Submit Inquiry
            </button>

          </form>
        </div>
      </div>

      {/* ================= WHOLESALE HIGHLIGHT SECTION ================= */}
      <div className="py-20 px-6 md:px-20 bg-gradient-to-r from-[#5C1A1B] to-[#8B1E3F] text-white text-center">

        <h2 className="text-3xl md:text-4xl font-serif mb-8">
          Partner With India’s Leading Saree Manufacturer
        </h2>

        <p className="max-w-3xl mx-auto text-sm md:text-base text-[#F8EDE3] leading-relaxed">
          Serving 1000+ retailers across India, Maakripa Trendz offers  
          bulk manufacturing, competitive wholesale pricing, custom designs,  
          and fast dispatch to help your business grow effortlessly.
        </p>

        <button className="mt-10 bg-white text-[#8B1E3F] px-8 py-4 rounded-full font-semibold hover:bg-[#F8F1EA] transition duration-300 shadow-lg">
          Become a Wholesale Partner
        </button>

      </div>

      {/* ================= MAP SECTION ================= */}
      <div className="py-20 px-6 md:px-20 bg-[#F8F1EA] text-center">

        <h2 className="text-3xl md:text-4xl font-serif mb-12">
          Our Location
        </h2>

       <div className="rounded-3xl overflow-hidden shadow-2xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d522.1119682554851!2d72.84653008160925!3d21.184943060416288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fe04a9e943f%3A0x42a1258fcabe8354!2sMAAKRIPA%20TRENDZ%20PVT.%20LTD!5e0!3m2!1sen!2sin!4v1772100762279!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0"
          title="MAAKRIPA TRENDZ Location"
        ></iframe>
      </div>

      </div>

    </div>
  );
};

export default Contact;