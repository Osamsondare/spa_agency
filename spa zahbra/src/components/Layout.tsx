import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Twitter } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container-custom flex justify-between items-center">
          <Link to="/" className="font-serif text-2xl text-plum-dark hover:text-gold transition duration-300">
            Zahab <span className="text-gold">Aesthetics</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/booking" className={`nav-link ${isActive('/booking') ? 'active' : ''}`}>
                  Book a Session
                </Link>
              </li>
              <li>
                <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-plum-dark p-2 focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div 
            className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md"
            data-aos="fade-down"
            data-aos-duration="300"
          >
            <ul className="flex flex-col p-4">
              <li className="py-2 border-b border-taupe-light">
                <Link 
                  to="/" 
                  className={`block py-2 ${isActive('/') ? 'text-gold' : 'text-plum-dark'}`}
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li className="py-2 border-b border-taupe-light">
                <Link 
                  to="/booking" 
                  className={`block py-2 ${isActive('/booking') ? 'text-gold' : 'text-plum-dark'}`}
                  onClick={closeMenu}
                >
                  Book a Session
                </Link>
              </li>
              <li className="py-2 border-b border-taupe-light">
                <Link 
                  to="/about" 
                  className={`block py-2 ${isActive('/about') ? 'text-gold' : 'text-plum-dark'}`}
                  onClick={closeMenu}
                >
                  About Us
                </Link>
              </li>
              <li className="py-2">
                <Link 
                  to="/contact" 
                  className={`block py-2 ${isActive('/contact') ? 'text-gold' : 'text-plum-dark'}`}
                  onClick={closeMenu}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-24 md:pt-28">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-plum-dark text-white py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div data-aos="fade-right" data-aos-delay="100">
              <h3 className="text-xl font-serif text-gold mb-4">Zahab Aesthetics</h3>
              <p className="text-taupe-light mb-4">
                Luxury beauty treatments and services for all. Experience the ultimate in pampering and self-care.
              </p>
              <div className="flex space-x-3 mt-4">
                <a href="#" className="social-icon">
                  <Instagram size={20} />
                </a>
                <a href="#" className="social-icon">
                  <Facebook size={20} />
                </a>
                <a href="#" className="social-icon">
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            {/* Column 2 */}
            <div data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-xl font-serif text-gold mb-4">Services</h3>
              <ul className="space-y-2">
                <li className="transition hover:text-gold">Spa Treatments</li>
                <li className="transition hover:text-gold">Hair Styling</li>
                <li className="transition hover:text-gold">Facial Treatments</li>
                <li className="transition hover:text-gold">Massage Therapy</li>
                <li className="transition hover:text-gold">Nail Care</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div data-aos="fade-left" data-aos-delay="300">
              <h3 className="text-xl font-serif text-gold mb-4">Contact</h3>
              <p className="mb-2">123 Beauty Lane</p>
              <p className="mb-2">Luxury District, LX 12345</p>
              <p className="mb-2">Phone: +1 (555) 123-4567</p>
              <p className="mb-4">Email: info@zahabaesthetics.com</p>
              <Link to="/booking" className="btn-primary text-sm">
                Book an Appointment Now
              </Link>
            </div>
          </div>

          <div className="border-t border-plum-light mt-8 pt-8 text-center text-taupe-light" data-aos="fade-up">
            <p>&copy; {new Date().getFullYear()} Zahab Aesthetics Spa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;