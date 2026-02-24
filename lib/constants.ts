export const SITE = {
    name: 'Fast Learning',
    tagline: 'Visibilidade total do seu funil. Em tempo real.',
    description:
        'Business Intelligence como serviço para pequenas e médias empresas. Consolide CRM, Ads e financeiro em um único painel e tome decisões que protegem margem — sem depender de feeling.',
    ctaLabel: 'Ver minha demonstração',
    ctaHref: '#conversion',
};

export const NAV_LINKS = [
    { label: 'Benefícios', href: '#benefits' },
    { label: 'Como funciona', href: '#process' },
    { label: 'Planos', href: '#plans' },
    { label: 'FAQ', href: '#faq' },
];

export const VALUE_PROPS = [
    {
        icon: '⚡',
        title: 'Dados em tempo real, sem espera',
        description:
            '82% dos empreendedores perdem 15% de ROI pelo delay na leitura de dados. Com Fast Learning, o dashboard atualiza a cada minuto — não no dia seguinte.',
    },
    {
        icon: '🎯',
        title: 'Funil de vendas sem ponto cego',
        description:
            'Veja exatamente onde você está perdendo leads, em qual etapa o CAC sobe e qual canal entrega o LTV mais alto. Chega de chutar verba.',
    },
    {
        icon: '🧩',
        title: 'CRM + Ads + Financeiro reconciliados',
        description:
            'Dados divergentes entre plataformas tiram o sono de qualquer analista. Unificamos e limpamos todas as fontes em uma única fonte da verdade.',
    },
    {
        icon: '📊',
        title: 'Resultado financeiro consolidado',
        description:
            'DRE, margem, queima de caixa e LTV projetado em um único painel. Saiba quanto você realmente ganha — antes de fechar o mês.',
    },
    {
        icon: '🤖',
        title: 'Pipeline de dados totalmente gerenciado',
        description:
            'Você não precisa de engenheiro de dados. A Nexus cuida de toda a ingestão, transformação e entrega. Foque no produto e na estratégia.',
    },
    {
        icon: '🚨',
        title: 'Alertas antes que o problema vire crise',
        description:
            'Regras personalizadas notificam você quando o CPL ultrapassa o limite, quando a conversão cai abaixo do esperado ou quando o caixa entra na zona de risco.',
    },
];

export const HOW_IT_WORKS = [
    {
        step: '01',
        title: 'Conecte suas fontes em minutos',
        description:
            'CRM, Meta Ads, Google Ads, planilhas, ERPs e gateways de pagamento. Conectores prontos, sem código. Setup feito pelo nosso time em até 48h.',
    },
    {
        step: '02',
        title: 'Limpeza e reconciliação automática',
        description:
            'Nosso pipeline identifica duplicidades, inconsistências e lacunas entre plataformas. Você passa a confiar 100% nos números — sem precisar cruzar relatórios na mão.',
    },
    {
        step: '03',
        title: 'Dashboards acionáveis no ar',
        description:
            'Funil de vendas, resultado financeiro, performance de mídia e LTV por cohort — tudo num painel interativo, atualizado em tempo real e acessível de qualquer dispositivo.',
    },
    {
        step: '04',
        title: 'Insights entregues, decisão na sua mão',
        description:
            'Relatórios semanais com os 3 pontos que mais impactam sua margem. Reuniões mensais com nosso analista para revisar tendências e ajustar rota.',
    },
];

export const STATS = [
    { value: '82%', label: 'dos empreendedores perdem ROI por delay em dados' },
    { value: '−15%', label: 'de ROI evitável com visibilidade em tempo real' },
    { value: '2×', label: 'mais crescimento em empresas com pipeline terceirizado' },
    { value: '94%', label: 'mais confiança em decisões com dados limpos e reconciliados' },
];

