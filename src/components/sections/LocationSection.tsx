import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Plane, Train, Building2, GraduationCap, Briefcase, Circle, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { locationHighlights } from '@/data/location';

const iconMap: Record<string, React.ElementType> = {
  road: Circle,
  plane: Plane,
  train: Train,
  school: GraduationCap,
  building: Building2,
  briefcase: Briefcase,
};

const LocationSection: React.FC = () => {
  return (
    <section className="bg-offwhite py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Master Connectivity Map image */}
          <div className="relative rounded-2xl overflow-hidden border border-softgrey bg-white shadow-xs group">
            <div className="relative aspect-[16/10] overflow-hidden bg-stone">
              <Image
                src="/images/location/master-connectivity-map.jpg"
                alt="Thukkuguda Villas – Regional Connectivity and Travel Times Map"
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="p-4 bg-white border-t border-softgrey flex items-center justify-between text-xs text-charcoal/60 font-body">
              <span>High-Resolution Regional Transit Map</span>
              <span className="text-taupe font-medium">Tukkuguda · ORR · RGIA</span>
            </div>
          </div>

          {/* Connectivity details */}
          <div>
            <SectionHeading
              eyebrow="Location"
              title="Connected to Everything That Matters"
              subtitle="Tukkuguda (Mankhal) offers strategic positioning — close to the airport, the ring road, and major schools."
            />

            <div className="space-y-0 border-t border-softgrey mt-8">
              {locationHighlights.map((item) => {
                const Icon = iconMap[item.icon] || Circle;
                return (
                  <div
                    key={item.id}
                    className="flex items-start gap-5 py-5 border-b border-softgrey group hover:bg-white/60 -mx-2 px-2 transition-colors duration-200"
                  >
                    <div className="w-8 h-8 flex items-center justify-center rounded bg-stone group-hover:bg-softgrey transition-colors flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-taupe" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-body font-semibold text-sm text-charcoal">{item.title}</h3>
                        <span className="text-xs font-medium text-taupe whitespace-nowrap font-body flex-shrink-0">
                          {item.duration}
                        </span>
                      </div>
                      {item.distance && (
                        <p className="text-xs text-charcoal/40 font-body mt-0.5">{item.distance}</p>
                      )}
                      <p className="text-xs text-charcoal/50 font-body mt-1 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8">
              <Link
                href="/location"
                className="inline-flex items-center gap-2 text-sm font-medium text-charcoal hover:text-taupe transition-colors"
              >
                View Full Location Details <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
