'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { projectData } from '@/data/project';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Villas', href: '/villas' },
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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-forest/95 backdrop-blur-md shadow-lg py-3.5 border-b border-gold/20'
          : 'bg-gradient-to-b from-forest/90 via-forest/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="group flex flex-col">
            <span className="font-heading text-xl sm:text-2xl font-bold tracking-wide text-ivory group-hover:text-gold transition-colors">
              Thukkuguda<span className="text-gold italic font-normal ml-1">Villas</span>
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-gold/80 -mt-1 font-body">
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
                  className={`text-sm tracking-wide font-medium transition-colors relative py-1 ${
                    isActive ? 'text-gold' : 'text-ivory/85 hover:text-gold'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Direct Contact Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={phone1.tel}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium border border-gold/50 text-gold hover:bg-gold hover:text-charcoal transition-all"
              title={`Call Sales: ${phone1.display}`}
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{phone1.display}</span>
            </a>

            <a
              href={phone1.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded text-emerald-400 border border-emerald-500/40 hover:bg-emerald-600 hover:text-white transition-all"
              title="Chat on WhatsApp"
              aria-label="WhatsApp enquiry"
            >
              <MessageCircle className="w-3.5 h-3.5" />
            </a>

            <Link
              href="/contact"
              className="px-4 py-1.5 rounded text-xs font-semibold uppercase tracking-wider bg-gold text-charcoal hover:bg-gold/90 transition-all shadow-sm"
            >
              Enquire
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-ivory hover:text-gold rounded transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-forest/98 backdrop-blur-xl border-b border-gold/20 px-6 pt-4 pb-8 space-y-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-4">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-lg font-heading tracking-wide transition-colors ${
                    isActive ? 'text-gold font-semibold' : 'text-ivory/80 hover:text-gold'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-gold/20 space-y-3">
            <p className="text-[10px] uppercase tracking-widest text-gold font-semibold">Immediate Assistance</p>
            
            {/* Phone 1 */}
            <div className="flex items-center justify-between p-2.5 rounded bg-black/25 border border-gold/20">
              <div>
                <p className="text-[10px] text-ivory/60 uppercase">Line 1</p>
                <a href={phone1.tel} className="text-xs font-semibold text-ivory hover:text-gold">
                  {phone1.display}
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <a href={phone1.tel} className="p-1.5 rounded bg-gold/20 text-gold" title="Call">
                  <Phone className="w-3.5 h-3.5" />
                </a>
                <a href={phone1.whatsapp} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded bg-emerald-500/20 text-emerald-400" title="WhatsApp">
                  <MessageCircle className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Phone 2 */}
            <div className="flex items-center justify-between p-2.5 rounded bg-black/25 border border-gold/20">
              <div>
                <p className="text-[10px] text-ivory/60 uppercase">Line 2</p>
                <a href={phone2.tel} className="text-xs font-semibold text-ivory hover:text-gold">
                  {phone2.display}
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <a href={phone2.tel} className="p-1.5 rounded bg-gold/20 text-gold" title="Call">
                  <Phone className="w-3.5 h-3.5" />
                </a>
                <a href={phone2.whatsapp} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded bg-emerald-500/20 text-emerald-400" title="WhatsApp">
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
