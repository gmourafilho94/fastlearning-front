import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { SITE } from '@/lib/constants';

export default function Hero() {
    return (
        <section id="hero" className="hero" aria-labelledby="hero-headline">
            <Container className="hero__container">
                <div className="hero__content">
                    <p className="section-badge">
                        <span aria-hidden="true">📡</span> Business Intelligence as a Service
                    </p>

                    <h1 id="hero-headline" className="hero__headline">
                        Sua operação não pode{' '}
                        <span className="gradient-text">rodar no feeling</span>{' '}
                        um dia a mais
                    </h1>

                    <p className="hero__subheadline">
                        82% dos empreendedores perdem 15% de ROI pelo delay na leitura de
                        dados. A Fast Learning consolida CRM, Ads e financeiro em um único painel
                        — em tempo real, sem engenheiro de dados, pronto em 48h.
                    </p>

                    <div className="hero__actions">
                        <Button
                            href={SITE.ctaHref}
                            variant="primary"
                            size="lg"
                            trackingLabel="hero_cta_primary"
                            aria-label={SITE.ctaLabel}
                        >
                            {SITE.ctaLabel} →
                        </Button>
                        <Button
                            href="#process"
                            variant="ghost"
                            size="lg"
                            trackingLabel="hero_cta_secondary"
                        >
                            Como funciona →
                        </Button>
                    </div>

                    <p className="hero__social-hint">
                        <span aria-hidden="true">✓</span> Setup em até 48h &nbsp;·&nbsp;
                        <span aria-hidden="true">✓</span> Sem engenheiro de dados &nbsp;·&nbsp;
                        <span aria-hidden="true">✓</span> Cancele quando quiser
                    </p>
                </div>

                {/* Visual — BI Dashboard Mockup */}
                <div className="hero__visual" aria-hidden="true">
                    <div className="hero__mockup">
                        <div className="hero__mockup-bar">
                            <span></span><span></span><span></span>
                        </div>
                        <div className="hero__mockup-body">
                            <div className="hero__mockup-progress">
                                <p className="hero__mockup-label">ROI recuperado este mês</p>
                                <div className="hero__mockup-track">
                                    <div className="hero__mockup-fill" style={{ width: '84%' }}></div>
                                </div>
                                <p className="hero__mockup-pct">+R$ 38.400 identificados</p>
                            </div>
                            <div className="hero__mockup-stats">
                                {[
                                    { icon: '📈', label: 'Funil: 3 gargalos identificados' },
                                    { icon: '💰', label: 'Margem: 31,4% · Meta: 28%' },
                                    { icon: '⚠️', label: 'Alerta: CPL +18% vs semana ant.' },
                                ].map((s) => (
                                    <div key={s.label} className="hero__mockup-stat">
                                        <span>{s.icon}</span>
                                        <span>{s.label}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="hero__mockup-card">
                                <p className="hero__mockup-card-title">Insight do dia</p>
                                <p className="hero__mockup-card-sub">Google Ads converte 2,3× mais que Meta neste cohort</p>
                                <div className="hero__mockup-cta-btn">Ver análise completa →</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
