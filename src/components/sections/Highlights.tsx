import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { projectData } from '@/data/project';

const featureDescriptions: Record<string, string> = {
  'Wide 40-ft & 60-ft Roads': 'Expansive internal roads providing ease of movement and an open, airy streetscape.',
  'Landscaped Avenues': 'Tree-lined pathways and curated green corridors throughout the community.',
  'Grand World-Class Clubhouse': 'A landmark clubhouse across 1,986 Sq. Yds offering premium recreational facilities.',
  'Large-format Tiles': 'Premium large-format flooring tiles for a refined, contemporary interior feel.',
  'Branded Fittings': 'Carefully selected branded fixtures and fittings across kitchens and bathrooms.',
  'Smart Villa Designs': 'Architecturally thoughtful floor plans designed for natural light and ventilation.',
  'Three Dense Forest Zones': 'Protected green buffers providing privacy, shade and a connection to nature.',
  'Low-Density Gated Living': '202 villas across 24 acres — generous space per home for genuine privacy.',
};

const Highlights: React.FC = () => {
  const { features } = projectData;

  return (
    <section className="bg-offwhite py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <SectionHeading
          eyebrow="Why Thukkuguda Villas"
          title="Designed for the Way You Live"
          subtitle="Every aspect of the master community is engineered with intention, prioritizing light, space, and enduring build quality."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-6">
          {features.map((feature, index) => (
            <div
              key={feature}
              className="bg-white border border-softgrey p-6 sm:p-7 flex flex-col justify-between hover:border-taupe/50 hover:shadow-sm transition-all duration-300 rounded-sm group"
            >
              <div>
                <div className="flex items-center justify-between border-b border-softgrey/60 pb-3 mb-4">
                  <span className="font-heading text-lg sm:text-xl font-semibold text-taupe group-hover:text-charcoal transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-softgrey group-hover:bg-taupe transition-colors" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-charcoal mb-2 leading-snug">
                  {feature}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal/60 leading-relaxed font-body">
                  {featureDescriptions[feature] || ''}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
