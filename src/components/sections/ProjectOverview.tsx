'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { projectData } from '@/data/project';

export const ProjectOverview: React.FC = () => {
  return (
    <section className="py-24 bg-ivory text-charcoal overflow-hidden border-b border-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Architectural Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-gold/30 shadow-2xl bg-forest aspect-[4/3]">
              <Image
                src="/images/villas/villa-350.svg"
                alt="Thukkuguda Villas Architectural Overview"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] uppercase tracking-widest text-gold font-bold">
                  24-Acre Master Community
                </span>
                <p className="font-heading text-lg text-ivory font-semibold mt-1">
                  Excellence in Spatial Design &amp; Craftsmanship
                </p>
              </div>
            </div>

            {/* Floating Gold Stat Badge */}
            <div className="absolute -bottom-6 -right-6 bg-gold text-charcoal p-5 rounded-xl shadow-xl hidden sm:block">
              <p className="font-heading text-3xl font-bold">202</p>
              <p className="text-xs uppercase font-semibold tracking-wider">Exclusive Villas</p>
            </div>
          </div>

          {/* Right Column: Editorial Overview */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              eyebrow="PROJECT OVERVIEW"
              title="A Masterfully Planned Gated Villa Community"
              subtitle="Conceived as an enclave of architectural restraint and privacy, Thukkuguda Villas spans 24 contiguous acres in the rapidly emerging corridor of South Hyderabad."
              align="left"
            />

            <div className="prose text-charcoal/80 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                Situated at Tukkuguda (Mankhal), the community balances immediate access to Hyderabad’s Outer Ring Road and international transit corridors with the serenity of a self-contained private gated environment.
              </p>
              <p>
                Every villa is positioned along wide 40-foot internal arterial roads, ensuring expansive setbacks, natural illumination, and open vistas framed by mature landscaped avenues.
              </p>
            </div>

            {/* Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {projectData.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-forest text-gold flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span className="text-sm font-medium text-charcoal">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4 flex items-center gap-4">
              <Link
                href="/villas"
                className="inline-flex items-center gap-2 px-6 py-3 rounded bg-forest text-ivory hover:bg-forest/90 font-medium text-sm transition-all shadow-md group"
              >
                <span>View Villa Configurations</span>
                <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/location"
                className="text-sm font-semibold text-charcoal/80 hover:text-gold transition-colors"
              >
                Explore Location &amp; Reach →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
