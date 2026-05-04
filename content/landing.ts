/**
 * Conteúdo centralizado da landing — atualize datas, preços e URLs aqui.
 */

export function getCheckoutUrl(): string {
  const url = process.env.NEXT_PUBLIC_EDUZZ_CHECKOUT_URL;
  if (url && url.length > 0) return url;
  return "#investimento";
}

export const site = {
  title: "Especificação Vegetal — Prof. Alexander Hulsmeyer",
  shortTitle: "Especificação Vegetal",
  description:
    "Curso ao vivo: Método Casting Botânico para especificar vegetação com critério técnico e conformidade ABNT NBR 16636-4:2023.",
  email: "mentoriahulsmeyer@gmail.com",
  copyrightYear: 2026,
} as const;

export const hero = {
  eyebrow: "Aulas ao Vivo · Maio 2026",
  courseName: "Curso Especificação Vegetal — Prof. Alexander Hulsmeyer",
  headline: [
    "Você projeta jardins incríveis,",
    "mas trava na hora de",
    "especificar as plantas?",
  ],
  subheadline: "É hora de virar essa página.",
  supporting:
    'Com o Método "Casting Botânico", você seleciona cada espécie com critério técnico, do mesmo jeito que um diretor escolhe o elenco para um filme: cada planta tem um papel claro no projeto.',
  ctaLabel: "Quero me inscrever",
  guaranteeBadge: "Garantia de 7 dias, sem letras miúdas",
} as const;

export const stats = [
  { value: "2 aulas", label: "Sextas ao vivo, em maio" },
  { value: "10h", label: "De conteúdo prático" },
  { value: "NBR\n16636-4:2023", label: "Conformidade ABNT" },
  { value: "7 dias", label: "Garantia incondicional" },
] as const;

export const methodIntro = {
  kicker: "Especificação Vegetal",
  title: 'O "Casting Botânico":',
  subtitle: "a seleção de elenco das plantas",
  intro:
    "No cinema, ninguém escala um ator só porque é famoso. Ele precisa servir à história. Com vegetação é igual: o método troca a escolha por feeling por uma decisão com critério técnico.",
} as const;

export const methodSteps = [
  {
    n: "01",
    icon: "🌿",
    title: "Critério de desempenho",
    body: "Cada planta é avaliada pelo que entrega ao projeto, não pela beleza isolada. Você escolhe com base em dados, não em impulso.",
  },
  {
    n: "02",
    icon: "📋",
    title: "Conformidade ABNT",
    body: "O método segue a ABNT NBR 16636-4:2023 ponto a ponto, então sua especificação chega no cliente com respaldo técnico.",
  },
  {
    n: "03",
    icon: "🎬",
    title: "Seleção de elenco vegetal",
    body: 'Cada espécie tem um papel. Você aprende a "escalar" a planta certa para cada função paisagística.',
  },
  {
    n: "04",
    icon: "🏆",
    title: "Da concepção à prática",
    body: "Do conceito ao detalhamento. Você sai do curso pronto para entregar uma especificação completa para qualquer cliente.",
  },
] as const;

export const methodQuote =
  "A especificação vegetal deixa de ser a etapa temida do projeto. Vira o momento em que você mostra, em linguagem técnica, o valor do que está propondo.";

export const methodQuoteAttribution = "— Método Casting Botânico, Prof. Alexander Hulsmeyer";

export const audience = {
  sectionLabel: "Para quem é",
  title: "Este curso foi feito\npara você, se…",
  items: [
    {
      title: "Você é arquiteto(a) ou paisagista",
      body: "já domina SketchUp ou outro 3D, mas trava sempre que precisa especificar a vegetação.",
    },
    {
      title: "Você quer cobrar mais pelos seus projetos",
      body: "e sabe que uma especificação técnica bem feita sustenta honorários maiores na conversa com o cliente.",
    },
    {
      title: "Você quer conformidade com a ABNT",
      body: "e nunca teve clareza do que a NBR 16636-4:2023 exige na prática do dia a dia.",
    },
  ],
} as const;

