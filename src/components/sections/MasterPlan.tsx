'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ZoomIn, X } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const MasterPlan: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <section className="bg-stone/25 border-y border-softgrey/60 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text side */}
          <div>
            <SectionHeading
              eyebrow="Site Plan"
              title="23+ Acres of Thoughtful Planning"
              subtitle="A low-density layout with generous open spaces, forest zones, and wide roads — crafted for comfort, privacy, and community living."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-8">
              {[
                { label: 'Total Villas', value: '202 Luxury Units' },
                { label: 'Open Green Area', value: 'Three Forest Zones' },
                { label: 'Clubhouse', value: '1,986 Sq. Yds' },
                { label: 'Internal Roads', value: '40-ft & 60-ft Wide' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white border border-softgrey p-4 rounded-sm"
                >
                  <p className="text-sm font-semibold text-charcoal font-heading">{item.value}</p>
                  <p className="text-[11px] text-taupe uppercase tracking-widest mt-1 font-body">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Master plan image */}
          <div className="relative group">
            <div
              className="relative overflow-hidden cursor-pointer bg-white border border-softgrey p-3 rounded-sm shadow-xs group-hover:border-taupe/60 transition-all duration-300"
              onClick={() => setLightboxOpen(true)}
              role="button"
              aria-label="View full master plan"
            >
              <div className="aspect-[16/10] relative overflow-hidden bg-white">
                <Image
                  src="/images/master-plan/master-plan.jpg"
                  alt="Tukkuguda Villas Master Plan"
                  fill
                  className="object-contain group-hover:scale-[1.02] transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              
              {/* Interaction badge */}
              <div className="mt-3 pt-3 border-t border-softgrey/60 flex items-center justify-between text-xs text-charcoal/70 font-body">
                <span className="flex items-center gap-1.5 font-medium text-charcoal">
                  <ZoomIn className="w-3.5 h-3.5 text-taupe" />
                  <span>Tap to inspect layout</span>
                </span>
                <span className="text-[11px] text-taupe uppercase tracking-wider">High-Res Vector</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-5 right-5 p-2 bg-white/10 hover:bg-white/20 text-white rounded transition-all"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <div
            className="relative max-w-5xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src="/images/master-plan/master-plan.jpg"
              alt="Tukkuguda Villas Master Plan – Full View"
              width={1024}
              height={599}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default MasterPlan;
