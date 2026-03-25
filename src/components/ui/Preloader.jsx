import { useEffect, useState } from "react";

function Preloader() {
  const [stage, setStage] = useState(0); // 0: loading, 1: curtain-up, 2: unmount

  useEffect(() => {
    // 1.8 saniye (tam dolum süresi bitimi civarında) perde animasyonunu başlat
    const enterTimer = setTimeout(() => {
      setStage(1);
    }, 1800);

    // 2.8 saniye sonra DOM'dan tamamen kaldır
    const leaveTimer = setTimeout(() => {
      setStage(2);
    }, 2800);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(leaveTimer);
    };
  }, []);

  if (stage === 2) return null;

  return (
    <>
      <style>{`
        .curtain-layer {
          transition: transform 0.8s cubic-bezier(0.76, 0, 0.24, 1);
        }
      `}</style>

      {/* 2. Layer: Çıkış için Koyu Yeşil Perde Animasyonu */}
      <div
        className={`curtain-layer fixed inset-0 z-[98] bg-[var(--primary-green-dark)] ${
          stage === 1 ? "-translate-y-full" : "translate-y-0"
        }`}
        style={{ transitionDelay: "0.1s" }}
      />

      {/* 1. Layer: Ana Beyaz Arka Plan ve Yükleme İçeriği */}
      <div
        className={`curtain-layer fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--background-white)] ${
          stage === 1 ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="relative flex animate-fade-in-up flex-col items-center justify-center">
          
          {/* Arka plan ışımaları (Pulse & Ping) */}
          <div className="absolute top-[40%] h-36 w-36 -translate-y-1/2 animate-ping rounded-full bg-[var(--primary-green-light)] opacity-20" />
          <div className="absolute top-[40%] h-24 w-24 -translate-y-1/2 animate-pulse rounded-full bg-[var(--primary-green)] opacity-30" />
          
          {/* İkon / Logo Kutusu */}
          <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-[var(--primary-green)] text-white shadow-2xl">
            <i className="ri-plant-fill text-5xl drop-shadow-md" />
          </div>
          
          {/* İsim Vurgusu (Sabit ve belirgin) */}
          <h1 className="mt-8 text-2xl font-black tracking-widest text-[var(--neutral-black)]">
            <span className="text-gradient">POTENTIAL</span>
          </h1>

          <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--text-gray)]">
            Learning Platform
          </p>
          
          {/* Klasik Yükleme Çubuğu Animasyonu */}
          <div className="mt-12 h-1.5 w-48 overflow-hidden rounded-full bg-[var(--light-gray)]">
            <div className="h-full origin-left bg-gradient-to-r from-[var(--primary-green)] to-[var(--accent-green)] animate-scale-x" />
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Preloader;
