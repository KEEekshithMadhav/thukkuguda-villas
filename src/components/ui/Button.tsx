import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'taupe' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  as,
  href,
  target,
  rel,
  ...props
}) => {
  const base =
    'inline-flex items-center justify-center font-body font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-charcoal/40 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-charcoal text-white hover:bg-charcoal/85',
    secondary: 'border border-charcoal text-charcoal hover:bg-charcoal hover:text-white',
    taupe: 'bg-taupe text-white hover:bg-taupe/85',
    ghost: 'text-charcoal hover:text-taupe underline-offset-2 hover:underline',
  };

  const sizes = {
    sm: 'px-5 py-2 text-xs',
    md: 'px-7 py-2.5 text-sm',
    lg: 'px-9 py-3.5 text-sm',
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (as === 'a' || href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
