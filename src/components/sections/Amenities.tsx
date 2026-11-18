import React from 'react';
import { Trees, Dumbbell, Waves, Car, Shield, Bike, Coffee, Wifi } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const amenities = [
  { icon: Trees, name: 'Forest Green Zones', desc: 'Three protected dense forest buffers' },
  { icon: Dumbbell, name: 'Grand Clubhouse', desc: '1,986 Sq. Yds of premium recreational space' },
  { icon: Waves, name: 'Swimming Pool', desc: 'Full-size pool within the clubhouse complex' },
  { icon: Car, name: 'Wide Roads', desc: '40-ft and 60-ft internal roads throughout' },
  { icon: Shield, name: 'Gated Security', desc: '24/7 manned security with CCTV surveillance' },
  { icon: Bike, name: 'Landscaped Avenues', desc: 'Tree-lined walkways and green corridors' },
  { icon: Coffee, name: 'Community Spaces', desc: 'Dedicated areas for social gatherings' },
  { icon: Wifi, name: 'Smart Infrastructure', desc: 'Modern utility and connectivity provisions' },
];

const Amenities: React.FC = () => {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left column – heading */}
          <div className="lg:col-span-1">
            <SectionHeading
              eyebrow="Community"
              title="Amenities & Features"
              subtitle="Curated facilities that complement the quality of your home."
            />
          </div>

          {/* Right columns – amenities grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-0 border-t border-l border-softgrey">
            {amenities.map((amenity) => {
              const Icon = amenity.icon;
              return (
                <div
                  key={amenity.name}
                  className="p-6 border-b border-r border-softgrey group hover:bg-offwhite transition-colors duration-200"
                >
                  <Icon className="w-5 h-5 text-taupe mb-3" />
                  <h3 className="font-body font-semibold text-charcoal text-sm mb-1">{amenity.name}</h3>
                  <p className="text-xs text-charcoal/50 font-body leading-relaxed">{amenity.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
