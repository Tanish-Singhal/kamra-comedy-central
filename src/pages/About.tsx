import { useEffect, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutContent from "@/components/AboutContent";
import { motion } from "framer-motion";
import SectionContainer from "@/components/ui/SectionContainer";
import { ContentLoader } from "@/components/loaders/ContentLoader";

const About = () => {
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
          <div className="mt-8">
            <ContentLoader type="image" />
          </div>
          <div className="mt-8">
            <ContentLoader type="text" count={3} />
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
      <main className="pt-20">
        <SectionContainer title="About Kunal" className="pt-20">
          <AboutContent />
        </SectionContainer>
      </main>
      <Footer />
    </motion.div>
  );
};

export default About;
