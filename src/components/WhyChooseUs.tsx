import { Leaf, Award, Sofa, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhyChooseUs() {
  const cards = [
    {
      id: 'wc1',
      title: 'Fresh Ingredients',
      description: 'We partner with organic local farms to source non-GMO heirloom vegetables, fresh free-range eggs, and seasonal herbs daily.',
      icon: <Leaf className="w-6 h-6 text-forest" />
    },
    {
      id: 'wc2',
      title: 'Expert Baristas',
      description: 'Our certified brewing professionals undergo rigorous sensory training to master extraction chemistry, roasting theory, and delicate latte art.',
      icon: <Award className="w-6 h-6 text-terracotta" />
    },
    {
      id: 'wc3',
      title: 'Cozy Atmosphere',
      description: 'Our cafe is detailed with acoustic-soft ash wood paneling, premium orthopedic furniture, fresh foliage, and plenty of warm natural sunlight.',
      icon: <Sofa className="w-6 h-6 text-espresso" />
    },
    {
      id: 'wc4',
      title: 'Fast & Mindful Service',
      description: 'We respect your busy schedule. Your premium pour-over coffee or hot brunch is prepared with focus and delivered with a warm smile.',
      icon: <Clock className="w-6 h-6 text-forest" />
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-cream relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-beige text-espresso font-sans text-xs font-semibold uppercase tracking-wider mb-4">
            <span>The Brew & Bloom Standard</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-espresso mb-4">
            Crafting a Better Daily Ritual
          </h2>
          <p className="font-sans text-base text-espresso/70 leading-relaxed">
            What makes us different? We focus on the microscopic details of taste, comfort, and hospitality to provide an experience that cannot be simulated.
          </p>
        </div>

        {/* 4 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" id="why-choose-grid">
          {cards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col p-8 bg-cream border border-beige hover:border-espresso/20 rounded-3xl transition-all duration-300 hover:shadow-xl group"
              id={`why-${card.id}`}
            >
              {/* Icon Holder */}
              <div className="w-12 h-12 rounded-2xl bg-beige/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>

              {/* Title & Desc */}
              <h3 className="font-serif text-lg font-bold text-espresso mb-3 group-hover:text-terracotta transition-colors">
                {card.title}
              </h3>
              <p className="font-sans text-xs text-espresso/75 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
