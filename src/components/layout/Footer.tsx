import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { projectData } from '@/data/project';

const Footer: React.FC = () => {
  const { phone1, phone2 } = projectData;

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Villas', href: '/villas' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Location', href: '/location' },
    { name: 'Contact', href: '/contact' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms & Conditions', href: '/terms' },
  ];

  return (
    <footer className="bg-charcoal text-white/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="font-heading text-2xl font-semibold text-white">
                Thukkuguda <span className="italic font-normal">Villas</span>
              </span>
            </Link>
            <div className="flex items-start gap-2 mt-3">
              <MapPin className="w-4 h-4 text-taupe mt-0.5 flex-shrink-0" />
              <p className="text-sm text-white/50 leading-relaxed">
                Tukkuguda (Mankhal)<br />
                South Hyderabad, Telangana
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-taupe font-medium mb-5">Navigate</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-taupe font-medium mb-5">Contact</p>
            <div className="space-y-4">
              {/* Phone 1 */}
              <div>
                <p className="text-[10px] text-white/30 uppercase tracking-wide mb-1.5">Sales Enquiry</p>
                <div className="flex items-center gap-3">
                  <a
                    href={phone1.tel}
                    className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <Phone className="w-3 h-3" />
                    {phone1.display}
                  </a>
                  <a
                    href={phone1.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 transition-colors"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Phone 2 */}
              <div>
                <p className="text-[10px] text-white/30 uppercase tracking-wide mb-1.5">Site Office</p>
                <div className="flex items-center gap-3">
                  <a
                    href={phone2.tel}
                    className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <Phone className="w-3 h-3" />
                    {phone2.display}
                  </a>
                  <a
                    href={phone2.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 transition-colors"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* NexHouz */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-taupe font-medium mb-5">Marketing by</p>
            <a
              href="https://nexhouz.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block opacity-80 hover:opacity-100 transition-opacity duration-300"
              title="NexHouz"
            >
              <Image
                src="/images/nexhouz-logo.png"
                alt="NexHouz"
                width={160}
                height={50}
                className="object-contain"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </a>
            <p className="text-xs text-white/30 mt-3 leading-relaxed">
              Premium Real Estate Marketing
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Thukkuguda Villas. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs text-white/30 hover:text-white/60 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
