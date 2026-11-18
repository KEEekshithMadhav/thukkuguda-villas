'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle, ArrowRight, MapPin } from 'lucide-react';
import { projectData } from '@/data/project';

const HeroSection: React.FC = () => {
  const { phone1 } = projectData;

  const stats = [
    { label: 'Development Area', value: '24 Acres' },
    { label: 'Premium Villas', value: '202' },
    { label: 'Villa Sizes', value: '267–400 Sq.Yds' },
    { label: 'Roads', value: '40-ft Wide' },
  ];

  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Full-width hero image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-villa.jpg"
          alt="Thukkuguda Villas – Premium Villa Architecture"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Very subtle overlay – just enough for text legibility */}
        <div className="absolute inset-0 bg-charcoal/35" />
      </div>



      {/* Main content */}
      <div className="relative z-10 flex flex-col justify-end flex-1 max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 pb-16 md:pb-20 pt-32">

        {/* Location label */}
        <div className="flex items-center gap-2 mb-5">
          <MapPin className="w-3.5 h-3.5 text-white/60" />
          <span className="text-xs uppercase tracking-[0.25em] text-white/60 font-body">
            Tukkuguda, South Hyderabad
          </span>
        </div>

        {/* Title */}
        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-white leading-[1.05] mb-4 max-w-3xl">
          Thukkuguda
          <br />
          <span className="italic font-normal text-white/85">Villas</span>
        </h1>

        {/* Tagline */}
        <p className="text-white/60 text-base md:text-lg font-body max-w-xl mb-10 leading-relaxed">
          202 premium villas across 24 acres of curated landscape.
          An address defined by space, light and quality.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-14">
          <Link
            href="/villas"
            className="inline-flex items-center gap-2 bg-white text-charcoal px-7 py-3 text-sm font-medium hover:bg-offwhite transition-all duration-200"
          >
            Explore Villas
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-white/60 text-white px-7 py-3 text-sm font-medium hover:bg-white/10 transition-all duration-200"
          >
            Schedule Site Visit
          </Link>
          <a
            href={phone1.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Stats strip */}
        <div className="flex flex-wrap gap-x-10 gap-y-4 border-t border-white/15 pt-8">
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="text-xl md:text-2xl font-heading font-semibold text-white">{stat.value}</p>
              <p className="text-xs text-white/50 font-body tracking-wide mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
