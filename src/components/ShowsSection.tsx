
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Clock, Ticket } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Show {
  id: number;
  city: string;
  venue: string;
  date: string;
  time: string;
  ticketsAvailable: number;
  price: number;
}

interface ShowsSectionProps {
  language: string;
}

const ShowsSection = ({ language }: ShowsSectionProps) => {
  const [selectedShow, setSelectedShow] = useState<Show | null>(null);
  const [ticketQuantity, setTicketQuantity] = useState('1');
  const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false);

  // Sample data for upcoming shows
  const upcomingShows: Show[] = [
    {
      id: 1,
      city: 'Mumbai',
      venue: 'Rangsharda Auditorium',
      date: '24 Apr 2025',
      time: '7:30 PM',
      ticketsAvailable: 152,
      price: 999
    },
    {
      id: 2,
      city: 'Delhi',
      venue: 'Siri Fort Auditorium',
      date: '30 Apr 2025',
      time: '8:00 PM',
      ticketsAvailable: 84,
      price: 999
    },
    {
      id: 3,
      city: 'Bangalore',
      venue: 'Good Shepherd Auditorium',
      date: '7 May 2025',
      time: '7:30 PM',
      ticketsAvailable: 112,
      price: 899
    },
    {
      id: 4,
      city: 'Hyderabad',
      venue: 'Shilpakala Vedika',
      date: '14 May 2025',
      time: '8:00 PM',
      ticketsAvailable: 145,
      price: 899
    },
  ];

  const handleBookTickets = (show: Show) => {
    setSelectedShow(show);
  };

  const handlePaymentSuccess = () => {
    // Simulate payment success
    setTimeout(() => {
      setIsPaymentDialogOpen(false);
      setSelectedShow(null);
      alert(language === 'en' ? 'Booking successful! Check your email for details.' : 'बुकिंग सफल! विवरण के लिए अपना ईमेल चेक करें।');
    }, 1500);
  };

  return (
    <section id="shows" className="py-20 relative">
      {/* Background design elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/3 -right-44 w-96 h-96 bg-comedy-blue opacity-10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            {language === 'en' ? 'Upcoming Shows' : 'आगामी शो'}
          </h2>
          <p className="max-w-2xl mx-auto opacity-80">
            {language === 'en'
              ? "Don't miss your chance to experience Kunal Kamra's razor-sharp wit and bold comedy live on stage."
              : "स्टेज पर कुणाल कामरा के तेज व्यंग्य और साहसिक कॉमेडी का अनुभव करने का मौका न चूकें।"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {upcomingShows.map((show) => (
            <div 
              key={show.id} 
              className="bg-card border border-border rounded-xl p-6 card-hover relative overflow-hidden"
            >
              {/* City badge */}
              <div className="absolute top-0 right-0 bg-comedy-orange text-white px-4 py-1 rounded-bl-lg">
                {show.city}
              </div>
              
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1 text-sm text-muted-foreground">
                    <Calendar size={16} /> 
                    <span>{show.date}</span>
                  </div>
                  
                  <h3 className="font-heading text-xl font-bold">{show.venue}</h3>
                  
                  <div className="flex flex-wrap gap-4 mt-3">
                    <div className="flex items-center gap-1">
                      <MapPin size={16} className="text-comedy-pink" />
                      <span className="text-sm">{show.city}</span>
                    </div>
                    
                    <div className="flex items-center gap-1">
                      <Clock size={16} className="text-comedy-blue" />
                      <span className="text-sm">{show.time}</span>
                    </div>
                    
                    <div className="flex items-center gap-1">
                      <Ticket size={16} className="text-comedy-purple" />
                      <span className="text-sm">
                        {language === 'en'
                          ? `${show.ticketsAvailable} tickets left`
                          : `${show.ticketsAvailable} टिकट बाकी`}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 self-end md:self-center">
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">
                      {language === 'en' ? 'From' : 'से शुरू'}
                    </p>
                    <p className="font-heading font-bold text-xl">₹{show.price}</p>
                  </div>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        className="bg-comedy-orange hover:bg-comedy-orange/90 btn-bounce"
                        onClick={() => handleBookTickets(show)}
                      >
                        {language === 'en' ? 'Book Now' : 'अभी बुक करें'}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle className="font-heading gradient-text">
                          {language === 'en' ? 'Book Tickets' : 'टिकट बुक करें'}
                        </DialogTitle>
                        <DialogDescription>
                          {selectedShow && (
                            <div className="mt-2 space-y-1">
                              <p><span className="font-bold">{selectedShow.venue}</span> - {selectedShow.city}</p>
                              <p>{selectedShow.date} | {selectedShow.time}</p>
                            </div>
                          )}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="tickets" className="text-right">
                            {language === 'en' ? 'Tickets' : 'टिकट'}
                          </Label>
                          <Select 
                            value={ticketQuantity} 
                            onValueChange={setTicketQuantity}
                          >
                            <SelectTrigger className="col-span-3">
                              <SelectValue placeholder="Select quantity" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1</SelectItem>
                              <SelectItem value="2">2</SelectItem>
                              <SelectItem value="3">3</SelectItem>
                              <SelectItem value="4">4</SelectItem>
                              <SelectItem value="5">5</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="name" className="text-right">
                            {language === 'en' ? 'Name' : 'नाम'}
                          </Label>
                          <Input id="name" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="email" className="text-right">
                            {language === 'en' ? 'Email' : 'ईमेल'}
                          </Label>
                          <Input id="email" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="phone" className="text-right">
                            {language === 'en' ? 'Phone' : 'फोन'}
                          </Label>
                          <Input id="phone" className="col-span-3" />
                        </div>
                      </div>
                      <DialogFooter>
                        <div className="w-full flex flex-col space-y-3">
                          <div className="flex justify-between items-center pb-2 border-b">
                            <span className="font-medium">
                              {language === 'en' ? 'Total Amount' : 'कुल राशि'}:
                            </span>
                            <span className="font-bold text-lg">
                              ₹{selectedShow && (selectedShow.price * parseInt(ticketQuantity, 10))}
                            </span>
                          </div>
                          <Button 
                            type="button" 
                            className="bg-comedy-orange hover:bg-comedy-orange/90 w-full btn-bounce"
                            onClick={() => setIsPaymentDialogOpen(true)}
                          >
                            {language === 'en' ? 'Proceed to Pay' : 'भुगतान करें'}
                          </Button>
                        </div>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Payment Dialog (simulating Razorpay) */}
      {isPaymentDialogOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-card rounded-xl p-6 max-w-md w-full">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold">Razorpay Payment</h3>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setIsPaymentDialogOpen(false)}
              >
                X
              </Button>
            </div>
            <div className="my-6 space-y-4">
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm text-center mb-2">
                  {language === 'en' ? 'Secure Payment Gateway' : 'सुरक्षित भुगतान गेटवे'}
                </p>
                <div className="flex justify-center gap-2">
                  <div className="w-10 h-6 bg-blue-500 rounded"></div>
                  <div className="w-10 h-6 bg-orange-500 rounded"></div>
                  <div className="w-10 h-6 bg-green-500 rounded"></div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="space-y-1">
                  <Label>{language === 'en' ? 'Card Number' : 'कार्ड नंबर'}</Label>
                  <Input placeholder="1234 5678 9012 3456" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <Label>{language === 'en' ? 'Expiry Date' : 'समाप्ति तिथि'}</Label>
                    <Input placeholder="MM/YY" />
                  </div>
                  <div className="space-y-1">
                    <Label>CVV</Label>
                    <Input placeholder="123" />
                  </div>
                </div>
                <div className="space-y-1">
                  <Label>{language === 'en' ? 'Name on Card' : 'कार्ड पर नाम'}</Label>
                  <Input placeholder={language === 'en' ? "Card holder's name" : "कार्डधारक का नाम"} />
                </div>
              </div>
            </div>
            <Button 
              className="w-full bg-comedy-blue hover:bg-comedy-blue/90 text-white btn-bounce"
              onClick={handlePaymentSuccess}
            >
              {language === 'en'
                ? `Pay ₹${selectedShow && (selectedShow.price * parseInt(ticketQuantity, 10))}`
                : `₹${selectedShow && (selectedShow.price * parseInt(ticketQuantity, 10))} का भुगतान करें`}
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ShowsSection;
