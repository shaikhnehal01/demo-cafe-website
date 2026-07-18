import { Calendar, ArrowRight, Wifi, ChefHat } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenReservation: () => void;
  onExploreMenu: () => void;
}

export default function Hero({ onOpenReservation, onExploreMenu }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden bg-cream">
      {/* Soft background glow */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-beige/40 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/10 w-80 h-80 bg-forest/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full my-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Content */}
        <div className="lg:col-span-6 flex flex-col justify-center text-left" id="hero-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-beige text-espresso font-sans text-xs font-semibold uppercase tracking-wider mb-6 w-fit"
          >
            <span>Introducing Brew & Bloom Cafe</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-espresso leading-tight tracking-tight mb-6"
          >
            More Than Coffee.<br />
            <span className="text-forest italic font-normal">A Place You'll Love</span><br />
            Returning To.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-base md:text-lg text-espresso/85 max-w-lg leading-relaxed mb-8"
          >
            Nestled in the heart of Delhi, Brew & Bloom is a sanctuary for coffee lovers, foodies, and dreamers alike. We pair direct-trade artisanal coffee with wholesome, organic handmade food, served in a cozy conservatory of natural light and greenery.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={onExploreMenu}
              className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-espresso text-cream hover:bg-terracotta font-sans text-sm font-bold shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              id="hero-explore-menu-btn"
            >
              <span>Explore Menu</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenReservation}
              className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-espresso/30 text-espresso hover:border-espresso hover:bg-beige/30 font-sans text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              id="hero-reserve-btn"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve Table</span>
            </button>
          </motion.div>
        </div>

        {/* Right Side: Elegant Asymmetric Image Container */}
        <div className="lg:col-span-6 flex justify-center items-center relative" id="hero-right">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-md md:max-w-lg"
          >
            {/* Elegant wood texture backdrop element */}
            <div className="absolute inset-0 bg-espresso/5 rounded-3xl -rotate-3 scale-[1.02] -z-10" />
            
            {/* Main Image Frame */}
            <div className="overflow-hidden rounded-3xl border-[12px] border-beige shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80"
                alt="Premium fresh coffee and pastries on elegant wooden table with natural lighting"
                referrerPolicy="no-referrer"
                className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700"
              />
              {/* Coffee steam overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-cream/90 backdrop-blur-md border border-beige/60 shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-forest text-cream flex items-center justify-center font-bold text-sm">
                  ★
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-espresso">Voted #1 City Cafe</h4>
                  <p className="font-sans text-[11px] text-espresso/70">Delhi Coffee Society • 2025 Award</p>
                </div>
              </div>
            </div>

            {/* Small floating secondary decorative shot */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -top-6 -right-6 w-32 h-32 rounded-2xl overflow-hidden border-4 border-cream shadow-xl hidden sm:block"
            >
              <img
                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=300&q=80"
                alt="Fresh croissant closeup"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Feature cards banner directly below hero */}
      <div className="max-w-7xl mx-auto px-6 w-full mt-16" id="hero-features">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 px-6 md:px-12 bg-espresso text-cream rounded-3xl shadow-xl relative overflow-hidden"
        >
          {/* Subtle accent backdrop pattern */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-forest/10 rounded-full blur-2xl" />

          {/* Feature 1 */}
          <div className="flex items-center gap-4 border-b md:border-b-0 md:border-r border-cream/10 pb-6 md:pb-0 md:pr-6">
            <div className="w-12 h-12 rounded-full bg-cream/10 flex items-center justify-center text-terracotta shrink-0">
              <span className="text-2xl" role="img" aria-label="coffee cup">☕</span>
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold">Freshly Brewed</h3>
              <p className="font-sans text-xs text-cream/70 mt-1">Single-origin beans roasted in small batches daily.</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center gap-4 border-b md:border-b-0 md:border-r border-cream/10 py-6 md:py-0 md:px-6">
            <div className="w-12 h-12 rounded-full bg-cream/10 flex items-center justify-center text-terracotta shrink-0">
              <ChefHat className="w-6 h-6 text-terracotta" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold">Handmade Every Day</h3>
              <p className="font-sans text-xs text-cream/70 mt-1">Sourdough bread, pasta, & pastries made in-house.</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center gap-4 pt-6 md:pt-0 md:pl-6">
            <div className="w-12 h-12 rounded-full bg-cream/10 flex items-center justify-center text-terracotta shrink-0">
              <Wifi className="w-6 h-6 text-terracotta" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold">Free WiFi & Workspace</h3>
              <p className="font-sans text-xs text-cream/70 mt-1">Symmetric gigabit internet & silent work alcoves.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
