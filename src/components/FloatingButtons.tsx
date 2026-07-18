import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, ArrowUp } from 'lucide-react';
import { CAFE_INFO } from '../data';

export default function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3" id="floating-actions">
      
      {/* WhatsApp Button */}
      <a
        href={CAFE_INFO.socials.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-cream flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        title="Chat on WhatsApp"
        id="float-whatsapp"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.058 5.348 5.407 0 11.993 0c3.192.001 6.192 1.242 8.448 3.499 2.256 2.257 3.497 5.259 3.496 8.45-.003 6.644-5.352 11.993-11.94 11.993-2.006-.001-3.98-.502-5.735-1.455L0 24zm6.59-4.846c1.66.986 3.298 1.448 4.757 1.448 5.405 0 9.8-4.394 9.802-9.802.002-2.618-1.017-5.08-2.871-6.936C16.425 1.95 13.971 1.001 11.99 1.001c-5.399 0-9.786 4.387-9.788 9.792-.001 1.73.473 3.417 1.373 4.904l-.994 3.633 3.733-.976zM17.411 14.3c-.31-.155-1.83-.903-2.11-.1-.028.1-.125.435-.155.518-.03.083-.062.124-.171.072-.11-.052-.46-.17-.878-.544-.325-.29-.544-.648-.607-.757-.062-.11-.007-.169.048-.224.05-.05.11-.125.165-.187.055-.062.073-.104.11-.176.036-.072.018-.135-.009-.187-.028-.052-.25-.603-.343-.827-.09-.217-.182-.187-.25-.19-.064-.004-.138-.004-.21-.004-.072 0-.19.027-.29.135-.1.11-.383.374-.383.912 0 .538.392 1.06.446 1.13.054.072.77 1.176 1.865 1.648.261.112.464.18.623.23.262.083.501.071.69.043.21-.031.72-.294.82-.578.1-.284.1-.528.07-.579-.03-.049-.11-.073-.42-.228z"/>
        </svg>
      </a>

      {/* Call Button */}
      <a
        href={`tel:${CAFE_INFO.phone}`}
        className="w-12 h-12 rounded-full bg-terracotta hover:bg-espresso text-cream flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        title="Call Cafe"
        id="float-call"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* Back To Top */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            onClick={handleScrollToTop}
            className="w-12 h-12 rounded-full bg-espresso hover:bg-forest text-cream flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            title="Back to Top"
            id="float-backtop"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
