import { Phone, Calendar } from 'lucide-react';
import { CAFE_INFO } from '../data';

interface ContactCTAProps {
  onOpenReservation: () => void;
}

export default function ContactCTA({ onOpenReservation }: ContactCTAProps) {
  return (
    <section id="contact-cta" className="relative py-24 bg-espresso overflow-hidden border-t border-beige">
      {/* Soft overlay representing authentic steam/mood */}
      <div className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-25 select-none pointer-events-none" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80')` }} />
      <div className="absolute top-0 right-0 w-80 h-80 bg-forest/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        
        <span className="font-sans text-xs font-bold uppercase tracking-widest text-terracotta mb-4 block">
          A Warm Welcome Awaits
        </span>
        
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-cream mb-6 max-w-2xl leading-tight">
          Ready For Your Next Coffee Break?
        </h2>
        
        <p className="font-sans text-sm sm:text-base text-cream/70 leading-relaxed max-w-xl mb-10">
          Walk right in, or reserve your table in advance to save the absolute best spots for you and your company. No extra booking fee.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={onOpenReservation}
            className="flex items-center gap-2 px-8 py-4 rounded-full bg-terracotta hover:bg-forest text-cream font-sans text-sm font-bold shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            id="cta-reserve-btn"
          >
            <Calendar className="w-4.5 h-4.5" />
            <span>Reserve Table</span>
          </button>
          
          <a
            href={`tel:${CAFE_INFO.phone}`}
            className="flex items-center gap-2 px-8 py-4 rounded-full border border-cream/30 text-cream hover:border-cream hover:bg-cream/10 font-sans text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            id="cta-call-btn"
          >
            <Phone className="w-4.5 h-4.5" />
            <span>Call Now ({CAFE_INFO.phone})</span>
          </a>
        </div>

      </div>
    </section>
  );
}
