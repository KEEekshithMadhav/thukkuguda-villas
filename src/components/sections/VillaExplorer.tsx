'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, ShieldCheck, Maximize2 } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { villaConfigurations } from '@/data/villas';

export const VillaExplorer: React.FC = () => {
  const [activeId, setActiveId] = useState(villaConfigurations[0].id);

  const activeVilla =
    villaConfigurations.find((v) => v.id === activeId) ||
    villaConfigurations[0];

  return (
    <section className="py-24 bg-ivory text-charcoal overflow-hidden border-b border-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="INTERACTIVE EXPLORATION"
          title="Compare Your Villa Dimensions"
          subtitle="Explore the four bespoke villa typologies available across the 24-acre master layout."
          align="center"
          className="mb-12"
        />

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-12">
          {villaConfigurations.map((villa) => {
            const isActive = villa.id === activeId;
            return (
              <button
                key={villa.id}
                onClick={() => setActiveId(villa.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                  isActive
                    ? 'bg-forest text-gold border-gold shadow-md scale-105'
                    : 'bg-white/80 text-charcoal/70 border-gold/30 hover:border-gold hover:text-charcoal'
                }`}
              >
                {villa.plotSize}
              </button>
            );
          })}
        </div>

        {/* Interactive Comparison Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeVilla.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl border border-gold/30 shadow-xl p-6 sm:p-10"
          >
            {/* Visual Column */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/11] rounded-2xl overflow-hidden bg-forest border border-gold/30 shadow-inner">
                <Image
                  src={activeVilla.image}
                  alt={`${activeVilla.plotSize} Architectural Elevation`}
                  fill
                  className="object-contain p-4"
                />
                <div className="absolute top-4 right-4 bg-forest/90 border border-gold/40 text-gold text-xs px-3 py-1.5 rounded-md font-semibold">
                  Architectural Elevation
                </div>
              </div>
            </div>

            {/* Specifications Column */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-gold font-bold">
                  Typology Breakdown
                </span>
                <h3 className="font-heading text-3xl sm:text-4xl font-bold text-forest mt-1">
                  {activeVilla.plotSize}
                </h3>
                <p className="text-sm font-medium text-charcoal/70 mt-1">
                  Total Built-Up Area:{' '}
                  <span className="text-forest font-bold text-base">
                    {activeVilla.builtUpArea}
                  </span>
                </p>
              </div>

              {/* Key Highlights */}
              <div className="space-y-3 pt-2 border-t border-gold/20">
                <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/60">
                  Included Standards
                </p>
                <div className="space-y-2">
                  {activeVilla.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2.5 text-sm">
                      <div className="w-5 h-5 rounded-full bg-forest/10 text-forest flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-charcoal/90 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Assurance */}
              <div className="p-4 rounded-xl bg-forest/5 border border-forest/15 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-forest flex-shrink-0 mt-0.5" />
                <p className="text-xs text-charcoal/80 leading-relaxed">
                  Positioned with expansive 40-ft internal roadway frontage, ensuring ample setbacks and privacy.
                </p>
              </div>

              {/* Enquire CTA */}
              <div className="pt-2">
                <a
                  href="#enquiry"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-gold text-charcoal font-semibold text-sm hover:bg-gold/90 transition-all shadow-md"
                >
                  <span>Enquire for {activeVilla.plotSize}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default VillaExplorer;
