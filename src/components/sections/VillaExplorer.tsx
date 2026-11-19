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
        <div className="flex flex-wrap gap-0 border-b border-softgrey mb-10">
          {villaConfigurations.map((v, index) => (
            <button
              key={v.id}
              onClick={() => handleVillaChange(index)}
              className={`px-6 py-3 text-sm font-body font-medium transition-all duration-200 border-b-2 -mb-px ${
                activeVillaIndex === index
                  ? 'text-charcoal border-charcoal'
                  : 'text-charcoal/40 border-transparent hover:text-charcoal/70'
              }`}
            >
              {v.plotSize}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Main image with navigation */}
          <div className="lg:col-span-3 relative">
            <div className="aspect-[4/3] relative overflow-hidden bg-stone">
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
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-white/90 hover:bg-white text-charcoal transition-all"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-white/90 hover:bg-white text-charcoal transition-all"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </>
            )}

            {/* Dot indicators */}
            {images.length > 1 && (
              <div className="flex justify-center gap-1.5 mt-4">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImageIndex(i)}
                    className={`h-px transition-all duration-200 ${
                      i === activeImageIndex ? 'w-8 bg-charcoal' : 'w-4 bg-softgrey'
                    }`}
                    aria-label={`Image ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Details panel */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-taupe font-body mb-2">{villa.id.replace('-', ' ').toUpperCase()}</p>
              <h3 className="font-heading text-4xl font-semibold text-charcoal">{villa.plotSize}</h3>
              <p className="text-charcoal/50 font-body mt-1">{villa.builtUpArea} built-up area</p>
            </div>

            <div className="space-y-3 border-t border-softgrey pt-6">
              <p className="text-xs uppercase tracking-[0.2em] text-taupe font-body mb-3">Available Facings</p>
              {villa.facingOptions.map((facing) => (
                <div key={facing} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-taupe" />
                  <span className="text-sm text-charcoal/70 font-body">{facing}</span>
                </div>
              ))}
            </div>

            <div className="space-y-2.5 border-t border-softgrey pt-6">
              <p className="text-xs uppercase tracking-[0.2em] text-taupe font-body mb-3">Features</p>
              {villa.features.map((feature) => (
                <div key={feature} className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-taupe mt-2" />
                  <span className="text-sm text-charcoal/70 font-body">{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href={`/contact?size=${encodeURIComponent(villa.plotSize)}`}
                className="inline-flex items-center gap-2 bg-charcoal text-white px-7 py-3 text-sm font-medium hover:bg-charcoal/85 transition-all duration-200"
              >
                Enquire About This Villa
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Thumbnail strip */}
        {images.length > 1 && (
          <div className="flex gap-3 mt-8 overflow-x-auto pb-2">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImageIndex(i)}
                className={`flex-shrink-0 w-20 h-16 relative overflow-hidden transition-all duration-200 ${
                  i === activeImageIndex ? 'ring-2 ring-charcoal' : 'opacity-50 hover:opacity-80'
                }`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="80px"
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
