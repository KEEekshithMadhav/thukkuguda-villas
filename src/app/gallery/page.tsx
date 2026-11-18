'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { galleryItems, galleryCategories, GalleryItem } from '@/data/gallery';
import { projectData } from '@/data/project';
import NexHouzWatermark from '@/components/ui/NexHouzWatermark';

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
    <div className="min-h-screen bg-offwhite text-charcoal pt-16 font-body">
      {/* Header */}
      <section className="bg-white border-b border-softgrey py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <span className="text-xs uppercase tracking-[0.25em] text-taupe font-medium">
            Visual Portfolio
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-semibold mt-3 mb-4 text-charcoal">
            Architectural Gallery
          </h1>
          <p className="text-base sm:text-lg text-charcoal/50 max-w-2xl leading-relaxed font-body">
            Villa elevations, the master site plan, and aerial location imagery from Thukkuguda Villas.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="pt-10 pb-6 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-wrap items-center gap-0 border-b border-softgrey">
          {galleryCategories.map((category) => {
            const isActive = category.id === activeCategory;
            return (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setLightboxIndex(null);
                }}
                className={`px-5 py-3 text-sm font-body font-medium transition-all border-b-2 -mb-px ${
                  isActive
                    ? 'text-charcoal border-charcoal'
                    : 'text-charcoal/40 border-transparent hover:text-charcoal/70'
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative overflow-hidden aspect-[4/3] bg-stone cursor-pointer"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/25 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-charcoal/70 to-transparent">
                <p className="text-white text-sm font-medium font-body">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {currentItem && (
        <div
          className="fixed inset-0 z-50 bg-charcoal/97 flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 p-2 bg-white/10 hover:bg-white/20 text-white rounded transition-all"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 text-white rounded transition-all"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div
            className="max-w-5xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-[16/10] bg-charcoal">
              <Image
                src={currentItem.src}
                alt={currentItem.title}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="mt-4 text-center">
              <span className="text-[11px] uppercase tracking-[0.2em] text-taupe font-body">
                {currentItem.category}
              </span>
              <h2 className="font-heading text-xl font-semibold text-white mt-1">
                {currentItem.title}
              </h2>
              {currentItem.description && (
                <p className="text-sm text-white/50 mt-1 max-w-lg mx-auto font-body">
                  {currentItem.description}
                </p>
              )}
            </div>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 text-white rounded transition-all"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* NexHouz watermark in natural whitespace */}
      <NexHouzWatermark />

      {/* Footer CTA */}
      <section className="bg-charcoal text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-4">
          <h2 className="font-heading text-3xl font-semibold">Experience the Space in Person</h2>
          <p className="text-sm text-white/50 font-body">
            Imagery provides context, but spatial scale is best felt on site. Schedule a guided visit.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-7 py-3 bg-white text-charcoal text-sm font-medium hover:bg-offwhite transition-all"
            >
              Book Site Visit
            </Link>
            <a
              href={projectData.phone1.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 border border-emerald-500 text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all text-sm font-medium inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
