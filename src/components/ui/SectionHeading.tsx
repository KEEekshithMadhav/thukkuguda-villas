'use client';

import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

type Align = 'left' | 'center' | 'right';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: Align;
  light?: boolean;
  className?: string;
}

const alignClass: Record<Align, string> = {
  left: 'text-left items-start',
  center: 'text-center items-center',
  right: 'text-right items-end',
};

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px 0px' });

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col gap-3 ${alignClass[align]} ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {eyebrow && (
        <motion.p
          variants={itemVariants}
          className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-gold"
          aria-label={eyebrow}
        >
          {eyebrow}
        </motion.p>
      )}

      <motion.h2
        variants={itemVariants}
        className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight ${
          light ? 'text-ivory' : 'text-charcoal'
        }`}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          variants={itemVariants}
          className={`font-body text-base sm:text-lg leading-relaxed max-w-2xl ${
            light ? 'text-beige/80' : 'text-charcoal/60'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
