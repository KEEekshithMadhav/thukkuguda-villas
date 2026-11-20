import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Plane,
  Train,
  GraduationCap,
  Building2,
  Briefcase,
  MapPin,
  Circle,
} from 'lucide-react';
import { locationHighlights } from '@/data/location';
import { projectData } from '@/data/project';
import PhoneButtons from '@/components/ui/PhoneButtons';

export const metadata: Metadata = {
  title: 'Location & Connectivity | Tukkuguda Villas – South Hyderabad',
  description:
    'Strategically situated in Tukkuguda (Mankhal), South Hyderabad. 5 minutes to ORR, 10 minutes to RGIA Airport, 5 minutes to Metro Station, and close to international schools.',
};

const ICON_MAP: Record<string, React.ElementType> = {
  road: Circle,
  plane: Plane,
  train: Train,
  school: GraduationCap,
  building: Building2,
  briefcase: Briefcase,
};

export default function LocationPage() {
  return (
    <div className="min-h-screen bg-offwhite text-charcoal pt-16 font-body">
      {/* Page Header */}
      <section className="bg-white border-b border-softgrey py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <span className="text-xs uppercase tracking-[0.25em] text-taupe font-medium">
            Strategic Location
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-semibold mt-3 mb-4 text-charcoal">
            Location & Connectivity
          </h1>
          <p className="text-base sm:text-lg text-charcoal/50 max-w-2xl leading-relaxed font-body">
            Tukkuguda (Mankhal), South Hyderabad — connected to major highways, international
            airport, schools, and business hubs.
          </p>
        </div>
      </section>

      {/* Master Connectivity Map */}
      <section className="pt-16 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="rounded-2xl overflow-hidden border border-softgrey bg-white shadow-sm">
          <div className="relative aspect-[2/1] overflow-hidden bg-stone">
            <Image
              src="/images/location/master-connectivity-map.jpg"
              alt="Tukkuguda Villas – Comprehensive Regional Connectivity & Travel Times Map"
              fill
              className="object-contain sm:object-cover"
              sizes="100vw"
              priority
            />
          </div>
          <div className="p-4 sm:p-5 bg-white border-t border-softgrey flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-charcoal/60 font-body">
            <span className="font-medium text-charcoal">
              Connected to Everything That Matters — Regional Infrastructure Map
            </span>
            <span className="text-taupe font-medium">
              Outer Ring Road (ORR) · RGIA Airport · WTC · Financial District
            </span>
          </div>
        </div>
      </section>

      {/* Connectivity Highlights */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-taupe font-medium">Travel Times & Key Hubs</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-charcoal mt-3">
            Seamless Regional Access
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-softgrey">
          {locationHighlights.map((item) => {
            const Icon = ICON_MAP[item.icon] || Circle;
            return (
              <div
                key={item.id}
                className="p-7 border-b border-r border-softgrey hover:bg-white transition-colors duration-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-9 h-9 flex items-center justify-center bg-stone">
                    <Icon className="w-4 h-4 text-taupe" />
                  </div>
                  <span className="text-xs font-medium text-taupe font-body border border-softgrey px-2.5 py-1">
                    {item.duration}
                  </span>
                </div>
                <h3 className="font-body font-semibold text-sm text-charcoal mb-2">{item.title}</h3>
                {item.distance && (
                  <p className="text-xs text-charcoal/40 font-body mb-1">{item.distance}</p>
                )}
                <p className="text-xs text-charcoal/50 font-body leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* South Hyderabad Narrative */}
      <section className="py-20 bg-stone border-y border-softgrey">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-taupe font-medium">The Growth Corridor</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-charcoal">
                Why Tukkuguda, South Hyderabad?
              </h2>
              <div className="space-y-4 text-sm text-charcoal/60 leading-relaxed font-body">
                <p>
                  South Hyderabad has evolved into one of the state&apos;s fastest-growing residential
                  corridors. With immediate access to the 8-lane Outer Ring Road, residents benefit
                  from direct, signal-free transit to RGIA Airport and the Financial District.
                </p>
                <p>
                  The micro-market around Tukkuguda and Mankhal offers low-density, high-quality
                  living while maintaining proximity to international schools including DPS,
                  Aga Khan Academy, Sloka, and Manchester International.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 bg-charcoal text-white text-sm font-medium hover:bg-charcoal/85 transition-all"
              >
                Schedule Site Tour
              </Link>
            </div>

            <div className="bg-white border border-softgrey p-8 space-y-6">
              <div className="flex items-center gap-2 text-taupe">
                <MapPin className="w-4 h-4" />
                <span className="text-xs uppercase tracking-[0.2em] font-medium">Address</span>
              </div>
              <h3 className="font-heading text-2xl font-semibold text-charcoal">
                {projectData.name}
              </h3>
              <p className="text-sm text-charcoal/50 font-body leading-relaxed">{projectData.address}</p>
              <div className="pt-5 border-t border-softgrey">
                <p className="text-[11px] uppercase tracking-[0.2em] text-taupe font-medium mb-4">Contact</p>
                <PhoneButtons layout="column" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
