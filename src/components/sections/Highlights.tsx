'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Compass,
  Trees,
  Landmark,
  Layers,
  Sparkles,
  Cpu,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const HIGHLIGHT_ITEMS = [
  {
    title: 'Wide 40-ft Roads',
    description: 'Spacious internal avenues that ensure effortless two-way vehicular flow, wide sidewalks, and generous setbacks between homes.',
    icon: Compass,
  },
  {
    title: 'Landscaped Avenues',
    description: 'Thoughtfully curated native flora and shaded walkways creating tranquil green canopies throughout the 24-acre master community.',
    icon: Trees,
  },
  {
    title: 'Grand Clubhouse',
    description: 'An architectural centerpiece for community recreation, wellness, social gatherings, and refined leisure.',
    icon: Landmark,
  },
  {
    title: 'Large-format Tiles',
    description: 'Seamless flooring surfaces that expand visual scale and reflect light, creating clean architectural sophistication inside every villa.',
    icon: Layers,
  },
  {
    title: 'Branded Fittings',
    description: 'Curated international bath fittings, electrical systems, and hardware that ensure durability, performance, and refined touchpoints.',
    icon: Sparkles,
  },
  {
    title: 'Smart Villa Designs',
    description: 'Intelligent spatial layouts optimized for cross-ventilation, expansive private terraces, and flexible contemporary family lifestyles.',
    icon: Cpu,
  },
];

export const Highlights: React.FC = () => {
  return (
    <section className="py-24 bg-forest text-ivory relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="PROJECT HIGHLIGHTS"
          title="Distinguished by Design &amp; Craft"
          subtitle="Every facet of Thukkuguda Villas is engineered to deliver an enduring benchmark of gated villa living in South Hyderabad."
          align="center"
          light={true}
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HIGHLIGHT_ITEMS.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-8 rounded-xl bg-forest/80 border border-gold/25 hover:border-gold/60 backdrop-blur-sm transition-all duration-300 group shadow-lg"
              >
                <div className="w-12 h-12 rounded-lg bg-gold/15 border border-gold/30 flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-charcoal transition-colors">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-ivory mb-3 group-hover:text-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-ivory/70 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
