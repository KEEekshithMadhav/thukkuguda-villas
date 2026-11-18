import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  light = false,
}) => {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col ${alignClass} mb-12`}>
      {eyebrow && (
        <span
          className={`text-[11px] uppercase tracking-[0.25em] font-body font-medium mb-4 ${
            light ? 'text-white/50' : 'text-taupe'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-heading text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight ${
          light ? 'text-white' : 'text-charcoal'
        }`}
      >
        {title}
      </h2>
      <div className={`w-10 h-px mt-5 ${light ? 'bg-white/30' : 'bg-taupe'}`} />
      {subtitle && (
        <p
          className={`mt-5 text-base sm:text-lg leading-relaxed max-w-2xl font-body ${
            light ? 'text-white/60' : 'text-charcoal/60'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
