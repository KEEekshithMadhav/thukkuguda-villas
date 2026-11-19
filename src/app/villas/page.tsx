import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle, Check } from 'lucide-react';
import { villaConfigurations } from '@/data/villas';
import { projectData } from '@/data/project';
import PhoneButtons from '@/components/ui/PhoneButtons';

export const metadata: Metadata = {
  title: 'Villa Configurations | Thukkuguda Villas – Hyderabad',
  description:
    'Explore the four exclusive villa sizes at Thukkuguda Villas: 267, 300, 350, and 400 Sq. Yds with built-up areas from 4,222 to 6,000 Sq. Ft.',
};

export default function VillasPage() {
  const { phone1 } = projectData;

  return (
    <div className="min-h-screen bg-offwhite text-charcoal pt-16 font-body">
      {/* Page Header */}
      <section className="bg-white border-b border-softgrey py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <span className="text-xs uppercase tracking-[0.25em] text-taupe font-medium">
            24 Acres · 202 Villas
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-semibold mt-3 mb-4 text-charcoal">
            Villa Configurations
          </h1>
          <p className="text-base sm:text-lg text-charcoal/50 max-w-2xl leading-relaxed font-body">
            Four thoughtfully proportioned villa sizes — 267 to 400 Sq. Yds — with built-up
            areas from 4,222 to 6,000 Sq. Ft., large-format tiles, and branded fittings.
          </p>
        </div>
      </section>

      {/* Villa Showcase Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {villaConfigurations.map((villa) => (
            <div
              key={villa.id}
              id={villa.id}
              className="bg-white overflow-hidden border border-softgrey hover:border-charcoal/20 transition-all duration-300"
            >
              {/* Architectural Image */}
              <div className="relative aspect-[16/9] bg-stone">
                <Image
                  src={villa.image}
                  alt={`${villa.plotSize} Villa Architectural Elevation`}
                  fill
                  className="object-contain p-3"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Body */}
              <div className="p-7 space-y-6">
                <div>
                  <div className="flex items-baseline justify-between border-b border-softgrey pb-4 mb-4">
                    <div>
                      <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-charcoal">
                        {villa.plotSize}
                      </h2>
                      <p className="text-xs uppercase tracking-widest text-taupe mt-0.5 font-body">
                        Plot Size
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-heading text-xl sm:text-2xl font-semibold text-charcoal">
                        {villa.builtUpArea}
                      </p>
                      <p className="text-xs uppercase tracking-widest text-taupe mt-0.5 font-body">
                        Built-Up Area
                      </p>
                    </div>
                  </div>

                  {/* Facing Options */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {villa.facingOptions.map((opt) => (
                      <span
                        key={opt}
                        className="px-2.5 py-1 border border-softgrey text-charcoal/60 text-[11px] font-body"
                      >
                        {opt}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-taupe font-body font-medium">
                      Specifications
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-charcoal/60 font-body">
                      {villa.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <Check className="w-3 h-3 text-taupe flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-softgrey flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <Link
                    href={`/contact?size=${encodeURIComponent(villa.plotSize)}`}
                    className="flex-1 h-11 inline-flex items-center justify-center px-4 bg-charcoal text-white text-xs uppercase tracking-wider font-medium hover:bg-charcoal/85 transition-all rounded-sm shadow-xs"
                  >
                    Enquire – {villa.plotSize}
                  </Link>
                  <a
                    href={phone1.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-11 inline-flex items-center justify-center gap-2 px-5 border border-emerald-300 bg-emerald-50/50 text-emerald-700 hover:bg-emerald-100/60 transition-colors text-xs font-medium rounded-sm"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-charcoal text-white py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '24 Acres', label: 'Total Area' },
              { value: '202', label: 'Premium Villas' },
              { value: '40-ft', label: 'Wide Roads' },
              { value: 'Grand', label: 'Clubhouse' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-3xl sm:text-4xl font-semibold text-white">{stat.value}</p>
                <p className="text-xs uppercase tracking-widest text-white/40 mt-1 font-body">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 max-w-4xl mx-auto px-6 md:px-12 lg:px-16 text-center">
        <div className="bg-white border border-softgrey p-10 sm:p-14 space-y-6">
          <h2 className="font-heading text-3xl font-semibold text-charcoal">
            Schedule a Site Visit
          </h2>
          <p className="text-sm text-charcoal/50 max-w-xl mx-auto font-body">
            Our site advisors are available seven days a week to show you plot orientations,
            road layouts, and villa dimensions in person.
          </p>
          <div className="pt-2 flex justify-center">
            <PhoneButtons layout="row" />
          </div>
        </div>
      </section>
    </div>
  );
}
