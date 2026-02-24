import type { Metadata } from 'next';
import './globals.css';
import './components.css';

export const metadata: Metadata = {
    title: 'Learning Fast — Business Intelligence como serviço para PMEs',
    description:
        'Consolide CRM, Ads e financeiro em um único painel. Dados em tempo real, reconciliados e acionáveis — sem precisar de engenheiro de dados.',
    keywords: ['business intelligence', 'BI as a service', 'dashboard', 'funil de vendas', 'dados em tempo real', 'PME', 'reconciliação de dados'],
    openGraph: {
        title: 'Learning Fast — Visibilidade total do seu funil. Em tempo real.',
        description:
            'Pare de perder ROI por delay na leitura de dados. Consolide CRM, Ads e financeiro em um único painel com a Learning Fast.',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <body>
                {children}
            </body>
        </html>
    );
}
