import { Coffee, Instagram, Facebook, Phone, MapPin, Mail, ArrowUp } from 'lucide-react';
import { CAFE_INFO } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
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
    <footer className="bg-espresso text-cream border-t border-beige/10 font-sans" id="app-footer">
      
      {/* Upper footer grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Col 1: Brand & Socials */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-cream text-espresso">
              <Coffee className="w-5 h-5" />
            </div>
            <span className="font-serif text-xl font-bold text-cream tracking-tight">
              Brew & Bloom
            </span>
          </div>
          <p className="text-xs text-cream/70 leading-relaxed max-w-sm">
            Specialty micro-lot coffee roasters, homemade sourdough bakeries, and garden seating nurseries. Delhi's finest cozy getaway since 2016.
          </p>
          
          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href={CAFE_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-cream/5 hover:bg-cream/15 text-cream hover:text-terracotta transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-4.5 h-4.5" />
            </a>
            <a
              href={CAFE_INFO.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-cream/5 hover:bg-cream/15 text-cream hover:text-terracotta transition-colors duration-200"
              aria-label="Facebook"
            >
              <Facebook className="w-4.5 h-4.5" />
            </a>
            <a
              href={CAFE_INFO.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-cream/5 hover:bg-cream/15 text-cream hover:text-forest transition-colors duration-200"
              aria-label="WhatsApp"
            >
              <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.058 5.348 5.407 0 11.993 0c3.192.001 6.192 1.242 8.448 3.499 2.256 2.257 3.497 5.259 3.496 8.45-.003 6.644-5.352 11.993-11.94 11.993-2.006-.001-3.98-.502-5.735-1.455L0 24zm6.59-4.846c1.66.986 3.298 1.448 4.757 1.448 5.405 0 9.8-4.394 9.802-9.802.002-2.618-1.017-5.08-2.871-6.936C16.425 1.95 13.971 1.001 11.99 1.001c-5.399 0-9.786 4.387-9.788 9.792-.001 1.73.473 3.417 1.373 4.904l-.994 3.633 3.733-.976zM17.411 14.3c-.31-.155-1.83-.903-2.11-.1-.028.1-.125.435-.155.518-.03.083-.062.124-.171.072-.11-.052-.46-.17-.878-.544-.325-.29-.544-.648-.607-.757-.062-.11-.007-.169.048-.224.05-.05.11-.125.165-.187.055-.062.073-.104.11-.176.036-.072.018-.135-.009-.187-.028-.052-.25-.603-.343-.827-.09-.217-.182-.187-.25-.19-.064-.004-.138-.004-.21-.004-.072 0-.19.027-.29.135-.1.11-.383.374-.383.912 0 .538.392 1.06.446 1.13.054.072.77 1.176 1.865 1.648.261.112.464.18.623.23.262.083.501.071.69.043.21-.031.72-.294.82-.578.1-.284.1-.528.07-.579-.03-.049-.11-.073-.42-.228z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h4 className="font-serif text-base font-bold text-cream mb-6">Quick Links</h4>
          <ul className="flex flex-col gap-3 text-xs text-cream/70">
            <li>
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-terracotta transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#menu"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#menu');
                }}
                className="hover:text-terracotta transition-colors"
              >
                Our Menu
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#about');
                }}
                className="hover:text-terracotta transition-colors"
              >
                About Our Roastery
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#gallery');
                }}
                className="hover:text-terracotta transition-colors"
              >
                Photo Gallery
              </a>
            </li>
            <li>
              <a
                href="#reviews"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#reviews');
                }}
                className="hover:text-terracotta transition-colors"
              >
                Reviews & Ratings
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3: Working Hours */}
        <div>
          <h4 className="font-serif text-base font-bold text-cream mb-6">Working Hours</h4>
          <ul className="flex flex-col gap-3.5 text-xs text-cream/70">
            {CAFE_INFO.workingHours.map((wh) => (
              <li key={wh.days} className="flex flex-col gap-1">
                <span className="font-semibold text-cream">{wh.days}</span>
                <span className="text-[11px] opacity-90">{wh.hours}</span>
              </li>
            ))}
            <li className="pt-2 border-t border-cream/10 text-[10px] italic">
              * Open on all national holidays.
            </li>
          </ul>
        </div>

        {/* Col 4: Contact details */}
        <div className="flex flex-col gap-6 text-xs text-cream/70">
          <h4 className="font-serif text-base font-bold text-cream mb-0">Get In Touch</h4>
          
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 shrink-0 text-terracotta mt-0.5" />
            <span className="leading-relaxed">{CAFE_INFO.address}</span>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 shrink-0 text-terracotta" />
            <a href={`tel:${CAFE_INFO.phone}`} className="hover:text-terracotta transition-colors">
              {CAFE_INFO.phone}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 shrink-0 text-terracotta" />
            <a href={`mailto:${CAFE_INFO.email}`} className="hover:text-terracotta transition-colors">
              {CAFE_INFO.email}
            </a>
          </div>
        </div>

      </div>

      {/* Footer Bottom Block */}
      <div className="border-t border-cream/10 py-8 text-center text-xs text-cream/40 flex flex-col sm:flex-row items-center justify-between max-w-7xl mx-auto px-6 gap-4">
        <span>
          © {currentYear} Brew & Bloom Cafe. All Rights Reserved. Designed with absolute precision.
        </span>
        
        {/* Scroll back to top */}
        <button
          onClick={handleScrollToTop}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-cream/5 hover:bg-cream/15 text-cream hover:text-terracotta transition-all text-[11px] font-semibold cursor-pointer"
          aria-label="Back to top"
        >
          <span>Back To Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>

    </footer>
  );
}
