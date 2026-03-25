import howToSteps from "../../data/howToSteps";

function HowToUseSection() {
  return (
    <section id="how-to-use" className="relative py-24 lg:py-32 overflow-hidden bg-[var(--section-background)]">
      {/* Dynamic top gradient border */}
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[var(--primary-green)] via-[var(--accent-green)] to-[var(--primary-green)]" />
      
      {/* Decorative background element */}
      <div className="absolute -left-[20%] top-[20%] h-[800px] w-[800px] rounded-full border border-[var(--primary-green)] opacity-5" />

      <div className="mx-auto max-w-container px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-20 animate-fade-in-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--light-gray)] bg-white/60 px-5 py-2.5 text-sm font-bold shadow-sm backdrop-blur-md dark:bg-black/40">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--subtle-green)] text-[var(--primary-green)]">
              <i className="ri-compass-3-line" />
            </span>
            <span className="text-gradient">Usage Guide</span>
          </div>

          <h2 className="text-heading-3 lg:text-heading-2 font-black text-[var(--neutral-black)]">
            Master the platform in <span className="text-[var(--primary-green)]">4 steps</span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-[var(--text-gray)] mx-auto max-w-2xl">
            This section helps users understand how to navigate through the
            Potential interface and interpret the main analysis areas smoothly.
          </p>
        </div>

        {/* Dynamic Timeline / Steps Grid */}
        <div className="relative mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {/* Connector Line (Desktop) */}
          <div className="absolute left-[12%] right-[12%] top-16 hidden h-0.5 bg-gradient-to-r from-transparent via-[var(--primary-green-light)] to-transparent opacity-30 xl:block" />

          {howToSteps.map((step, index) => (
            <div
              key={step.id}
              className="group relative px-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Timeline marker wrapper */}
              <div className="flex justify-center mb-8 relative z-10">
                <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-[var(--background-white)] shadow-card-lg border border-[var(--light-gray)] transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(90,125,58,0.2)]">
                  {/* Step number badge */}
                  <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[var(--primary-green)] to-[var(--accent-green)] text-sm font-bold text-white shadow-md">
                    {step.id}
                  </span>
                  {/* Icon */}
                  <i className={`${step.icon} text-3xl text-[var(--primary-green)] transition-colors duration-300 group-hover:text-[var(--accent-green)]`} />
                </div>
              </div>

              {/* Content Box */}
              <div className="premium-card p-8 text-center h-full">
                <h3 className="text-xl font-bold text-[var(--neutral-black)] mb-4 group-hover:text-[var(--primary-green)] transition-colors">
                  {step.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-[var(--text-gray)]">
                  {step.description}
                </p>
                
                {/* Visual anchor point */}
                <div className="mt-6 flex justify-center opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <div className="h-1 w-8 rounded-full bg-gradient-to-r from-[var(--primary-green-light)] to-[var(--primary-green)]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowToUseSection;
