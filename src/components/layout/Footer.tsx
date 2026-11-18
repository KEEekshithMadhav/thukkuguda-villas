import React from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, MapPin, ArrowUpRight } from 'lucide-react';
import { projectData } from '@/data/project';

export const Footer: React.FC = () => {
  const { phone1, phone2, address } = projectData;

  return (
    <footer className="bg-charcoal text-ivory border-t border-gold/20 font-body">
      {/* Upper Footer: Main Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand & Overview */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-heading text-2xl font-bold tracking-wide text-ivory">
                Thukkuguda<span className="text-gold italic font-normal ml-1">Villas</span>
              </span>
            </Link>
            <p className="text-xs uppercase tracking-widest text-gold font-medium">
              Premium Gated Villa Community
            </p>
            <p className="text-sm text-ivory/70 leading-relaxed">
              Spread across 24 acres in South Hyderabad, featuring 202 bespoke villas designed for refined living with 40-ft wide roads, grand clubhouse, and lush landscaped avenues.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-ivory/75 hover:text-gold transition-colors inline-flex items-center gap-1">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/villas" className="text-ivory/75 hover:text-gold transition-colors inline-flex items-center gap-1">
                  <span>Villa Configurations</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-ivory/75 hover:text-gold transition-colors inline-flex items-center gap-1">
                  <span>Gallery</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link href="/location" className="text-ivory/75 hover:text-gold transition-colors inline-flex items-center gap-1">
                  <span>Location &amp; Connectivity</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-ivory/75 hover:text-gold transition-colors inline-flex items-center gap-1">
                  <span>Contact Sales</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Numbers */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">
              Sales &amp; Enquiries
            </h3>
            <div className="space-y-3">
              {/* Phone 1 */}
              <div className="p-3 rounded-lg bg-black/30 border border-gold/20 space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-gold font-medium">Sales Line 1</span>
                <p className="text-sm font-semibold text-ivory">{phone1.display}</p>
                <div className="flex items-center gap-3 pt-1 text-xs">
                  <a href={phone1.tel} className="inline-flex items-center gap-1 text-gold hover:underline">
                    <Phone className="w-3 h-3" />
                    <span>Direct Call</span>
                  </a>
                  <span className="text-ivory/20">|</span>
                  <a href={phone1.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-emerald-400 hover:underline">
                    <MessageCircle className="w-3 h-3" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Phone 2 */}
              <div className="p-3 rounded-lg bg-black/30 border border-gold/20 space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-gold font-medium">Sales Line 2</span>
                <p className="text-sm font-semibold text-ivory">{phone2.display}</p>
                <div className="flex items-center gap-3 pt-1 text-xs">
                  <a href={phone2.tel} className="inline-flex items-center gap-1 text-gold hover:underline">
                    <Phone className="w-3 h-3" />
                    <span>Direct Call</span>
                  </a>
                  <span className="text-ivory/20">|</span>
                  <a href={phone2.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-emerald-400 hover:underline">
                    <MessageCircle className="w-3 h-3" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Location */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">
              Project Location
            </h3>
            <div className="flex items-start gap-2 text-sm text-ivory/75 leading-relaxed">
              <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
              <span>{address}</span>
            </div>
            <div className="pt-2 text-xs text-ivory/60 space-y-1">
              <p>• 5 mins to Outer Ring Road (ORR)</p>
              <p>• 10 mins to RGIA International Airport</p>
              <p>• 5 mins to Metro Station</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Legal */}
      <div className="border-t border-white/10 bg-black/40 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory/60">
          <p>© {new Date().getFullYear()} Thukkuguda Villas. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy-policy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gold transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
