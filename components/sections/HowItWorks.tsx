import Container from '@/components/ui/Container';
import { HOW_IT_WORKS } from '@/lib/constants';

export default function HowItWorks() {
    return (
        <section id="process" className="how-it-works" aria-labelledby="process-title">
            <Container>
                <div className="section-header">
                    <p className="section-badge">
                        <span aria-hidden="true">🗂️</span> Como funciona
                    </p>
                    <h2 id="process-title" className="section-title">
                        Do caos de dados à decisão em{' '}
                        <span className="gradient-text">4 etapas simples</span>
                    </h2>
                    <p className="section-subtitle">
                        Sem projeto longo. Sem engenheiro. O nosso time cuida
                        de tudo para que você veja o funil completo em dias, não meses.
                    </p>
                </div>

                <ol className="steps" aria-label="Etapas da integração de dados com a Nexus BI">
                    {HOW_IT_WORKS.map((step, index) => (
                        <li key={step.step} className="step">
                            <div className="step__number" aria-hidden="true">
                                {step.step}
                            </div>
                            <div className="step__content">
                                <h3 className="step__title">{step.title}</h3>
                                <p className="step__desc">{step.description}</p>
                            </div>
                            {index < HOW_IT_WORKS.length - 1 && (
                                <div className="step__connector" aria-hidden="true" />
                            )}
                        </li>
                    ))}
                </ol>
            </Container>
        </section>
    );
}
