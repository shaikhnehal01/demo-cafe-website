import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, User, Phone, Users, Clock, MessageSquare, Check } from 'lucide-react';
import { ReservationData } from '../types';

export default function Reservation() {
  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: 2,
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [confirmedData, setConfirmedData] = useState<ReservationData | null>(null);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'guests' ? parseInt(value) || 2 : value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date || !formData.time) {
      alert('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);

    // Simulate database write
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setConfirmedData({ ...formData });
      
      // Save to localStorage (Firebase-ready structure simulation)
      const existing = JSON.parse(localStorage.getItem('reservations') || '[]');
      existing.push({ ...formData, id: Date.now().toString() });
      localStorage.setItem('reservations', JSON.stringify(existing));

      // Reset form
      setFormData({
        name: '',
        phone: '',
        date: '',
        time: '',
        guests: 2,
        notes: ''
      });
    }, 1500);
  };

  return (
    <section id="reservation" className="py-24 bg-cream relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-beige/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Grid Card */}
        <div className="bg-cream border border-beige rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12" id="reservation-panel">
          
          {/* Left Column: Visual Sizzle Photo */}
          <div className="lg:col-span-5 relative h-64 lg:h-auto min-h-[300px]">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
              alt="Elegant reserved table in cozy Brew & Bloom cafe next to green foliage"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Visual aesthetic overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/30 to-transparent" />
            <div className="absolute bottom-10 left-10 right-10 text-cream flex flex-col gap-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-terracotta font-bold">Table Experience</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">Cozy alcoves & garden corners await you.</h3>
              <p className="font-sans text-xs text-cream/85 leading-relaxed mt-2">
                Whether a business brunch, a cozy afternoon read, or an elegant anniversary dinner, we save the finest seats in the house.
              </p>
            </div>
          </div>

          {/* Right Column: Form Container */}
          <div className="lg:col-span-7 p-8 sm:p-12 md:p-16 flex flex-col justify-center bg-cream relative">
            
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.div
                  key="form-state"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-beige text-espresso font-sans text-xs font-semibold uppercase tracking-wider mb-3">
                      <span>Table Reservation</span>
                    </div>
                    <h2 className="font-serif text-3xl font-bold text-espresso">
                      Reserve Your Cozy Moment
                    </h2>
                    <p className="font-sans text-xs text-espresso/70 mt-1 leading-relaxed">
                      Reservations are free. We hold your table for up to 15 minutes past the booking time.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-6" id="booking-form">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Name input */}
                      <div className="flex flex-col gap-2">
                        <label className="font-sans text-xs font-bold text-espresso uppercase tracking-wider flex items-center gap-2">
                          <User className="w-3.5 h-3.5 text-forest" />
                          <span>Full Name *</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Ananya Roy"
                          required
                          className="w-full font-sans text-sm px-4 py-3 bg-beige/30 border border-beige hover:border-espresso/25 focus:border-espresso rounded-xl outline-none transition-colors"
                        />
                      </div>

                      {/* Phone input */}
                      <div className="flex flex-col gap-2">
                        <label className="font-sans text-xs font-bold text-espresso uppercase tracking-wider flex items-center gap-2">
                          <Phone className="w-3.5 h-3.5 text-forest" />
                          <span>Phone Number *</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 98765 43210"
                          required
                          className="w-full font-sans text-sm px-4 py-3 bg-beige/30 border border-beige hover:border-espresso/25 focus:border-espresso rounded-xl outline-none transition-colors"
                        />
                      </div>

                      {/* Date input */}
                      <div className="flex flex-col gap-2">
                        <label className="font-sans text-xs font-bold text-espresso uppercase tracking-wider flex items-center gap-2">
                          <Calendar className="w-3.5 h-3.5 text-forest" />
                          <span>Date *</span>
                        </label>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          required
                          className="w-full font-sans text-sm px-4 py-3 bg-beige/30 border border-beige hover:border-espresso/25 focus:border-espresso rounded-xl outline-none transition-colors"
                        />
                      </div>

                      {/* Time input */}
                      <div className="flex flex-col gap-2">
                        <label className="font-sans text-xs font-bold text-espresso uppercase tracking-wider flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-forest" />
                          <span>Time *</span>
                        </label>
                        <select
                          name="time"
                          value={formData.time}
                          onChange={handleInputChange}
                          required
                          className="w-full font-sans text-sm px-4 py-3 bg-beige/30 border border-beige hover:border-espresso/25 focus:border-espresso rounded-xl outline-none transition-colors cursor-pointer"
                        >
                          <option value="">Select Time Slot</option>
                          <option value="08:00 AM">08:00 AM (Breakfast)</option>
                          <option value="09:30 AM">09:30 AM (Breakfast)</option>
                          <option value="11:00 AM">11:00 AM (Brunch)</option>
                          <option value="12:30 PM">12:30 PM (Lunch)</option>
                          <option value="02:00 PM">02:00 PM (Lunch)</option>
                          <option value="04:00 PM">04:00 PM (High Tea)</option>
                          <option value="06:00 PM">06:00 PM (Snacks)</option>
                          <option value="07:30 PM">07:30 PM (Dinner)</option>
                          <option value="09:00 PM">09:00 PM (Dinner)</option>
                        </select>
                      </div>

                      {/* Guests input */}
                      <div className="flex flex-col gap-2 sm:col-span-2">
                        <label className="font-sans text-xs font-bold text-espresso uppercase tracking-wider flex items-center gap-2">
                          <Users className="w-3.5 h-3.5 text-forest" />
                          <span>Number of Guests *</span>
                        </label>
                        <select
                          name="guests"
                          value={formData.guests}
                          onChange={handleInputChange}
                          required
                          className="w-full font-sans text-sm px-4 py-3 bg-beige/30 border border-beige hover:border-espresso/25 focus:border-espresso rounded-xl outline-none transition-colors cursor-pointer"
                        >
                          <option value="1">1 Guest</option>
                          <option value="2">2 Guests</option>
                          <option value="3">3 Guests</option>
                          <option value="4">4 Guests</option>
                          <option value="5">5 Guests</option>
                          <option value="6">6+ Guests (Large Party)</option>
                        </select>
                      </div>

                      {/* Notes input */}
                      <div className="flex flex-col gap-2 sm:col-span-2">
                        <label className="font-sans text-xs font-bold text-espresso uppercase tracking-wider flex items-center gap-2">
                          <MessageSquare className="w-3.5 h-3.5 text-forest" />
                          <span>Special Requests (Optional)</span>
                        </label>
                        <textarea
                          name="notes"
                          value={formData.notes}
                          onChange={handleInputChange}
                          rows={3}
                          placeholder="E.g. Window seat preferred, high chair for kids, allergies to gluten..."
                          className="w-full font-sans text-sm px-4 py-3 bg-beige/30 border border-beige hover:border-espresso/25 focus:border-espresso rounded-xl outline-none resize-none transition-colors"
                        />
                      </div>

                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-espresso hover:bg-forest text-cream font-sans text-sm font-bold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg mt-4 disabled:opacity-50 cursor-pointer"
                      id="submit-booking-btn"
                    >
                      {isSubmitting ? 'Verifying Availability...' : 'Book Table Now'}
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success-state"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center text-center py-8"
                  id="booking-success-state"
                >
                  <div className="w-16 h-16 rounded-full bg-forest text-cream flex items-center justify-center shadow-lg mb-6">
                    <Check className="w-8 h-8" />
                  </div>

                  <span className="font-mono text-xs text-forest font-bold uppercase tracking-wider">
                    Reservation Confirmed!
                  </span>
                  <h2 className="font-serif text-3xl font-bold text-espresso mt-2 mb-4">
                    Your Table is Waiting
                  </h2>
                  <p className="font-sans text-sm text-espresso/70 leading-relaxed max-w-md mb-8">
                    We have reserved a beautiful spot for you. A SMS confirmation has been simulated to your registered mobile number. Here is your digital receipt:
                  </p>

                  {/* Digital Ticket */}
                  <div className="w-full max-w-sm bg-beige/30 rounded-2xl border border-beige p-6 text-left relative overflow-hidden flex flex-col gap-4">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-forest/5 rounded-full blur-xl" />
                    
                    <div className="border-b border-beige pb-4 flex justify-between items-center">
                      <div>
                        <span className="font-mono text-[9px] text-espresso/50 uppercase block">Reservation ID</span>
                        <span className="font-mono text-xs text-espresso font-bold">BB-{Math.floor(1000 + Math.random() * 9000)}</span>
                      </div>
                      <span className="font-sans text-xs bg-forest/15 text-forest font-semibold px-2.5 py-1 rounded-md">
                        Status: Active
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-espresso/50 block font-sans">Guest Name</span>
                        <strong className="text-espresso font-serif text-sm">{confirmedData?.name}</strong>
                      </div>
                      <div>
                        <span className="text-espresso/50 block font-sans">Phone Number</span>
                        <strong className="text-espresso font-sans">{confirmedData?.phone}</strong>
                      </div>
                      <div>
                        <span className="text-espresso/50 block font-sans">Date Reserved</span>
                        <strong className="text-espresso font-sans">{confirmedData?.date}</strong>
                      </div>
                      <div>
                        <span className="text-espresso/50 block font-sans">Reserved Time</span>
                        <strong className="text-espresso font-sans">{confirmedData?.time}</strong>
                      </div>
                      <div className="col-span-2">
                        <span className="text-espresso/50 block font-sans">Party Details</span>
                        <strong className="text-espresso font-serif text-sm">{confirmedData?.guests} {confirmedData?.guests === 1 ? 'Guest' : 'Guests'}</strong>
                      </div>
                    </div>

                    {confirmedData?.notes && (
                      <div className="bg-cream/70 p-3 rounded-lg border border-beige text-xs text-espresso/70 italic">
                        "{confirmedData.notes}"
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-8 px-6 py-2.5 border border-espresso/20 hover:border-espresso font-sans text-xs font-semibold rounded-full text-espresso transition-all duration-300 cursor-pointer"
                  >
                    Make Another Booking
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
