function AboutSection() {
  const features = [
    {
      icon: "ri-satellite-line",
      title: "Satellite Monitoring",
      desc: "Track field variability and vegetation-related insights across different locations.",
    },
    {
      icon: "ri-flight-takeoff-line",
      title: "Drone-Based Views",
      desc: "Add closer visual support for understanding plant and field conditions.",
    },
    {
      icon: "ri-line-chart-line",
      title: "Productivity Analysis",
      desc: "Review indicators connected to field performance and expected outcomes.",
    },
    {
      icon: "ri-seedling-line",
      title: "Quality Support",
      desc: "Understand how analysis outputs can support quality-related interpretation.",
    },
  ];

  return (
    <section id="about" className="relative border-b border-[var(--light-gray)] bg-[var(--background-white)] py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-container px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left: Text */}
          <div className="animate-fade-in-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--light-gray)] bg-[var(--section-background)] px-4 py-2 text-sm font-semibold text-[var(--primary-green)] shadow-sm">
              <i className="ri-information-fill text-lg animate-pulse-slow" />
              Intelligence Core
            </div>

            <h2 className="text-heading-3 lg:text-heading-2 font-black text-[var(--neutral-black)] mt-4">
              Decision support platform for{" "}
              <span className="text-gradient">smarter</span> potato field monitoring
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-[var(--text-gray)]">
              Potential is designed to help users understand field conditions
              and interpret agricultural data through a clear and visual
              interface. It brings together <span className="font-semibold text-[var(--neutral-black)]">satellite observations</span>, <span className="font-semibold text-[var(--neutral-black)]">drone-based imagery</span>, and environmental information to support more informed field analysis.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-[var(--text-gray)]">
              The platform focuses on productivity and quality analysis, helping
              users read field-level insights and translate complex agricultural
              signals into more understandable outputs.
            </p>

            <a
              href="#how-to-use"
              className="group mt-10 inline-flex items-center gap-3 text-base font-bold text-[var(--primary-green)] transition-all duration-300 hover:gap-5"
            >
              See how it works
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary-green-light)]/20 text-[var(--primary-green)] transition-transform group-hover:bg-[var(--primary-green)] group-hover:text-white">
                <i className="ri-arrow-right-line" />
              </span>
            </a>
          </div>

          {/* Right: Feature Cards Grid */}
          <div className="relative">
            {/* Background decorative square */}
            <div className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-[3rem] bg-[var(--section-background)] opacity-50 blur-xl" />

            <div className="grid gap-6 sm:grid-cols-2 relative z-10 p-4">
              {features.map((f, i) => (
                <div
                  key={f.title}
                  className="premium-card group p-8 pb-10"
                  style={{ transform: `translateY(${i % 2 !== 0 ? '2rem' : '0'})` }}
                >
                  <div className="icon-glow mb-6 h-14 w-14 group-hover:text-white group-hover:bg-[var(--primary-green)] transition-colors duration-500 rounded-[1rem]">
                    <i className={`${f.icon} text-2xl`} />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--neutral-black)] mb-3">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--text-gray)]">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
