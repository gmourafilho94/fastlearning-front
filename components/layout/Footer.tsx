import { NAV_LINKS, SITE } from '@/lib/constants';

const LEGAL_LINKS = [
    { label: 'Termos de Uso', href: '/termos' },
    { label: 'Política de Privacidade', href: '/privacidade' },
    { label: 'Cookies', href: '/cookies' },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer" role="contentinfo">
            <div className="footer__inner container">
                {/* Brand */}
                <div className="footer__brand">
                    <span className="footer__logo">
                        <span aria-hidden="true">⚡</span> {SITE.name}
                    </span>
                    <p className="footer__tagline">{SITE.tagline}</p>
                    <address className="footer__contact">
                        <a href="mailto:contato@fastlearning.com.br" className="footer__email">
                            contato@fastlearning.com.br
                        </a>
                    </address>
                </div>

                {/* Secondary Nav */}
                <nav className="footer__nav" aria-label="Navegação secundária">
                    <p className="footer__nav-title">Plataforma</p>
                    <ul role="list">
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <a href={link.href} className="footer__nav-link">{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Legal */}
                <nav className="footer__legal-nav" aria-label="Links legais">
                    <p className="footer__nav-title">Legal</p>
                    <ul role="list">
                        {LEGAL_LINKS.map((link) => (
                            <li key={link.href}>
                                <a href={link.href} className="footer__nav-link">{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* Bottom bar */}
            <div className="footer__bottom">
                <p>© {currentYear} {SITE.name}. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}
