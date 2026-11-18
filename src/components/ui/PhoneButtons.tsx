'use client';

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { projectData } from '@/data/project';

interface PhoneButtonsProps {
  layout?: 'row' | 'column';
  size?: 'sm' | 'md';
  light?: boolean;
}

const PhoneButtons: React.FC<PhoneButtonsProps> = ({
  layout = 'row',
  size = 'md',
  light = false,
}) => {
  const { phone1, phone2 } = projectData;
  const phones = [phone1, phone2];

  const layoutClass = layout === 'row' ? 'flex-row flex-wrap' : 'flex-col';
  const textSize = size === 'sm' ? 'text-xs' : 'text-sm';
  const iconSize = size === 'sm' ? 'w-3 h-3' : 'w-3.5 h-3.5';

  return (
    <div className={`flex gap-3 ${layoutClass}`}>
      {phones.map((phone) => (
        <div key={phone.tel} className="flex items-center gap-2">
          <a
            href={phone.tel}
            className={`flex items-center gap-1.5 ${textSize} font-medium transition-colors duration-200 ${
              light ? 'text-white/70 hover:text-white' : 'text-charcoal/70 hover:text-charcoal'
            }`}
            title={`Call ${phone.display}`}
          >
            <Phone className={iconSize} />
            <span>{phone.display}</span>
          </a>
          <a
            href={phone.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-600 hover:text-emerald-500 transition-colors"
            title="WhatsApp"
            aria-label={`WhatsApp ${phone.display}`}
          >
            <MessageCircle className={iconSize} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default PhoneButtons;
