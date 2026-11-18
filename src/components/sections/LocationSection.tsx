'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Compass,
  Plane,
  Train,
  GraduationCap,
  Building2,
  Briefcase,
  MapPin,
  ArrowRight,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { locationHighlights, nearbySchools } from '@/data/location';
import { projectData } from '@/data/project';

const ICON_MAP = {
  road: Compass,
  plane: Plane,
  train: Train,
  school: GraduationCap,
  building: Building2,
  briefcase: Briefcase,
};

export const LocationSection: React.FC = () => {
  return (
    <section className="py-24 bg-beige/30 text-charcoal border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="LOCATION &amp; CONNECTIVITY"
          title="At the Epicenter of South Hyderabad"
          subtitle="Tukkuguda (Mankhal) represents one of Hyderabad’s most strategically connected growth corridors — approx. 1.5 km to the Outer Ring Road and under 10 minutes to RGIA Airport."
          align="center"
          className="mb-16"
        />

        {/* Route Map Visual Feature */}
        <div className="mb-16 rounded-3xl overflow-hidden border border-gold/40 shadow-2xl bg-forest relative aspect-[16/9] max-w-5xl mx-auto">
          <Image
            src="/images/location/connectivity-route.jpg"
            alt="Thukkuguda Villas Direct Route to ORR and RGIA Airport"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-ivory">
            <div>
              <p className="text-xs uppercase tracking-widest text-gold font-bold">
                Aerial Highway Connectivity Route
              </p>
              <p className="font-heading text-lg sm:text-xl font-bold mt-1">
                Direct Airport Viewpoint Road Linkage to ORR Exit 14 &amp; Aerocity
              </p>
            </div>
            <Link
              href="/location"
              className="px-5 py-2.5 rounded-lg bg-gold text-charcoal font-semibold text-xs uppercase tracking-wider hover:bg-gold/90 transition-all self-start sm:self-auto flex items-center gap-1.5 shadow"
            >
              <span>Explore Landmark Distances</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 6 Official Connectivity Points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {locationHighlights.map((item, index) => {
            const Icon = ICON_MAP[item.icon] || MapPin;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="p-6 rounded-2xl bg-white border border-gold/30 shadow-sm hover:shadow-md hover:border-gold transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-forest/10 text-forest flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-forest text-gold text-xs font-bold">
                      {item.duration}
                    </span>
                  </div>
                  <h4 className="font-heading text-base font-semibold text-charcoal mb-1">
                    {item.title}
                  </h4>
                  {item.distance && (
                    <p className="text-xs text-gold font-semibold mb-2">
                      {item.distance}
                    </p>
                  )}
                  <p className="text-xs text-charcoal/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Nearby Educational Institutions Strip */}
        <div className="p-8 rounded-2xl bg-white border border-gold/30 shadow-sm max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-4 border-b border-gold/20 gap-2">
            <div>
              <span className="text-[11px] uppercase tracking-wider font-bold text-forest">
                Top International Schools Nearby
              </span>
              <p className="text-xs text-charcoal/70">
                World-class educational institutions within comfortable morning bus routes.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center">
            {nearbySchools.map((school) => (
              <div key={school.name} className="p-3 rounded-lg bg-forest/5 border border-forest/10">
                <p className="font-heading text-sm font-bold text-forest">{school.distance}</p>
                <p className="text-[11px] text-charcoal/80 font-medium mt-1 line-clamp-2">{school.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
