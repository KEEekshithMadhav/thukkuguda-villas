'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  CheckCircle2,
  Maximize2,
  X,
  Dumbbell,
  HeartPulse,
  ShoppingBag,
  Users,
  Home,
  SunMedium,
} from 'lucide-react';
import { amenitiesList, amenityCategories, Amenity } from '@/data/amenities';

const categoryIcons: Record<string, React.ElementType> = {
  'recreation-sports': Dumbbell,
  wellness: HeartPulse,
  convenience: ShoppingBag,
  'community-entertainment': Users,
  'villa-features': Home,
  'outdoor-lifestyle': SunMedium,
};

const Amenities: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedAmenity, setSelectedAmenity] = useState<Amenity | null>(null);

  const filteredAmenities =
    activeCategory === 'all'
      ? amenitiesList
      : amenitiesList.filter((item) => item.categoryKey === activeCategory);

  return (
    <section id="amenities" className="bg-offwhite py-24 md:py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-softgrey text-taupe text-xs uppercase tracking-[0.25em] font-medium mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-taupe" />
            <span>Curated Living</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-charcoal leading-[1.15] mb-4">
            Luxury Amenities &amp; Lifestyle
          </h2>
          <p className="text-base sm:text-lg text-charcoal/65 font-body leading-relaxed">
            From the grand community clubhouse to bespoke internal villa appointments, every space
            is thoughtfully designed to enrich physical wellness, community connection, and personal retreat.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-12 border-b border-softgrey/80 pb-6">
          {amenityCategories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-body font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-charcoal text-white shadow-md'
                    : 'bg-white text-charcoal/70 border border-softgrey hover:text-charcoal hover:border-charcoal/30'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Amenities Editorial Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredAmenities.map((amenity, index) => {
              const Icon = categoryIcons[amenity.categoryKey] || Sparkles;
              const isFeatureCard = activeCategory === 'all' && (index === 0 || index === 3 || index === 6);

              return (
                <motion.div
                  key={amenity.id}
                  layout
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`group relative bg-white border border-softgrey rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col justify-between ${
                    isFeatureCard ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                  }`}
                >
                  {/* Image Container */}
                  <div
                    className={`relative overflow-hidden cursor-pointer bg-stone ${
                      isFeatureCard ? 'aspect-[16/10] sm:aspect-[16/9]' : 'aspect-[4/3]'
                    }`}
                    onClick={() => setSelectedAmenity(amenity)}
                  >
                    <Image
                      src={amenity.image}
                      alt={`Thukkuguda Villas — ${amenity.title}`}
                      fill
                      sizes={isFeatureCard ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'}
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Gradient overlay for image legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/10 to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-300" />

                    {/* Category badge */}
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs border border-white/40 text-charcoal text-[11px] font-medium shadow-xs">
                      <Icon className="w-3 h-3 text-taupe" />
                      <span>{amenity.category}</span>
                    </div>

                    {/* Quick view button */}
                    <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 rounded-full bg-charcoal/70 text-white backdrop-blur-xs">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="font-heading text-xl sm:text-2xl font-semibold text-charcoal mb-2.5 group-hover:text-taupe transition-colors duration-200">
                        {amenity.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-charcoal/65 font-body leading-relaxed mb-5">
                        {amenity.description}
                      </p>
                    </div>

                    {/* Feature Highlight Pills */}
                    <div className="pt-4 border-t border-softgrey/60 flex flex-wrap gap-2">
                      {amenity.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-stone/50 text-[11px] text-charcoal/75 font-body font-medium"
                        >
                          <CheckCircle2 className="w-3 h-3 text-taupe" />
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal for Full Image Inspection */}
        <AnimatePresence>
          {selectedAmenity && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-charcoal/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
              onClick={() => setSelectedAmenity(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl border border-white/20"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setSelectedAmenity(null)}
                  className="absolute top-4 right-4 z-20 p-2 rounded-full bg-charcoal/70 hover:bg-charcoal text-white transition-colors shadow-md"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Image */}
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-stone">
                  <Image
                    src={selectedAmenity.image}
                    alt={selectedAmenity.title}
                    fill
                    className="object-contain sm:object-cover"
                    priority
                  />
                </div>

                {/* Modal Caption */}
                <div className="p-6 sm:p-8 bg-white">
                  <div className="inline-block text-[11px] uppercase tracking-[0.2em] text-taupe font-medium mb-1">
                    {selectedAmenity.category}
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-charcoal mb-2">
                    {selectedAmenity.title}
                  </h3>
                  <p className="text-sm sm:text-base text-charcoal/70 font-body leading-relaxed mb-4">
                    {selectedAmenity.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-softgrey">
                    {selectedAmenity.highlights.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-stone/60 text-xs text-charcoal/80 font-body font-medium"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-taupe" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Amenities;
