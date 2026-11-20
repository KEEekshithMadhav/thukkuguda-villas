import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import EnquiryForm from '@/components/ui/EnquiryForm';
import { projectData } from '@/data/project';

const EnquirySection: React.FC = () => {
  const { phone1, phone2 } = projectData;

  return (
    <section className="bg-stone py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Left info panel */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            <SectionHeading
              eyebrow="Enquire"
              title="Let's Find Your Perfect Villa"
              subtitle="Share your requirements and our team will get back to you with detailed information."
            />

            <div className="mt-8 space-y-4">
              <p className="text-xs uppercase tracking-[0.2em] text-taupe font-body font-medium mb-3">Call or WhatsApp</p>

              {[phone1, phone2].map((phone) => (
                <div key={phone.tel} className="flex items-center justify-between py-3 border-b border-softgrey/60">
                  <a
                    href={phone.tel}
                    className="text-sm font-medium text-charcoal hover:text-taupe transition-colors flex items-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-taupe" />
                    {phone.display}
                  </a>
                  <a
                    href={phone.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-emerald-700 hover:text-emerald-600 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Form panel */}
          <div className="lg:col-span-3 bg-white p-8 md:p-10 border border-softgrey rounded-sm shadow-xs">
            <EnquiryForm variant="light" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquirySection;
