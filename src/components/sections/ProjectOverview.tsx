import React from 'react';
import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';
import { projectData } from '@/data/project';

const ProjectOverview: React.FC = () => {
  const { totalArea, totalVillas } = projectData;

  const details = [
    { label: 'Total Area', value: totalArea },
    { label: 'Total Villas', value: `${totalVillas} Villas` },
    { label: 'Villa Sizes', value: '267 – 400 Sq.Yds' },
    { label: 'Roads', value: 'Wide 40-ft Roads' },
  ];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image side */}
          <div className="relative">
            <div className="aspect-[4/5] relative overflow-hidden bg-stone border border-softgrey shadow-sm">
              <Image
                src="/images/villas/villa-350-ef-01.jpg"
                alt="Thukkuguda Villas Overview"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating detail card */}
            <div className="absolute -bottom-4 right-3 sm:-bottom-6 sm:-right-6 md:-right-8 bg-white border border-softgrey p-5 sm:p-6 w-40 sm:w-48 shadow-lg z-10">
              <p className="text-2xl sm:text-3xl font-heading font-semibold text-charcoal">{totalArea}</p>
              <p className="text-[10px] sm:text-xs text-taupe uppercase tracking-widest mt-1 font-body">Total Development</p>
            </div>
          </div>

          {/* Text side */}
          <div className="lg:pl-6">
            <SectionHeading
              eyebrow="The Project"
              title="A New Standard of Gated Living"
              subtitle="Thukkuguda Villas is a thoughtfully planned premium gated community in South Hyderabad, designed for families who value space, privacy, and architectural quality."
            />

            <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-10">
              {details.map((item) => (
                <div
                  key={item.label}
                  className="bg-offwhite/60 border border-softgrey/70 p-4 sm:p-5 rounded-sm hover:border-taupe/40 transition-colors"
                >
                  <p className="text-xl sm:text-2xl font-heading font-semibold text-charcoal">{item.value}</p>
                  <p className="text-[10px] sm:text-xs text-taupe uppercase tracking-widest mt-1.5 font-body">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-softgrey">
              <p className="text-sm text-charcoal/60 font-body leading-relaxed">
                Strategically located minutes from ORR, the International Airport, and major schools —
                Thukkuguda Villas offers exceptional connectivity while maintaining the tranquility
                of a low-density gated community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
