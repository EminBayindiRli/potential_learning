import { useEffect, useState } from "react";

function Preloader() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // 1.5 saniye ekranda kalır, sonra kaybolmaya başlar
    const enterTimer = setTimeout(() => {
      setStage(1);
    }, 1500);

    // 2.3 saniye sonra DOM'dan tamamen kalkar
    const leaveTimer = setTimeout(() => {
      setStage(2);
    }, 2300);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(leaveTimer);
    };
  }, []);

  if (stage === 2) return null;

  return (
    <>
      <style>{`
        .minimal-fade {
          transition: opacity 0.8s ease-in-out;
        }
        
        .elegant-zoom {
          animation: elegantReveal 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }

        @keyframes elegantReveal {
          0% { opacity: 0; transform: scale(0.96) translateY(10px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
      
      {/* Dümdüz, Temiz Beyaz Arka Plan */}
      <div
        className={`fixed inset-0 z-[100] flex items-center justify-center bg-[var(--background-white)] minimal-fade ${
          stage === 1 ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="flex flex-col items-center justify-center elegant-zoom">
          
          {/* Yan Yana Logo ve Text - Modern minimalist görünüm */}
          <div className="flex items-center gap-5">
            {/* Sade Logo Kutusu */}
            <div className="flex h-16 w-16 items-center justify-center rounded-[1rem] bg-[var(--primary-green)] text-white shadow-lg">
              <i className="ri-plant-line text-[2rem]" />
            </div>
            
            <div className="flex flex-col">
              <h1 className="text-3xl font-black tracking-tight text-[var(--neutral-black)]">
                POTENTIAL
              </h1>
              <p className="mb-0.5 text-xs font-semibold uppercase tracking-widest text-[var(--text-gray)]">
                Learning Platform
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Preloader;
