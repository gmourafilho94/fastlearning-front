'use client';

import { trackCTA } from '@/lib/tracking';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    onClick?: () => void;
    trackingLabel?: string;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    'aria-label'?: string;
}

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    href,
    onClick,
    trackingLabel,
    className = '',
    type = 'button',
    disabled = false,
    'aria-label': ariaLabel,
}: ButtonProps) {
    const handleClick = () => {
        if (trackingLabel) trackCTA(trackingLabel);
        onClick?.();
    };

    const baseClass = `btn btn--${variant} btn--${size} ${className}`;

    if (href) {
        return (
            <a
                href={href}
                className={baseClass}
                aria-label={ariaLabel}
                onClick={() => trackingLabel && trackCTA(trackingLabel)}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            type={type}
            className={baseClass}
            onClick={handleClick}
            disabled={disabled}
            aria-label={ariaLabel}
        >
            {children}
        </button>
    );
}
