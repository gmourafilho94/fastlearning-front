import Container from '@/components/ui/Container';
import { STATS, TESTIMONIALS } from '@/lib/constants';

export default function SocialProof() {
    return (
        <section id="social-proof" className="social-proof" aria-labelledby="social-proof-title">
            <Container>
                <div className="section-header">
                    <p className="section-badge">
                        <span aria-hidden="true">📊</span> Resultados reais
                    </p>
                    <h2 id="social-proof-title" className="section-title">
                        Quem usa <span className="gradient-text">comprova</span>
                    </h2>
                </div>

                {/* Metrics */}
                <ul className="stats-grid" role="list" aria-label="Métricas de impacto da Fast Learning">
                    {STATS.map((stat) => (
                        <li key={stat.label} className="stat-item">
                            <strong className="stat-value gradient-text">{stat.value}</strong>
                            <span className="stat-label">{stat.label}</span>
                        </li>
                    ))}
                </ul>

                {/* Testimonials */}
                <ul
                    className="testimonials-grid"
                    role="list"
                    aria-label="Depoimentos de clientes"
                >
                    {TESTIMONIALS.map((t) => (
                        <li key={t.name} className="testimonial-card">
                            <blockquote>
                                <p className="testimonial-card__text">"{t.text}"</p>
                                <footer className="testimonial-card__footer">
                                    <div
                                        className="testimonial-card__avatar"
                                        aria-label={`Iniciais de ${t.name}`}
                                    >
                                        {t.avatar}
                                    </div>
                                    <cite className="testimonial-card__cite">
                                        <strong>{t.name}</strong>
                                        <span>{t.role}</span>
                                    </cite>
                                </footer>
                            </blockquote>
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    );
}
