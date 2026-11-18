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
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-softgrey">
          {features.map((feature, index) => (
            <div
              key={feature}
              className={`flex gap-5 py-7 px-2 ${
                index < features.length - 2 ? 'border-b border-softgrey' : ''
              } ${index % 2 === 0 ? 'md:border-r md:border-softgrey md:pr-8' : 'md:pl-8'}`}
            >
              {/* Number */}
              <span className="text-xs font-body text-taupe/60 mt-1 w-5 flex-shrink-0 font-medium">
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Content */}
              <div>
                <h3 className="font-body font-semibold text-charcoal text-sm mb-1.5">{feature}</h3>
                <p className="text-sm text-charcoal/50 leading-relaxed font-body">
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
