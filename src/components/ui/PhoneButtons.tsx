'use client';

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { projectData } from '@/data/project';

interface PhoneButtonsProps {
  variant?: 'inline' | 'stacked' | 'compact' | 'light' | 'pills';
  className?: string;
  showLabels?: boolean;
}

export const PhoneButtons: React.FC<PhoneButtonsProps> = ({
  variant = 'inline',
  className = '',
  showLabels = true,
}) => {
  const { phone1, phone2 } = projectData;

  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        {/* Phone 1 */}
        <a
          href={phone1.tel}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gold hover:text-white border border-gold/40 hover:border-gold rounded transition-colors"
          title={`Call ${phone1.display}`}
        >
          <Phone className="w-3.5 h-3.5 text-gold" />
          <span>{phone1.display}</span>
        </a>
        <a
          href={phone1.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 text-emerald-400 hover:text-emerald-300 border border-emerald-500/40 hover:border-emerald-400 rounded transition-colors"
          title={`WhatsApp ${phone1.display}`}
        >
          <MessageCircle className="w-3.5 h-3.5" />
        </a>

        {/* Phone 2 */}
        <a
          href={phone2.tel}
          className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gold hover:text-white border border-gold/40 hover:border-gold rounded transition-colors"
          title={`Call ${phone2.display}`}
        >
          <Phone className="w-3.5 h-3.5 text-gold" />
          <span>{phone2.display}</span>
        </a>
        <a
          href={phone2.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex p-1.5 text-emerald-400 hover:text-emerald-300 border border-emerald-500/40 hover:border-emerald-400 rounded transition-colors"
          title={`WhatsApp ${phone2.display}`}
        >
          <MessageCircle className="w-3.5 h-3.5" />
        </a>
      </div>
    );
  }

  if (variant === 'pills') {
    return (
      <div className={`grid grid-cols-1 sm:grid-cols-2 gap-3 ${className}`}>
        {/* Phone 1 Card */}
        <div className="flex items-center justify-between p-3 rounded border border-gold/30 bg-forest/40 backdrop-blur-sm">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center text-gold">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-gold/80 font-medium">Sales Line 1</p>
              <a href={phone1.tel} className="text-sm font-semibold text-ivory hover:text-gold transition-colors">
                {phone1.display}
              </a>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <a
              href={phone1.tel}
              className="p-2 rounded bg-gold/15 text-gold hover:bg-gold hover:text-charcoal transition-colors"
              title="Call Sales Line 1"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href={phone1.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-colors"
              title="WhatsApp Sales Line 1"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Phone 2 Card */}
        <div className="flex items-center justify-between p-3 rounded border border-gold/30 bg-forest/40 backdrop-blur-sm">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center text-gold">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-gold/80 font-medium">Sales Line 2</p>
              <a href={phone2.tel} className="text-sm font-semibold text-ivory hover:text-gold transition-colors">
                {phone2.display}
              </a>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <a
              href={phone2.tel}
              className="p-2 rounded bg-gold/15 text-gold hover:bg-gold hover:text-charcoal transition-colors"
              title="Call Sales Line 2"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href={phone2.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-colors"
              title="WhatsApp Sales Line 2"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Default stacked / inline view
  return (
    <div className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-3 ${className}`}>
      {/* Phone 1 */}
      <div className="flex items-center gap-2">
        <a
          href={phone1.tel}
          className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded border border-gold text-gold hover:bg-gold hover:text-charcoal transition-all"
        >
          <Phone className="w-4 h-4" />
          <span>{phone1.display}</span>
        </a>
        <a
          href={phone1.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center p-2 text-emerald-400 border border-emerald-500/50 hover:bg-emerald-600 hover:text-white rounded transition-colors"
          title={`WhatsApp ${phone1.display}`}
        >
          <MessageCircle className="w-4 h-4" />
        </a>
      </div>

      {/* Phone 2 */}
      <div className="flex items-center gap-2">
        <a
          href={phone2.tel}
          className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded border border-gold text-gold hover:bg-gold hover:text-charcoal transition-all"
        >
          <Phone className="w-4 h-4" />
          <span>{phone2.display}</span>
        </a>
        <a
          href={phone2.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center p-2 text-emerald-400 border border-emerald-500/50 hover:bg-emerald-600 hover:text-white rounded transition-colors"
          title={`WhatsApp ${phone2.display}`}
        >
          <MessageCircle className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default PhoneButtons;
