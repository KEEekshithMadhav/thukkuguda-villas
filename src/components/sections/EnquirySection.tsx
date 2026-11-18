'use client';

import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import EnquiryForm from '@/components/ui/EnquiryForm';
import PhoneButtons from '@/components/ui/PhoneButtons';
import { projectData } from '@/data/project';
import { MapPin, Clock, Shield } from 'lucide-react';

export const EnquirySection: React.FC = () => {
  return (
    <section id="enquiry" className="py-24 bg-forest text-ivory relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="SCHEDULE A SITE VISIT"
          title="Connect with Our Villa Advisors"
          subtitle="Submit your requirements below or reach our direct sales desk via phone or WhatsApp for personalized assistance."
          align="center"
          light={true}
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact & Office Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="font-heading text-2xl font-bold text-ivory mb-2">
                Priority Assistance
              </h3>
              <p className="text-sm text-ivory/70 leading-relaxed">
                Connect directly with our dedicated relationship managers for layout plans, plot availability, and personalized site tours.
              </p>
            </div>

            {/* Direct Phone Buttons with Calls & WhatsApp */}
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-gold font-semibold">
                Direct Sales Lines
              </span>
              <PhoneButtons variant="pills" />
            </div>

            {/* Project Address & Timings */}
            <div className="space-y-4 pt-4 border-t border-gold/20 text-xs text-ivory/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-ivory">Project Site</p>
                  <p>{projectData.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-ivory">Site Visit Timings</p>
                  <p>Monday – Sunday: 10:00 AM – 6:30 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Shield className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-ivory">Privacy Guaranteed</p>
                  <p>Your details are strictly kept confidential and used solely for direct communication.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Google Sheets Integrated Enquiry Form */}
          <div className="lg:col-span-7 bg-ivory rounded-3xl p-8 sm:p-10 border border-gold/40 shadow-2xl text-charcoal">
            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest text-forest font-bold">
                Direct Reservation Inquiry
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-forest mt-1">
                Register Your Interest
              </h3>
              <p className="text-xs text-charcoal/70 mt-1">
                Please complete the 5 required parameters below to register your consultation.
              </p>
            </div>

            <EnquiryForm variant="light" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquirySection;
