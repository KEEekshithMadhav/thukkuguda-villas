'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown, MessageCircle } from 'lucide-react';
import { projectData } from '@/data/project';

export const HeroSection: React.FC = () => {
  const { phone1 } = projectData;

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-forest text-ivory overflow-hidden pt-20">
      {/* Background Architectural 3D Render from Design Book */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-villa.jpg"
          alt="Thukkuguda Villas Architectural Facade"
          fill
          priority
          className="object-cover object-center scale-105"
        />
        {/* Dark Forest Green Tint Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/80 to-forest/70" />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 flex flex-col items-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/50 bg-forest/85 backdrop-blur-md mb-6 shadow-lg"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium">
            Tukkuguda (Mankhal) · South Hyderabad
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-ivory leading-[1.08] mb-6 drop-shadow-md"
        >
          Thukkuguda <span className="text-gold italic font-normal">Villas</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="font-body text-base sm:text-lg md:text-xl text-ivory/90 max-w-3xl mx-auto leading-relaxed mb-8 drop-shadow"
        >
          An exclusive 24-acre gated sanctuary featuring 202 bespoke villas with wide 40-ft internal roads, landscaped avenues, and a grand 1,986 Sq. Yds clubhouse.
        </motion.p>

        {/* Key Metrics Strip */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 py-5 px-6 rounded-2xl border border-gold/30 bg-forest/80 backdrop-blur-md mb-10 w-full max-w-3xl shadow-2xl"
        >
          <div>
            <p className="font-heading text-2xl sm:text-3xl font-bold text-gold">24</p>
            <p className="text-xs uppercase tracking-wider text-ivory/75">Acres Land</p>
          </div>
          <div>
            <p className="font-heading text-2xl sm:text-3xl font-bold text-gold">202</p>
            <p className="text-xs uppercase tracking-wider text-ivory/75">Luxury Villas</p>
          </div>
          <div>
            <p className="font-heading text-xl sm:text-2xl font-bold text-gold">267–400</p>
            <p className="text-xs uppercase tracking-wider text-ivory/75">Sq. Yds Plots</p>
          </div>
          <div>
            <p className="font-heading text-2xl sm:text-3xl font-bold text-gold">40 Ft</p>
            <p className="text-xs uppercase tracking-wider text-ivory/75">Wide Roads</p>
          </div>
        </motion.div>

        {/* CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Link
            href="/villas"
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg text-sm uppercase tracking-wider font-semibold bg-gold text-charcoal hover:bg-gold/90 transition-all shadow-xl hover:scale-105"
          >
            Explore Villas
          </Link>
          <a
            href="#enquiry"
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg text-sm uppercase tracking-wider font-semibold border border-gold text-gold hover:bg-gold hover:text-charcoal transition-all shadow-lg"
          >
            Schedule Site Visit
          </a>
          <a
            href={phone1.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-lg text-sm font-semibold inline-flex items-center justify-center gap-2 bg-emerald-600 text-white hover:bg-emerald-500 transition-all shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
        </motion.div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-gold/80 hover:text-gold cursor-pointer"
        onClick={() => {
          window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' });
        }}
      >
        <span className="text-[10px] uppercase tracking-widest font-semibold">Scroll to explore</span>
        <ArrowDown className="w-4 h-4" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
