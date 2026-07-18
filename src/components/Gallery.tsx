import { useState, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

export default function Gallery() {
  const [filter, setFilter] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'cafe', label: 'Coffee & Brews' },
    { id: 'food', label: 'Savory Platters' },
    { id: 'seating', label: 'Cozy Spaces' },
    { id: 'dessert', label: 'Bakery & Dessert' }
  ];

  // Filtered list of gallery items
  const filteredItems = filter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === filter);

  const handleOpenLightbox = (id: string) => {
    // Find the original index within the currently filtered items list
    const index = filteredItems.findIndex(item => item.id === id);
    if (index !== -1) {
      setLightboxIndex(index);
    }
  };

  const handlePrev = (e?: MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prevIndex) => 
        prevIndex === 0 ? filteredItems.length - 1 : prevIndex! - 1
      );
    }
  };

  const handleNext = (e?: MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prevIndex) => 
        prevIndex === filteredItems.length - 1 ? 0 : prevIndex! + 1
      );
    }
  };

  return (
    <section id="gallery" className="py-24 bg-cream border-t border-beige">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-beige text-espresso font-sans text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Visual Tour of Brew & Bloom</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-espresso mb-4">
            Capturing the Cozy Vibe
          </h2>
          <p className="font-sans text-base text-espresso/70 leading-relaxed">
            Take a sensory stroll through our curated snapshots of freshly layered lattes, country-kitchen bakes, and peaceful sunlit seating.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setFilter(cat.id);
                setLightboxIndex(null); // Clear lightbox when filter changes
              }}
              className={`px-5 py-2.5 rounded-full font-sans text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                filter === cat.id
                  ? 'bg-espresso text-cream shadow-sm'
                  : 'text-espresso/75 hover:bg-beige/60 hover:text-espresso'
              }`}
              id={`gallery-cat-${cat.id}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry-Style Grid Container */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6"
          id="gallery-masonry"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid relative rounded-2xl overflow-hidden group border border-beige shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer bg-espresso/5"
                onClick={() => handleOpenLightbox(item.id)}
                id={`gallery-item-${item.id}`}
              >
                <img
                  src={item.image}
                  alt={item.caption}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Visual Overlay on Hover */}
                <div className="absolute inset-0 bg-espresso/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                  <div className="flex justify-end">
                    <div className="p-2 rounded-full bg-cream/15 backdrop-blur-md text-cream">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <span className="font-mono text-[9px] font-bold tracking-widest uppercase text-terracotta mb-1 block">
                      {item.category}
                    </span>
                    <p className="font-sans text-xs text-cream/90 font-medium leading-relaxed">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal View overlay */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-charcoal/95 backdrop-blur-sm flex flex-col items-center justify-center p-6"
              onClick={() => setLightboxIndex(null)}
              id="gallery-lightbox-modal"
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-6 right-6 p-3 rounded-full bg-cream/10 hover:bg-cream/20 text-cream transition-colors duration-200 z-50 cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation controls */}
              <button
                onClick={handlePrev}
                className="absolute left-6 p-3 rounded-full bg-cream/10 hover:bg-cream/20 text-cream transition-colors duration-200 z-40 hidden sm:block cursor-pointer"
                aria-label="Previous Photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-6 p-3 rounded-full bg-cream/10 hover:bg-cream/20 text-cream transition-colors duration-200 z-40 hidden sm:block cursor-pointer"
                aria-label="Next Photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Main Content Area */}
              <div
                className="max-w-4xl max-h-[80vh] flex flex-col items-center justify-center gap-4 text-center select-none"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.img
                  key={filteredItems[lightboxIndex].id}
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', damping: 25 }}
                  src={filteredItems[lightboxIndex].image}
                  alt={filteredItems[lightboxIndex].caption}
                  referrerPolicy="no-referrer"
                  className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-2xl border border-cream/15"
                />
                
                {/* Slide index & details */}
                <div className="px-4">
                  <span className="font-mono text-[10px] text-terracotta tracking-widest uppercase font-bold">
                    {lightboxIndex + 1} of {filteredItems.length} • {filteredItems[lightboxIndex].category}
                  </span>
                  <p className="font-sans text-sm text-cream/90 mt-1 max-w-xl font-medium">
                    {filteredItems[lightboxIndex].caption}
                  </p>
                </div>
              </div>

              {/* Touchswipe hint for mobiles */}
              <div className="absolute bottom-6 flex gap-4 sm:hidden">
                <button
                  onClick={handlePrev}
                  className="px-4 py-2 rounded-full bg-cream/10 text-cream font-sans text-xs font-semibold"
                >
                  Prev
                </button>
                <button
                  onClick={handleNext}
                  className="px-4 py-2 rounded-full bg-cream/10 text-cream font-sans text-xs font-semibold"
                >
                  Next
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
