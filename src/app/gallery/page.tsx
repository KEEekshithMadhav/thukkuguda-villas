'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, ChevronLeft, ChevronRight, Eye, Phone, MessageCircle } from 'lucide-react';
import { galleryItems, galleryCategories, GalleryItem } from '@/data/gallery';
import { projectData } from '@/data/project';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const currentItem: GalleryItem | null =
    lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  return (
    <div className="min-h-screen bg-ivory text-charcoal pt-24 font-body">
      {/* Header */}
      <section className="bg-forest text-ivory py-20 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">
            VISUAL PORTFOLIO
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold mt-2 mb-4 text-ivory">
            Architectural Gallery
          </h1>
          <p className="text-base sm:text-lg text-ivory/80 max-w-2xl mx-auto leading-relaxed">
            Experience the design sensibilities, broad roadways, and serene landscape design planned across Thukkuguda Villas.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {galleryCategories.map((category) => {
            const isActive = category.id === activeCategory;
            return (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setLightboxIndex(null);
                }}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all border ${
                  isActive
                    ? 'bg-forest text-gold border-gold shadow-md'
                    : 'bg-white text-charcoal/70 border-gold/30 hover:border-gold hover:text-charcoal'
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-forest border border-gold/30 shadow-md cursor-pointer hover:shadow-2xl transition-all duration-300"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gold">
                    {item.category}
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-ivory mt-0.5">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-xs text-ivory/70 line-clamp-1 mt-1">
                      {item.description}
                    </p>
                  )}
                </div>
                <div className="w-9 h-9 rounded-full bg-gold/20 text-gold flex items-center justify-center group-hover:bg-gold group-hover:text-charcoal transition-colors flex-shrink-0">
                  <Eye className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {currentItem && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-ivory hover:bg-gold hover:text-charcoal transition-colors z-50"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-ivory hover:bg-gold hover:text-charcoal transition-colors z-50"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-ivory hover:bg-gold hover:text-charcoal transition-colors z-50"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content */}
          <div
            className="max-w-4xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-[16/10] bg-forest rounded-2xl overflow-hidden border border-gold/40 shadow-2xl">
              <Image
                src={currentItem.src}
                alt={currentItem.title}
                fill
                className="object-contain p-4"
              />
            </div>
            <div className="mt-4 text-center text-ivory">
              <span className="text-[11px] uppercase tracking-widest text-gold font-semibold">
                {currentItem.category}
              </span>
              <h2 className="font-heading text-2xl font-bold mt-1">
                {currentItem.title}
              </h2>
              {currentItem.description && (
                <p className="text-sm text-ivory/70 mt-1 max-w-lg mx-auto">
                  {currentItem.description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Footer CTA */}
      <section className="bg-forest text-ivory py-16 border-t border-gold/20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="font-heading text-3xl font-bold">Experience the Space in Person</h2>
          <p className="text-sm text-ivory/75">
            Renderings provide context, but spatial scale is felt on site. Schedule an escorted visit along our 40-ft avenues.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg bg-gold text-charcoal font-semibold text-xs uppercase tracking-wider hover:bg-gold/90 transition-all"
            >
              Book Site Visit
            </Link>
            <a
              href={projectData.phone1.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg border border-emerald-500 text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all text-xs font-semibold inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
