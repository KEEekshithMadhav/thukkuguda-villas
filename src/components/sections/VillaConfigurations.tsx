import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { villaConfigurations } from '@/data/villas';

const VillaConfigurations: React.FC = () => {
  return (
    <section className="bg-stone py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <SectionHeading
            eyebrow="Villa Types"
            title="Four Configurations, One Standard of Excellence"
          />
          <Link
            href="/villas"
            className="inline-flex items-center gap-2 text-sm font-medium text-charcoal hover:text-taupe transition-colors whitespace-nowrap mb-4"
          >
            View All Villas <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {villaConfigurations.map((villa) => (
            <div key={villa.id} className="group bg-white overflow-hidden">
              {/* Image */}
              <div className="aspect-[3/4] relative overflow-hidden">
                <Image
                  src={villa.image}
                  alt={`${villa.plotSize} Villa`}
                  fill
                  className="object-cover group-hover:scale-103 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Info */}
              <div className="p-5 border-b border-softgrey">
                <p className="text-xs text-taupe uppercase tracking-widest font-body mb-1">Plot Size</p>
                <h3 className="font-heading text-2xl font-semibold text-charcoal">{villa.plotSize}</h3>
                <div className="mt-3 pt-3 border-t border-softgrey">
                  <p className="text-xs text-charcoal/50 uppercase tracking-widest font-body">Built-Up Area</p>
                  <p className="text-sm font-medium text-charcoal mt-0.5">{villa.builtUpArea}</p>
                </div>
              </div>

              {/* CTA */}
              <div className="px-5 py-3">
                <Link
                  href={`/villas#${villa.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-charcoal/60 hover:text-charcoal transition-colors"
                >
                  Explore <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VillaConfigurations;
