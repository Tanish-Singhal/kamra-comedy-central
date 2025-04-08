import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Play, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Modern background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-comedy-purple/5 to-comedy-orange/5"></div>
        <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-comedy-purple opacity-10 rounded-full blur-[100px] animate-pulse"></div>
        <div
          className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] bg-comedy-orange opacity-10 rounded-full blur-[100px] animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-3/4 left-1/2 w-[400px] h-[400px] bg-comedy-blue opacity-5 rounded-full blur-[100px] animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-20 h-20 border border-comedy-orange/20 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 border border-comedy-purple/20 rounded-full"></div>
        <div className="absolute top-1/3 left-1/3 w-8 h-8 bg-comedy-blue/10 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-block bg-gradient-to-r from-comedy-orange/20 to-comedy-orange/10 text-comedy-orange px-4 py-2 rounded-full text-sm font-bold mb-6 backdrop-blur-sm border border-comedy-orange/10">
              <span className="animate-pulse inline-block w-2 h-2 bg-comedy-orange rounded-full mr-2"></span>
              UPCOMING TOUR 2025
            </div>

            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8">
              <div className="gradient-text text-glow">Kunal Kamra</div>
              <div className="text-3xl md:text-5xl mt-2">Live in Concert</div>
            </h1>

            <p className="text-xl mb-8 opacity-90 max-w-2xl">
              Experience India's sharpest political satirist & stand-up comedian
              live on stage.
              <span className="text-comedy-orange font-medium">
                {" "}
                Honest opinions
              </span>
              , unfiltered comedy, and thought-provoking laughter guaranteed!
            </p>

            <div className="flex flex-wrap gap-6 mb-10">
              <motion.div
                className="flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <span className="font-heading text-comedy-orange font-bold">
                  NEXT SHOW
                </span>
                <span className="text-2xl font-bold">Mumbai - 24 APR</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Link to="/shows">
                  <Button
                    size="lg"
                    className="bg-comedy-orange hover:bg-comedy-orange/90 btn-bounce font-bold text-white flex items-center gap-2 hover:shadow-lg hover:shadow-comedy-orange/30 transition-all duration-300 px-8"
                  >
                    Book Tickets
                    <ArrowRight size={18} />
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <a
                  href="https://www.youtube.com/@KunalKamra"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-comedy-purple/30 hover:bg-comedy-purple/10 hover:border-comedy-purple/50 btn-bounce flex items-center gap-2 transition-all duration-300"
                  >
                    <Play size={18} className="text-comedy-purple" />
                    Watch Videos
                  </Button>
                </a>
              </motion.div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-8 mt-12">
              <motion.div
                className="flex items-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <div className="flex -space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-comedy-purple to-comedy-pink flex items-center justify-center text-white font-medium shadow-md z-30">
                    K
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-comedy-pink to-comedy-orange flex items-center justify-center text-white font-medium shadow-md z-20">
                    S
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-comedy-orange to-comedy-blue flex items-center justify-center text-white font-medium shadow-md z-10">
                    R
                  </div>
                </div>
                <div className="ml-4 text-sm">
                  <span className="font-bold text-base">1M+</span> tickets sold
                  <div className="flex items-center mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={14}
                        fill="currentColor"
                        className="text-yellow-500"
                      />
                    ))}
                    <span className="ml-1 text-xs">(1200+ reviews)</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="p-4 rounded-lg border border-comedy-orange/30 bg-comedy-orange/5 backdrop-blur-sm max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <p className="italic text-comedy-orange">
                  "Politics is not rocket science, it's way more complicated."
                </p>
                <p className="text-right text-sm mt-2 font-medium">
                  — Kunal Kamra
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-comedy-orange opacity-20 rounded-full blur-[80px] pulse-animate -z-10"></div>
            <div className="grid place-items-center">
              <div className="relative z-10 aspect-[3/4] w-full max-w-md floating">
                <div className="absolute inset-0 bg-gradient-to-br from-comedy-purple/10 to-comedy-orange/10 rounded-3xl -z-10 translate-x-4 translate-y-4"></div>
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 h-full">
                  <img
                    src="./kunal.png"
                    alt="Kunal Kamra"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute -bottom-6 -right-6 bg-comedy-orange text-white p-4 rounded-xl shadow-xl font-heading animate-bounce-subtle">
                  <p className="text-sm font-normal">NEW TOUR</p>
                  <p className="text-xl font-bold">HONEST OPINION</p>
                </div>

                <div
                  className="absolute -top-6 -left-6 bg-white dark:bg-card text-comedy-orange p-4 rounded-xl shadow-xl font-heading animate-bounce-subtle"
                  style={{ animationDelay: "1s" }}
                >
                  <Calendar className="h-8 w-8" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
