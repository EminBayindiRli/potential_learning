import { useTranslation } from "react-i18next";
import { useVideos } from "../../data/videos";
import { useScrollReveal } from "../../hooks/useScrollReveal";

function VideoSection() {
  const { t } = useTranslation();
  const videos = useVideos();
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <section id="learn" className="relative py-24 lg:py-32 bg-[var(--background-white)] border-b border-[var(--light-gray)]">
      <div ref={sectionRef} className="mx-auto max-w-container px-6 lg:px-8">
        {/* Section Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--light-gray)] bg-[var(--section-background)] px-5 py-2.5 text-sm font-bold shadow-sm">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--primary-green)]/10 text-[var(--primary-green)]">
                <i className="ri-play-fill text-lg animate-pulse" />
              </span>
              <span className="text-[var(--neutral-black)]">{t("video.badge")}</span>
            </div>

            <h2 className="text-heading-3 lg:text-heading-2 font-normal text-[var(--neutral-black)] lg:max-w-xl">
              {t("video.title_start")}
              <span className="text-gradient"> {t("video.title_highlight")} </span>
              {t("video.title_end")}
            </h2>
            
            <p className="mt-6 text-lg leading-relaxed text-[var(--text-gray)]">
              {t("video.desc")}
            </p>
          </div>

          <div className="hidden md:block">
            <a href="https://dev.d23ggi28ujjgg2.amplifyapp.com/" target="_blank" rel="noreferrer" className="btn-outline">
              {t("video.btnExplore")}
              <i className="ri-arrow-right-up-line ml-2" />
            </a>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid gap-10 md:grid-cols-2">
          {videos.map((video, idx) => (
            <div
              key={video.id}
              className="group premium-card"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              {/* Media Container with custom play overlay */}
              <div className="relative aspect-video w-full overflow-hidden bg-[var(--neutral-black)] rounded-t-card-lg">
                <iframe
                  className="absolute inset-0 h-full w-full opacity-90 transition-opacity duration-500 group-hover:opacity-100"
                  src={video.embedUrl}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Content */}
              <div className="relative p-8">
                {/* Category Badge placed on the seam */}
                <div className="absolute -top-5 left-8 flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--primary-green)] to-[var(--accent-green)] px-4 py-1.5 text-xs font-bold text-white shadow-md">
                  <i className="ri-folder-video-line" />
                  {video.category}
                </div>

                <h3 className="text-xl font-bold text-[var(--neutral-black)] mt-3">
                  {video.title}
                </h3>

                <p className="mt-3 text-base leading-relaxed text-[var(--text-gray)]">
                  {video.description}
                </p>

                <div className="mt-8 flex items-center justify-between border-t border-[var(--light-gray)] pt-5">
                  <span className="flex items-center text-xs font-bold uppercase tracking-wider text-[var(--text-gray)]">
                    <i className="ri-time-line mr-1 text-base leading-none" /> 
                    {video.duration}
                  </span>
                  
                  <a
                    href={video.youtubeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[var(--primary-green)] transition-colors hover:text-[var(--primary-green-dark)]"
                  >
                    {t("video.btnWatch")}
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--primary-green)]/10 transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-[var(--primary-green)] group-hover:text-white">
                      <i className="ri-youtube-fill" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
