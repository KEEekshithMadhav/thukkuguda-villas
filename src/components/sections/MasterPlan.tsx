'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ZoomIn, X } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const MasterPlan: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <section className="bg-offwhite py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <div>
            <SectionHeading
              eyebrow="Site Plan"
              title="23+ Acres of Thoughtful Planning"
              subtitle="A low-density layout with generous open spaces, forest zones, and wide roads — crafted for comfort and community."
            />

            <div className="space-y-5 mt-6">
              {[
                { label: 'Total Villas', value: '202' },
                { label: 'Open Green Area', value: 'Three Forest Zones' },
                { label: 'Clubhouse', value: '1,986 Sq. Yds' },
                { label: 'Internal Roads', value: '40-ft & 60-ft Wide' },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between py-3 border-b border-softgrey">
                  <span className="text-sm text-charcoal/50 font-body">{item.label}</span>
                  <span className="text-sm font-medium text-charcoal font-body">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Master plan image */}
          <div className="relative group">
            <div
              className="relative overflow-hidden cursor-pointer"
              onClick={() => setLightboxOpen(true)}
              role="button"
              aria-label="View full master plan"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/master-plan/master-plan.jpg"
                  alt="Thukkuguda Villas Master Plan"
                  fill
                  className="object-contain bg-white"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white p-3 rounded">
                  <ZoomIn className="w-5 h-5 text-charcoal" />
                </div>
              </div>
            </div>
            <p className="text-xs text-taupe font-body mt-3 text-center">Click to view full plan</p>
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
              alt="Thukkuguda Villas Master Plan – Full View"
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
