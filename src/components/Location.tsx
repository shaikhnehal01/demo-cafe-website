import { MapPin, Phone, Mail, Clock, ShieldAlert, Navigation } from 'lucide-react';
import { CAFE_INFO } from '../data';

export default function Location() {
  return (
    <section id="location" className="py-24 bg-cream border-t border-beige">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-beige text-espresso font-sans text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Find Our Green Oasis</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-espresso mb-4">
            Visit Brew & Bloom
          </h2>
          <p className="font-sans text-base text-espresso/70 leading-relaxed">
            Stop by for a quiet morning brew, a slow weekend brunch, or bring your laptop for a focused remote working session in our glasshouse.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id="location-grid">
          
          {/* Left Column: Interactive Google Map */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-beige shadow-lg relative min-h-[350px] lg:min-h-0 map-overlay-hide">
            <iframe
              title="Brew & Bloom Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.646960098485!2d77.2008891!3d28.5503444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce27027555555%3A0xe44381ad75555555!2sGreen%20Park%20Extension%2C%20Green%20Park%2C%20New%20Delhi%2C%20Delhi%20110016!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </div>

          {/* Right Column: Address Details Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 bg-cream border border-beige rounded-3xl shadow-md">
            <div className="flex flex-col gap-8">
              
              {/* Address block */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-beige/50 text-espresso flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-espresso uppercase tracking-wider mb-1">
                    Store Address
                  </h4>
                  <p className="font-sans text-xs text-espresso/75 leading-relaxed">
                    {CAFE_INFO.address}
                  </p>
                </div>
              </div>

              {/* Working Hours block */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-beige/50 text-espresso flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-espresso uppercase tracking-wider mb-2">
                    Opening Hours
                  </h4>
                  <div className="flex flex-col gap-1 text-xs text-espresso/75 font-sans">
                    {CAFE_INFO.workingHours.map((wh) => (
                      <div key={wh.days} className="flex justify-between gap-4">
                        <span className="font-semibold">{wh.days}:</span>
                        <span>{wh.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Details block */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-beige/50 text-espresso flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-espresso uppercase tracking-wider mb-1">
                    Direct Contact
                  </h4>
                  <div className="flex flex-col gap-1 font-sans text-xs text-espresso/75">
                    <a href={`tel:${CAFE_INFO.phone}`} className="hover:text-terracotta transition-colors">
                      {CAFE_INFO.phone}
                    </a>
                    <a href={`mailto:${CAFE_INFO.email}`} className="hover:text-terracotta transition-colors">
                      {CAFE_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Parking block */}
              <div className="flex gap-4 p-4 rounded-2xl bg-forest/5 border border-forest/15">
                <div className="w-10 h-10 rounded-xl bg-forest/15 text-forest flex items-center justify-center shrink-0">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-forest uppercase tracking-wider mb-1">
                    Valet & Parking Available
                  </h4>
                  <p className="font-sans text-xs text-forest/80 leading-relaxed">
                    Complimentary safe basement valet parking is available for all dine-in guests at our Woodside gates.
                  </p>
                </div>
              </div>

            </div>

            {/* Quick action button to trigger direction on phone/new-tab */}
            <a
              href="https://maps.google.com/?q=Green+Park+Extension+New+Delhi"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 w-full py-3.5 rounded-xl border border-espresso hover:bg-espresso hover:text-cream text-espresso font-sans text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-sm"
              id="directions-btn"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
