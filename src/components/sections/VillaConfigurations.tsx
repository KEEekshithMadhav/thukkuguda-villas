'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { villaConfigurations } from '@/data/villas';

export const VillaConfigurations: React.FC = () => {
  return (
    <section id="villas" className="py-24 bg-beige/40 text-charcoal border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="VILLA CONFIGURATIONS"
          title="Four Distinct Scales of Refined Living"
          subtitle="Engineered with expansive floor-to-ceiling volumes, wide frontage setbacks, and functional layouts tailored to multi-generational living."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {villaConfigurations.map((villa, index) => (
            <motion.div
              key={villa.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="flex flex-col bg-ivory rounded-2xl border border-gold/30 overflow-hidden shadow-lg hover:shadow-2xl hover:border-gold transition-all duration-300"
            >
              {/* Architectural Image */}
              <div className="relative aspect-[4/3] bg-forest overflow-hidden">
                <Image
                  src={villa.image}
                  alt={`${villa.plotSize} Villa Architectural Elevation`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-forest/80 backdrop-blur-sm border border-gold/40 px-3 py-1 rounded text-[11px] font-semibold text-gold uppercase tracking-wider">
                  Plot {villa.plotSize}
                </div>
              </div>

              {/* Content Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-6">
                <div>
                  <div className="border-b border-gold/20 pb-4 mb-4">
                    <h3 className="font-heading text-2xl font-bold text-forest">
                      {villa.plotSize}
                    </h3>
                    <p className="text-xs uppercase tracking-widest text-gold font-semibold mt-1">
                      {villa.builtUpArea} Built-Up Area
                    </p>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 text-xs text-charcoal/80">
                    {villa.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-forest flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <div className="pt-2">
                  <a
                    href="#enquiry"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded text-xs font-semibold uppercase tracking-wider bg-forest text-ivory hover:bg-forest/90 transition-all"
                  >
                    <span>Enquire for this Villa</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gold" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Action Link */}
        <div className="text-center mt-12">
          <Link
            href="/villas"
            className="inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-gold transition-colors"
          >
            <span>Compare all configurations and features on the Villas Page</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VillaConfigurations;
