
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-comedy-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading text-2xl font-bold mb-4 gradient-text">
              Kunal Kamra
            </h3>
            <p className="text-sm opacity-75 mb-4">
              India's bold and unapologetic political satirist and stand-up comedian.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/kuna_kamra" target="_blank" rel="noreferrer" className="hover:text-comedy-orange transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com/kunalkamra88" target="_blank" rel="noreferrer" className="hover:text-comedy-orange transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.youtube.com/@KunalKamra" target="_blank" rel="noreferrer" className="hover:text-comedy-orange transition-colors">
                <Youtube size={20} />
              </a>
              <a href="mailto:bookings@kunalkamra.com" className="hover:text-comedy-orange transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-comedy-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shows" className="hover:text-comedy-orange transition-colors">
                  Upcoming Shows
                </Link>
              </li>
              <li>
                <Link to="/videos" className="hover:text-comedy-orange transition-colors">
                  Videos
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-comedy-orange transition-colors">
                  About Kunal
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Contact</h4>
            <p className="mb-2 text-sm">For bookings:</p>
            <a 
              href="mailto:bookings@kunalkamra.com" 
              className="hover:text-comedy-orange transition-colors"
            >
              bookings@kunalkamra.com
            </a>
            <p className="mt-4 mb-2 text-sm">For media inquiries:</p>
            <a 
              href="mailto:media@kunalkamra.com" 
              className="hover:text-comedy-orange transition-colors"
            >
              media@kunalkamra.com
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm opacity-75">
          <p>© {new Date().getFullYear()} Kunal Kamra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
