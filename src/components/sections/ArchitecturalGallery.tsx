'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Eye } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { galleryItems } from '@/data/gallery';

export const ArchitecturalGallery: React.FC = () => {
  // Showcase the first 6 items for the homepage preview
  const previewItems = galleryItems.slice(0, 6);

  return (
    <section className="py-24 bg-charcoal text-ivory relative border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            eyebrow="AUTHENTIC ARCHITECTURE"
            title="Design &amp; Materiality"
            subtitle="Explore the structural proportions, textured stone cladding, and wide frontage setbacks defining the villa typologies."
            align="left"
            light={true}
          />
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gold text-gold hover:bg-gold hover:text-charcoal transition-all text-xs font-semibold uppercase tracking-wider self-start md:self-auto shadow"
          >
            <span>View All Elevations &amp; Plans</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-forest border border-gold/30 shadow-lg"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gold">
                    {item.category === 'villas' ? 'Elevation' : item.category}
                  </span>
                  <h3 className="font-heading text-base sm:text-lg font-semibold text-ivory mt-0.5 line-clamp-1">
                    {item.title}
                  </h3>
                </div>
                <div className="w-9 h-9 rounded-full bg-gold/20 text-gold flex items-center justify-center group-hover:bg-gold group-hover:text-charcoal transition-colors flex-shrink-0">
                  <Eye className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchitecturalGallery;
