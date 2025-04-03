import { ReactNode } from "react";
import AnimatedSection from "../AnimatedSection";

interface SectionContainerProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  containerClassName?: string;
  titleAnimation?: "fade-in" | "slide-up" | "scale-in";
  contentAnimation?: "fade-in" | "slide-up" | "scale-in";
  contentDelay?: number;
  full?: boolean;
}

const SectionContainer = ({
  children,
  title,
  subtitle,
  className = "",
  containerClassName = "",
  titleAnimation = "slide-up",
  contentAnimation = "fade-in",
  contentDelay = 300,
  full = false,
}: SectionContainerProps) => {
  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div
        className={`${
          !full ? "container mx-auto px-4" : ""
        } ${containerClassName}`}
      >
        {(title || subtitle) && (
          <AnimatedSection
            animation={titleAnimation}
            className="text-center mb-12"
          >
            {title && (
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-80">
                {subtitle}
              </p>
            )}
          </AnimatedSection>
        )}

        <AnimatedSection animation={contentAnimation} delay={contentDelay}>
          {children}
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SectionContainer;
