import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";

export default function Hero() {
  return (
    <main className="bg-center min-h-[calc(100vh-80px)] flex items-center w-full max-w-none mx-auto pt-0 px-6 relative">
      <div className="absolute top-0 right-0 bottom-0 left-0" data-container-bg="true"></div>
      
      <div className="grid lg:grid-cols-2 max-w-7xl mr-auto ml-auto items-center">
        {/* Left Column: Copy & Form */}
        <div className="max-w-xl z-10">
          <p className="uppercase text-xs font-semibold tracking-tight font-dm-sans mb-6 text-stone-300">
            UÇTAN UCA YAZILIM
          </p>
          <h1 className="sm:text-7xl text-6xl text-stone-50 tracking-tight font-novecento-wide-bold mb-8">
            <span className="block">İşinizi Geleceğe</span>
            <span className="block">Taşıyan Yazılım</span>
            <span className="block">Çözümleri</span>
          </h1>
          <p className="leading-relaxed text-lg tracking-tight font-dm-sans max-w-lg mb-10 text-stone-50">
            Softrika olarak, şirketinize özel web, mobil ve bulut tabanlı yazılımlar geliştiriyor; tüm süreci baştan uca sahiplenip sizlere teslim ediyoruz. Ayrıca hazır ürünlerimizle iş süreçlerinizi dijitalleştiriyoruz.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-start">
            <div className="inline-block">
              <Link
                href="#services"
                className="group"
                style={{
                  cursor: "pointer",
                  position: "relative",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  background: "radial-gradient(65.28% 65.28% at 50% 100%, rgba(139, 202, 253, 0.8) 0%, rgba(139, 202, 253, 0) 100%), linear-gradient(0deg, rgb(0, 75, 176), rgb(0, 75, 176))",
                  borderRadius: "0.75rem",
                  padding: "12px 24px",
                  minHeight: "48px",
                  minWidth: "102px",
                  transition: "none",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    inset: "1px",
                    background: "linear-gradient(177.95deg, rgba(255, 255, 255, 0.19) 0%, rgba(255, 255, 255, 0) 100%)",
                    borderRadius: "calc(-1px + 0.75rem)",
                    zIndex: 0,
                  }}
                ></span>
                <span
                  style={{
                    position: "absolute",
                    inset: "2px",
                    background: "radial-gradient(65.28% 65.28% at 50% 100%, rgba(139, 202, 253, 0.8) 0%, rgba(139, 202, 253, 0) 100%), linear-gradient(0deg, rgb(0, 75, 176), rgb(0, 75, 176))",
                    borderRadius: "calc(-2px + 0.75rem)",
                    zIndex: 0,
                  }}
                ></span>
                <div style={{ overflow: "hidden", width: "100%", height: "100%", pointerEvents: "none", position: "absolute", zIndex: 1 }}>
                  <i style={{ bottom: "-10px", position: "absolute", animation: "2.35s ease-in-out 0.2s infinite normal none running floating-points", width: "2px", height: "2px", backgroundColor: "rgb(255, 255, 255)", borderRadius: "9999px", left: "10%" }}></i>
                  <i style={{ bottom: "-10px", position: "absolute", animation: "2.5s ease-in-out 0.5s infinite normal none running floating-points", width: "2px", height: "2px", backgroundColor: "rgb(255, 255, 255)", borderRadius: "9999px", left: "30%", opacity: 0.7 }}></i>
                  <i style={{ bottom: "-10px", position: "absolute", animation: "2.2s ease-in-out 0.1s infinite normal none running floating-points", width: "2px", height: "2px", backgroundColor: "rgb(255, 255, 255)", borderRadius: "9999px", left: "25%", opacity: 0.8 }}></i>
                  <i style={{ bottom: "-10px", position: "absolute", animation: "2.05s ease-in-out 0s infinite normal none running floating-points", width: "2px", height: "2px", backgroundColor: "rgb(255, 255, 255)", borderRadius: "9999px", left: "44%", opacity: 0.6 }}></i>
                  <i style={{ bottom: "-10px", position: "absolute", animation: "1.9s ease-in-out 0s infinite normal none running floating-points", width: "2px", height: "2px", backgroundColor: "rgb(255, 255, 255)", borderRadius: "9999px", left: "50%" }}></i>
                  <i style={{ bottom: "-10px", position: "absolute", animation: "1.5s ease-in-out 1.5s infinite normal none running floating-points", width: "2px", height: "2px", backgroundColor: "rgb(255, 255, 255)", borderRadius: "9999px", left: "75%", opacity: 0.5 }}></i>
                </div>
                <span
                  style={{
                    zIndex: 2,
                    gap: "6px",
                    position: "relative",
                    width: "100%",
                    color: "white",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "15px",
                    fontWeight: 500,
                    fontFamily: "'DM Sans', sans-serif",
                    transition: "color 0.2s ease-in-out",
                  }}
                >
                  Ürünlerimizi İnceleyin
                  <ArrowRight className="w-[18px] h-[18px] group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
            
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 transition-none group text-base font-light tracking-tight font-dm-sans border rounded-xl pt-3 pr-6 pb-3 pl-6 text-slate-50 bg-white/5 border-white/20"
              style={{ minHeight: "48px", borderRadius: "0.75rem" }}
            >
              Projenizi Konuşalım
              <MessageSquare className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>

        {/* Right Column: UI Mockups */}
        <div className="mt-8 sm:mt-0 relative perspective-normal">
          <Image
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4aa0ba0f-cf6d-4050-bf33-824539eb56e0_1600w.png"
            alt="Product UI"
            width={800}
            height={600}
            className="w-full h-auto block"
            priority
          />
        </div>
      </div>
      
      <div className="spline-container absolute top-0 left-0 w-full h-full -z-10">
        <iframe src="https://my.spline.design/retrofuturismbganimation-Lb3VtL1bNaYUnirKNzn0FvaW" frameBorder="0" width="100%" height="100%"></iframe>
      </div>
    </main>
  );
}
