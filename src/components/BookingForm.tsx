
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';

interface BookingFormProps {
  show: {
    id: string;
    title: string;
    city: string;
    venue: string;
    date: string;
    time: string;
    price: number;
  };
}

const BookingForm = ({ show }: BookingFormProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tickets: '1',
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTicketChange = (value: string) => {
    setFormData({
      ...formData,
      tickets: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Missing information",
        description: "Please fill out all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Process payment
    setIsProcessing(true);

    // Simulate Razorpay integration (mock)
    setTimeout(() => {
      toast({
        title: "Booking successful!",
        description: "Your tickets have been booked. Check your email for details.",
      });
      setIsProcessing(false);
      
      // Redirect to shows page after successful booking
      navigate('/shows');
    }, 2000);
  };

  const ticketPrice = show.price;
  const numberOfTickets = parseInt(formData.tickets);
  const subtotal = ticketPrice * numberOfTickets;
  const serviceFee = Math.round(subtotal * 0.1); // 10% service fee
  const total = subtotal + serviceFee;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Book Your Tickets</CardTitle>
        <CardDescription>Fill out the form below to secure your seats</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input 
              id="name" 
              name="name" 
              placeholder="Enter your full name" 
              value={formData.name}
              onChange={handleInputChange}
              required 
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input 
              id="email" 
              name="email" 
              type="email" 
              placeholder="Enter your email" 
              value={formData.email}
              onChange={handleInputChange}
              required 
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input 
              id="phone" 
              name="phone" 
              placeholder="Enter your phone number" 
              value={formData.phone}
              onChange={handleInputChange}
              required 
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="tickets">Number of Tickets</Label>
            <Select value={formData.tickets} onValueChange={handleTicketChange}>
              <SelectTrigger id="tickets">
                <SelectValue placeholder="Select number of tickets" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Ticket</SelectItem>
                <SelectItem value="2">2 Tickets</SelectItem>
                <SelectItem value="3">3 Tickets</SelectItem>
                <SelectItem value="4">4 Tickets</SelectItem>
                <SelectItem value="5">5 Tickets</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="pt-4 border-t space-y-2">
            <div className="flex justify-between">
              <span>Tickets ({numberOfTickets} × ₹{ticketPrice})</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Service Fee</span>
              <span>₹{serviceFee}</span>
            </div>
            <div className="flex justify-between font-bold pt-2 border-t">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full bg-comedy-orange hover:bg-comedy-orange/90"
          onClick={handleSubmit}
          disabled={isProcessing}
        >
          {isProcessing ? 'Processing...' : 'Pay Now with Razorpay'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BookingForm;
