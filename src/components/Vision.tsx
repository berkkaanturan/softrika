export default function Vision() {
  return (
    <>
      <section id="manifesto" className="relative py-32 bg-white text-gray-900 border-t border-gray-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,75,176,0.015),transparent_60%)] pointer-events-none"></div>

        <div className="sm:px-6 lg:px-8 max-w-4xl mr-auto ml-auto pr-6 pl-6 text-center relative z-10">
          <span className="text-xs font-semibold tracking-wider text-[#004BB0] font-dm-sans block mb-3">
            VİZYONUMUZ
          </span>
          <h3 className="text-3xl sm:text-5xl font-novecento-wide-bold tracking-tight text-gray-900 mb-8 leading-tight">
            Sadece Kod Yazmıyoruz,<br />İşinize Değer Katıyoruz.
          </h3>
          
          <div className="relative bg-white/90 border border-blue-200/60 rounded-[2rem] p-8 sm:p-12 shadow-[0_0_30px_rgba(0,75,176,0.12)]">
            <p className="text-lg sm:text-xl text-gray-600 font-dm-sans leading-relaxed text-center">
              Biz sadece yazılım geliştirmiyoruz; iş süreçlerinizi analiz ediyor ve gerçek iş problemlerinizi çözüyoruz. Geliştirdiğimiz her mobil, web ve bulut uygulamasını; işinizi büyütmek, verimliliğinizi artırmak ve geleceğe hazır ölçeklenebilir bir altyapı sunmak amacıyla tasarlıyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Transition Divider Wave (Softrika colors - Seamless Loop) */}
      <div className="relative w-full h-40 md:h-64 overflow-hidden bg-white z-0 pointer-events-none">
        <svg viewBox="0 0 2880 320" className="absolute bottom-0 left-0 w-[200%] h-full transform-gpu"
          preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" className="wave-stop-1" stopColor="#004BB0" />
              <stop offset="50%" className="wave-stop-2" stopColor="#8BCAFD" />
              <stop offset="100%" className="wave-stop-3" stopColor="#002D6E" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="15" result="blur"></feGaussianBlur>
              <feComposite in="SourceGraphic" in2="blur" operator="over"></feComposite>
            </filter>
          </defs>
          
          <path d="M 0 160 C 480 260, 960 60, 1440 160 C 1920 260, 2400 60, 2880 160 C 3360 260, 3840 60, 4320 160 L 4320 320 L 0 320 Z"
            fill="url(#glowGrad)" filter="url(#glow)" opacity="0.4">
            <animateTransform attributeName="transform" type="translate" from="0,0" to="-1440,0" dur="18s"
              repeatCount="indefinite" />
          </path>
          <path d="M 0 190 C 480 90, 960 290, 1440 190 C 1920 90, 2400 290, 2880 190 C 3360 90, 3840 290, 4320 190 L 4320 320 L 0 320 Z"
            fill="url(#glowGrad)" filter="url(#glow)" opacity="0.7">
            <animateTransform attributeName="transform" type="translate" from="0,0" to="-1440,0" dur="14s"
              repeatCount="indefinite" />
          </path>
          <path d="M 0 220 C 480 140, 960 320, 1440 220 C 1920 140, 2400 320, 2880 220 C 3360 140, 3840 320, 4320 220 L 4320 320 L 0 320 Z"
            fill="#0B0A09">
            <animateTransform attributeName="transform" type="translate" from="0,0" to="-1440,0" dur="22s"
              repeatCount="indefinite" />
          </path>
        </svg>
      </div>
    </>
  );
}
