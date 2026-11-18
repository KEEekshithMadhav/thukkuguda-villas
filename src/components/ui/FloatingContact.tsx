'use client';

import React, { useState } from 'react';
import { Phone, MessageCircle, X, ChevronUp } from 'lucide-react';
import { projectData } from '@/data/project';

export const FloatingContact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { phone1, phone2 } = projectData;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 font-body">
      {/* Expanded Quick Contact Panel */}
      {isOpen && (
        <div className="bg-forest border border-gold/40 rounded-xl shadow-2xl p-4 w-72 text-ivory backdrop-blur-md animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-gold/20 mb-3">
            <div>
              <p className="font-heading text-sm font-semibold text-gold">Direct Enquiries</p>
              <p className="text-[11px] text-ivory/70">Connect with our sales team</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-ivory/60 hover:text-ivory rounded transition-colors"
              aria-label="Close contact options"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-3">
            {/* Phone 1 */}
            <div className="p-2.5 rounded-lg bg-black/25 border border-gold/20 space-y-1.5">
              <span className="text-[10px] uppercase font-semibold text-gold/90 tracking-wider">Line 1</span>
              <p className="text-xs font-medium text-ivory">{phone1.display}</p>
              <div className="flex items-center gap-2 pt-1">
                <a
                  href={phone1.tel}
                  className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded bg-gold text-charcoal text-xs font-semibold hover:bg-gold/90 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call</span>
                </a>
                <a
                  href={phone1.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-500 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Phone 2 */}
            <div className="p-2.5 rounded-lg bg-black/25 border border-gold/20 space-y-1.5">
              <span className="text-[10px] uppercase font-semibold text-gold/90 tracking-wider">Line 2</span>
              <p className="text-xs font-medium text-ivory">{phone2.display}</p>
              <div className="flex items-center gap-2 pt-1">
                <a
                  href={phone2.tel}
                  className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded bg-gold text-charcoal text-xs font-semibold hover:bg-gold/90 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call</span>
                </a>
                <a
                  href={phone2.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-500 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Buttons */}
      <div className="flex items-center gap-2">
        {/* Instant WhatsApp Quick Button */}
        <a
          href={phone1.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-emerald-600 text-white shadow-lg hover:bg-emerald-500 flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
          title="WhatsApp Enquiry"
          aria-label="WhatsApp Enquiry"
        >
          <MessageCircle className="w-6 h-6" />
        </a>

        {/* Master Call / Options Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="h-12 px-4 rounded-full bg-forest border border-gold text-gold shadow-lg hover:bg-forest/90 flex items-center gap-2 transition-transform hover:scale-105 active:scale-95"
          title="Contact Options"
          aria-label="Contact Options"
        >
          <Phone className="w-5 h-5" />
          <span className="text-xs font-semibold tracking-wider uppercase hidden sm:inline">Enquire</span>
          <ChevronUp className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>
    </div>
  );
};

export default FloatingContact;
