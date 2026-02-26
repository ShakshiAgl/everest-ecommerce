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
          Maa Kripa Trendz
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
      src={assets.about_4}
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

     {/* ================= ELEGANT TIMELINE ================= */}
<section className="relative py-24 px-6 md:px-20 bg-gradient-to-b from-[#FDF8F3] via-[#F9EFE7] to-[#FDF8F3] overflow-hidden">

  {/* Heading */}
  <div className="text-center mb-20">
    <h2 className="text-5xl font-serif text-[#7A1C2E] tracking-wide relative inline-block">
      Our Journey
      <span className="block w-24 h-[2px] bg-gradient-to-r from-transparent via-[#C6A75E] to-transparent mx-auto mt-4"></span>
    </h2>
    <p className="text-gray-600 mt-4 max-w-xl mx-auto italic">
      A legacy woven with tradition, passion & timeless elegance.
    </p>
  </div>

  {/* Timeline Line */}
  <div className="relative max-w-5xl mx-auto">
    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#C6A75E] to-[#7A1C2E] h-full"></div>

    {[
      { year: "2005", text: "Founded with a vision to celebrate Indian craftsmanship." },
      { year: "2010", text: "Expanded to 200+ trusted retailers across India." },
      { year: "2015", text: "Launched exclusive Designer Saree Collection." },
      { year: "2020", text: "Built a strong network of 1000+ sellers." },
      { year: "2024", text: "Recognized as an Award-Winning Saree Brand." }
    ].map((item, index) => (
      <div
        key={index}
        className={`relative mb-16 flex ${
          index % 2 === 0 ? "justify-start" : "justify-end"
        }`}
      >
        <div className="w-full md:w-5/12 bg-white shadow-xl rounded-2xl p-8 border border-[#F1E4D8] hover:scale-105 transition duration-500">

          {/* Year Badge */}
          <div className="text-[#7A1C2E] text-3xl font-serif mb-4">
            {item.year}
          </div>

          <p className="text-gray-600 leading-relaxed">
            {item.text}
          </p>
        </div>

        {/* Circle on line */}
        <span className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-[#C6A75E] rounded-full border-4 border-white shadow-md"></span>
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

     {/* ================= ROYAL MANUFACTURING PROCESS ================= */}
{/* ================= ROYAL MANUFACTURING PROCESS ================= */}
<section className="py-24 px-6 md:px-20 bg-gradient-to-b from-white via-[#FDF8F3] to-white">

  <div className="text-center mb-20">
    <h2 className="text-5xl font-serif text-[#7A1C2E] tracking-wide">
      Our Manufacturing Process
    </h2>
    <div className="w-28 h-[2px] bg-gradient-to-r from-transparent via-[#C6A75E] to-transparent mx-auto mt-4"></div>
  </div>

  <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">

    {[
      {
        title: "Fabric Selection",
        desc: "Premium silk and handpicked fabrics sourced from trusted artisans.",
        img: assets.fabric_img 
      },
      {
        title: "Design & Pattern Making",
        desc: "Intricate motifs crafted by skilled designers.",
        img: "/images/design.jpg"
      },
      {
        title: "Printing & Dyeing",
        desc: "Rich colors infused using traditional techniques.",
        img: "/images/dye.jpg"
      },
      {
        title: "Embroidery & Kari Work",
        desc: "Hand-done zari and detailed thread work.",
        img: "/images/embroidery.jpg"
      },
      {
        title: "Quality Inspection",
        desc: "Each saree carefully inspected for perfection.",
        img: "/images/quality.jpg"
      },
      {
        title: "Packaging & Distribution",
        desc: "Elegantly packed and delivered with care.",
        img: "/images/packaging.jpg"
      }
    ].map((step, index) => (
      <div
        key={index}
        className="relative group overflow-hidden rounded-3xl shadow-xl border border-[#F1E4D8] cursor-pointer"
      >

        {/* Image Layer */}
        <div className="absolute inset-0 translate-y-[-100%] group-hover:translate-y-0 transition-all duration-700 ease-in-out">
          <img
            src={step.img}
            alt={step.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content Layer */}
        <div className="relative bg-white p-10 h-72 flex flex-col justify-center transition duration-500 group-hover:text-white">
          <h3 className="text-2xl font-serif text-[#7A1C2E] group-hover:text-white transition duration-500">
            {step.title}
          </h3>

          <p className="text-gray-600 mt-4 text-sm leading-relaxed group-hover:text-gray-200 transition duration-500">
            {step.desc}
          </p>

          <div className="w-16 h-[2px] bg-[#C6A75E] mt-6 group-hover:bg-white transition-all duration-500"></div>
        </div>

      </div>
    ))}

  </div>
</section>

     {/* ================= WHY RETAILERS CHOOSE US ================= */}
<section className="relative py-24 px-6 md:px-20 bg-gradient-to-br from-[#7A1C2E] via-[#5C1324] to-[#7A1C2E] text-white overflow-hidden">

  {/* Decorative Glow */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-[#C6A75E]/20 blur-3xl rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#C6A75E]/20 blur-3xl rounded-full"></div>

  {/* Heading */}
  <div className="text-center mb-20 relative">
    <h2 className="text-5xl font-serif tracking-wide">
      Why Retailers Choose Us
    </h2>
    <div className="w-28 h-[2px] bg-gradient-to-r from-transparent via-[#C6A75E] to-transparent mx-auto mt-4"></div>
    <p className="mt-4 text-gray-200 italic max-w-2xl mx-auto">
      Trusted by hundreds of partners across India for quality, scale & reliability.
    </p>
  </div>

  {/* Cards */}
  <div className="grid md:grid-cols-5 gap-10 relative max-w-7xl mx-auto">

    {[
      { title: "Bulk Manufacturing", desc: "High-volume production capacity with consistent quality." },
      { title: "Fast Dispatch", desc: "Quick turnaround time to meet market demand." },
      { title: "Wholesale Pricing", desc: "Competitive margins ensuring retailer profitability." },
      { title: "Custom Orders", desc: "Exclusive designs tailored to your business needs." },
      { title: "Strong Distribution", desc: "Wide network ensuring seamless delivery nationwide." }
    ].map((item, index) => (
      <div
        key={index}
        className="group relative bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl hover:bg-white hover:text-[#7A1C2E] transition duration-500 shadow-xl"
      >

        {/* Icon Circle */}
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#C6A75E] to-[#E5C97A] flex items-center justify-center text-[#7A1C2E] font-bold text-xl shadow-lg group-hover:scale-110 transition duration-500">
          {index + 1}
        </div>

        {/* Title */}
        <h3 className="text-lg font-serif mb-4">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-sm opacity-90 group-hover:opacity-100 transition">
          {item.desc}
        </p>

        {/* Bottom Accent Line */}
        <div className="w-10 h-[2px] bg-[#C6A75E] mx-auto mt-6 group-hover:w-20 transition-all duration-500"></div>

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
            “At Maa Kripa Trendz, we believe every saree carries a story.
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