import { useState, useEffect } from 'react';
import { Menu, X, Coffee, Calendar, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenReservation: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export default function Navbar({ onOpenReservation, isDarkMode, onToggleDarkMode }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location', href: '#location' },
  ];

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        id="navbar-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-cream/95 backdrop-blur-md shadow-sm border-b border-beige py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 group"
            id="nav-logo"
          >
            <div className="p-2 rounded-full bg-espresso text-cream group-hover:bg-terracotta transition-colors duration-300">
              <Coffee className="w-5 h-5" />
            </div>
            <span className="font-serif text-xl md:text-2xl font-bold text-espresso tracking-tight">
              Brew <span className="text-forest">&</span> Bloom
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" id="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="font-sans text-sm font-medium text-espresso/80 hover:text-terracotta transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-terracotta after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA & Dark Mode Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onToggleDarkMode}
              className="p-2.5 rounded-full bg-beige text-espresso hover:bg-terracotta hover:text-cream transition-colors duration-300 cursor-pointer"
              aria-label="Toggle Dark Mode"
              id="desktop-dark-mode-toggle"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              onClick={onOpenReservation}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-forest text-cream hover:bg-espresso font-sans text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              id="desktop-reserve-btn"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve Table</span>
            </button>
          </div>

          {/* Mobile Actions: Dark Mode toggle + Burger menu */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onToggleDarkMode}
              className="p-2 rounded-full bg-beige text-espresso hover:bg-terracotta hover:text-cream transition-colors duration-300 cursor-pointer"
              aria-label="Toggle Dark Mode"
              id="mobile-dark-mode-toggle"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-espresso hover:text-terracotta transition-colors cursor-pointer"
              id="mobile-menu-toggle"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-30 bg-charcoal md:hidden"
              id="mobile-backdrop"
            />

            {/* Side Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-40 w-[280px] bg-cream shadow-2xl p-6 flex flex-col justify-between md:hidden"
              id="mobile-drawer"
            >
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-beige">
                  <span className="font-serif text-lg font-bold text-espresso">Navigation</span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-1 text-espresso hover:text-terracotta transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="flex flex-col gap-5">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link.href);
                      }}
                      className="font-sans text-base font-semibold text-espresso hover:text-terracotta transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="pt-6 border-t border-beige">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenReservation();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-forest text-cream hover:bg-espresso font-sans text-sm font-semibold shadow-md transition-all duration-300"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve Table</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
