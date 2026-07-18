import { SIGNATURE_DRINKS } from '../data';
import { motion } from 'motion/react';
import { Coffee, Layers, Flame, Trophy } from 'lucide-react';

export default function SignatureDrinks() {
  const icons = [
    <Trophy className="w-5 h-5 text-terracotta" key="1" />,
    <Layers className="w-5 h-5 text-terracotta" key="2" />,
    <Coffee className="w-5 h-5 text-terracotta" key="3" />,
    <Flame className="w-5 h-5 text-terracotta" key="4" />
  ];

  return (
    <section id="signatures" className="py-24 bg-beige/20 border-y border-beige relative overflow-hidden">
      {/* Background soft elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-espresso/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-forest/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="font-serif text-sm italic text-terracotta block mb-2">Our Pride & Joy</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-espresso mb-4">
            House Signature Creations
          </h2>
          <div className="w-16 h-[2px] bg-terracotta mx-auto mb-6"></div>
          <p className="font-sans text-base text-espresso/70 leading-relaxed">
            These recipes were born from countless hours of roasting experiments, meticulous testing, and a deep obsession with taste pairing.
          </p>
        </div>

        {/* Signature List - Alternating Layout */}
        <div className="flex flex-col gap-24 lg:gap-32">
          {SIGNATURE_DRINKS.map((drink, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={drink.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center`}
                id={`sig-${drink.id}`}
              >
                {/* Image Container */}
                <div
                  className={`lg:col-span-6 w-full ${
                    isReversed ? 'lg:order-last' : ''
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, x: isReversed ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="relative overflow-hidden rounded-3xl border-[8px] border-cream shadow-xl"
                  >
                    {/* Dark gradient overlay for a premium photography look */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/35 to-transparent" />
                    
                    <img
                      src={drink.image}
                      alt={drink.name}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-[320px] sm:h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                    />

                    {/* Badge */}
                    <div className="absolute top-4 left-4 bg-espresso text-cream font-sans text-xs font-semibold px-4 py-1.5 rounded-full shadow-md flex items-center gap-2">
                      {icons[index % icons.length]}
                      <span>Signature #{index + 1}</span>
                    </div>
                  </motion.div>
                </div>

                {/* Content Container */}
                <div className="lg:col-span-6 flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <span className="font-sans text-xs font-bold uppercase tracking-widest text-forest block mb-2">
                      {drink.tagline}
                    </span>
                    <div className="flex flex-wrap items-baseline justify-between gap-4 mb-4">
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-espresso">
                        {drink.name}
                      </h3>
                      <span className="font-mono text-xl font-bold text-terracotta">
                        ₹{drink.price}
                      </span>
                    </div>
                    <p className="font-sans text-sm sm:text-base text-espresso/75 leading-relaxed mb-6">
                      {drink.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-beige">
                      {/* Taste Profile */}
                      <div>
                        <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-espresso mb-3">
                          Taste Notes
                        </h4>
                        <ul className="flex flex-col gap-2">
                          {drink.tasteProfile.map((note) => (
                            <li key={note} className="flex items-center gap-2 font-sans text-xs text-espresso/75">
                              <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
                              <span>{note}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Key Ingredients */}
                      <div>
                        <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-espresso mb-3">
                          Craft Ingredients
                        </h4>
                        <ul className="flex flex-col gap-2">
                          {drink.ingredients.map((ingredient) => (
                            <li key={ingredient} className="flex items-center gap-2 font-sans text-xs text-espresso/75">
                              <span className="w-1.5 h-1.5 rounded-full bg-forest" />
                              <span>{ingredient}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
