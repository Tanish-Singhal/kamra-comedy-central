import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import ShowsGrid from "@/components/ShowsGrid";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import SectionContainer from "@/components/ui/SectionContainer";
import { ContentLoader } from "@/components/loaders/ContentLoader";

const Shows = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
  const { toast } = useToast();
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <ContentLoader type="card" count={6} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className={`min-h-screen ${
        isDarkTheme ? "dark" : ""
      } transition-colors duration-300`}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      <main>
        <SectionContainer
          title="Upcoming Shows"
          subtitle="Don't miss your chance to experience Kunal Kamra's sharp wit and political satire live on stage. Book your tickets now for an unforgettable evening of comedy and thought-provoking humor."
          className="pt-20"
        >
          <ShowsGrid />
        </SectionContainer>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Shows;
