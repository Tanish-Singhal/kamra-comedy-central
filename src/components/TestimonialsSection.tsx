import { QuoteIcon, Star } from "lucide-react";
import { motion } from "framer-motion";
import SectionContainer from "./ui/SectionContainer";

const testimonials = [
  {
    name: "Rohit Sharma",
    comment:
      "Kunal's show was absolutely hilarious! His political satire is both thought-provoking and entertaining.",
    location: "Mumbai",
    rating: 5,
    image: "https://i.postimg.cc/GpYQnfGr/person-1.jpg",
  },
  {
    name: "Priya Desai",
    comment:
      "I've never laughed so hard in my life. Kunal's observations about Indian politics are spot on and delivered with perfect comedic timing.",
    location: "Delhi",
    rating: 5,
    image: "https://i.postimg.cc/NMkTdnkv/person-2.jpg",
  },
  {
    name: "Arjun Mehta",
    comment:
      "Sharp wit, fearless commentary, and belly laughs throughout the show. Definitely worth every penny!",
    location: "Bangalore",
    rating: 4,
    image: "https://i.postimg.cc/zvkFSmh6/person-3.jpg",
  },
];

const TestimonialsSection = () => {
  return (
    <SectionContainer
      title="What Fans Are Saying"
      subtitle="Don't just take our word for it. Here's what audiences have to say about Kunal's live shows."
      className="bg-muted/30 relative"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-20 -left-20 w-40 h-40 border border-comedy-orange/10 rounded-full"></div>
        <div className="absolute -bottom-10 -right-10 w-20 h-20 border border-comedy-purple/10 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-comedy-purple/5 via-transparent to-comedy-orange/5 rounded-2xl -z-10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            <div className="bg-card rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] border border-border h-full flex flex-col">
              <QuoteIcon
                size={32}
                className="text-comedy-orange mb-4 opacity-80"
              />
              <p className="italic mb-6 flex-grow">{testimonial.comment}</p>

              <div className="flex items-center mt-auto pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                  <div className="flex mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={
                          i < testimonial.rating
                            ? "text-yellow-500 fill-yellow-500"
                            : "text-muted"
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-16"
      >
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-6 -left-6 text-6xl text-comedy-orange opacity-20 font-serif">
            "
          </div>
          <div className="absolute -bottom-6 -right-6 text-6xl text-comedy-orange opacity-20 font-serif">
            "
          </div>

          <div className="bg-gradient-to-br from-comedy-orange/10 to-comedy-purple/10 backdrop-blur-sm p-8 rounded-2xl border border-comedy-orange/20">
            <p className="text-xl md:text-2xl font-medium italic text-center">
              "I believe comedy is a powerful tool to discuss important issues
              in society. If you can make someone laugh while making them think,
              you've won half the battle."
            </p>
            <p className="text-right mt-4 font-semibold">— Kunal Kamra</p>
          </div>
        </div>
      </motion.div>
    </SectionContainer>
  );
};

export default TestimonialsSection;
