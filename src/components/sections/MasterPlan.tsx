'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Maximize2, Compass, Layers, Trees, Shield } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

export const MasterPlan: React.FC = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <section className="py-24 bg-forest text-ivory relative overflow-hidden border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="COMMUNITY LAYOUT"
          title="The 24-Acre Master Plan"
          subtitle="Engineered with 40-foot (12M) internal arterial avenues, a 1,986 Sq. Yds grand central clubhouse, and expansive green open space reserves (OSR)."
          align="center"
          light={true}
          className="mb-12"
        />

        {/* Master Plan Viewer Container */}
        <div className="relative rounded-3xl overflow-hidden border border-gold/40 shadow-2xl bg-black/50 backdrop-blur-md">
          {/* Action Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gold/20 bg-forest/90">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse" />
              <span className="text-xs uppercase tracking-wider font-semibold text-ivory">
                23.26 Acres · 199–202 Luxury Villa Plots · 12M Arterial Roadways
              </span>
            </div>
            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold border border-gold/50 text-gold hover:bg-gold hover:text-charcoal transition-colors"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>{isZoomed ? 'Reset View' : 'Zoom Plan'}</span>
            </button>
          </div>

          {/* Master Plan Map Graphic */}
          <div
            className={`relative w-full aspect-[16/10] overflow-hidden transition-all duration-300 ${
              isZoomed ? 'scale-125 cursor-zoom-out' : 'cursor-zoom-in'
            }`}
            onClick={() => setIsZoomed(!isZoomed)}
          >
            <Image
              src="/images/master-plan/master-plan.jpg"
              alt="Thukkuguda Villas 24-Acre Architectural Master Plan"
              fill
              className="object-contain p-2"
            />
          </div>

          {/* Key Legend Footer */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-forest/95 border-t border-gold/20 text-xs">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-gold flex-shrink-0" />
              <span>12M (40-Ft) Internal Roads</span>
            </div>
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-gold flex-shrink-0" />
              <span>267–445 Sq. Yds Plots</span>
            </div>
            <div className="flex items-center gap-2">
              <Trees className="w-4 h-4 text-gold flex-shrink-0" />
              <span>OSR Parks &amp; Forest Belts</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-gold flex-shrink-0" />
              <span>1,986 Sq. Yds Grand Clubhouse</span>
            </div>
          </div>
        </div>

        {/* Action Link */}
        <div className="text-center mt-8">
          <a
            href="#enquiry"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-gold text-charcoal font-semibold text-xs uppercase tracking-wider hover:bg-gold/90 transition-all shadow-xl"
          >
            Request High-Resolution Master Plan &amp; Plot Availability
          </a>
        </div>
      </div>
    </section>
  );
};

export default MasterPlan;
