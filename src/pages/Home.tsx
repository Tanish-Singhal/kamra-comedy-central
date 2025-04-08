import { useTheme } from "@/contexts/ThemeContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedShows from "@/components/FeaturedShows";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const Home = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <div
      className={`min-h-screen ${
        isDarkTheme ? "dark" : ""
      } transition-colors duration-300`}
    >
      <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      <main>
        <HeroSection />
        <AnimatedSection animation="slide-up" delay={300}>
          <FeaturedShows />
        </AnimatedSection>
        <AnimatedSection animation="fade-in" delay={600}>
          <TestimonialsSection />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
