"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Smartphone, Network, Cloud } from "lucide-react";

const services = [
  {
    id: 0,
    title: "Web Sitesi",
    image: "/assets/hizmetlerimiz/web-gelistirme.jpg",
    icon: Globe,
    subtitle: "React, Next.js & API Entegrasyonu",
    desc: "İş süreçlerinizi hızlandıran kurumsal portallar, yönetim panelleri ve operasyon ekranları kuruyoruz.",
    features: ["OWASP güvenlik ve log kontrolleri", "Semantik HTML5 ve SEO uyumluluğu"],
    bgPosition: "30% center"
  },
  {
    id: 1,
    title: "Mobil Uygulama",
    image: "/assets/hizmetlerimiz/mobil-cozumler.jpg",
    icon: Smartphone,
    subtitle: "Flutter, React Native & Native",
    desc: "iOS ve Android platformlarında yüksek performanslı, kullanıcı deneyimi odaklı mobil uygulamalar geliştiriyoruz.",
    features: ["App Store & Play Store süreçleri", "Gelişmiş veri önbellekleme"],
    bgPosition: "center"
  },
  {
    id: 2,
    title: "ERP & CRM Çözümleri",
    image: "/assets/hizmetlerimiz/crm-cozumleri.jpg",
    icon: Network,
    subtitle: "Müşteri 360, Finans & Entegrasyon",
    desc: "İşinizin kurallarına göre şekillenen, ölçülebilir verimlilik sağlayan özel yazılım yatırımları.",
    features: ["CRM teklif, satış ve sipariş takibi", "Finans, stok ve operasyon otomasyonu"],
    bgPosition: "17% center"
  },
  {
    id: 3,
    title: "Bulut & AI Çözümleri",
    image: "/assets/hizmetlerimiz/bulut-ve-ai.jpg",
    icon: Cloud,
    subtitle: "LLM Entegrasyonu & Serverless",
    desc: "AWS, Azure ve GCP üzerinde optimize sunucu mimarileri ve yapay zeka entegrasyonu.",
    features: ["OpenAI, Claude ve Llama modelleri", "Vektör tabanlı veritabanları"],
    bgPosition: "center"
  }
];

export default function ServicesAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.left = `${e.clientX}px`;
      cursorRef.current.style.top = `${e.clientY}px`;
    };

    const container = containerRef.current;
    if (container) {
      const handleMouseEnter = () => {
        if (cursorRef.current) cursorRef.current.style.opacity = "1";
      };
      const handleMouseLeave = () => {
        if (cursorRef.current) cursorRef.current.style.opacity = "0";
        setActiveIndex(null); // Reset when leaving container
      };

      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  return (
    <section id="services-accordion" className="bg-[#F9F8F6] pb-24 px-6 overflow-hidden relative">
      <div 
        ref={cursorRef}
        className="fixed w-4 h-4 bg-white rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-200" 
        style={{ mixBlendMode: "difference" }}
      ></div>

      <div className="max-w-[72rem] mx-auto relative">
        <h3 className="text-3xl md:text-4xl text-center mb-12 tracking-tight text-gray-900 font-novecento-wide-bold">
          Sizlere nasıl destek olabiliriz?
        </h3>

        <div 
          ref={containerRef}
          className="flex flex-col md:flex-row gap-4 h-auto md:h-[620px] w-full relative"
        >
          {services.map((service, index) => {
            const isActive = activeIndex === index;
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                layout
                initial={false}
                animate={{
                  flex: isActive ? 3 : 1,
                }}
                transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                onHoverStart={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className={`group relative overflow-hidden rounded-[2rem] cursor-none flex flex-col justify-between ${isActive ? 'active' : ''}`}
              >
                <Image 
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover z-0"
                  style={{ objectPosition: service.bgPosition }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Overlays */}
                <motion.div 
                  initial={false}
                  animate={{ opacity: isActive ? 0 : 0.1 }}
                  className="absolute inset-0 bg-black z-0"
                ></motion.div>
                <motion.div 
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0 }}
                  className="absolute inset-0 bg-black/10 z-0"
                ></motion.div>

                {/* Content Wrapper */}
                <div className="relative z-10 h-full flex flex-col justify-between w-full shrink-0 p-6">
                  {/* Top Header */}
                  <motion.div 
                    initial={false}
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center justify-between w-full"
                  >
                    <div>
                      <h4 
                        className="text-2xl font-novecento-wide-bold text-white"
                        style={{ textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}
                      >
                        {service.title}
                      </h4>
                    </div>
                    <div className="bg-white/10 border border-white/20 text-white p-3 rounded-full shadow-md shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                  </motion.div>

                  {/* Expanded Bottom Card */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div 
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ 
                          opacity: 1,
                          backdropFilter: "blur(12px)",
                          transition: {
                            delay: 0.2,
                            duration: 0.3
                          }
                        }}
                        exit={{ 
                          opacity: 0,
                          backdropFilter: "blur(0px)",
                          transition: {
                            duration: 0.1
                          }
                        }}
                        className="overflow-hidden w-full mt-4 border border-white/15 bg-black/45 rounded-2xl p-6"
                      >
                        <div className="text-sm font-semibold tracking-wider text-white font-dm-sans mb-3">
                          {service.subtitle}
                        </div>
                        <div className="border-t border-white/10 pt-3">
                          <p className="text-sm text-slate-300 font-dm-sans leading-relaxed mb-4">
                            {service.desc}
                          </p>
                          <div className="text-[13px] text-slate-400 font-dm-sans space-y-2">
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span> 
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Collapsed Bottom Text */}
                <motion.div 
                  initial={false}
                  animate={{ opacity: isActive ? 0 : 1 }}
                  className="absolute bottom-0 left-0 right-0 h-28 z-20 flex items-end p-6 rounded-b-[2rem] pointer-events-none"
                >
                  <h4 
                    className="text-xl font-novecento-wide-bold text-white tracking-wide"
                    style={{ textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}
                  >
                    {service.title}
                  </h4>
                </motion.div>
                <motion.div 
                  initial={false}
                  animate={{ opacity: isActive ? 0 : 1 }}
                  className="absolute bottom-0 left-0 right-0 h-28 z-10 rounded-b-[2rem] pointer-events-none bg-gradient-to-t from-black/60 to-transparent"
                ></motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
