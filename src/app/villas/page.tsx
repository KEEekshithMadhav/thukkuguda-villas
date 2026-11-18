import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Check, Phone, MessageCircle, ArrowRight, Maximize2, Shield } from 'lucide-react';
import { villaConfigurations } from '@/data/villas';
import { projectData } from '@/data/project';
import PhoneButtons from '@/components/ui/PhoneButtons';

export const metadata: Metadata = {
  title: 'Villa Configurations | Thukkuguda Villas – Hyderabad',
  description:
    'Explore the four exclusive villa sizes at Thukkuguda Villas: 267, 300, 350, and 400 Sq. Yds with built-up areas from 4,222 to 6,000 Sq. Ft.',
};

export default function VillasPage() {
  const { phone1, phone2 } = projectData;

  return (
    <div className="min-h-screen bg-ivory text-charcoal pt-24 font-body">
      {/* Page Header */}
      <section className="bg-forest text-ivory py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/hero/hero-bg.svg"
            alt="Villas Architectural Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">
            24 ACRES · 202 VILLAS
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold mt-2 mb-4 text-ivory">
            Villa Configurations
          </h1>
          <p className="text-base sm:text-lg text-ivory/80 max-w-2xl mx-auto leading-relaxed">
            Spacious plot dimensions ranging from 267 to 400 Sq. Yds with expansive built-up layouts, large-format tiles, and branded fittings.
          </p>
        </div>
      </section>

      {/* Villa Showcase Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {villaConfigurations.map((villa) => (
            <div
              key={villa.id}
              className="bg-white rounded-3xl overflow-hidden border border-gold/30 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Architectural Image */}
              <div className="relative aspect-[16/10] bg-forest">
                <Image
                  src={villa.image}
                  alt={`${villa.plotSize} Villa Architectural Elevation`}
                  fill
                  className="object-contain p-4"
                />
                <div className="absolute top-4 left-4 bg-forest/90 border border-gold/40 text-gold text-xs px-3 py-1 rounded font-semibold uppercase tracking-wider">
                  Plot {villa.plotSize}
                </div>
              </div>

              {/* Body */}
              <div className="p-8 space-y-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between border-b border-gold/20 pb-4 mb-4">
                    <div>
                      <h2 className="font-heading text-2xl sm:text-3xl font-bold text-forest">
                        {villa.plotSize}
                      </h2>
                      <p className="text-xs uppercase tracking-wider text-charcoal/60 mt-0.5">
                        Villa Plot Size
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-heading text-xl sm:text-2xl font-bold text-gold">
                        {villa.builtUpArea}
                      </p>
                      <p className="text-xs uppercase tracking-wider text-charcoal/60 mt-0.5">
                        Built-Up Area
                      </p>
                    </div>
                  </div>

                  {/* Facing Options */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {villa.facingOptions.map((opt) => (
                      <span key={opt} className="px-2.5 py-0.5 rounded-full bg-forest/10 text-forest text-[11px] font-semibold">
                        {opt}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <p className="text-xs uppercase font-semibold text-gold tracking-wider">
                      Included Project Specifications
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-charcoal/80">
                      {villa.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-forest flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-gold/15 flex flex-col sm:flex-row items-center gap-3">
                  <Link
                    href={`/contact?size=${encodeURIComponent(villa.plotSize)}`}
                    className="w-full sm:flex-1 py-3 px-4 rounded-lg bg-forest text-ivory text-xs font-semibold uppercase tracking-wider text-center hover:bg-forest/90 transition-all shadow"
                  >
                    Enquire for {villa.plotSize}
                  </Link>
                  <a
                    href={phone1.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto p-3 rounded-lg border border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white transition-colors flex items-center justify-center gap-2 text-xs font-semibold"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Highlights Banner */}
      <section className="bg-forest text-ivory py-16 border-y border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-heading text-3xl sm:text-4xl font-bold text-gold">24</p>
              <p className="text-xs uppercase tracking-wider text-ivory/80 mt-1">Total Acres</p>
            </div>
            <div>
              <p className="font-heading text-3xl sm:text-4xl font-bold text-gold">202</p>
              <p className="text-xs uppercase tracking-wider text-ivory/80 mt-1">Total Villas</p>
            </div>
            <div>
              <p className="font-heading text-3xl sm:text-4xl font-bold text-gold">40 Ft</p>
              <p className="text-xs uppercase tracking-wider text-ivory/80 mt-1">Wide Roads</p>
            </div>
            <div>
              <p className="font-heading text-3xl sm:text-4xl font-bold text-gold">Grand</p>
              <p className="text-xs uppercase tracking-wider text-ivory/80 mt-1">Clubhouse</p>
            </div>
          </div>
        </div>
      </section>

      {/* Immediate CTA */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-3xl p-10 sm:p-14 border border-gold/30 shadow-xl space-y-6">
          <h2 className="font-heading text-3xl font-bold text-forest">
            Ready to Schedule a Site Consultation?
          </h2>
          <p className="text-sm text-charcoal/70 max-w-xl mx-auto">
            Our on-site advisors are available seven days a week to guide you through plot orientations, road layouts, and villa dimensions.
          </p>
          <div className="pt-2 flex justify-center">
            <PhoneButtons variant="stacked" />
          </div>
        </div>
      </section>
    </div>
  );
}
