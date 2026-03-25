import { useEffect, useState } from "react";

function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // 1.5 saniye sonra opacity-0 (solma) başlasın
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 1500);

    // 2.2 saniye sonra component tamamen DOM'dan kaldırılsın
    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--background-white)] transition-opacity duration-700 ease-in-out ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center justify-center animate-fade-in-up">
        {/* Arka plan glow (ışımalar) */}
        <div className="absolute h-36 w-36 animate-ping rounded-full bg-[var(--primary-green-light)] opacity-20" />
        <div className="absolute h-24 w-24 animate-pulse rounded-full bg-[var(--primary-green)] opacity-30" />
        
        {/* Logo Kutusu */}
        <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-[1.5rem] bg-[var(--primary-green)] text-white shadow-2xl">
          <i className="ri-plant-line text-6xl" />
        </div>
        
        {/* İsim Vurgusu */}
        <h1 className="mt-8 text-2xl font-black tracking-[0.2em] text-[var(--neutral-black)]">
          <span className="text-gradient">POTENTIAL</span>
        </h1>
        
        {/* Yükleme Çubuğu */}
        <div className="mt-10 h-1 w-48 overflow-hidden rounded-full bg-[var(--light-gray)]">
          <div className="h-full origin-left bg-gradient-to-r from-[var(--primary-green)] to-[var(--accent-green)] animate-scale-x" />
        </div>
      </div>
    </div>
  );
}

export default Preloader;
