
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon, Menu, X, Instagram, Twitter, Youtube } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface NavbarProps {
  toggleTheme: () => void;
  isDarkTheme: boolean;
}

const Navbar = ({ toggleTheme, isDarkTheme }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shows', path: '/shows' },
    { name: 'Videos', path: '/videos' },
    { name: 'About', path: '/about' }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-background/90 backdrop-blur-md shadow-md' : 'py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-heading text-2xl font-bold gradient-text">
            Kunal Kamra
          </span>
        </Link>

        {isMobile ? (
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme} 
              className="text-foreground"
            >
              {isDarkTheme ? <SunIcon /> : <MoonIcon />}
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu} 
              className="text-foreground"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        ) : (
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className={`font-medium transition-colors ${isActive(link.path) ? 'text-comedy-orange' : 'hover:text-comedy-orange'}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="hidden md:flex items-center gap-1">
              <a href="https://www.instagram.com/kuna_kamra" target="_blank" rel="noreferrer" className="p-2 hover:text-comedy-orange transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com/kunalkamra88" target="_blank" rel="noreferrer" className="p-2 hover:text-comedy-orange transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.youtube.com/@KunalKamra" target="_blank" rel="noreferrer" className="p-2 hover:text-comedy-orange transition-colors">
                <Youtube size={20} />
              </a>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme} 
              className="text-foreground"
            >
              {isDarkTheme ? <SunIcon /> : <MoonIcon />}
            </Button>
            <Link to="/shows">
              <Button className="bg-comedy-orange hover:bg-comedy-orange/90">
                Book Tickets
              </Button>
            </Link>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div className="fixed inset-0 top-16 bg-background/95 backdrop-blur-md z-40 p-5 animate-slide-up">
          <div className="flex flex-col space-y-6 items-center pt-10">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`text-2xl font-medium transition-colors ${isActive(link.path) ? 'text-comedy-orange' : 'hover:text-comedy-orange'}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-6 mt-6">
              <a href="https://www.instagram.com/kuna_kamra" target="_blank" rel="noreferrer" className="p-2 hover:text-comedy-orange transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://twitter.com/kunalkamra88" target="_blank" rel="noreferrer" className="p-2 hover:text-comedy-orange transition-colors">
                <Twitter size={24} />
              </a>
              <a href="https://www.youtube.com/@KunalKamra" target="_blank" rel="noreferrer" className="p-2 hover:text-comedy-orange transition-colors">
                <Youtube size={24} />
              </a>
            </div>
            <Link to="/shows" className="w-full mt-8">
              <Button className="bg-comedy-orange hover:bg-comedy-orange/90 w-full">
                Book Tickets
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
