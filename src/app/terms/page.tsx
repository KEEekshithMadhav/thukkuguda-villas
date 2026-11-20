import type { Metadata } from 'next';
import Link from 'next/link';
import { projectData } from '@/data/project';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Tukkuguda Villas',
  description: 'Terms and Conditions for Tukkuguda Villas informational website.',
};

export default function TermsPage() {
  const { phone1, phone2, phone3 } = projectData;

  return (
    <div className="min-h-screen bg-offwhite text-charcoal pt-16 font-body">
      <section className="bg-white border-b border-softgrey py-12">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16">
          <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-charcoal">Terms & Conditions</h1>
          <p className="text-xs uppercase tracking-[0.2em] text-taupe mt-3 font-medium">
            Tukkuguda Villas · Last Updated: November 2024
          </p>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="space-y-10 text-sm sm:text-base text-charcoal/70 leading-relaxed">
          <div>
            <h2 className="font-heading text-xl font-semibold text-charcoal mb-3">
              1. Informational Purpose Only
            </h2>
            <p>
              The contents of this website, including architectural illustrations, master plans,
              plot sizes (267–400 Sq. Yds), and built-up areas, are conceptual in nature and
              presented for general informational purposes only. This website does not constitute
              a formal legal offer, binding contract, or warranty of any kind.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-charcoal mb-3">
              2. Architectural & Dimensional Specifications
            </h2>
            <p>
              All dimensions, areas, drawings, schematics, landscape features, and specifications
              are subject to refinement and final architectural sanctions. Final dimensions and
              terms are strictly governed by the definitive bilateral agreement executed between
              the parties.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-charcoal mb-3">
              3. No Pricing or Financial Commitments
            </h2>
            <p>
              This website does not display, imply, guarantee, or represent any specific pricing,
              payment schedule, loan eligibility, return on investment, or financial projection.
              All financial matters are to be discussed exclusively with our authorized sales
              representatives and documented through formal agreements.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-charcoal mb-3">
              4. Enquiry Form Usage
            </h2>
            <p>
              Submission of an enquiry through our website registers your intent to receive
              information about Tukkuguda Villas. It does not constitute a reservation, booking,
              or financial commitment in any form. All formal agreements are executed in person
              and in writing.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-charcoal mb-3">
              5. Intellectual Property
            </h2>
            <p>
              All content on this website including architectural renderings, site plans, text,
              and imagery is proprietary and may not be reproduced, redistributed, or used for
              any commercial purpose without explicit written consent.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-charcoal mb-3">
              6. Contact for Clarifications
            </h2>
            <p>
              For any questions relating to these terms or any project documentation, please
              contact our sales desk directly:
            </p>
            <div className="mt-4 p-5 bg-white border border-softgrey space-y-2 text-sm font-medium">
              <p>
                Phone Line 1:{' '}
                <a href={phone1.tel} className="text-charcoal underline underline-offset-2 hover:text-taupe transition-colors">
                  {phone1.display}
                </a>
              </p>
              <p>
                Phone Line 2:{' '}
                <a href={phone2.tel} className="text-charcoal underline underline-offset-2 hover:text-taupe transition-colors">
                  {phone2.display}
                </a>
              </p>
              <p>
                Phone Line 3:{' '}
                <a href={phone3.tel} className="text-charcoal underline underline-offset-2 hover:text-taupe transition-colors">
                  {phone3.display}
                </a>
              </p>
              <p className="text-charcoal/50">Location: Tukkuguda (Mankhal), South Hyderabad, Telangana, India</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-softgrey">
          <Link href="/" className="text-sm text-charcoal/50 hover:text-charcoal transition-colors">
            ← Return to Homepage
          </Link>
        </div>
      </section>
    </div>
  );
}
