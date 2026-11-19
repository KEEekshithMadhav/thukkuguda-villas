import type { Metadata } from 'next';
import { MessageCircle, MapPin, Clock, Shield } from 'lucide-react';
import EnquiryForm from '@/components/ui/EnquiryForm';
import PhoneButtons from '@/components/ui/PhoneButtons';
import { projectData } from '@/data/project';

export const metadata: Metadata = {
  title: 'Contact Sales & Site Visits | Thukkuguda Villas – Hyderabad',
  description:
    'Connect with the Thukkuguda Villas sales desk. Call +91 98858 58529 or +91 85858 54853, WhatsApp our relationship managers, or submit an enquiry.',
};

interface ContactPageProps {
  searchParams?: { size?: string };
}

export default function ContactPage({ searchParams }: ContactPageProps) {
  const { phone1, phone2, address } = projectData;
  const initialVillaSize = searchParams?.size;

  return (
    <div className="min-h-screen bg-offwhite text-charcoal pt-16 font-body">
      {/* Page Header */}
      <section className="bg-white border-b border-softgrey py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <span className="text-xs uppercase tracking-[0.25em] text-taupe font-medium">
            Get in Touch
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-semibold mt-3 mb-4 text-charcoal">
            Contact & Site Visits
          </h1>
          <p className="text-base sm:text-lg text-charcoal/50 max-w-2xl leading-relaxed font-body">
            Our sales team is available Monday through Sunday to arrange site visits and
            provide detailed project documentation.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

          {/* Left Column: Direct Contact */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-heading text-2xl font-semibold text-charcoal">Reach Us Directly</h2>
              <p className="text-sm text-charcoal/50 mt-2 font-body leading-relaxed">
                For immediate assistance, connect via phone or WhatsApp.
              </p>
            </div>

            <div>
              <PhoneButtons layout="column" />
            </div>

            {/* Info cards */}
            <div className="bg-white border border-softgrey p-6 space-y-5">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-4 h-4 text-taupe flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-body font-semibold text-sm text-charcoal">Site Location</h4>
                  <p className="text-xs text-charcoal/50 mt-1 leading-relaxed font-body">{address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-5 border-t border-softgrey">
                <Clock className="w-4 h-4 text-taupe flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-body font-semibold text-sm text-charcoal">Working Hours</h4>
                  <p className="text-xs text-charcoal/50 mt-1 font-body">Monday to Sunday: 10:00 AM – 6:30 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-5 border-t border-softgrey">
                <Shield className="w-4 h-4 text-taupe flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-body font-semibold text-sm text-charcoal">Privacy Assured</h4>
                  <p className="text-xs text-charcoal/50 mt-1 font-body">
                    Your information is handled exclusively by our internal team and never shared.
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp buttons */}
            <div className="space-y-3">
              <p className="text-[11px] uppercase tracking-[0.2em] text-taupe font-body font-medium">Quick WhatsApp</p>
              {[phone1, phone2].map((phone) => (
                <a
                  key={phone.tel}
                  href={phone.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 border border-emerald-200/80 bg-emerald-50/60 hover:bg-emerald-100/60 rounded-sm transition-colors text-emerald-900 text-sm font-medium shadow-2xs"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>{phone.display} (Direct Chat)</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Enquiry Form */}
          <div className="lg:col-span-3 bg-white border border-softgrey p-8 sm:p-10 rounded-sm shadow-xs">
            <div className="mb-8">
              <span className="text-[11px] uppercase tracking-[0.2em] text-taupe font-body font-medium">
                Online Enquiry
              </span>
              <h2 className="font-heading text-2xl font-semibold text-charcoal mt-2">
                Register Your Interest
              </h2>
              <p className="text-xs text-charcoal/50 mt-1 font-body">
                Complete the form below and we will contact you at the earliest.
              </p>
            </div>
            <EnquiryForm variant="light" initialVillaSize={initialVillaSize} />
          </div>
        </div>
      </section>
    </div>
  );
}
