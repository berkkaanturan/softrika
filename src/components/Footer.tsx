import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative py-24 bg-[#0B0A09] text-white">
      <div className="sm:px-6 md:px-10 relative max-w-7xl mr-auto ml-auto pr-4 pb-0 pl-4">
        {/* Soft radial glow */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-0 bottom-0 w-[60%] h-[80%] rounded-[40%] bg-gradient-to-tr from-blue-900/10 to-transparent blur-3xl"></div>
        </div>

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4 text-stone-400 text-sm">
          <span className="h-px w-12 bg-white/10"></span>
          <span className="italic font-dm-sans">Dilediğiniz Zaman Ulaşın</span>
          <span className="h-px w-12 bg-white/10"></span>
        </div>

        {/* Heading */}
        <h2 className="mt-4 text-4xl sm:text-6xl text-white text-center font-novecento-wide-bold tracking-tight">
          Bağlantıda <span className="text-[#8BCAFD]">Kalalım</span>
        </h2>

        {/* Copy */}
        <p className="mt-6 text-sm sm:text-base text-stone-400 max-w-xl mx-auto text-center font-dm-sans leading-relaxed">
          Sorularınız mı var yoksa yeni bir proje mi hayata geçirmek istiyorsunuz? Bizimle iletişime geçmekten çekinmeyin; yeni iş ortaklıklarına ve fikir alışverişlerine her zaman açığız!
        </p>

        {/* Logo & Text Above Button */}
        <div className="mt-10 flex items-center justify-center gap-3 select-none pointer-events-none mb-6">
          <div className="w-11 h-11 flex items-center justify-center overflow-visible shrink-0">
            <Image src="/image-cropped.svg" alt="SOFTRIKA logo" width={44} height={44} className="w-full h-full object-contain" />
          </div>
          <div className="font-novecento-wide-bold text-xl sm:text-2xl text-stone-50 leading-none tracking-wider">
            SOFTRIKA
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6 flex justify-center mb-24">
          <Link href="#contact"
            className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-white/5 hover:bg-white/10 ring-1 ring-white/10 text-white text-sm font-medium tracking-tight transition shadow-[inset_0_-2px_0_rgba(255,255,255,0.15)] font-dm-sans">
            <ArrowUpRight className="w-4 h-4" style={{ strokeWidth: 1.5 }} />
            Bizimle İletişime Geçin
          </Link>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 h-px bg-white/5"></div>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-dm-sans">
          {/* Left: Copyright and Tüm Hakları Saklıdır */}
          <p className="font-dm-sans">© <span className="font-dm-sans">{currentYear}</span> SOFTRIKA. Tüm hakları saklıdır.</p>
          
          {/* Right: Email & Social Icons Row */}
          <div className="flex items-center gap-6">
            <a href="mailto:info@softrika.com" className="text-stone-400 hover:text-white transition underline underline-offset-4 font-dm-sans">
              info@softrika.com
            </a>
            <span className="h-4 w-px bg-white/10 hidden sm:inline"></span>
            
            <div className="flex items-center gap-4 text-stone-400">
              <Link href="#" aria-label="X (Twitter)" className="hover:text-white transition p-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter w-4.5 h-4.5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
              <Link href="#" aria-label="Instagram" className="hover:text-white transition p-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram w-4.5 h-4.5">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </Link>
              <Link href="#" aria-label="Facebook" className="hover:text-white transition p-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook w-4.5 h-4.5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
