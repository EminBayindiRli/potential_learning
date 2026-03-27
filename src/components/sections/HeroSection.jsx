import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars

const GRID_COLORS = [
  "#9BB88A", "#5A7D3A", "#6B8F47", "#A4C639", "#9BB88A",
  "#6B8F47", "#A4C639", "#5A7D3A", "#9BB88A", "#6B8F47",
  "#5A7D3A", "#9BB88A", "#A4C639", "#6B8F47", "#5A7D3A",
  "#A4C639", "#6B8F47", "#9BB88A", "#5A7D3A", "#A4C639",
];

function NdviGrid() {
  return (
    <div className="grid grid-cols-5 gap-1.5 w-full">
      {GRID_COLORS.map((color, i) => (
        <motion.div
          key={i}
          className="aspect-square rounded-md"
          style={{ backgroundColor: color }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: [0, 0.7, 1], scale: 1 }}
          transition={{ duration: 0.4, delay: 0.8 + i * 0.04, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}

function GrowthChart() {
  return (
    <svg viewBox="0 0 200 80" className="w-full h-auto" fill="none">
      {/* Grid lines */}
      {[20, 40, 60].map((y) => (
        <line key={y} x1="0" y1={y} x2="200" y2={y} stroke="var(--light-gray)" strokeWidth="0.5" />
      ))}
      {/* Chart line */}
      <motion.path
        d="M 10 65 Q 40 55, 60 50 T 100 35 T 140 25 T 190 12"
        stroke="var(--primary-green)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 1.2, ease: "easeInOut" }}
      />
      {/* Area fill */}
      <motion.path
        d="M 10 65 Q 40 55, 60 50 T 100 35 T 140 25 T 190 12 L 190 80 L 10 80 Z"
        fill="var(--primary-green)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ duration: 1, delay: 2.0 }}
      />
      {/* Data dots */}
      {[
        { cx: 10, cy: 65 },
        { cx: 60, cy: 50 },
        { cx: 100, cy: 35 },
        { cx: 140, cy: 25 },
        { cx: 190, cy: 12 },
      ].map((dot, i) => (
        <motion.circle
          key={i}
          cx={dot.cx}
          cy={dot.cy}
          r="3"
          fill="var(--primary-green)"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 1.4 + i * 0.2 }}
        />
      ))}
    </svg>
  );
}

function HeroSection() {
  const { t } = useTranslation();
  const [cardsReady, setCardsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setCardsReady(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const cardBase = "rounded-[20px] border border-[rgba(119,169,132,0.12)] shadow-[0_8px_32px_rgba(0,0,0,0.06)]";

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
      style={{
        background: "linear-gradient(135deg, var(--background-white) 0%, var(--section-background) 50%, var(--subtle-green) 100%)"
      }}
    >
      <div className="bg-mesh-1 -left-[10%] -top-[10%] h-[500px] w-[500px] animate-float" />
      <div className="bg-mesh-2 -right-[5%] top-[20%] h-[600px] w-[600px] animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative mx-auto grid w-full max-w-container items-center gap-16 px-6 py-12 lg:grid-cols-2 lg:px-8">
        {/* Left: Text Content */}
        <div className="flex flex-col items-start pt-10 animate-fade-in-up">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--primary-green-light)] bg-[var(--background-white)]/50 px-5 py-2.5 text-sm font-medium text-[var(--primary-green)] shadow-sm backdrop-blur-md">
            {t("hero.badge")}
          </div>

          <h1 className="text-heading-2 font-normal text-[var(--neutral-black)] lg:text-heading-1">
            {t("hero.title_start")} <br className="hidden lg:block" />
            <span className="text-gradient relative inline-block">
              {t("hero.title_highlight")}
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path d="M2.20337 5.56475C34.3435 2.15579 104.975 -1.53039 198.056 6.6436" stroke="var(--primary-green-light)" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--text-gray)]">
            {t("hero.description")}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a href="#learn" className="btn-premium">
              <i className="ri-play-circle-fill text-xl" />
              {t("hero.btnStart")}
            </a>
            <a href="https://dev.d23ggi28ujjgg2.amplifyapp.com/" target="_blank" rel="noreferrer" className="btn-outline">
              <i className="ri-external-link-line" />
              {t("hero.btnPanel")}
            </a>
          </div>

          <div className="mt-14 flex w-full flex-wrap gap-4 border-t border-[var(--light-gray)] pt-8">
            {[
              { icon: "ri-radar-line", text: t("hero.featSatellite") },
              { icon: "ri-flight-land-line", text: t("hero.featDrone") },
              { icon: "ri-line-chart-line", text: t("hero.featData") },
            ].map((feat, i) => (
              <div key={i} className="flex items-center gap-2 text-sm font-semibold text-[var(--text-gray)]">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--subtle-green)] text-[var(--primary-green)]">
                  <i className={feat.icon} />
                </div>
                {feat.text}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Layered Cards Stack */}
        {cardsReady && (
        <div className="hidden lg:flex lg:items-center lg:justify-center">
          <div className="relative -translate-x-4" style={{ width: 440, height: 480 }}>

          {/* Back Card — NDVI Map */}
          <motion.div
            className={`absolute top-0 left-0 w-[340px] p-6 ${cardBase}`}
            style={{ backgroundColor: 'var(--background-white)' }}
            initial={{ opacity: 0, x: 500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="h-2 w-2 rounded-full bg-[var(--primary-green)]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-gray)]">
                {t("hero.mockMap")}
              </span>
            </div>
            <NdviGrid />
            <div className="mt-4 flex items-center justify-between">
              <span className="text-[10px] font-medium text-[var(--text-gray)]">Low</span>
              <div className="flex-1 mx-2 h-1.5 rounded-full" style={{ background: "linear-gradient(to right, #A4C639, #6B8F47, #5A7D3A, #2F4F2F)" }} />
              <span className="text-[10px] font-medium text-[var(--text-gray)]">High</span>
            </div>
          </motion.div>

          {/* Middle Card — Growth Chart */}
          <motion.div
            className={`absolute top-[120px] left-[100px] w-[320px] p-6 ${cardBase}`}
            style={{ backgroundColor: 'var(--background-white)', zIndex: 10 }}
            initial={{ opacity: 0, x: 550 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[var(--accent-green)]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-gray)]">
                  {t("hero.mockChart")}
                </span>
              </div>
              <span className="text-xs font-semibold text-[var(--primary-green)]">+24%</span>
            </div>
            <GrowthChart />
            <div className="mt-3 flex justify-between text-[10px] font-medium text-[var(--text-gray)]">
              <span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span>
            </div>
          </motion.div>

          {/* Front Card — Stats */}
          <motion.div
            className={`absolute top-[280px] left-[60px] w-[280px] p-6 ${cardBase}`}
            style={{ backgroundColor: 'var(--background-white)', zIndex: 20 }}
            initial={{ opacity: 0, x: 600 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="flex flex-col gap-4">
              {[
                { label: t("hero.mockHealth"), value: "94%", color: "#5A7D3A" },
                { label: t("hero.mockMoisture"), value: "67%", color: "#6B8F47" },
                { label: t("hero.mockNdvi"), value: "0.82", color: "#A4C639" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="flex items-center justify-between"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1.5 + i * 0.15 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: stat.color }} />
                    <span className="text-sm font-medium text-[var(--text-gray)]">{stat.label}</span>
                  </div>
                  <span className="text-lg font-semibold text-[var(--neutral-black)]">{stat.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          </div>
        </div>
        )}
      </div>
    </section>
  );
}

export default HeroSection;
