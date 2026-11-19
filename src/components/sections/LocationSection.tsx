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
          {/* Master Connectivity Map column */}
          <div className="lg:sticky lg:top-28 space-y-5">
            <div className="relative rounded-xl overflow-hidden border border-softgrey bg-white shadow-sm group">
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
              <div className="p-4 bg-white border-t border-softgrey flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 text-xs text-charcoal/60 font-body">
                <span className="font-medium text-charcoal">High-Resolution Regional Transit Map</span>
                <span className="text-taupe font-medium">Tukkuguda · ORR · RGIA</span>
              </div>
            </div>

            {/* Quick travel summary cards */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
              {[
                { title: 'ORR Exit-14', time: '5 Mins', note: '1.5 km to ORR' },
                { title: 'RGIA Airport', time: '10 Mins', note: '9.7 km direct' },
                { title: 'IT Corridor', time: '28 Mins', note: 'Financial District' },
              ].map((card) => (
                <div key={card.title} className="bg-white border border-softgrey p-3 rounded-sm text-center">
                  <p className="text-xs sm:text-sm font-semibold text-charcoal font-heading">{card.time}</p>
                  <p className="text-[10px] uppercase tracking-wider text-taupe font-medium mt-0.5">{card.title}</p>
                </div>
              ))}
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
