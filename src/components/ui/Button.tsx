'use client';

import React from 'react';
import Link from 'next/link';
import { motion, HTMLMotionProps } from 'framer-motion';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  loading?: boolean;
  disabled?: boolean;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

type ButtonProps = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps>;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-gold text-charcoal border-transparent hover:bg-[#C49B5E] active:bg-[#B8894E]',
  secondary:
    'bg-transparent text-gold border-gold hover:bg-gold hover:text-charcoal',
  ghost:
    'bg-transparent text-gold border-transparent hover:text-[#C49B5E]',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  loading = false,
  disabled = false,
  external = false,
  className = '',
  children,
  onClick,
  ...rest
}) => {
  const isDisabled = disabled || loading;

  const baseClasses = [
    'inline-flex items-center justify-center gap-2',
    'font-body font-medium tracking-wide',
    'border rounded-sm',
    'transition-colors duration-200',
    'cursor-pointer select-none',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2',
    variantStyles[variant],
    sizeStyles[size],
    isDisabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const motionProps: HTMLMotionProps<'button'> = {
    whileHover: isDisabled ? {} : { scale: 1.02 },
    whileTap: isDisabled ? {} : { scale: 0.98 },
    transition: { type: 'spring', stiffness: 400, damping: 20 },
  };

  const content = loading ? (
    <>
      <svg
        className="animate-spin h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v8H4z"
        />
      </svg>
      <span>Loading…</span>
    </>
  ) : (
    children
  );

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
          whileHover={isDisabled ? {} : { scale: 1.02 }}
          whileTap={isDisabled ? {} : { scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          {content}
        </motion.a>
      );
    }
    return (
      <Link href={href} passHref legacyBehavior>
        <motion.a
          className={baseClasses}
          whileHover={isDisabled ? {} : { scale: 1.02 }}
          whileTap={isDisabled ? {} : { scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          {content}
        </motion.a>
      </Link>
    );
  }

  return (
    <motion.button
      {...motionProps}
      className={baseClasses}
      disabled={isDisabled}
      onClick={onClick}
      type={(rest.type as 'button' | 'submit' | 'reset') || 'button'}
    >
      {content}
    </motion.button>
  );
};

export default Button;
