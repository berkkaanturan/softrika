"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Entrance Divider: curves down to flat as you scroll down
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "start 0.7"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 20,
    mass: 0.2,
    stiffness: 70
  });

  const svgHeight = useTransform(smoothProgress, [0, 1], ["100px", "0px"]);

  const steps = [
    { num: "01", title: "Analiz & Kapsam", desc: "Projenin gereksinimlerini detaylandırır, yol haritasını çizeriz." },
    { num: "02", title: "UI/UX Tasarım", desc: "İleri düzey, kullanıcı odaklı ve akıcı arayüz ekranları tasarlarız." },
    { num: "03", title: "Yazılım & Kod", desc: "En temiz kod standartlarıyla güvenli ve hızlı geliştirme yaparız." },
    { num: "04", title: "Test & QA", desc: "Performans, güvenlik ve hata denetimlerini eksiksiz tamamlarız." },
    { num: "05", title: "Yayın & SLA", desc: "Ürünü canlıya alır, 7/24 izleme ve güncelleme desteği sunarız." },
  ];

  return (
    <>
      {/* Entrance curved divider transition (Curves down to flat) */}
      <div 
        ref={containerRef} 
        className="footer__top-divider w-full overflow-hidden bg-[#F9F8F6] relative z-10 leading-none"
      >
        <motion.svg 
          viewBox="0 0 1440 100" 
          preserveAspectRatio="none" 
          className="w-full block -mb-[3px] translate-y-[1px]"
          style={{ 
            height: svgHeight, 
            minHeight: 0 
          }}
        >
          {/* Quadratic Bezier starting immediately from edges (no flat shoulders) */}
          <path 
            d="M0,100 Q720,-100 1440,100 L1440,100 L0,100 Z" 
            fill="#0B0A09" 
          />
        </motion.svg>
      </div>

      <section 
        id="process" 
        className="bg-[#0B0A09] text-white py-32 px-6 relative min-h-[85vh] flex items-center"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,75,176,0.06),transparent_60%)] pointer-events-none"></div>

        <div className="max-w-[72rem] mx-auto w-full">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-novecento-wide-bold tracking-tight text-white mb-4">
              İş Sürecimiz Nasıl İlerliyor?
            </h2>
            <p className="text-base text-stone-400 font-dm-sans max-w-2xl mx-auto">
              Her projede hedeflerinize ve bütçenize en uygun adımlarla ilerleyip şeffaf raporlama sağlıyoruz.
            </p>
          </div>

          <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 lg:gap-8">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-8 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            {steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-stone-900 border border-stone-800 group-hover:border-blue-500/50 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.25)] flex items-center justify-center relative z-10 mb-6 transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                  <span className="text-xl font-bold font-dm-sans text-stone-300 group-hover:text-white transition-colors">
                    {step.num}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white font-dm-sans mb-3">{step.title}</h3>
                <p className="text-xs sm:text-sm text-stone-400 font-dm-sans leading-relaxed max-w-[200px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
