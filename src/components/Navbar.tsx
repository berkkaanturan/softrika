"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const handleContactScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.innerWidth > 768) {
      window.scrollTo({ top: 3187, behavior: "smooth" });
    } else {
      const element = document.getElementById("services-accordion");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleProductsScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.innerWidth > 768) {
      window.scrollTo({ top: 1020, behavior: "smooth" });
    } else {
      const element = document.getElementById("products");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleProcessScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.innerWidth > 768) {
      window.scrollTo({ top: 3998, behavior: "smooth" });
    } else {
      const element = document.getElementById("process");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleFooterScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };

  return (
    <nav className="bg-[#000000] w-full border-transparent border-b mb-0">
      <div className="flex max-w-7xl mr-auto ml-auto pt-5 pr-6 pb-5 pl-6 items-center justify-between">
        {/* Logo */}
        <div className="flex h-10 cursor-pointer gap-x-2 items-center">
          <div className="w-10 h-10 flex items-center justify-center overflow-visible shrink-0">
            <Image 
              src="/image-cropped.svg" 
              alt="SOFTRIKA logo" 
              width={40} 
              height={40} 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="font-novecento-wide-bold text-sm sm:text-base text-stone-50 leading-none">
            SOFTRIKA
          </div>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex gap-8 gap-x-8 gap-y-8 items-center">
          <Link 
            href="#services" 
            onClick={handleProductsScroll}
            className="transition-colors text-base font-medium text-slate-500 tracking-tight font-dm-sans hover:text-slate-50"
          >
            Ürünlerimiz
          </Link>
          <Link 
            href="#services-accordion" 
            onClick={handleContactScroll}
            className="transition-colors text-base font-medium text-slate-500 tracking-tight font-dm-sans hover:text-slate-50"
          >
            Hizmetler
          </Link>
          <Link 
            href="#process" 
            onClick={handleProcessScroll}
            className="transition-colors text-base font-medium text-slate-500 tracking-tight font-dm-sans hover:text-slate-50"
          >
            Süreç
          </Link>
          <Link 
            href="#contact" 
            onClick={handleFooterScroll}
            className="transition-colors text-base font-medium text-slate-500 tracking-tight font-dm-sans hover:text-slate-50"
          >
            İletişim
          </Link>
        </div>

        {/* Actions */}
        <div className="flex gap-4 items-center">
          <Link 
            href="#contact" 
            onClick={handleContactScroll}
            className="hover:bg-[#033476] transition-colors text-sm font-medium text-white tracking-tight font-dm-sans bg-[#004BB0] rounded-md pt-2.5 pr-5 pb-2.5 pl-5 shadow-sm"
          >
            Projenizi Konuşalım
          </Link>
        </div>
      </div>
    </nav>
  );
}
