"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Products() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <section id="services" ref={containerRef} className="bg-[#0B0A09] py-32 relative">
      {/* Premium blurred vertical gradient columns background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#000000]">
        <div className="absolute inset-x-0 top-0 h-[280px] bg-black z-10"></div>
        <div className="absolute inset-x-0 top-[200px] h-[250px] bg-gradient-to-b from-black to-transparent z-10"></div>

        <motion.div 
          className="absolute inset-x-0 top-[300px] h-[2200px] flex filter blur-[80px] opacity-70"
          style={{ y: yParallax, willChange: "transform" }}
        >
          <div className="w-[8.33%] h-full bg-gradient-to-b from-transparent via-[#002D6E]/70 to-transparent"></div>
          <div className="w-[8.33%] h-full bg-gradient-to-b from-transparent via-[#004BB0]/80 to-transparent"></div>
          <div className="w-[8.33%] h-full bg-gradient-to-b from-transparent via-[#8BCAFD]/50 to-transparent"></div>
          <div className="w-[8.33%] h-full bg-gradient-to-b from-transparent via-[#004BB0]/60 to-transparent"></div>
          <div className="w-[8.33%] h-full bg-gradient-to-b from-transparent via-[#002D6E]/80 to-transparent"></div>
          <div className="w-[8.33%] h-full bg-gradient-to-b from-transparent via-[#8BCAFD]/65 to-transparent"></div>
          <div className="w-[8.33%] h-full bg-gradient-to-b from-transparent via-[#004BB0]/75 to-transparent"></div>
          <div className="w-[8.33%] h-full bg-gradient-to-b from-transparent via-[#8BCAFD]/45 to-transparent"></div>
          <div className="w-[8.33%] h-full bg-gradient-to-b from-transparent via-[#002D6E]/60 to-transparent"></div>
          <div className="w-[8.33%] h-full bg-gradient-to-b from-transparent via-[#004BB0]/55 to-transparent"></div>
          <div className="w-[8.33%] h-full bg-gradient-to-b from-transparent via-[#8BCAFD]/70 to-transparent"></div>
          <div className="w-[8.33%] h-full bg-gradient-to-b from-transparent via-[#002D6E]/50 to-transparent"></div>
        </motion.div>

        <div className="absolute inset-x-0 bottom-0 top-[1200px] bg-gradient-to-b from-transparent via-transparent to-[#F9F8F6]" style={{ background: "linear-gradient(to bottom, transparent 0%, transparent 10%, rgba(249,248,246,0.15) 30%, rgba(249,248,246,0.4) 50%, rgba(249,248,246,0.75) 70%, #F9F8F6 100%)" }}></div>
      </div>

      <div className="max-w-7xl mr-auto ml-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl text-center mb-16 tracking-tight text-white font-novecento-wide-bold">
          Ürünlerimiz
        </h2>

        <div className="flex flex-col gap-6 max-w-[72rem] mx-auto relative">
          
          {/* Product 1: Likapa */}
          <div className="group sticky top-24 bg-white/90 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/40 shadow-sm transition-transform duration-500 cursor-pointer transform hover:-translate-y-2 overflow-hidden relative">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#004BB0] to-transparent"></div>
              <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#004BB0] to-transparent"></div>
              <div className="absolute top-0 bottom-0 left-1/3 w-px bg-gradient-to-b from-transparent via-[#004BB0] to-transparent"></div>
              <div className="absolute top-0 bottom-0 right-1/3 w-px bg-gradient-to-b from-transparent via-[#004BB0] to-transparent"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center relative z-10">
              <div className="flex flex-col justify-between min-h-full">
                <div>
                  <span className="text-xs font-semibold tracking-wider text-[#004BB0] uppercase font-dm-sans">Ürün 01</span>
                  <h2 className="text-4xl sm:text-5xl font-novecento-wide-bold text-gray-900 mt-2 mb-6 tracking-tight leading-[1.1]">Likapa</h2>

                  <div className="mt-8 relative mb-8">
                    <div className="grid grid-cols-2 gap-6 text-gray-500 px-0 relative">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-[#004BB0]" />
                        <span className="text-xs sm:text-sm font-dm-sans font-medium text-gray-600">Adisyon &amp; POS</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-[#004BB0]" />
                        <span className="text-xs sm:text-sm font-dm-sans font-medium text-gray-600">Dijital QR Menü</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm relative h-48 sm:h-56">
                    <Image src="/assets/likapabanner.png" alt="Likapa banner" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover block" />
                  </div>
                </div>

                <div className="w-full mt-6">
                  <p className="text-sm font-bold text-gray-900 tracking-tight font-dm-sans">Temassız Sipariş ve İşletme Yönetimi</p>
                  <p className="mt-2 text-sm text-gray-600 font-dm-sans leading-relaxed">Restoran, kafe ve yiyecek-içecek işletmeleri için tasarlanmış, bulut tabanlı yeni nesil adisyon ve dijital QR menü yönetim sistemi.</p>
                  <a href="#contact" className="mt-6 inline-flex items-center justify-center gap-2 h-10 px-6 rounded-full bg-[#004BB0] hover:bg-[#002D6E] text-white text-xs font-semibold tracking-wider uppercase transition-colors font-dm-sans">
                    Detayları İnceleyin
                    <span className="inline-flex h-1.5 w-1.5 rounded-full bg-white"></span>
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 relative">
                <div className="flex flex-col gap-4">
                  <article className="relative overflow-hidden aspect-[4/5] border-gray-100 border rounded-2xl shadow-sm hover:scale-[1.02] transition-transform duration-300">
                    <Image src="/assets/Adisyon.png" alt="Adisyon" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-0.5 rounded-md bg-white/90 backdrop-blur text-[10px] text-gray-800 font-semibold border border-gray-100 font-dm-sans shadow-md">Adisyon</span>
                    </div>
                  </article>
                  <article className="relative overflow-hidden aspect-[4/3] border-gray-100 border rounded-2xl shadow-sm hover:scale-[1.02] transition-transform duration-300">
                    <Image src="/assets/Menü.png" alt="Menü" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-0.5 rounded-md bg-white/90 backdrop-blur text-[10px] text-gray-800 font-semibold border border-gray-100 font-dm-sans shadow-md">Menü</span>
                    </div>
                  </article>
                </div>
                <div className="flex flex-col gap-4">
                  <article className="relative overflow-hidden aspect-[4/3] border-gray-100 border rounded-2xl shadow-sm hover:scale-[1.02] transition-transform duration-300">
                    <Image src="/assets/Yönetim.png" alt="Yönetim" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-0.5 rounded-md bg-white/90 backdrop-blur text-[10px] text-gray-800 font-semibold border border-gray-100 font-dm-sans shadow-md">Yönetim</span>
                    </div>
                  </article>
                  <article className="relative overflow-hidden aspect-[4/5] border-gray-100 border rounded-2xl shadow-sm hover:scale-[1.02] transition-transform duration-300">
                    <Image src="/assets/KDS.png" alt="KDS" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-0.5 rounded-md bg-white/90 backdrop-blur text-[10px] text-gray-800 font-semibold border border-gray-100 font-dm-sans shadow-md">KDS</span>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>

          {/* Product 2: Bilte */}
          <div className="group sticky top-28 bg-white/90 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/40 shadow-sm transition-transform duration-500 cursor-pointer transform hover:-translate-y-2 overflow-hidden relative">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#004BB0] to-transparent"></div>
              <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#004BB0] to-transparent"></div>
              <div className="absolute top-0 bottom-0 left-1/3 w-px bg-gradient-to-b from-transparent via-[#004BB0] to-transparent"></div>
              <div className="absolute top-0 bottom-0 right-1/3 w-px bg-gradient-to-b from-transparent via-[#004BB0] to-transparent"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center relative z-10">
              <div className="flex flex-col justify-between min-h-full">
                <div>
                  <span className="text-xs font-semibold tracking-wider text-[#004BB0] uppercase font-dm-sans">Ürün 02</span>
                  <h2 className="text-4xl sm:text-5xl font-novecento-wide-bold text-gray-900 mt-2 mb-6 tracking-tight leading-[1.1]">Bilte</h2>

                  <div className="mt-8 relative mb-8">
                    <div className="grid grid-cols-2 gap-6 text-gray-500 px-0 relative">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-[#004BB0]" />
                        <span className="text-xs sm:text-sm font-dm-sans font-medium text-gray-600">İş Emri Yönetimi</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-[#004BB0]" />
                        <span className="text-xs sm:text-sm font-dm-sans font-medium text-gray-600">Saha Ekipleri Takibi</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full mt-6">
                  <p className="text-sm font-bold text-gray-900 tracking-tight font-dm-sans">Saha Operasyonlarında Maksimum Hız</p>
                  <p className="mt-2 text-sm text-gray-600 font-dm-sans leading-relaxed">Saha ekiplerinizin iş emirlerini, görev dağılımlarını ve müşteri hizmet süreçlerini anlık olarak yöneten web ve mobil uyumlu bulut platformu.</p>
                  <a href="#contact" className="mt-6 inline-flex items-center justify-center gap-2 h-10 px-6 rounded-full bg-[#004BB0] hover:bg-[#002D6E] text-white text-xs font-semibold tracking-wider uppercase transition-colors font-dm-sans">
                    Detayları İnceleyin
                    <span className="inline-flex h-1.5 w-1.5 rounded-full bg-white"></span>
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 relative">
                <div className="flex flex-col gap-4">
                  <article className="relative overflow-hidden aspect-[4/5] border-gray-100 border rounded-2xl shadow-sm hover:scale-[1.02] transition-transform duration-300">
                    <Image src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c6bb21d7-3ce2-44b4-abbf-2b0d092cd7fc_800w.jpg" alt="Mobil" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-0.5 rounded-md bg-white/90 backdrop-blur text-[10px] text-gray-800 font-semibold border border-gray-100 font-dm-sans shadow-md">Mobil</span>
                    </div>
                  </article>
                  <article className="relative overflow-hidden aspect-[4/3] border-gray-100 border rounded-2xl shadow-sm hover:scale-[1.02] transition-transform duration-300">
                    <Image src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9b13123e-ec51-4d3a-b994-c64aab4555ba_800w.jpg" alt="Görev" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-0.5 rounded-md bg-white/90 backdrop-blur text-[10px] text-gray-800 font-semibold border border-gray-100 font-dm-sans shadow-md">Görev</span>
                    </div>
                  </article>
                </div>
                <div className="flex flex-col gap-4">
                  <article className="relative overflow-hidden aspect-[4/3] border-gray-100 border rounded-2xl shadow-sm hover:scale-[1.02] transition-transform duration-300">
                    <Image src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6dc04406-de49-4988-8d82-e1d9fe1d83c1_800w.jpg" alt="Form" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-0.5 rounded-md bg-white/90 backdrop-blur text-[10px] text-gray-800 font-semibold border border-gray-100 font-dm-sans shadow-md">Form</span>
                    </div>
                  </article>
                  <article className="relative overflow-hidden aspect-[4/5] border-gray-100 border rounded-2xl shadow-sm hover:scale-[1.02] transition-transform duration-300">
                    <Image src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5ee0a38a-b5d3-4531-8793-98beed4af162_800w.jpg" alt="Rota" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-0.5 rounded-md bg-white/90 backdrop-blur text-[10px] text-gray-800 font-semibold border border-gray-100 font-dm-sans shadow-md">Rota</span>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>

          {/* Product 3: Kovan */}
          <div className="group sticky top-32 bg-white/90 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/40 shadow-sm transition-transform duration-500 cursor-pointer transform hover:-translate-y-2 overflow-hidden relative">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#004BB0] to-transparent"></div>
              <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#004BB0] to-transparent"></div>
              <div className="absolute top-0 bottom-0 left-1/3 w-px bg-gradient-to-b from-transparent via-[#004BB0] to-transparent"></div>
              <div className="absolute top-0 bottom-0 right-1/3 w-px bg-gradient-to-b from-transparent via-[#004BB0] to-transparent"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center relative z-10">
              <div className="flex flex-col justify-between min-h-full">
                <div>
                  <span className="text-xs font-semibold tracking-wider text-[#004BB0] uppercase font-dm-sans">Ürün 03</span>
                  <h2 className="text-4xl sm:text-5xl font-novecento-wide-bold text-gray-900 mt-2 mb-6 tracking-tight leading-[1.1]">Kovan</h2>

                  <div className="mt-8 relative mb-8">
                    <div className="grid grid-cols-2 gap-6 text-gray-500 px-0 relative">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-[#004BB0]" />
                        <span className="text-xs sm:text-sm font-dm-sans font-medium text-gray-600">Üye Yönetimi</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-[#004BB0]" />
                        <span className="text-xs sm:text-sm font-dm-sans font-medium text-gray-600">Aidat Otomasyonu</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full mt-6">
                  <p className="text-sm font-bold text-gray-900 tracking-tight font-dm-sans">Topluluk ve Dernek Otomasyonu</p>
                  <p className="mt-2 text-sm text-gray-600 font-dm-sans leading-relaxed">Dernekler, topluluklar ve vakıflar için üyelik başvurularını kolaylaştıran, aidat ve onay süreçlerini tek panelden yöneten bulut portalı.</p>
                  <a href="#contact" className="mt-6 inline-flex items-center justify-center gap-2 h-10 px-6 rounded-full bg-[#004BB0] hover:bg-[#002D6E] text-white text-xs font-semibold tracking-wider uppercase transition-colors font-dm-sans">
                    Detayları İnceleyin
                    <span className="inline-flex h-1.5 w-1.5 rounded-full bg-white"></span>
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 relative">
                <div className="flex flex-col gap-4">
                  <article className="relative overflow-hidden aspect-[4/5] border-gray-100 border rounded-2xl shadow-sm hover:scale-[1.02] transition-transform duration-300">
                    <Image src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c6bb21d7-3ce2-44b4-abbf-2b0d092cd7fc_800w.jpg" alt="Portal" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-0.5 rounded-md bg-white/90 backdrop-blur text-[10px] text-gray-800 font-semibold border border-gray-100 font-dm-sans shadow-md">Portal</span>
                    </div>
                  </article>
                  <article className="relative overflow-hidden aspect-[4/3] border-gray-100 border rounded-2xl shadow-sm hover:scale-[1.02] transition-transform duration-300">
                    <Image src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9b13123e-ec51-4d3a-b994-c64aab4555ba_800w.jpg" alt="Aidat" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-0.5 rounded-md bg-white/90 backdrop-blur text-[10px] text-gray-800 font-semibold border border-gray-100 font-dm-sans shadow-md">Aidat</span>
                    </div>
                  </article>
                </div>
                <div className="flex flex-col gap-4">
                  <article className="relative overflow-hidden aspect-[4/3] border-gray-100 border rounded-2xl shadow-sm hover:scale-[1.02] transition-transform duration-300">
                    <Image src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6dc04406-de49-4988-8d82-e1d9fe1d83c1_800w.jpg" alt="Topluluk" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-0.5 rounded-md bg-white/90 backdrop-blur text-[10px] text-gray-800 font-semibold border border-gray-100 font-dm-sans shadow-md">Topluluk</span>
                    </div>
                  </article>
                  <article className="relative overflow-hidden aspect-[4/5] border-gray-100 border rounded-2xl shadow-sm hover:scale-[1.02] transition-transform duration-300">
                    <Image src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5ee0a38a-b5d3-4531-8793-98beed4af162_800w.jpg" alt="Gelir" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-0.5 rounded-md bg-white/90 backdrop-blur text-[10px] text-gray-800 font-semibold border border-gray-100 font-dm-sans shadow-md">Gelir</span>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
