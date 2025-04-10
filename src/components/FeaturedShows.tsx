import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import SectionContainer from "./ui/SectionContainer";
import { ContentLoader } from "./loaders/ContentLoader";

const featuredShows = [
  {
    id: "1",
    title: "Honest Opinion Tour",
    city: "Mumbai",
    venue: "Comedy Club Mumbai",
    date: "April 24, 2025",
    time: "8:00 PM",
    image: "./audience.png",
    tickets: {
      available: true,
      remaining: 86,
    },
  },
  {
    id: "2",
    title: "Political Comedy Night",
    city: "Delhi",
    venue: "Delhi Laugh Factory",
    date: "May 10, 2025",
    time: "7:30 PM",
    image: "./audience.png",
    tickets: {
      available: true,
      remaining: 42,
    },
  },
  {
    id: "3",
    title: "Honest Opinion Tour",
    city: "Bangalore",
    venue: "Comedy Central Bangalore",
    date: "May 17, 2025",
    time: "8:30 PM",
    image: "./audience.png",
    tickets: {
      available: true,
      remaining: 118,
    },
  },
];

const FeaturedShows = () => {
  const [loading, setLoading] = useState(false);

  return (
    <SectionContainer
      title="Featured Shows"
      subtitle="Catch Kunal Kamra live on stage with his latest material. Book your tickets before they sell out!"
      className="bg-background relative"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-comedy-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-comedy-orange/5 rounded-full blur-3xl"></div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ContentLoader type="card" count={3} />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredShows.map((show, index) => (
              <div key={show.id} className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-comedy-purple/5 to-comedy-orange/5 opacity-0 group-hover:opacity-100 -z-10 transition-opacity duration-300"></div>

                <div className="bg-card h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] border border-border">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={show.image}
                      alt={show.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
                    <div className="absolute top-4 left-4 bg-comedy-orange/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {show.tickets.remaining} tickets left
                    </div>
                    <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-card/90 backdrop-blur-sm text-comedy-orange px-3 py-1 rounded-full text-xs font-semibold">
                      {show.city}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 line-clamp-1">
                      {show.title}
                    </h3>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                          <MapPin size={16} className="text-comedy-purple" />
                        </div>
                        <span className="text-sm">{show.venue}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                          <Calendar size={16} className="text-comedy-pink" />
                        </div>
                        <span className="text-sm">{show.date}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                          <Clock size={16} className="text-comedy-blue" />
                        </div>
                        <span className="text-sm">{show.time}</span>
                      </div>
                    </div>

                    <Link to={`/booking/${show.id}`}>
                      <Button className="w-full bg-gradient-to-r from-comedy-orange to-comedy-pink hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-comedy-orange/20 text-white">
                        Book Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/shows">
              <Button
                variant="outline"
                size="lg"
                className="font-semibold transition-all duration-300 hover:bg-comedy-orange/10 hover:border-comedy-orange group"
              >
                View All Shows
                <ArrowRight
                  size={16}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Button>
            </Link>
          </div>
        </>
      )}
    </SectionContainer>
  );
};

export default FeaturedShows;
