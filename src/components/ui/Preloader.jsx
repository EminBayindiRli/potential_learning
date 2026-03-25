import { useEffect, useState } from "react";

function Preloader() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // 2.5s tarama animasyonunun bitmesi için bekle
    const enterTimer = setTimeout(() => {
      setStage(1);
    }, 2500);

    // 3.5s tamamen DOM'dan kalkma süresi
    const leaveTimer = setTimeout(() => {
      setStage(2);
    }, 3500);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(leaveTimer);
    };
  }, []);

  if (stage === 2) return null;

  return (
    <>
      <style>{`
        .tech-grid {
          background-size: 50px 50px;
          background-image: 
            linear-gradient(to right, rgba(90, 125, 58, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(90, 125, 58, 0.15) 1px, transparent 1px);
        }
        
        .scan-laser {
          position: absolute;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--primary-green-light);
          box-shadow: 0 0 25px 8px rgba(123, 163, 82, 0.6);
          top: 0;
          animation: scanDown 2.2s cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }

        @keyframes scanDown {
          0% { top: -10%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 110%; opacity: 0; }
        }

        .reveal-content {
          clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
          animation: revealDown 2.2s cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }

        @keyframes revealDown {
          0% { clip-path: polygon(0 0, 100% 0, 100% 0, 0 0); }
          100% { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); }
        }

        .data-stream {
          animation: streamUp 8s linear infinite;
        }

        @keyframes streamUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
      `}</style>
      
      {/* Dark Tech Background (Uydu / Terminal Tarzı) */}
      <div
        className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#050A06] transition-all duration-1000 ${
          stage === 1 ? "opacity-0 scale-[1.1] pointer-events-none" : "opacity-100 scale-100"
        }`}
      >
        <div className="absolute inset-0 tech-grid opacity-40" />
        
        {/* Arka Planda Akan Veri Akışı Sütunları */}
        <div className="absolute inset-0 overflow-hidden flex justify-evenly opacity-30">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i} 
              className="w-[1px] h-[200%] bg-gradient-to-b from-transparent via-[var(--primary-green)] to-transparent data-stream" 
              style={{ animationDelay: `${i * 0.7}s` }} 
            />
          ))}
        </div>

        {/* Yukarıdan Aşağıya İnen Uydu Tarama Lazeri */}
        <div className="scan-laser z-20" />

        {/* Lazerin geçişine göre açılan (clip-path) içerik */}
        <div className="reveal-content relative z-10 flex flex-col items-center">
          
          {/* Teknoloji/Cam Logo Kutusu */}
          <div className="relative flex h-24 w-24 items-center justify-center rounded-[2rem] border border-[var(--primary-green)]/40 bg-[var(--primary-green)]/10 shadow-[0_0_40px_rgba(90,125,58,0.3)] backdrop-blur-xl">
            <div className="absolute inset-0 rounded-[2rem] border border-[var(--primary-green-light)]/30 animate-pulse" />
            <i className="ri-plant-line text-5xl text-[var(--primary-green-light)] drop-shadow-[0_0_15px_rgba(123,163,82,0.8)]" />
          </div>
          
          {/* Logo İsmi (Parlayan Beyaz) */}
          <h1 className="mt-8 text-3xl font-black tracking-[0.4em] text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            POTENTIAL
          </h1>
          
          {/* Terminal / Sensör Yazısı */}
          <div className="mt-5 flex items-center gap-3 rounded-full border border-[var(--primary-green)]/30 bg-[var(--primary-green)]/5 px-4 py-1.5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--primary-green-light)] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--primary-green-light)]"></span>
            </span>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--primary-green-light)]">
              Establishing Uplink...
            </p>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Preloader;
