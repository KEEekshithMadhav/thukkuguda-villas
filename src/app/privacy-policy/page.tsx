import type { Metadata } from 'next';
import Link from 'next/link';
import { projectData } from '@/data/project';

export const metadata: Metadata = {
  title: 'Privacy Policy | Tukkuguda Villas',
  description: 'Privacy Policy for Tukkuguda Villas marketing website and customer enquiries.',
};

export default function PrivacyPolicyPage() {
  const { phone1, phone2, phone3 } = projectData;

  return (
    <div className="min-h-screen bg-offwhite text-charcoal pt-16 font-body">
      <section className="bg-white border-b border-softgrey py-12">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16">
          <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-charcoal">Privacy Policy</h1>
          <p className="text-xs uppercase tracking-[0.2em] text-taupe mt-3 font-medium">
            Tukkuguda Villas · Last Updated: November 2024
          </p>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="space-y-10 text-sm sm:text-base text-charcoal/70 leading-relaxed">
          <div>
            <h2 className="font-heading text-xl font-semibold text-charcoal mb-3">
              1. Information We Collect
            </h2>
            <p>
              When you submit an enquiry through the Tukkuguda Villas website, we collect your
              Full Name, Mobile Number, Interested Villa Size, Expected Budget, and
              Message/Requirements. We do not collect payment details, credit card numbers, or
              passwords through this website.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-charcoal mb-3">
              2. How We Use Your Information
            </h2>
            <p>The information submitted through our enquiry form is used exclusively to:</p>
            <ul className="list-disc pl-5 mt-3 space-y-1.5">
              <li>Respond directly to your villa enquiries, pricing requests, and site visit scheduling.</li>
              <li>Provide customized brochures, floor plans, and layout updates via phone call or WhatsApp.</li>
              <li>Coordinate accompanied property tours at Tukkuguda (Mankhal), South Hyderabad.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-charcoal mb-3">
              3. Data Storage & Confidentiality
            </h2>
            <p>
              Your contact details are stored securely and accessed strictly by our authorized
              relationship management personnel. We do not sell, rent, or lease your personal
              information to third-party telemarketers or advertisers.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-charcoal mb-3">
              4. Cookies and Web Analytics
            </h2>
            <p>
              We may utilize standard, non-invasive cookies to assess overall website performance,
              page response times, and navigational user journeys to ensure an optimal experience.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-charcoal mb-3">
              5. Contact Regarding Your Data
            </h2>
            <p>
              If you have questions or wish to update or delete your contact records, please reach
              our desk directly:
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
