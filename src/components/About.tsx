import { TIMELINE_STEPS } from '../data';
import { motion } from 'motion/react';
import { Award, Heart, ShieldCheck, Star } from 'lucide-react';

export default function About() {
  const stats = [
    { label: '10+ Years', desc: 'Crafting premium beverages', icon: <Award className="w-5 h-5 text-terracotta" /> },
    { label: '25k+', desc: 'Happy regular guests', icon: <Heart className="w-5 h-5 text-forest" /> },
    { label: '4.9 Star Rating', desc: 'On Google & Zomato', icon: <Star className="w-5 h-5 text-terracotta fill-terracotta" /> },
    { label: '100% Sourced', desc: 'Direct-trade organic beans', icon: <ShieldCheck className="w-5 h-5 text-forest" /> }
  ];

  return (
    <section id="about" className="py-24 bg-beige/10 relative overflow-hidden border-t border-beige">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title Block */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-beige text-espresso font-sans text-xs font-semibold uppercase tracking-wider mb-4">
            <span>The Story Behind the Beans</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-espresso leading-tight">
            Our Journey of Sourcing, Roasting, & Pouring
          </h2>
        </div>

        {/* Split Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Timeline Story */}
          <div className="lg:col-span-7 flex flex-col gap-10" id="about-timeline-container">
            <div className="relative pl-6 border-l-2 border-beige/80 flex flex-col gap-10">
              {TIMELINE_STEPS.map((step, idx) => (
                <motion.div
                  key={step.year}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative"
                  id={`timeline-step-${step.year}`}
                >
                  {/* Timeline bullet dot */}
                  <div className="absolute -left-[31px] top-1.5 w-4.5 h-4.5 rounded-full bg-cream border-4 border-espresso shadow-sm" />
                  
                  <span className="font-mono text-xs font-bold text-terracotta uppercase tracking-wider block mb-1">
                    {step.year}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-espresso mb-2">
                    {step.title}
                  </h3>
                  <p className="font-sans text-sm text-espresso/75 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Cafe Interior Image & Stats Grid */}
          <div className="lg:col-span-5 flex flex-col gap-10" id="about-stats-container">
            {/* Image Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden border-[10px] border-cream shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=700&q=80"
                alt="Brew & Bloom boutique cafe modern interior seating"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-[320px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/45 to-transparent" />
              <div className="absolute bottom-6 left-6 text-cream">
                <span className="font-sans text-xs font-semibold tracking-wider uppercase opacity-85 block">Cozy Seating</span>
                <span className="font-serif text-lg font-bold">A Sanctuary in the Busy City</span>
              </div>
            </motion.div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 gap-6" id="about-stats-grid">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-5 rounded-2xl bg-cream border border-beige flex flex-col gap-3 group hover:border-espresso/15 transition-all duration-300 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-beige/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div>
                    <h4 className="font-serif text-lg sm:text-xl font-bold text-espresso">
                      {stat.label}
                    </h4>
                    <p className="font-sans text-[11px] text-espresso/65 leading-tight mt-0.5">
                      {stat.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
