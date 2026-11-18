'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Compass,
  Trees,
  Landmark,
  ShieldCheck,
  Zap,
  Droplets,
  Layers,
  Sparkles,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const AMENITY_LIST = [
  {
    title: 'Grand Clubhouse',
    category: 'Community & Leisure',
    description: 'A dedicated social center for community events, indoor recreation, and neighborhood fellowship.',
    icon: Landmark,
  },
  {
    title: '40-Foot Wide Arterial Roads',
    category: 'Infrastructure',
    description: 'Expansive internal roads designed with proper curbs, drainage, and uninterrupted pedestrian paths.',
    icon: Compass,
  },
  {
    title: 'Landscaped Avenues',
    category: 'Environment',
    description: 'Manicured boulevards and mature tree lines that enhance microclimate and community privacy.',
    icon: Trees,
  },
  {
    title: 'Smart Villa Architecture',
    category: 'Design Engineering',
    description: 'Thoughtfully planned elevations ensuring maximum natural lighting, ventilation, and privacy.',
    icon: Zap,
  },
  {
    title: 'Large-Format Flooring',
    category: 'Interior Standards',
    description: 'Refined surfaces throughout the living and public zones providing an expansive aesthetic.',
    icon: Layers,
  },
  {
    title: 'Branded Fittings & Hardware',
    category: 'Quality Finishes',
    description: 'Reputed fixtures ensuring timeless aesthetics, longevity, and effortless maintenance.',
    icon: Sparkles,
  },
  {
    title: '24/7 Gated Security',
    category: 'Safety',
    description: 'Access-controlled main entry pavilion with perimeter boundary surveillance.',
    icon: ShieldCheck,
  },
  {
    title: 'Underground Infrastructure',
    category: 'Aesthetic Planning',
    description: 'Concealed cabling, drainage, and utility networks that keep the avenues clean and wire-free.',
    icon: Droplets,
  },
];

export const Amenities: React.FC = () => {
  return (
    <section className="py-24 bg-ivory text-charcoal border-b border-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="COMMUNITY AMENITIES"
          title="Curated for an Uncompromised Standard of Life"
          subtitle="A harmonious blend of wide open spaces, dedicated social infrastructure, and meticulous attention to craftsmanship."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AMENITY_LIST.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl bg-white border border-gold/25 hover:border-gold hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-forest/10 text-forest flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-gold font-semibold">
                    {item.category}
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-charcoal mt-1 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-charcoal/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
