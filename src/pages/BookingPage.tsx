
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingForm from '@/components/BookingForm';
import { Skeleton } from '@/components/ui/skeleton';

// Mock show data (would come from API in real app)
const showsData = [
  {
    id: '1',
    title: 'Honest Opinion Tour',
    city: 'Mumbai',
    venue: 'Comedy Club Mumbai',
    date: 'April 24, 2025',
    time: '8:00 PM',
    price: 999,
    available: 45,
    image: 'https://i.postimg.cc/SxgGrVN6/kunal-kamra-hero.png'
  },
  {
    id: '2',
    title: 'Political Comedy Night',
    city: 'Delhi',
    venue: 'Delhi Laugh Factory',
    date: 'May 10, 2025',
    time: '7:30 PM',
    price: 1499,
    available: 23,
    image: 'https://i.postimg.cc/SxgGrVN6/kunal-kamra-hero.png'
  },
  {
    id: '3',
    title: 'Honest Opinion Tour',
    city: 'Bangalore',
    venue: 'Comedy Central Bangalore',
    date: 'May 17, 2025',
    time: '8:30 PM',
    price: 1199,
    available: 78,
    image: 'https://i.postimg.cc/SxgGrVN6/kunal-kamra-hero.png'
  }
];

const BookingPage = () => {
  const { showId } = useParams();
  const navigate = useNavigate();
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [show, setShow] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  
  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
    
    toast({
      title: `Switched to ${newTheme ? 'dark' : 'light'} mode`,
      duration: 2000,
    });
  };

  useEffect(() => {
    // Simulate API call to fetch show details
    setLoading(true);
    setTimeout(() => {
      const foundShow = showsData.find(s => s.id === showId);
      if (foundShow) {
        setShow(foundShow);
      } else {
        toast({
          title: "Show not found",
          description: "We couldn't find the show you're looking for.",
          variant: "destructive"
        });
        navigate('/shows');
      }
      setLoading(false);
    }, 800);
  }, [showId, navigate, toast]);

  return (
    <div className={`min-h-screen ${isDarkTheme ? 'dark' : ''}`}>
      <Navbar
        toggleTheme={toggleTheme}
        isDarkTheme={isDarkTheme}
      />
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="space-y-4">
              <Skeleton className="h-12 w-3/4" />
              <Skeleton className="h-6 w-1/2" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <Skeleton className="h-96" />
                <Skeleton className="h-96" />
              </div>
            </div>
          ) : show ? (
            <>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-2 gradient-text">{show.title}</h1>
              <p className="text-xl mb-8">{show.city} - {show.date}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-muted p-6 rounded-xl">
                  <img 
                    src={show.image} 
                    alt={show.title}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold text-lg">Venue</h3>
                      <p>{show.venue}</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Date & Time</h3>
                      <p>{show.date} at {show.time}</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Price</h3>
                      <p>₹{show.price}</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Available Seats</h3>
                      <p>{show.available}</p>
                    </div>
                  </div>
                </div>
                <BookingForm show={show} />
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold">Show not found</h2>
              <p className="mt-4">Please check the URL and try again.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookingPage;
