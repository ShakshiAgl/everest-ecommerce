import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { assets } from '@/assets/frontend_assets/assets';

const About = () => {

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="relative bg-[#FDF8F3] overflow-hidden">

      {/* ================= LUXURY STYLES ================= */}
      <style>{`
        .gold-divider {
          background: linear-gradient(to right, #C6A75E, #E6C77E, #C6A75E);
          height: 3px;
          border-radius: 20px;
        }

        .gold-frame {
          border: 1px solid #E6C77E;
          box-shadow: 0 0 30px rgba(198,167,94,0.15);
        }

        .shimmer {
          background: linear-gradient(90deg,#5C1A1B 0%,#C6A75E 50%,#5C1A1B 100%);
          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          animation: shine 4s linear infinite;
        }

        @keyframes shine {
          to { background-position: 200% center; }
        }

        .zari-bg::before {
          content: "";
          position: absolute;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(198,167,94,0.15) 0%, transparent 70%);
          top: -150px;
          left: -150px;
          animation: float 10s ease-in-out infinite alternate;
        }

        @keyframes float {
          from { transform: translateY(0px); }
          to { transform: translateY(40px); }
        }
      `}</style>

      {/* ================= HERO ================= */}
      <div className="py-16 text-center relative zari-bg">
        <h1 className="text-5xl font-serif shimmer mb-6">
          Maa Kripa Trends
        </h1>
        <div className="w-40 gold-divider mx-auto mb-6"></div>
        <p className="max-w-3xl mx-auto text-gray-600">
          Weaving Tradition • Designing Elegance • Delivering Excellence Since 2005
        </p>
       
    
      </div>

      {/* ================= SHOWCASE SECTION ================= */}
<section className="py-16 px-6 md:px-20 bg-white text-center">
  <h2 className="text-4xl font-serif shimmer mb-6">
    Elegance in Every Drape
  </h2>
  <div className="w-32 gold-divider mx-auto mb-10"></div>

  <div className="relative max-w-6xl mx-auto">
    <img
      src={assets.about}
      alt="Saree Showcase"
      className="rounded-3xl shadow-2xl w-full object-cover"
    />

    {/* Overlay Text */}
    <div className="absolute inset-0 bg-black/30 rounded-3xl flex items-center justify-center">
      <p className="text-white text-xl md:text-3xl font-serif tracking-wide">
        Celebrating Tradition • Modern Grace • Timeless Beauty
      </p>
    </div>
  </div>

  <p className="max-w-3xl mx-auto text-gray-600 mt-10">
    Our collections are designed to enhance confidence and celebrate the beauty
    of Indian tradition through luxurious fabrics and intricate craftsmanship.
  </p>
</section>

      {/* ================= AWARDS ================= */}
      <section className="py-20 px-6 md:px-20 text-center bg-white">
        <h2 className="text-4xl font-serif shimmer mb-8">🏆 Our Prestigious Awards</h2>
        <div className="w-32 gold-divider mx-auto mb-14"></div>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            { img: assets.awards1, title: "Best Textile Innovation", year: "2022" },
            { img: assets.awards2, title: "Excellence in Saree Manufacturing", year: "2023" },
            { img: assets.award3, title: "Top Wholesale Saree Brand", year: "2024" }
          ].map((award, i) => (
            <div key={i} className="p-6 rounded-2xl gold-frame bg-[#F8F1EA] hover:shadow-2xl transition">
              <img src={award.img} alt="" className="rounded-xl mb-6" />
              <h3 className="text-lg font-semibold text-[#8B1E3F]">
                🏆 {award.title} – {award.year}
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Recognized for innovation, craftsmanship & textile excellence.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="py-20 px-6 md:px-20 bg-[#FDF8F3] text-center">
        <h2 className="text-4xl font-serif shimmer mb-10">Our Journey</h2>
        <div className="w-32 gold-divider mx-auto mb-16"></div>

        <div className="grid md:grid-cols-5 gap-8 text-sm">
          {[
            "2005 – Founded",
            "2010 – 200+ Retailers",
            "2015 – Designer Collection Launch",
            "2020 – 1000+ Sellers Network",
            "2024 – Award Winning Brand"
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white rounded-xl gold-frame">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* ================= ART & HERITAGE ================= */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-b from-white to-[#F8F1EA] text-center">
        <h2 className="text-4xl font-serif shimmer mb-14">
          The Art Behind Every Saree
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            { img: assets.kari_work_img || assets.about_img, title: "Handcrafted Kari Work", desc: "Intricate embroidery preserving generational craftsmanship." },
            { img: assets.designer_img || assets.about_img, title: "Designer Masterpieces", desc: "Blending heritage motifs with modern elegance." },
            { img: assets.sustainable_img || assets.about_img, title: "Manufacturing Excellence", desc: "Advanced production ensuring premium consistency." }
          ].map((item, i) => (
            <div key={i} className="text-center">
              <img src={item.img} alt="" className="rounded-2xl shadow-lg mb-6 hover:scale-105 transition" />
              <h3 className="text-xl font-semibold text-[#8B1E3F]">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-3">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= MANUFACTURING PROCESS ================= */}
      <section className="py-20 px-6 md:px-20 bg-white text-center">
        <h2 className="text-4xl font-serif shimmer mb-10">Our Manufacturing Process</h2>
        <div className="w-32 gold-divider mx-auto mb-16"></div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Fabric Selection",
            "Designing & Pattern Making",
            "Printing & Dyeing",
            "Embroidery & Kari Work",
            "Quality Inspection",
            "Packaging & Distribution"
          ].map((step, i) => (
            <div key={i} className="p-6 rounded-xl bg-[#F8F1EA] gold-frame">
              {step}
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY RETAILERS CHOOSE US ================= */}
      <section className="py-20 px-6 md:px-20 bg-[#FDF8F3] text-center">
        <h2 className="text-4xl font-serif shimmer mb-10">Why Retailers Choose Us</h2>
        <div className="w-32 gold-divider mx-auto mb-14"></div>

        <div className="grid md:grid-cols-5 gap-6 text-sm">
          {[
            "Bulk Manufacturing Capability",
            "Fast Dispatch",
            "Competitive Wholesale Pricing",
            "Custom Design Orders",
            "Strong Distribution Network"
          ].map((point, i) => (
            <div key={i} className="p-6 bg-white rounded-xl gold-frame">
              {point}
            </div>
          ))}
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-20 px-6 md:px-20 bg-white text-center">
        <h2 className="text-4xl font-serif shimmer mb-10">Retailer Testimonials</h2>
        <div className="w-32 gold-divider mx-auto mb-14"></div>

        <div className="max-w-3xl mx-auto bg-[#F8F1EA] p-10 rounded-2xl gold-frame">
          <p className="italic text-gray-700">
            “Maakripa Trendz delivers unmatched quality and consistent supply. 
            Our customers love their designs.”
          </p>
          <p className="mt-4 font-semibold text-[#8B1E3F]">
            – Party Seller, Surat
          </p>
        </div>
      </section>

      {/* ================= PAN INDIA PRESENCE ================= */}
      <section className="py-20 px-6 md:px-20 text-center bg-gradient-to-b from-[#F8F1EA] to-white">
        <h2 className="text-4xl font-serif shimmer mb-6">🌍 Pan India Presence</h2>
        <div className="w-32 gold-divider mx-auto mb-10"></div>

        <img src={assets.india_map || assets.about_img} alt="" className="mx-auto rounded-xl shadow-lg mb-8" />

        <p className="max-w-3xl mx-auto text-gray-600">
          Serving 1000+ sellers across India including Surat, Mumbai,
          Kolkata, Chennai & Delhi.
        </p>
      </section>

      {/* ================= VIDEO SECTION ================= */}
      <section className="py-20 px-6 md:px-20 bg-white text-center">
        <h2 className="text-4xl font-serif shimmer mb-10">Inside Our Manufacturing</h2>
        <div className="w-32 gold-divider mx-auto mb-14"></div>

        <div className="max-w-4xl mx-auto">
          <video controls className="rounded-2xl shadow-xl">
            <source src={assets.factory_video} type="video/mp4" />
          </video>
        </div>
      </section>

      {/* ================= CEO MESSAGE ================= */}
      <section className="py-20 px-6 md:px-20 bg-[#5C1A1B] text-white text-center">
        <h2 className="text-4xl font-serif mb-10">Message from Our CEO</h2>

        <div className="max-w-3xl mx-auto">
          <p className="italic">
            “At Maa Kripa Trends, we believe every saree carries a story.
            Our mission is to preserve Indian heritage while embracing innovation.”
          </p>
          <p className="mt-6 text-lg font-semibold">
            — CEO & Co-Founder
          </p>
        </div>
      </section>

    </div>
  );
};

export default About;