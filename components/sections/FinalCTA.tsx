'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { trackFormSubmit } from '@/lib/tracking';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function FinalCTA() {
    const [status, setStatus] = useState<FormStatus>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        revenue: '',
        tools: '',
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');
        // Simulated async submit — replace with real API call
        await new Promise((resolve) => setTimeout(resolve, 1200));
        trackFormSubmit('final_cta_form');
        setStatus('success');
    };

    return (
        <section id="conversion" className="final-cta" aria-labelledby="conversion-title">
            <Container narrow>
                {/* Pitch */}
                <div className="section-header">
                    <p className="section-badge">
                        <span aria-hidden="true">🎯</span> Agende sua demonstração
                    </p>
                    <h2 id="conversion-title" className="section-title">
                        Descubra quanto ROI você está{' '}
                        <span className="gradient-text">deixando na mesa</span>
                    </h2>
                    <p className="section-subtitle">
                        Preencha abaixo e nosso time monta um diagnóstico gratuito do seu
                        funil de dados em até 24h — sem compromisso.
                    </p>
                </div>

                {status === 'success' ? (
                    <div className="form-success" role="alert" aria-live="polite">
                        <span className="form-success__icon" aria-hidden="true">📊</span>
                        <h3 className="form-success__title">Recebemos seu contato!</h3>
                        <p className="form-success__text">
                            Nosso time de analistas entrará em contato em até 24h com um
                            diagnóstico inicial do seu funil de dados. Verifique sua caixa de entrada.
                        </p>
                    </div>
                ) : (
                    <form
                        className="conversion-form"
                        onSubmit={handleSubmit}
                        noValidate
                        aria-label="Formulário de contato para diagnóstico gratuito"
                    >
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">
                                Seu nome
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                className="form-input"
                                placeholder="Como podemos te chamar?"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                autoComplete="given-name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email" className="form-label">
                                E-mail corporativo
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                className="form-input"
                                placeholder="voce@suaempresa.com.br"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                autoComplete="email"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="company" className="form-label">
                                Nome da empresa
                            </label>
                            <input
                                id="company"
                                name="company"
                                type="text"
                                className="form-input"
                                placeholder="Sua empresa S/A"
                                value={formData.company}
                                onChange={handleChange}
                                required
                                autoComplete="organization"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="revenue" className="form-label">
                                Faturamento mensal aproximado
                            </label>
                            <select
                                id="revenue"
                                name="revenue"
                                className="form-input form-select"
                                value={formData.revenue}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>Selecione…</option>
                                <option value="50k-200k">R$ 50k – R$ 200k</option>
                                <option value="200k-500k">R$ 200k – R$ 500k</option>
                                <option value="500k-2m">R$ 500k – R$ 2M</option>
                                <option value="2m+">Acima de R$ 2M</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="tools" className="form-label">
                                Quais ferramentas você usa hoje?
                            </label>
                            <input
                                id="tools"
                                name="tools"
                                type="text"
                                className="form-input"
                                placeholder="Ex: HubSpot, Meta Ads, Omie, planilhas…"
                                value={formData.tools}
                                onChange={handleChange}
                            />
                        </div>

                        <Button
                            type="submit"
                            variant="primary"
                            size="lg"
                            disabled={status === 'loading'}
                            trackingLabel="form_submit"
                            className="form-submit"
                        >
                            {status === 'loading' ? 'Enviando…' : 'Quero meu diagnóstico gratuito →'}
                        </Button>

                        <p className="form-disclaimer">
                            Ao enviar, você concorda com nossa{' '}
                            <a href="/privacidade" className="form-disclaimer__link">Política de Privacidade</a>.
                            Não enviamos spam.
                        </p>
                    </form>
                )}
            </Container>
        </section>
    );
}
