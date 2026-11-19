'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { projectData } from '@/data/project';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Villas', href: '/villas' },
  { name: 'Amenities', href: '/#amenities' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Location', href: '/location' },
  { name: 'Contact', href: '/contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { phone1, phone2 } = projectData;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm border-b border-softgrey py-3'
          : 'bg-white/90 backdrop-blur-sm border-b border-softgrey/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Identity */}
          <Link href="/" className="group flex flex-col flex-shrink-0">
            <span className="font-heading text-xl sm:text-2xl font-semibold tracking-wide text-charcoal group-hover:text-taupe transition-colors duration-300 whitespace-nowrap">
              Thukkuguda <span className="italic font-normal">Villas</span>
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-taupe -mt-0.5 font-body whitespace-nowrap">
              24 Acres · Gated Community
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 relative py-1.5 font-body ${
                    isActive ? 'text-charcoal font-semibold' : 'text-charcoal/65 hover:text-charcoal'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-charcoal rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Contact Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={phone1.tel}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-charcoal/70 hover:text-charcoal border border-softgrey hover:border-charcoal/40 transition-all duration-200 rounded"
              title={`Call: ${phone1.display}`}
            >
              <Phone className="w-3 h-3" />
              <span>{phone1.display}</span>
            </a>

            <a
              href={phone1.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-emerald-600 border border-emerald-200 hover:bg-emerald-50 transition-all duration-200 rounded"
              title="Chat on WhatsApp"
              aria-label="WhatsApp enquiry"
            >
              <MessageCircle className="w-3.5 h-3.5" />
            </a>

            <Link
              href="/contact"
              className="px-4 py-1.5 text-xs font-medium border border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-all duration-200 rounded"
            >
              Enquire
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-charcoal hover:text-taupe rounded transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-softgrey px-6 pt-4 pb-8 space-y-6 shadow-md animate-fade-in">
          <nav className="flex flex-col divide-y divide-softgrey/50">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`py-3 text-sm font-body tracking-wide transition-colors flex items-center justify-between ${
                    isActive ? 'text-charcoal font-semibold' : 'text-charcoal/70 hover:text-charcoal'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-charcoal" />}
                </Link>
              );
            })}
          </nav>

          {/* Quick Enquire CTA for Mobile */}
          <div className="pt-1">
            <Link
              href="/contact"
              className="w-full inline-flex items-center justify-center py-3 bg-charcoal text-white text-xs uppercase tracking-widest font-medium rounded-sm shadow-xs hover:bg-charcoal/90 transition-colors"
            >
              Enquire / Book Site Visit
            </Link>
          </div>

          <div className="pt-2 border-t border-softgrey space-y-3">
            <p className="text-[10px] uppercase tracking-widest text-taupe font-medium">Direct Sales Desk</p>

            {/* Phone 1 */}
            <div className="flex items-center justify-between p-3 rounded-sm bg-offwhite border border-softgrey">
              <div>
                <p className="text-[10px] text-taupe uppercase tracking-wide mb-0.5">Line 1</p>
                <a href={phone1.tel} className="text-sm font-medium text-charcoal hover:text-taupe">
                  {phone1.display}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <a href={phone1.tel} className="p-2 rounded bg-charcoal/5 text-charcoal hover:bg-charcoal hover:text-white transition-all" title="Call">
                  <Phone className="w-3.5 h-3.5" />
                </a>
                <a href={phone1.whatsapp} target="_blank" rel="noopener noreferrer" className="p-2 rounded bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all" title="WhatsApp">
                  <MessageCircle className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Phone 2 */}
            <div className="flex items-center justify-between p-3 rounded-sm bg-offwhite border border-softgrey">
              <div>
                <p className="text-[10px] text-taupe uppercase tracking-wide mb-0.5">Line 2</p>
                <a href={phone2.tel} className="text-sm font-medium text-charcoal hover:text-taupe">
                  {phone2.display}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <a href={phone2.tel} className="p-2 rounded bg-charcoal/5 text-charcoal hover:bg-charcoal hover:text-white transition-all" title="Call">
                  <Phone className="w-3.5 h-3.5" />
                </a>
                <a href={phone2.whatsapp} target="_blank" rel="noopener noreferrer" className="p-2 rounded bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all" title="WhatsApp">
                  <MessageCircle className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
