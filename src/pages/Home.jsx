import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import HowToUseSection from "../components/sections/HowToUseSection";
import VideoSection from "../components/sections/VideoSection";
import KnowledgeSection from "../components/sections/KnowledgeSection";
import FAQSection from "../components/sections/FAQSection";

function Home({ darkMode, toggleDarkMode, showNav }) {
  return (
    <div style={{ background: "var(--background-white)", color: "var(--neutral-black)", minHeight: "100vh" }}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} showNav={showNav} />
      <main>
        <HeroSection />
        <AboutSection />
        <HowToUseSection />
        <VideoSection />
        <KnowledgeSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