export const TESTIMONIALS = [
    {
        name: 'Ricardo Almeida',
        role: 'CEO — E-commerce de Moda (R$ 4M/ano)',
        avatar: 'RA',
        text: 'Antes eu tomava decisão de verba com base em relatório do Meta que não batia com o financeiro. Hoje vejo o funil completo em tempo real e reduzi o CPL em 23% no primeiro mês.',
    },
    {
        name: 'Fernanda Castro',
        role: 'Head de Dados — SaaS B2B',
        avatar: 'FC',
        text: 'Passava horas cruzando dados de CRM com Ads à mão. Com a Nexus, os dados chegam limpos, reconciliados e prontos para análise. Minha confiança nas decisões aumentou demais.',
    },
    {
        name: 'Bruno Tavares',
        role: 'Gestor de Marketing — Clínica de Saúde',
        avatar: 'BT',
        text: 'A operação rodava no feeling. Hoje sei exatamente quais campanhas estão gerando LTV positivo e quais estão queimando caixa. O ROI mudou completamente.',
    },
];

export const PLANS = [
    {
        name: 'Essencial',
        price: 'R$ 997',
        period: '/mês',
        description: 'Para empresas que precisam de visibilidade imediata do funil.',
        features: [
            'Até 3 fontes de dados conectadas',
            'Dashboard de funil e financeiro',
            'Atualização a cada 4 horas',
            'Alertas básicos por e-mail',
            'Suporte via chat',
        ],
        cta: 'Começar agora',
        highlighted: false,
    },
    {
        name: 'Crescimento',
        price: 'R$ 2.497',
        period: '/mês',
        description: 'Para empresas que precisam de dados reconciliados e análise estratégica.',
        features: [
            'Fontes ilimitadas (CRM, Ads, ERP, Financeiro)',
            'Pipeline de dados gerenciado',
            'Atualização em tempo real',
            'Limpeza e reconciliação automática',
            'Relatório semanal + reunião mensal com analista',
            'Alertas avançados com regras personalizadas',
        ],
        cta: 'Quero uma demonstração',
        highlighted: true,
        badge: 'Mais contratado',
    },
    {
        name: 'Scale',
        price: 'Sob consulta',
        period: '',
        description: 'Para operações complexas que exigem um braço direito técnico dedicado.',
        features: [
            'Tudo do plano Crescimento',
            'Analista dedicado à sua operação',
            'Modelagem de dados customizada',
            'Previsão de LTV e churn por cohort',
            'SLA de resposta em 2 horas',
        ],
        cta: 'Falar com comercial',
        highlighted: false,
    },
];

export const FAQ_ITEMS = [
    {
        question: 'Preciso ter um time de tecnologia para contratar?',
        answer:
            'Não. O setup é feito integralmente pelo nosso time em até 48 horas. Você não escreve uma linha de código — só acessa o dashboard pronto e começa a tomar decisões melhores.',
    },
    {
        question: 'E se meus dados estiverem sujos ou incompletos?',
        answer:
            'Esse é exatamente o problema que resolvemos. Nosso pipeline identifica, limpa e reconcilia dados duplicados ou inconsistentes entre CRM, Ads e financeiro. Quanto mais bagunçado estiver agora, maior o ganho de clareza depois da integração.',
    },
    {
        question: 'Já tenho ferramentas separadas (planilhas, BI básico). Por que mudar?',
        answer:
            'Ferramentas separadas criam silos de informação. A dor não é ter dados — é não conseguir confiar neles porque não batem entre si. A Nexus unifica tudo em uma única fonte da verdade, eliminando o cruzamento manual que consome horas do seu time toda semana.',
    },
    {
        question: 'Quanto tempo leva para ver os primeiros resultados?',
        answer:
            'A maioria dos clientes já identifica no primeiro acesso ao dashboard pelo menos uma ineficiência de verba que estava invisível. Resultados em margem e ROI costumam aparecer dentro de 30 a 60 dias após o ajuste das decisões baseadas nos dados.',
    },
    {
        question: 'Meus dados ficam seguros? Quem tem acesso?',
        answer:
            'Todos os dados são criptografados em trânsito e em repouso. Apenas o time autorizado da sua empresa e os analistas cadastrados da Nexus têm acesso. Assinamos NDA padrão de mercado em todos os contratos.',
    },
    {
        question: 'Posso cancelar quando quiser?',
        answer:
            'Sim. Contratos mensais com aviso prévio de 30 dias. Sem fidelidade, sem multa de saída. Se deixarmos de entregar valor, você não deve ficar preso.',
    },
];
