import type { Metadata } from 'next';
import Link from 'next/link';
import { projectData } from '@/data/project';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Thukkuguda Villas',
  description: 'Terms and Conditions for Thukkuguda Villas informational website.',
};

export default function TermsPage() {
  const { phone1, phone2 } = projectData;

  return (
    <div className="min-h-screen bg-ivory text-charcoal pt-24 font-body">
      <section className="bg-forest text-ivory py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold">Terms &amp; Conditions</h1>
          <p className="text-xs uppercase tracking-widest text-gold mt-2">
            Thukkuguda Villas · Last Updated: November 2024
          </p>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate">
        <div className="space-y-8 text-sm sm:text-base text-charcoal/80 leading-relaxed">
          <div>
            <h2 className="font-heading text-2xl font-bold text-forest mb-3">
              1. Informational Purpose Only
            </h2>
            <p>
              The contents of this website, including architectural illustrations, master plans, plot sizes (267–400 Sq. Yds), and built-up areas, are conceptual in nature and presented for general informational purposes only. This website does not constitute a formal legal offer, binding contract, or warranty of any kind.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-forest mb-3">
              2. Architectural &amp; Dimensional Specifications
            </h2>
            <p>
              All dimensions, areas, drawings, schematics, landscape features, and specifications are subject to refinement and final architectural sanctions. Final dimensions and terms are strictly governed by the definitive bilateral agreement executed between the parties.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-forest mb-3">
              3. Enquiry Submissions
            </h2>
            <p>
              Submitting an enquiry via our website forms or reaching out via phone or WhatsApp does not constitute an allotment or booking of any villa or plot within Thukkuguda Villas. Allotments are subject to availability, verification, and standard formal execution processes.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-forest mb-3">
              4. Intellectual Property
            </h2>
            <p>
              The design system, graphics, text, layout schematics, brand assets, and custom illustrations displayed on this website are protected under applicable intellectual property laws and may not be reproduced without prior written permission.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-forest mb-3">
              5. Contact Us
            </h2>
            <p>
              For legal clarifications, documentation review, or inquiries regarding these terms:
            </p>
            <div className="mt-3 p-4 rounded-xl bg-forest/5 border border-forest/15 space-y-1 text-sm font-medium">
              <p>Phone Line 1: <a href={phone1.tel} className="text-forest underline">{phone1.display}</a></p>
              <p>Phone Line 2: <a href={phone2.tel} className="text-forest underline">{phone2.display}</a></p>
              <p>Location: Tukkuguda (Mankhal), South Hyderabad, Telangana, India</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gold/30">
          <Link href="/" className="text-forest font-semibold text-sm hover:text-gold transition-colors">
            ← Return to Homepage
          </Link>
        </div>
      </section>
    </div>
  );
}
