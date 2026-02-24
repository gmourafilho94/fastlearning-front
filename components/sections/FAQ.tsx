import Accordion from '@/components/ui/Accordion';
import Container from '@/components/ui/Container';
import { FAQ_ITEMS } from '@/lib/constants';

export default function FAQ() {
    return (
        <section id="faq" className="faq" aria-labelledby="faq-title">
            <Container narrow>
                <div className="section-header">
                    <p className="section-badge">
                        <span aria-hidden="true">❓</span> Dúvidas
                    </p>
                    <h2 id="faq-title" className="section-title">
                        Perguntas{' '}
                        <span className="gradient-text">frequentes</span>
                    </h2>
                    <p className="section-subtitle">
                        Respondemos as dúvidas mais comuns antes de você decidir.
                    </p>
                </div>

                <Accordion items={FAQ_ITEMS} />
            </Container>
        </section>
    );
}
