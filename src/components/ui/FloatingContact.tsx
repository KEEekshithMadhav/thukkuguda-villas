'use client';

import React, { useState } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';
import { projectData } from '@/data/project';

const FloatingContact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { phone1, phone2, phone3 } = projectData;

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-2">
      {/* Expanded panel */}
      {isOpen && (
        <div className="bg-white border border-softgrey shadow-lg rounded-lg p-4 w-64 mb-1">
          <p className="text-[10px] uppercase tracking-[0.2em] text-taupe font-medium mb-3">Get in Touch</p>

          {[phone1, phone2, phone3].map((phone, i) => (
            <div key={phone.tel} className={`flex items-center justify-between py-2 ${i < 2 ? 'border-b border-softgrey mb-2' : ''}`}>
              <a href={phone.tel} className="text-sm text-charcoal hover:text-taupe transition-colors font-medium">
                {phone.display}
              </a>
              <div className="flex gap-2">
                <a
                  href={phone.tel}
                  className="p-1.5 rounded bg-charcoal/5 text-charcoal hover:bg-charcoal hover:text-white transition-all"
                  title="Call"
                >
                  <Phone className="w-3 h-3" />
                </a>
                <a
                  href={phone.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded bg-emerald-50 text-emerald-600 hover:bg-emerald-500 hover:text-white transition-all"
                  title="WhatsApp"
                >
                  <MessageCircle className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* WhatsApp quick button */}
      {!isOpen && (
        <>
          {/* Desktop pill */}
          <a
            href={phone1.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-emerald-600 text-white px-4 py-2.5 rounded-full shadow-md hover:bg-emerald-500 transition-all duration-200 text-xs font-medium"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>

          {/* Mobile compact circle */}
          <a
            href={phone1.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden flex items-center justify-center w-11 h-11 bg-emerald-600 text-white rounded-full shadow-md hover:bg-emerald-500 transition-all duration-200"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
        </>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full shadow-md transition-all duration-300 bg-charcoal text-white hover:bg-charcoal/85"
        aria-label={isOpen ? 'Close contact panel' : 'Open contact panel'}
      >
        {isOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Phone className="w-4 h-4 sm:w-5 sm:h-5" />}
      </button>
    </div>
  );
};

export default FloatingContact;
