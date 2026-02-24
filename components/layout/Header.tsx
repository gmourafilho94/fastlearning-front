import Link from 'next/link';
import Button from '@/components/ui/Button';
import { NAV_LINKS, SITE } from '@/lib/constants';

export default function Header() {
    return (
        <header className="header" role="banner">
            <div className="header__inner container">
                {/* Logo */}
                <Link href="/" className="header__logo" aria-label="FastLearning — ir para início">
                    <span className="header__logo-icon" aria-hidden="true">⚡</span>
                    <span className="header__logo-text">{SITE.name}</span>
                </Link>

                {/* Navigation */}
                <nav className="header__nav" aria-label="Navegação principal">
                    <ul role="list">
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <a href={link.href} className="header__nav-link">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Primary CTA */}
                <Button
                    href={SITE.ctaHref}
                    variant="primary"
                    size="sm"
                    trackingLabel="header_cta"
                    aria-label={SITE.ctaLabel}
                >
                    {SITE.ctaLabel}
                </Button>
            </div>
        </header>
    );
}
