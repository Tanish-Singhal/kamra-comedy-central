import { useEffect, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import Navbar from "@/components/Navbar";
import VideosGrid from "@/components/VideosGrid";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Play, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContentLoader } from "@/components/loaders/ContentLoader";

const Videos = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Page transition variants
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
  };

  // Function to scroll to videos section
  const scrollToVideos = () => {
    const videosSection = document.getElementById("videos-section");
    if (videosSection) {
      videosSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (isLoading) {
    return (
      <div
        className={`min-h-screen ${
          isDarkTheme ? "dark" : ""
        } transition-colors duration-300 bg-background`}
      >
        <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        <div className="container mx-auto px-4 pt-32 pb-16">
          <ContentLoader type="text" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <ContentLoader type="video" count={6} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className={`min-h-screen ${
        isDarkTheme ? "dark" : ""
      } transition-colors duration-300 bg-background`}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      <main>
        {/* Hero Section with Featured Video */}
        <section className="relative overflow-hidden">
          <div className="bg-gradient-to-r from-comedy-orange/90 to-comedy-orange/70 relative">
            <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>

            <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white leading-tight">
                    Kunal Kamra's <span className="text-black">Videos</span>
                  </h1>
                  <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
                    Watch Kunal's most popular stand-up clips, interviews, and
                    podcast episodes directly from his YouTube channel.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button
                      size="lg"
                      className="bg-black hover:bg-black/80 text-white gap-2"
                      onClick={scrollToVideos}
                    >
                      <Play size={18} />
                      Watch Videos
                    </Button>
                    <a
                      href="https://www.youtube.com/@KunalKamra"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-white text-white hover:bg-white/10"
                      >
                        Visit YouTube Channel
                      </Button>
                    </a>
                  </div>
                </div>

                <div className="w-full md:w-1/2 relative aspect-video rounded-xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent z-10"></div>
                  <img
                    src="/kunal-video.jpg"
                    alt="Featured Video"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="bg-white/90 rounded-full p-5 cursor-pointer transform transition-transform hover:scale-110">
                      <Play
                        size={32}
                        className="text-comedy-orange"
                        fill="currentColor"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full flex justify-center pb-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToVideos}
                className="text-white rounded-full animate-bounce"
              >
                <ChevronDown size={24} />
              </Button>
            </div>
          </div>
        </section>

        {/* Videos Section */}
        <section id="videos-section" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <VideosGrid />
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Videos;
