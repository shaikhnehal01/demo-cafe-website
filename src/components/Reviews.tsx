import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { REVIEWS } from '../data';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  // Autoplay slider interval
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    setDirection('left');
    setCurrentIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
  };

  // Star Rating rendering helper
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-terracotta fill-terracotta' : 'text-beige'
        }`}
      />
    ));
  };

  // Motion variants for slide transition
  const slideVariants = {
    initial: (dir: 'left' | 'right') => ({
      opacity: 0,
      x: dir === 'right' ? 50 : -50
    }),
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    },
    exit: (dir: 'left' | 'right') => ({
      opacity: 0,
      x: dir === 'right' ? -50 : 50,
      transition: { duration: 0.4, ease: 'easeIn' }
    })
  };

  return (
    <section id="reviews" className="py-24 bg-beige/10 relative overflow-hidden border-t border-b border-beige">
      {/* Background quote decoration */}
      <div className="absolute top-1/2 left-1/10 -translate-y-1/2 text-beige/25 select-none pointer-events-none hidden lg:block">
        <Quote className="w-48 h-48 rotate-180" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative">
        {/* Section Title */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-beige text-espresso font-sans text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Kind Words From Our Regulars</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-espresso mb-3">
            What Our Guests Say
          </h2>
          <div className="w-12 h-0.5 bg-terracotta mx-auto"></div>
        </div>

        {/* Testimonial Active Display */}
        <div className="relative min-h-[300px] flex items-center justify-center bg-cream border border-beige p-8 sm:p-12 rounded-3xl shadow-md">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex flex-col items-center text-center w-full"
              id={`review-slide-${REVIEWS[currentIndex].id}`}
            >
              {/* Star Panel */}
              <div className="flex gap-1 mb-6">
                {renderStars(REVIEWS[currentIndex].rating)}
              </div>

              {/* Review Text */}
              <blockquote className="font-serif text-base sm:text-lg md:text-xl text-espresso italic leading-relaxed mb-8 max-w-2xl">
                "{REVIEWS[currentIndex].text}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-4 text-left">
                <img
                  src={REVIEWS[currentIndex].image}
                  alt={REVIEWS[currentIndex].name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover border border-beige"
                />
                <div>
                  <h4 className="font-serif text-sm sm:text-base font-bold text-espresso leading-tight">
                    {REVIEWS[currentIndex].name}
                  </h4>
                  <p className="font-sans text-xs text-forest font-semibold mt-0.5">
                    {REVIEWS[currentIndex].role}
                  </p>
                </div>
              </div>

              <div className="absolute bottom-4 right-8 font-mono text-[9px] text-espresso/40">
                {REVIEWS[currentIndex].date}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Navigation Controller */}
        <div className="flex items-center justify-between mt-8">
          {/* Indicator Dots */}
          <div className="flex gap-2">
            {REVIEWS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 'right' : 'left');
                  setCurrentIndex(idx);
                }}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx ? 'w-8 bg-terracotta' : 'w-2.5 bg-beige hover:bg-espresso/25'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Nav Chevrons */}
          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full border border-beige bg-cream text-espresso hover:border-espresso hover:bg-beige/25 transition-all duration-200 cursor-pointer"
              aria-label="Previous Review"
            >
              <ChevronLeft className="w-4.5 h-4.5" />
            </button>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-full border border-beige bg-cream text-espresso hover:border-espresso hover:bg-beige/25 transition-all duration-200 cursor-pointer"
              aria-label="Next Review"
            >
              <ChevronRight className="w-4.5 h-4.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