export const problems = {
  sectionLabel: "O Problema",
  title: "Reconhece alguma\ndessas situações?",
  subtitle: "Você já viveu algum desses momentos?",
  items: [
    "Escolher planta no \"acho que combina\" e não conseguir justificar tecnicamente para o cliente",
    "Empacar na hora de montar o memorial descritivo vegetal",
    "Ficar com receio de ser questionado sobre compatibilidade de espécies",
    "Entregar especificação incompleta porque o detalhamento gera insegurança",
    "Perder contrato para outro profissional que entregou documentação mais consistente",
  ],
} as const;

export const testimonials = {
  sectionLabel: "O que dizem os alunos",
  title: "Profissionais que já\ntransformaram sua prática",
  items: [
    {
      quote:
        "Agradeço pela generosidade em compartilhar conhecimento e pela contribuição tão importante para nossa formação. Entrei sendo uma profissional e estou saindo outra.",
      name: "Thais Barroso",
      role: "Arquiteta",
      initial: "T",
    },
    {
      quote:
        "Fico muito feliz por ter feito parte dessa experiência, cada segundo dedicado valeu a pena. Foi sensacional — já quero mais!",
      name: "Jessica Souza",
      role: "Arquiteta",
      initial: "J",
    },
    {
      quote:
        "Agradeço a oportunidade de ter participado desse curso que agregou muito conhecimento e experiência para a minha profissão. Excelente!",
      name: "Cristina Marcelle",
      role: "Arquiteta",
      initial: "C",
    },
    {
      quote:
        "Amei todo o curso. Cada detalhe foi pensado para a nossa realidade profissional. Esperando os próximos!",
      name: "Andreia Muniz",
      role: "Arquiteta",
      initial: "A",
    },
    {
      quote:
        "Muito obrigada Prof. Alexander! Curso incrível que mudou a forma como vejo a especificação vegetal nos meus projetos.",
      name: "Raquel B. Miranda",
      role: "Arquiteta",
      initial: "R",
    },
    {
      quote:
        "Agradeço pela generosidade em compartilhar conhecimento e experiências. Contribuição essencial para nossa formação como profissionais.",
      name: "Natiele Munhoz",
      role: "Arquiteta",
      initial: "N",
    },
  ],
} as const;

export const testimonialScreenshots = {
  sectionLabel: "Mensagens reais",
  title: "Depoimentos de quem já\nfez o curso",
  subtitle:
    "Mensagens recebidas de alunos depois das turmas anteriores. Sem retoque, sem roteiro.",
  items: [
    { src: "/depoimentos/depoimento-1.png", alt: "Depoimento de aluna sobre o curso", width: 1066, height: 177 },
    { src: "/depoimentos/depoimento-2.png", alt: "Depoimento de aluna sobre o curso", width: 1069, height: 388 },
    { src: "/depoimentos/depoimento-3.png", alt: "Depoimento de aluna sobre o curso", width: 1068, height: 265 },
    { src: "/depoimentos/depoimento-4.png", alt: "Depoimento de aluna sobre o curso", width: 1073, height: 271 },
    { src: "/depoimentos/depoimento-5.png", alt: "Depoimento de aluna sobre o curso", width: 1051, height: 225 },
    { src: "/depoimentos/depoimento-6.png", alt: "Depoimento de aluna sobre o curso", width: 868, height: 257 },
    { src: "/depoimentos/depoimento-7.png", alt: "Depoimento de aluna sobre o curso", width: 873, height: 141 },
    { src: "/depoimentos/depoimento-8.png", alt: "Depoimento de aluna sobre o curso", width: 1061, height: 160 },
  ],
} as const;

export const schedule = {
  sectionLabel: "Datas das Aulas",
  title: "Aulas ao vivo\nem maio",
  description:
    "Aulas ao vivo, com dúvidas resolvidas em tempo real. Você também entra em um grupo de WhatsApp fechado com a turma.",
  sessions: [
    {
      month: "Maio",
      day: "16",
      title: "Aula 1 — Sexta-feira",
      hours: "Das 8h às 13h  ·  Das 14h às 19h",
    },
    {
      month: "Maio",
      day: "30",
      title: "Aula 2 — Sexta-feira",
      hours: "Das 8h às 13h  ·  Das 14h às 19h",
    },
  ],
} as const;

export const bonus = {
  label: "Bônus",
  title: "Certificado em Papel Timbrado",
  description: "Com assinatura do professor Alexander",
  icon: "✓",
} as const;

