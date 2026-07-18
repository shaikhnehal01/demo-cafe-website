/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import SignatureDrinks from './components/SignatureDrinks';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Reservation from './components/Reservation';
import Instagram from './components/Instagram';
import Location from './components/Location';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) {
      return saved === 'true';
    }
    return true; // Default to dark mode!
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', String(isDarkMode));
  }, [isDarkMode]);
  
  // Custom Smooth Scrolling Handler
  const handleScrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80; // offset for sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-cream selection:bg-terracotta selection:text-cream overflow-x-hidden" id="app-root-container">
      {/* 1. Header Navigation */}
      <Navbar 
        onOpenReservation={() => handleScrollToSection('#reservation')} 
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
      />

      {/* 2. Main Sections */}
      <main>
        {/* Cinematic Hero Block */}
        <Hero 
          onOpenReservation={() => handleScrollToSection('#reservation')} 
          onExploreMenu={() => handleScrollToSection('#menu')} 
        />

        {/* Feature Menu Card Selection */}
        <Menu />

        {/* Signature Beverage Showcases */}
        <SignatureDrinks />

        {/* Core Cafe Values & Features */}
        <WhyChooseUs />

        {/* Timeline, Story & Statistics */}
        <About />

        {/* Pinterest Masonry Photo Showcase */}
        <Gallery />

        {/* Slider Guest Reviews */}
        <Reviews />

        {/* Dynamic Booking Slate */}
        <Reservation />

        {/* Instagram Visuals Panel */}
        <Instagram />

        {/* Map, Store Timings, & Logistics */}
        <Location />

        {/* Bold Contact Call-To-Action */}
        <ContactCTA onOpenReservation={() => handleScrollToSection('#reservation')} />
      </main>

      {/* 3. Footers & Floating Actions */}
      <Footer />
      <FloatingButtons />
    </div>
  );
}
