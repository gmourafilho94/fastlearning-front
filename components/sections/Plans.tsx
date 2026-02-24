import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { PLANS } from '@/lib/constants';

export default function Plans() {
    return (
        <section id="plans" className="plans" aria-labelledby="plans-title">
            <Container>
                <div className="section-header">
                    <p className="section-badge">
                        <span aria-hidden="true">💳</span> Planos
                    </p>
                    <h2 id="plans-title" className="section-title">
                        Escolha o plano{' '}
                        <span className="gradient-text">certo para você</span>
                    </h2>
                    <p className="section-subtitle">
                        Sem taxas escondidas. Upgrade ou downgrade quando quiser.
                    </p>
                </div>

                <ul
                    className="plans-grid"
                    role="list"
                    aria-label="Planos disponíveis"
                >
                    {PLANS.map((plan) => (
                        <li
                            key={plan.name}
                            className={`plan-card${plan.highlighted ? ' plan-card--highlighted' : ''}`}
                        >
                            {plan.badge && (
                                <div className="plan-card__badge" aria-label="Plano mais popular">
                                    {plan.badge}
                                </div>
                            )}

                            <header className="plan-card__header">
                                <h3 className="plan-card__name">{plan.name}</h3>
                                <p className="plan-card__desc">{plan.description}</p>
                            </header>

                            <div className="plan-card__price">
                                <span className="plan-card__amount">{plan.price}</span>
                                {plan.period && (
                                    <span className="plan-card__period">{plan.period}</span>
                                )}
                            </div>

                            <ul className="plan-card__features" role="list" aria-label={`Recursos do plano ${plan.name}`}>
                                {plan.features.map((feature) => (
                                    <li key={feature} className="plan-card__feature">
                                        <span aria-hidden="true">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Button
                                href="#conversion"
                                variant={plan.highlighted ? 'primary' : 'secondary'}
                                size="md"
                                trackingLabel={`plan_cta_${plan.name.toLowerCase()}`}
                                className="plan-card__cta"
                            >
                                {plan.cta}
                            </Button>
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    );
}
