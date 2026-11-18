import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Compass,
  Plane,
  Train,
  GraduationCap,
  Building2,
  Briefcase,
  MapPin,
  Clock,
  Phone,
  MessageCircle,
} from 'lucide-react';
import { locationHighlights } from '@/data/location';
import { projectData } from '@/data/project';
import PhoneButtons from '@/components/ui/PhoneButtons';

export const metadata: Metadata = {
  title: 'Location & Connectivity | Thukkuguda Villas – South Hyderabad',
  description:
    'Strategically situated in Tukkuguda (Mankhal), South Hyderabad. 5 minutes to ORR, 10 minutes to RGIA Airport, 5 minutes to Metro Station, and close to international schools.',
};

const ICON_MAP = {
  road: Compass,
  plane: Plane,
  train: Train,
  school: GraduationCap,
  building: Building2,
  briefcase: Briefcase,
};

export default function LocationPage() {
  const { phone1, phone2 } = projectData;

  return (
    <div className="min-h-screen bg-ivory text-charcoal pt-24 font-body">
      {/* Page Header */}
      <section className="bg-forest text-ivory py-20 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">
            STRATEGIC LOCATION
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold mt-2 mb-4 text-ivory">
            Location &amp; Connectivity
          </h1>
          <p className="text-base sm:text-lg text-ivory/80 max-w-2xl mx-auto leading-relaxed">
            Positioned at Tukkuguda (Mankhal) in South Hyderabad — connected to major highways, air transit, educational institutions, and employment zones.
          </p>
        </div>
      </section>

      {/* Connectivity Highlights Cards */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-gold font-bold">
            Travel Times &amp; Key Hubs
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-forest mt-1">
            Seamless Regional Access
          </h2>
          <p className="text-sm text-charcoal/70 max-w-xl mx-auto mt-2">
            Every destination is within swift driving distance via the Outer Ring Road network.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locationHighlights.map((item) => {
            const Icon = ICON_MAP[item.icon] || MapPin;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-8 border border-gold/30 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-forest/10 text-forest flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3.5 py-1.5 rounded-full bg-forest text-gold font-bold text-xs">
                      {item.duration}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-charcoal mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* South Hyderabad Corridor Narrative */}
      <section className="py-20 bg-beige/40 border-y border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-forest font-bold">
                The Growth Corridor
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-forest">
                Why Tukkuguda, South Hyderabad?
              </h2>
              <div className="space-y-4 text-sm text-charcoal/80 leading-relaxed">
                <p>
                  South Hyderabad has evolved into one of the state’s fastest-growing residential and institutional corridors. With immediate access to the 8-lane Outer Ring Road, residents benefit from direct, signal-free transit to RGIA Airport and the Financial District.
                </p>
                <p>
                  The micro-market around Tukkuguda and Mankhal offers low-density, high-air-quality living while maintaining proximity to international schools such as DPS, Aga Khan Academy, Sloka, and Manchester International.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-forest text-ivory text-xs font-semibold uppercase tracking-wider hover:bg-forest/90 transition-all shadow-md"
                >
                  Schedule Guided Site Tour
                </Link>
              </div>
            </div>

            {/* Address & Quick Overview */}
            <div className="lg:col-span-6 bg-forest text-ivory rounded-3xl p-8 sm:p-12 border border-gold/40 shadow-2xl space-y-6">
              <div className="flex items-center gap-2 text-gold">
                <MapPin className="w-5 h-5" />
                <span className="text-xs uppercase tracking-widest font-bold">Exact Address</span>
              </div>

              <h3 className="font-heading text-2xl font-bold text-ivory">
                {projectData.name}
              </h3>
              <p className="text-sm text-ivory/80 leading-relaxed">
                {projectData.address}
              </p>

              <div className="space-y-3 pt-4 border-t border-gold/20">
                <p className="text-xs uppercase tracking-wider text-gold font-semibold">
                  Direct Inquiries
                </p>
                <PhoneButtons variant="pills" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
