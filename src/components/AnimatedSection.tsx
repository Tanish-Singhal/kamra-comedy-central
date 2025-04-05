
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-in' | 'slide-up' | 'scale-in' | 'bounce';
}

const AnimatedSection = ({
  children,
  className,
  delay = 0,
  animation = 'fade-in',
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [delay]);

  const animations = {
    'fade-in': 'opacity-0 transition-opacity duration-1000 ease-in-out',
    'slide-up': 'opacity-0 translate-y-10 transition-all duration-1000 ease-out',
    'scale-in': 'opacity-0 scale-95 transition-all duration-700 ease-out',
    'bounce': 'opacity-0 transition-all duration-700 ease-out bounce-once',
  };

  return (
    <div
      ref={sectionRef}
      className={cn(
        animations[animation],
        isVisible && 'opacity-100 translate-y-0 scale-100',
        className
      )}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
