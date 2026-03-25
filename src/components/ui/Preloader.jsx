import { useEffect, useState } from "react";

function Preloader() {
  const [stage, setStage] = useState(0); // 0: loading, 1: finish-anim, 2: unmount

  useEffect(() => {
    // 2.2 saniye boyunca giriş animasyonu gösterilecek
    const enterTimer = setTimeout(() => {
      setStage(1);
    }, 2200);

    // 3.2 saniye sonra tamamen DOM'dan kaldırılacak (geçiş animasyonu bittikten sonra)
    const leaveTimer = setTimeout(() => {
      setStage(2);
    }, 3200);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(leaveTimer);
    };
  }, []);

  if (stage === 2) return null;

  return (
    <>
      <style>{`
        .letter-stagger {
          display: inline-block;
          opacity: 0;
          transform: translateY(15px);
          animation: fadeUpLetter 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes fadeUpLetter {
          100% { opacity: 1; transform: translateY(0); }
        }

        .shimmer-text {
          background: linear-gradient(
            -45deg, 
            var(--primary-green-dark) 40%, 
            var(--primary-green-light) 50%, 
            var(--primary-green) 60%
          );
          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: shimmerSweep 3s linear infinite;
        }

        @keyframes shimmerSweep {
          100% { background-position: 200% center; }
        }

        .curtain-layer {
          transition: transform 0.9s cubic-bezier(0.76, 0, 0.24, 1);
        }

        .svg-ring-draw {
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          animation: drawRing 2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @keyframes drawRing {
          100% { stroke-dashoffset: 0; }
        }
      `}</style>
      
      {/* 2. Layer: Koyu Yeşil Perde (Son Kapanış) */}
      <div
        className={`curtain-layer fixed inset-0 z-[98] bg-[var(--primary-green-dark)] ${
          stage === 1 ? "-translate-y-full" : "translate-y-0"
        }`}
        style={{ transitionDelay: "0.15s" }}
      />

      {/* 1. Layer: Ana Beyaz Arka Plan ve İçerik */}
      <div
        className={`curtain-layer fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--background-white)] ${
          stage === 1 ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="relative flex flex-col items-center justify-center">
          
          {/* Arka Plan Cemberleri ve Dönen Çizgi */}
          <div className="absolute h-[160px] w-[160px] rounded-full border border-[var(--light-gray)] opacity-60" />
          <svg 
            className="absolute h-[160px] w-[160px] -rotate-90 animate-[spin_8s_linear_infinite]" 
            viewBox="0 0 100 100"
          >
            <circle 
              className="svg-ring-draw"
              cx="50" cy="50" r="48" 
              fill="none" 
              stroke="var(--primary-green)" 
              strokeWidth="2" 
              strokeLinecap="round" 
            />
          </svg>

          {/* Logo Merkezi */}
          <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-3xl bg-[var(--section-background)] shadow-[0_0_50px_rgba(90,125,58,0.15)] transition-transform duration-700 hover:scale-105">
            <i className="ri-plant-fill text-5xl text-[var(--primary-green)] drop-shadow-md" />
          </div>

          {/* Harf Harf Stagger Animasyonlu İsim */}
          <div className="mt-10 overflow-hidden font-black">
            <h1 className="shimmer-text flex text-[28px] tracking-[0.3em]">
              {"POTENTIAL".split("").map((char, index) => (
                <span 
                  key={index} 
                  className="letter-stagger" 
                  style={{ animationDelay: `${0.3 + index * 0.08}s` }}
                >
                  {char}
                </span>
              ))}
            </h1>
          </div>
          
          {/* Alt Başlık Fading In */}
          <div className="mt-3 overflow-hidden">
            <div 
              className="letter-stagger text-[11px] font-bold uppercase tracking-[0.4em] text-[var(--text-gray)]"
              style={{ animationDelay: "1.2s" }}
            >
              Learning Platform
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Preloader;
