'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { villaConfigurations } from '@/data/villas';

const VillaExplorer: React.FC = () => {
  const [activeVillaIndex, setActiveVillaIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const villa = villaConfigurations[activeVillaIndex];
  const images = villa.galleryImages;

  const handleVillaChange = (index: number) => {
    setActiveVillaIndex(index);
    setActiveImageIndex(0);
  };

  const prevImage = () => setActiveImageIndex((i) => (i > 0 ? i - 1 : images.length - 1));
  const nextImage = () => setActiveImageIndex((i) => (i < images.length - 1 ? i + 1 : 0));

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <SectionHeading
          eyebrow="Villa Explorer"
          title="Discover Your Ideal Configuration"
          subtitle="Select a villa size to explore its elevations and design details."
        />

        {/* Villa selector tabs */}
        <div className="flex flex-wrap gap-2 border-b border-softgrey/80 pb-4 mb-10">
          {villaConfigurations.map((v, index) => (
            <button
              key={v.id}
              onClick={() => handleVillaChange(index)}
              className={`px-5 py-2.5 text-xs sm:text-sm font-body font-medium transition-all duration-200 rounded-sm ${
                activeVillaIndex === index
                  ? 'bg-charcoal text-white shadow-sm'
                  : 'bg-offwhite text-charcoal/70 border border-softgrey hover:text-charcoal hover:border-charcoal/30'
              }`}
            >
              {v.plotSize}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Main image with navigation */}
          <div className="lg:col-span-3 relative">
            <div className="aspect-[16/10] sm:aspect-[4/3] relative overflow-hidden bg-stone border border-softgrey rounded-sm shadow-xs">
              <Image
                src={images[activeImageIndex]}
                alt={`${villa.plotSize} Villa – Image ${activeImageIndex + 1}`}
                fill
                className="object-cover transition-opacity duration-500"
                sizes="(max-width: 1024px) 100vw, 60vw"
                key={images[activeImageIndex]}
              />
            </div>

            {/* Nav arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 bg-white/90 backdrop-blur-xs hover:bg-white text-charcoal shadow-sm transition-all rounded-sm"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 bg-white/90 backdrop-blur-xs hover:bg-white text-charcoal shadow-sm transition-all rounded-sm"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </>
            )}

            {/* Dot indicators */}
            {images.length > 1 && (
              <div className="flex justify-center gap-2 mt-4">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImageIndex(i)}
                    className={`h-1 rounded-full transition-all duration-200 ${
                      i === activeImageIndex ? 'w-8 bg-charcoal' : 'w-3 bg-softgrey'
                    }`}
                    aria-label={`Image ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Details panel */}
          <div className="lg:col-span-2 space-y-7 bg-offwhite/50 border border-softgrey/70 p-6 sm:p-8 rounded-sm">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-taupe font-body font-medium mb-1.5">{villa.id.replace('-', ' ').toUpperCase()}</p>
              <h3 className="font-heading text-3xl sm:text-4xl font-semibold text-charcoal">{villa.plotSize}</h3>
              <p className="text-charcoal/60 font-body text-sm mt-1">{villa.builtUpArea} built-up area</p>
            </div>

            <div className="border-t border-softgrey/70 pt-5">
              <p className="text-[11px] uppercase tracking-[0.2em] text-taupe font-body font-medium mb-3">Available Facings</p>
              <div className="flex flex-wrap gap-2">
                {villa.facingOptions.map((facing) => (
                  <span
                    key={facing}
                    className="px-3 py-1 bg-white border border-softgrey text-xs text-charcoal/80 font-body font-medium rounded-xs"
                  >
                    {facing}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-softgrey/70 pt-5">
              <p className="text-[11px] uppercase tracking-[0.2em] text-taupe font-body font-medium mb-3">Key Features</p>
              <div className="space-y-2">
                {villa.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-taupe mt-1.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-charcoal/75 font-body leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <Link
                href={`/contact?size=${encodeURIComponent(villa.plotSize)}`}
                className="w-full inline-flex items-center justify-center gap-2 bg-charcoal text-white px-7 py-3.5 text-sm font-medium hover:bg-charcoal/85 transition-all duration-200 shadow-sm"
              >
                <span>Enquire About {villa.plotSize}</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Thumbnail strip */}
        {images.length > 1 && (
          <div className="flex gap-3 mt-8 overflow-x-auto pb-2 scrollbar-thin">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImageIndex(i)}
                className={`flex-shrink-0 w-24 h-18 relative overflow-hidden transition-all duration-200 rounded-sm border ${
                  i === activeImageIndex ? 'border-charcoal ring-2 ring-charcoal' : 'border-softgrey opacity-60 hover:opacity-100'
                }`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default VillaExplorer;
