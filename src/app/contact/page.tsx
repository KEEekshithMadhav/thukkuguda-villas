import type { Metadata } from 'next';
import { Phone, MessageCircle, MapPin, Clock, Shield } from 'lucide-react';
import EnquiryForm from '@/components/ui/EnquiryForm';
import PhoneButtons from '@/components/ui/PhoneButtons';
import { projectData } from '@/data/project';

export const metadata: Metadata = {
  title: 'Contact Sales & Site Visits | Thukkuguda Villas – Hyderabad',
  description:
    'Connect with the Thukkuguda Villas sales desk. Call +91 98858 58529 or +91 85858 54853, WhatsApp our relationship managers, or submit an enquiry.',
};

export default function ContactPage() {
  const { phone1, phone2, address } = projectData;

  return (
    <div className="min-h-screen bg-ivory text-charcoal pt-24 font-body">
      {/* Page Header */}
      <section className="bg-forest text-ivory py-20 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">
            GET IN TOUCH
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold mt-2 mb-4 text-ivory">
            Contact &amp; Site Visits
          </h1>
          <p className="text-base sm:text-lg text-ivory/80 max-w-2xl mx-auto leading-relaxed">
            Our dedicated client relationship managers are available seven days a week to provide complete project documentation and arrange personalized tours.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-gold font-bold">
                Direct Communication
              </span>
              <h2 className="font-heading text-3xl font-bold text-forest mt-1">
                Reach Us Directly
              </h2>
              <p className="text-sm text-charcoal/70 mt-2">
                For prompt replies, connect directly via phone call or WhatsApp message.
              </p>
            </div>

            {/* Phone Buttons */}
            <div className="space-y-4">
              <PhoneButtons variant="pills" />
            </div>

            {/* Address & Operational Hours */}
            <div className="p-8 rounded-3xl bg-white border border-gold/30 shadow-md space-y-6">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-forest flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading text-base font-bold text-charcoal">
                    Site &amp; Marketing Office
                  </h4>
                  <p className="text-xs sm:text-sm text-charcoal/70 mt-1 leading-relaxed">
                    {address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-4 border-t border-gold/20">
                <Clock className="w-5 h-5 text-forest flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading text-base font-bold text-charcoal">
                    Working Hours
                  </h4>
                  <p className="text-xs sm:text-sm text-charcoal/70 mt-1">
                    Monday to Sunday: 10:00 AM – 6:30 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-4 border-t border-gold/20">
                <Shield className="w-5 h-5 text-forest flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading text-base font-bold text-charcoal">
                    Data Privacy Guarantee
                  </h4>
                  <p className="text-xs sm:text-sm text-charcoal/70 mt-1">
                    Your contact information is strictly handled by our internal team and will never be shared with third parties.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Google Sheets Integrated Enquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-gold/40 shadow-xl">
            <div className="mb-8">
              <span className="text-xs uppercase tracking-widest text-gold font-bold">
                Online Reservation Form
              </span>
              <h2 className="font-heading text-3xl font-bold text-forest mt-1">
                Register Your Enquiry
              </h2>
              <p className="text-xs sm:text-sm text-charcoal/70 mt-1">
                Fill in the 5 parameters below to record your inquiry directly with our advisory desk.
              </p>
            </div>

            <EnquiryForm variant="light" />
          </div>
        </div>
      </section>
    </div>
  );
}
