'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { galleryItems } from '@/data/gallery';

const ArchitecturalGallery: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Show first 8 villa elevation images
  const featured = galleryItems.filter((g) => g.category === 'villas').slice(0, 8);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevLightbox = () =>
    setLightboxIndex((i) => (i !== null ? (i > 0 ? i - 1 : featured.length - 1) : null));
  const nextLightbox = () =>
    setLightboxIndex((i) => (i !== null ? (i < featured.length - 1 ? i + 1 : 0) : null));

  return (
    <section className="bg-stone py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <SectionHeading
            eyebrow="Architecture"
            title="Villa Elevations"
          />
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm font-medium text-charcoal hover:text-taupe transition-colors whitespace-nowrap mb-4"
          >
            View Full Gallery <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Editorial grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {featured.map((item, index) => (
            <button
              key={item.id}
              onClick={() => openLightbox(index)}
              className={`relative overflow-hidden group bg-offwhite text-left ${
                index === 0 ? 'col-span-2 row-span-2' : ''
              }`}
              aria-label={`View ${item.title}`}
            >
              <div className={`relative w-full ${index === 0 ? 'aspect-[4/3]' : 'aspect-square'}`}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes={index === 0 ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 50vw, 25vw'}
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-all duration-300" />
              </div>
              {index === 0 && (
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-charcoal/60 to-transparent">
                  <p className="text-white text-sm font-medium font-body">{item.title}</p>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-charcoal/97 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 p-2 bg-white/10 hover:bg-white/20 text-white rounded transition-all"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prevLightbox(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 text-white rounded transition-all"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={featured[lightboxIndex].src}
              alt={featured[lightboxIndex].alt}
              width={featured[lightboxIndex].width}
              height={featured[lightboxIndex].height}
              className="w-full h-auto max-h-[80vh] object-contain"
              priority
            />
            <div className="mt-4 text-center">
              <p className="text-white/80 text-sm font-body">{featured[lightboxIndex].title}</p>
              {featured[lightboxIndex].description && (
                <p className="text-white/40 text-xs font-body mt-1 max-w-xl mx-auto">
                  {featured[lightboxIndex].description}
                </p>
              )}
            </div>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); nextLightbox(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 text-white rounded transition-all"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </section>
  );
};

export default ArchitecturalGallery;
