import Card from '@/components/ui/Card';
import Container from '@/components/ui/Container';
import { VALUE_PROPS } from '@/lib/constants';

export default function ValueProps() {
    return (
        <section id="benefits" className="value-props" aria-labelledby="benefits-title">
            <Container>
                <div className="section-header">
                    <p className="section-badge">
                        <span aria-hidden="true">💡</span> Por que Learning Fast
                    </p>
                    <h2 id="benefits-title" className="section-title">
                        Tudo que ferramentas separadas{' '}
                        <span className="gradient-text">não resolvem</span>
                    </h2>
                    <p className="section-subtitle">
                        Cada minuto sem dados precisos, você perde margem. Veja o que muda quando a visibilidade é total.
                    </p>
                </div>

                <ul className="value-props__grid" role="list" aria-label="Benefícios da plataforma">
                    {VALUE_PROPS.map((prop) => (
                        <Card key={prop.title} as="li" className="value-card">
                            <span className="value-card__icon" aria-hidden="true">
                                {prop.icon}
                            </span>
                            <h3 className="value-card__title">{prop.title}</h3>
                            <p className="value-card__desc">{prop.description}</p>
                        </Card>
                    ))}
                </ul>
            </Container>
        </section>
    );
}