export const professor = {
  eyebrow: "Prof. Alexander Hulsmeyer",
  title: "Seu Professor",
  name: "Conheça Alexander\nHulsmeyer",
  bio: [
    'Atuando há anos com projeto paisagístico e ensino de especificação vegetal, o Prof. Alexander criou o Método "Casting Botânico" para tirar o detalhamento técnico do campo do achismo: um caminho prático para arquitetos e paisagistas que querem segurança na hora de especificar.',
    "Dezenas de profissionais já passaram pelo método e hoje entregam projetos mais consistentes do ponto de vista técnico. E, na prática, conseguem cobrar de acordo com isso.",
  ],
  roles: [
    "Arquiteto e Paisagista",
    "Especialista em Especificação Vegetal",
    "ABNT NBR 16636-4:2023",
    "Mentor de Projetos Paisagísticos",
  ],
  imageSrc: "/alexander.png",
  imageAlt: "Prof. Alexander Hulsmeyer",
} as const;

export const pricing = {
  id: "investimento",
  sectionLabel: "Investimento",
  title: "Um curso que se paga\nno primeiro projeto",
  rationale:
    "Faz a conta: uma única especificação bem feita já pode somar centenas de reais ao seu honorário. O curso costuma se pagar logo no primeiro projeto que você assina com mais segurança.",
  productName: "Especificação Vegetal: da Concepção à Prática",
  installmentLabel: "12x R$ 25,75",
  installmentNote: "12 parcelas sem juros",
  cashLabel: "ou R$ 249,00 à vista",
  ctaLabel: "Garantir minha vaga agora",
  paymentNote: "Pagamento 100% seguro via Eduzz",
  guarantee: {
    title: "Garantia de 7 dias",
    body: "Se em até 7 dias você achar que o curso não valeu a pena, é só mandar um e-mail. A gente devolve o valor integral, sem ficar perguntando o motivo.",
    icon: "🛡️",
  },
} as const;

export const included = {
  title: "O que está incluído",
  items: [
    "2 aulas ao vivo (10h de conteúdo total)",
    "Acesso ao grupo exclusivo WhatsApp",
    "Certificado em papel timbrado assinado",
    "Conformidade ABNT NBR 16636-4:2023",
    "Suporte por e-mail pós-curso",
  ],
} as const;

export const faq = {
  sectionLabel: "Dúvidas Frequentes",
  title: "Perguntas e respostas",
  items: [
    {
      q: "Qual o investimento do curso?",
      a: "R$ 249,00 à vista, ou em até 12x de R$ 25,75 sem juros no cartão. Valor e condições podem ser atualizados na página de checkout da Eduzz.",
    },
    {
      q: "Terei suporte durante e após o curso?",
      a: "Sim. Nas aulas ao vivo você tira dúvidas em tempo real e participa do grupo de WhatsApp da turma. Depois do curso, o suporte segue por e-mail, como comunicado em sala.",
    },
    {
      q: "Vou receber certificado?",
      a: "Sim. Ao concluir, você recebe certificado em papel timbrado, com assinatura do Prof. Alexander Hulsmeyer.",
    },
    {
      q: "Preciso ter experiência prévia em paisagismo?",
      a: "O curso é para arquitetos e paisagistas que já elaboram projetos e usam SketchUp ou equivalente. Não precisa ser especialista em botânica: o foco é o método e a especificação técnica alinhada à ABNT.",
    },
    {
      q: "Como funciona a garantia de 7 dias?",
      a: "Se nos primeiros 7 dias após a compra o curso não atender sua expectativa, é só pedir reembolso. A devolução é integral, conforme regras da plataforma e contato informado na área do aluno.",
    },
  ],
} as const;

export const finalCta = {
  title: "Chega de travar na especificação.",
  subtitle: "Entregue projetos com a técnica que o seu trabalho merece.",
  note: "As vagas para as aulas de maio são limitadas. Garanta a sua antes de fechar a turma.",
  ctaLabel: "Quero garantir minha vaga",
  priceLine: "12x de R$ 25,75  ·  ou R$ 249,00 à vista  ·  Garantia de 7 dias",
} as const;

export const footer = {
  legalLine: "Política de Privacidade",
  termsLine: "Termos de Uso",
  stickyTitle: "Especificação Vegetal — Prof. Alexander",
  stickyPrice: "12x de R$ 25,75  ·  ou R$ 249,00 à vista",
  stickyCta: "Garantir vaga",
} as const;
