import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const allShows = [
  {
    id: "1",
    title: "Honest Opinion Tour",
    city: "Mumbai",
    venue: "Comedy Club Mumbai",
    date: "April 24, 2025",
    time: "8:00 PM",
    price: 999,
    image: "./audience.png",
  },
  {
    id: "2",
    title: "Political Comedy Night",
    city: "Delhi",
    venue: "Delhi Laugh Factory",
    date: "May 10, 2025",
    time: "7:30 PM",
    price: 1499,
    image: "./audience.png",
  },
  {
    id: "3",
    title: "Honest Opinion Tour",
    city: "Bangalore",
    venue: "Comedy Central Bangalore",
    date: "May 17, 2025",
    time: "8:30 PM",
    price: 1199,
    image: "./audience.png",
  },
  {
    id: "4",
    title: "Stand-Up Special",
    city: "Pune",
    venue: "Pune Comedy House",
    date: "May 24, 2025",
    time: "8:00 PM",
    price: 899,
    image: "./audience.png",
  },
  {
    id: "5",
    title: "Comedy Night with Kunal",
    city: "Hyderabad",
    venue: "Hyderabad Laughs",
    date: "June 7, 2025",
    time: "8:00 PM",
    price: 1099,
    image: "./audience.png",
  },
  {
    id: "6",
    title: "Honest Opinion Tour",
    city: "Chennai",
    venue: "Chennai Comedy Club",
    date: "June 14, 2025",
    time: "7:30 PM",
    price: 999,
    image: "./audience.png",
  },
];

const cities = Array.from(new Set(allShows.map((show) => show.city)));

const ShowsGrid = () => {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  const filteredShows = selectedCity
    ? allShows.filter((show) => show.city === selectedCity)
    : allShows;

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold mb-2">All Upcoming Shows</h2>
          <p className="text-muted-foreground">
            {filteredShows.length} shows available
          </p>
        </div>

        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <Filter size={18} />
          <span className="mr-2">Filter by city:</span>
          <Select
            onValueChange={(value) =>
              setSelectedCity(value === "all" ? null : value)
            }
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All Cities" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Cities</SelectItem>
              {cities.map((city) => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredShows.map((show) => (
          <div
            key={show.id}
            className="bg-card rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-border"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={show.image}
                alt={show.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{show.title}</h3>
              <h4 className="text-comedy-orange font-semibold mb-4">
                {show.city}
              </h4>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-muted-foreground" />
                  <span>{show.venue}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-muted-foreground" />
                  <span>{show.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-muted-foreground" />
                  <span>{show.time}</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-4">
                <div>
                  <span className="text-sm text-muted-foreground">
                    Starting from
                  </span>
                  <p className="text-xl font-bold">₹{show.price}</p>
                </div>
                <div className="bg-comedy-orange/10 text-comedy-orange text-sm font-semibold px-3 py-1 rounded-full">
                  Available
                </div>
              </div>

              <Link to={`/booking/${show.id}`}>
                <Button className="w-full bg-comedy-orange hover:bg-comedy-orange/90">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowsGrid;
