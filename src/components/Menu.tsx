import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_ITEMS } from '../data';
import { MenuCategory } from '../types';
import { Star } from 'lucide-react';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('coffee');

  const categories: { id: MenuCategory; label: string; icon: string }[] = [
    { id: 'coffee', label: 'Coffee', icon: '☕' },
    { id: 'tea', label: 'Tea', icon: '🍵' },
    { id: 'breakfast', label: 'Breakfast', icon: '🥐' },
    { id: 'pasta', label: 'Pasta', icon: '🍝' },
    { id: 'pizza', label: 'Pizza', icon: '🍕' },
    { id: 'burger', label: 'Burger', icon: '🍔' },
    { id: 'desserts', label: 'Desserts', icon: '🍰' },
  ];

  const filteredItems = MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-cream relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-beige text-espresso font-sans text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Our Signature Selection</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-espresso mb-4">
            Taste the Craftsmanship
          </h2>
          <p className="font-sans text-base text-espresso/70 leading-relaxed">
            Every item on our menu is created with premium, locally sourced, organic ingredients and prepared with love by our specialized culinary team.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-2 max-w-full overflow-x-auto pb-3 px-2 no-scrollbar scroll-smooth whitespace-nowrap bg-beige/30 p-1.5 rounded-2xl border border-beige">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl font-sans text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-espresso text-cream shadow-md'
                      : 'text-espresso/75 hover:bg-beige/60 hover:text-espresso'
                  }`}
                  id={`menu-cat-${cat.id}`}
                >
                  <span className="text-base">{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Grid Items */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="menu-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col bg-cream rounded-3xl border border-beige overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
                id={`menu-item-${item.id}`}
              >
                {/* Image Container with Lazy loading and popular tag */}
                <div className="relative h-56 overflow-hidden bg-espresso/5">
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {item.isPopular && (
                    <div className="absolute top-4 right-4 bg-terracotta text-cream font-sans text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                      <Star className="w-2.5 h-2.5 fill-current" />
                      <span>Best Seller</span>
                    </div>
                  )}
                </div>

                {/* Info Content */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <h3 className="font-serif text-lg font-bold text-espresso group-hover:text-forest transition-colors duration-300">
                        {item.name}
                      </h3>
                      <span className="font-mono text-base font-bold text-terracotta shrink-0">
                        ₹{item.price}
                      </span>
                    </div>
                    <p className="font-sans text-xs text-espresso/70 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-beige/60 flex items-center justify-between">
                    <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-forest bg-forest/5 px-2.5 py-1 rounded-md">
                      Freshly Prepared
                    </span>
                    <span className="font-sans text-[11px] text-espresso/50">
                      Standard serving
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
