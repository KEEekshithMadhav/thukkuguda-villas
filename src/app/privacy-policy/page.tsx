import type { Metadata } from 'next';
import Link from 'next/link';
import { projectData } from '@/data/project';

export const metadata: Metadata = {
  title: 'Privacy Policy | Thukkuguda Villas',
  description: 'Privacy Policy for Thukkuguda Villas marketing website and customer enquiries.',
};

export default function PrivacyPolicyPage() {
  const { phone1, phone2 } = projectData;

  return (
    <div className="min-h-screen bg-ivory text-charcoal pt-24 font-body">
      <section className="bg-forest text-ivory py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold">Privacy Policy</h1>
          <p className="text-xs uppercase tracking-widest text-gold mt-2">
            Thukkuguda Villas · Last Updated: November 2024
          </p>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate">
        <div className="space-y-8 text-sm sm:text-base text-charcoal/80 leading-relaxed">
          <div>
            <h2 className="font-heading text-2xl font-bold text-forest mb-3">
              1. Information We Collect
            </h2>
            <p>
              When you submit an enquiry through the Thukkuguda Villas website, we collect your Full Name, Mobile Number, Interested Villa Size, Expected Budget, and Message/Requirements. We do not collect payment details, credit card numbers, or passwords through this website.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-forest mb-3">
              2. How We Use Your Information
            </h2>
            <p>
              The information submitted through our enquiry form is utilized exclusively to:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Respond directly to your villa enquiries, pricing requests, and site visit scheduling.</li>
              <li>Provide customized brochures, floor plans, and layout updates via phone call or WhatsApp.</li>
              <li>Coordinate accompanied property tours at Tukkuguda (Mankhal), South Hyderabad.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-forest mb-3">
              3. Data Storage &amp; Confidentiality
            </h2>
            <p>
              Your contact details are stored securely and accessed strictly by our authorized relationship management personnel. We do not sell, rent, or lease your personal information to third-party telemarketers or advertisers.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-forest mb-3">
              4. Cookies and Web Analytics
            </h2>
            <p>
              We may utilize standard, non-invasive cookies to assess overall website performance, page response times, and navigational user journeys to ensure an optimal user experience.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-forest mb-3">
              5. Contact Regarding Your Data
            </h2>
            <p>
              If you have any questions or wish to update or delete your contact records from our communication logs, please connect directly with our desk:
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
