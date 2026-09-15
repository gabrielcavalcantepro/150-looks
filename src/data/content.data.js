// Copy de cada etapa — transcrito literalmente de quiz-estilo-textos-etapas.md.
// Fonte de verdade para todo o texto exibido no quiz. Não resumir/reescrever
// aqui: qualquer ajuste de copy deve vir do arquivo de conteúdo.
//
// O número de prova social da Etapa 7 ([SUBSTITUIR: nº...]) vem de
// placeholders.data.js e é interpolado aqui.

import { SOCIAL_PROOF_COUNT_STEP7 } from './placeholders.data.js';

export const CONTENT = {
  landing: {
    // count é sorteado em runtime (01-landing.js) entre LANDING_COUNT_MIN e
    // LANDING_COUNT_MAX — kickerSuffix é o texto que vem depois do número
    // em negrito.
    kickerSuffix: 'mulheres descobrindo seu estilo agora',
    title: 'Descubra qual dos 7 estilos universais é o seu e tenha +150 looks com apenas 20 peças',
    titleHighlight: 'estilos',
    subtitle: 'Chega de guarda-roupa cheio e a sensação de não ter nada para vestir.',
    imageLabel: 'mockup do guia: celular/tablet/PDF',
    checks: '✓ +150 Looks Prontos · ✓ 7 Estilos Universais · ✓ Peças Que Já Combinam',
    warning: '⚠️ Atenção: Este diagnóstico está disponível por tempo limitado. Se sair agora, você pode perder sua vaga.',
    cta: '✨ Quero Descobrir Meu Estilo!',
    footnote: '🔒 Diagnóstico Grátis · Apenas 2 minutos',
  },

  idade: {
    title: 'Qual é a sua idade?',
    titleHighlight: 'idade',
    subtitle: 'Isso ajuda a entender melhor o seu momento de vida',
    options: [
      { value: 'de18a24', emoji: '🌸', label: '18 a 24 anos', sublabel: 'Fase de descobrir sua identidade' },
      { value: 'de25a29', emoji: '🌺', label: '25 a 29 anos', sublabel: 'Ótimo momento pra consolidar seu estilo' },
      { value: 'de30a34', emoji: '🌻', label: '30 a 34 anos', sublabel: 'Ainda fácil de refinar seu guarda-roupa' },
      { value: 'de35a39', emoji: '🌷', label: '35 a 39 anos', sublabel: 'Hora de alinhar estilo e maturidade' },
      { value: 'de40mais', emoji: '💪', label: '40 anos ou mais', sublabel: 'Nunca é tarde pra reinventar seu visual' },
    ],
  },

  visual: {
    title: 'Qual desses looks mais chama sua atenção?',
    titleHighlight: 'looks',
    subtitle: 'Confie no seu instinto, não pense demais',
    options: [
      { value: 'look1', label: 'Look 1', imageKey: 'look1' },
      { value: 'look2', label: 'Look 2', imageKey: 'look2' },
      { value: 'look3', label: 'Look 3', imageKey: 'look3' },
      { value: 'look4', label: 'Look 4', imageKey: 'look4' },
      { value: 'look5', label: 'Look 5', imageKey: 'look5' },
      { value: 'look6', label: 'Look 6', imageKey: 'look6' },
      { value: 'look7', label: 'Look 7', imageKey: 'look7' },
    ],
  },

  motivo: {
    title: 'O que você mais busca no seu estilo hoje?',
    titleHighlight: 'estilo',
    subtitle: 'Escolha a opção que mais se aplica a você',
    options: [
      { value: 'praticidade', emoji: '🏃', label: 'Mais praticidade pra montar looks rápido' },
      { value: 'estiloAtemporal', emoji: '👑', label: 'Ter um estilo atemporal, que nunca sai de moda' },
      { value: 'elevarNivel', emoji: '✨', label: 'Elevar o nível dos meus looks' },
      { value: 'romanticaDelicada', emoji: '💕', label: 'Me sentir romântica e delicada' },
      { value: 'pararRepetir', emoji: '🎨', label: 'Parar de repetir sempre as mesmas combinações' },
      { value: 'sexyPoderosa', emoji: '🔥', label: 'Me sentir sexy e poderosa' },
      { value: 'confiancaOusar', emoji: '⚡', label: 'Ter mais confiança pra ousar' },
    ],
  },

  sente: {
    title: 'Como você se sente com o seu guarda-roupa hoje?',
    titleHighlight: 'guarda-roupa',
    subtitle: 'Seja honesta, isso personaliza seu resultado',
    options: [
      { value: 'cheioNadaVestir', emoji: '😩', label: 'Tenho roupa pra caramba, mas sinto que não tenho nada pra vestir' },
      { value: 'comproNaoUso', emoji: '😕', label: 'Compro peças que depois nunca uso' },
      { value: 'repitoLooks', emoji: '😤', label: 'Sempre acabo repetindo os mesmos looks' },
      { value: 'naoSeiCombinar', emoji: '🤷‍♀️', label: 'Não sei o que realmente combina comigo' },
    ],
  },

  pecas: {
    title: 'Qual dessas peças mais representa você no dia a dia?',
    titleHighlight: 'representa',
    subtitle: 'Escolha a que mais combina com você',
    options: [
      { value: 'jeansTenis', emoji: '👖', label: 'Jeans e tênis, sempre práticos' },
      { value: 'blazerAlfaiataria', emoji: '👔', label: 'Blazer e alfaiataria certinha' },
      { value: 'tubinhoSaltos', emoji: '🖤', label: 'Vestido tubinho e saltos' },
      { value: 'vestidoFluidoRendado', emoji: '👗', label: 'Vestido fluido e rendado' },
      { value: 'estampasOusadas', emoji: '🎨', label: 'Estampas ousadas e acessórios diferentes' },
      { value: 'justasCouro', emoji: '💃', label: 'Peças justas, decote e couro' },
      { value: 'jaquetaEstruturada', emoji: '🧥', label: 'Jaqueta estruturada e cores fortes' },
    ],
  },

  provaSocial1: {
    kicker: `🔥 +${SOCIAL_PROOF_COUNT_STEP7} mulheres já descobriram seu estilo`,
    badge: '⭐ Mulheres Reais. Estilos Reais.',
    title: 'Veja as transformações de quem já usou o guia',
    titleHighlight: 'transformações',
    imageLabel: 'antes/depois de look, SUBSTITUIR',
    cta: 'Continuar minha avaliação →',
  },

  rotina: {
    title: 'Qual é a sua rotina predominante?',
    titleHighlight: 'rotina',
    subtitle: 'Isso personaliza seu guia',
    options: [
      { value: 'homeOffice', emoji: '💻', label: 'Trabalho remoto / home office' },
      { value: 'corporativo', emoji: '🏢', label: 'Ambiente corporativo formal' },
      { value: 'socialIntensa', emoji: '🎉', label: 'Vida social intensa, sempre tem um evento' },
      { value: 'cuidoDaCasa', emoji: '🏡', label: 'Cuido da casa e da família em tempo integral' },
      { value: 'mixDeTudo', emoji: '🔀', label: 'Mix de tudo um pouco' },
    ],
  },

  tempoDecisao: {
    title: 'Quanto tempo você perde hoje decidindo o que vestir?',
    titleHighlight: 'tempo',
    subtitle: 'Seja honesta, isso personaliza sua solução',
    options: [
      { value: 'ate10', emoji: '😕', label: 'Até 10 minutos', sublabel: 'mas já me incomoda' },
      { value: 'de10a20', emoji: '😔', label: '10 a 20 minutos', sublabel: 'sinto que perco tempo' },
      { value: 'de20a40', emoji: '😣', label: '20 a 40 minutos', sublabel: 'experimento várias roupas' },
      { value: 'mais40', emoji: '😰', label: 'Mais de 40 minutos', sublabel: 'viro o guarda-roupa do avesso' },
    ],
  },

  nome: {
    kicker: '👋',
    title: 'Para personalizar seu diagnóstico de estilo, como podemos te chamar?',
    titleHighlight: 'diagnóstico',
    subtitle: 'Usaremos seu nome pra deixar tudo 100% personalizado. Zero spam.',
    inputLabel: 'Seu primeiro nome',
    cta: 'Começar meu diagnóstico →',
    footnote: '🔒 Seus dados são privados. Zero spam.',
  },

  insegura: {
    title: '[Nome], como você se sente na hora de se vestir pra sair?',
    titleHighlight: 'vestir',
    subtitle: 'Selecione o que mais se aplica a você',
    options: [
      { value: 'semInspiracao', emoji: '😴', label: 'Sem inspiração nenhuma' },
      { value: 'insegura', emoji: '😢', label: 'Insegura, sem saber o que combina' },
      { value: 'medoErrar', emoji: '😟', label: 'Com medo de errar o estilo' },
      { value: 'mesmoDeSempre', emoji: '😰', label: 'Sempre acabo usando o mesmo de sempre' },
    ],
  },

  trava: {
    title: 'O que mais te trava na hora de montar um look?',
    titleHighlight: 'trava',
    subtitle: 'Escolha a opção mais próxima da sua realidade',
    options: [
      { value: 'naoSeiCombinarPecas', emoji: '😤', label: 'Não sei combinar as peças que tenho' },
      { value: 'comproNaoUso', emoji: '🛍️', label: 'Compro roupa e não uso' },
      { value: 'naoSeiOQueCombina', emoji: '🧩', label: 'Não sei o que realmente combina comigo' },
      { value: 'naoTenhoTempo', emoji: '⏰', label: 'Não tenho tempo pra pensar nisso' },
    ],
  },

  educativo1: {
    eyebrow: '🧠 Por que ter um guarda-roupa cheio não resolve seu problema de estilo',
    title: 'Por que você sente que "não tem nada pra vestir" mesmo com o armário lotado',
    titleHighlight: 'armário',
    paragraphs: [
      'Quando você compra peças aleatórias, sem saber qual é o seu estilo, cada peça nova vira uma ilha: ela não conversa com o resto do que você já tem. Resultado: guarda-roupa cheio, e a sensação de sempre faltar alguma coisa.',
      'O problema não é a falta de roupa. É a falta de um sistema de peças-coringa alinhado ao seu estilo.',
    ],
    highlight:
      '💚 Com o guia +150 Looks com Apenas 20 Peças, você aprende exatamente quais peças combinam com o seu estilo [ESTILO_RESULTADO] e como multiplicar suas combinações sem precisar comprar mais nada.',
    table: {
      headers: ['❌ Sem o guia', '✅ Com o guia'],
      rows: [
        ['Guarda-roupa cheio, nada pra vestir', 'Looks prontos em minutos'],
        ['Tempo perdido decidindo', 'Peças que sempre combinam'],
        ['Compras que não combinam', 'Confiança pra se vestir'],
        ['Poucas combinações', '+150 combinações reais'],
      ],
    },
    cta: 'Continuar minha avaliação →',
  },

  educativo2: {
    title: 'Por que algumas mulheres sempre parecem estilosas com poucas peças, enquanto você sente que nada combina?',
    titleHighlight: 'estilosas',
    imageLabel: 'antes/depois de guarda-roupa/look, SUBSTITUIR',
    paragraph:
      'Enquanto você tenta resolver comprando mais, o problema real é a falta de um método pra escolher peças que conversam entre si e com o seu estilo. Resultado: o guarda-roupa cresce, mas o problema continua.',
    highlight:
      '💚 Com o guia +150 Looks, você aprende o método por etapas: descobrir seu estilo, escolher as peças-coringa certas, e multiplicar combinações sem gastar mais.',
    cta: 'Continuar →',
  },

  planejamento: {
    title: 'Quanto tempo você tem disponível hoje pra pensar em moda?',
    titleHighlight: 'moda',
    subtitle: 'Seu guia será adaptado à sua rotina',
    options: [
      { value: 'menos15min', emoji: '⚡', label: 'Menos de 15 minutos por dia', sublabel: 'Precisa ser prático' },
      { value: 'fimDeSemana', emoji: '🕐', label: 'Um tempinho nos fins de semana' },
      { value: 'planejarComCalma', emoji: '👗', label: 'Gosto de me planejar com calma quando posso' },
    ],
  },

  qtdPecas: {
    title: 'Quantas peças você estima que tem no guarda-roupa hoje?',
    titleHighlight: 'peças',
    subtitle: 'Uma estimativa já ajuda bastante',
    options: [
      { value: 'menos20', emoji: '👖', label: 'Menos de 20 peças' },
      { value: 'de20a40', emoji: '🧺', label: 'Entre 20 e 40 peças' },
      { value: 'de40a80', emoji: '👗', label: 'Entre 40 e 80 peças' },
      { value: 'mais80', emoji: '🗄️', label: 'Mais de 80 peças' },
      { value: 'naoTenhoIdeia', emoji: '🙈', label: 'São tantas que não tenho nem ideia...' },
    ],
  },

  usoReal: {
    title: 'Dessas peças, quantas você realmente usa no dia a dia?',
    titleHighlight: 'realmente',
    subtitle: 'Seja sincera, isso ajuda a personalizar seu guia',
    options: [
      { value: 'bemPoucas', emoji: '😅', label: 'Bem poucas', sublabel: 'sempre uso as mesmas 4 ou 5' },
      { value: 'menosMetade', emoji: '🤷‍♀️', label: 'Menos da metade', sublabel: 'o resto fica esquecido' },
      { value: 'boaParte', emoji: '🙂', label: 'Boa parte', sublabel: 'mas sinto que falta combinar melhor' },
      { value: 'quaseTodas', emoji: '✨', label: 'Quase todas', sublabel: 'já sei aproveitar o que tenho' },
    ],
  },

  ocasiao: {
    tag: 'PERGUNTA EXTRA',
    eyebrow: 'Quase lá! ✨',
    title: '[Nome], tem alguma ocasião especial que está te motivando a renovar seu estilo?',
    titleHighlight: 'ocasião',
    subtitle: 'Fixar uma ocasião aumenta muito sua motivação 💪',
    options: [
      { value: 'casamento', emoji: '👰', label: 'Casamento (convidada ou noiva) ›' },
      { value: 'viagem', emoji: '✈️', label: 'Viagem ›' },
      { value: 'novoEmprego', emoji: '💼', label: 'Novo emprego / entrevista ›' },
      { value: 'eventoSocial', emoji: '🎉', label: 'Evento social ›' },
      { value: 'ensaioFotografico', emoji: '📸', label: 'Ensaio fotográfico ›' },
      { value: 'sentirBem', emoji: '💚', label: 'Quero me sentir bem comigo mesma ›' },
      { value: 'nenhuma', emoji: '🚫', label: 'Nenhuma específica ›' },
    ],
  },

  prazo: {
    tag: 'ÚLTIMA ETAPA',
    title: 'Em quanto tempo você quer transformar seu estilo?',
    titleHighlight: 'transformar',
    subtitle: 'Isso vai calcular sua projeção personalizada',
    options: [
      { value: 'semana1', emoji: '⚡', label: '1 semana', sublabel: 'Quero começar já' },
      { value: 'semanas2', emoji: '🔥', label: '2 semanas', sublabel: 'Ritmo constante' },
      { value: 'mes1', emoji: '🌿', label: '1 mês', sublabel: 'Sem pressa' },
      { value: 'semPrazo', emoji: '🏆', label: 'Sem prazo', sublabel: 'No meu tempo' },
    ],
    footnote: '💡 Com o guia +150 Looks, você já sai montando combinações novas nas primeiras 24 horas.',
  },

  projecao: {
    eyebrow: '🎯 Com base no seu diagnóstico...',
    title:
      'Hoje você enxerga poucas combinações no seu guarda-roupa. Com o método +150 Looks, isso pode virar +150 combinações reais!',
    titleHighlight: 'combinações',
    callout: '🎊 Boa notícia! Seu estilo pede looks incríveis com poucas peças',
    chart: {
      fromLabel: 'Hoje',
      fromSublabel: 'poucas combinações',
      toLabel: 'Com o Guia',
      toSublabel: '150+ combinações',
    },
    paragraph:
      '🎊 Seguindo o guia, [Nome] pode chegar em [ocasião escolhida na Etapa 18] com looks que combinam 100% com o seu estilo [ESTILO_RESULTADO]!',
    cta: 'Ver meu Diagnóstico Completo →',
  },

  provaSocial2: {
    title: 'Veja o que essas mulheres falaram sobre o guia',
    titleHighlight: 'mulheres',
    benefitsTitle: '🏆 Por que o guia funciona pra qualquer estilo:',
    benefits: [
      '✅ Peças-coringa que combinam entre si',
      '✅ +150 combinações prontas, sem esforço',
      '✅ Looks montados em minutos',
      '✅ Confiança pra se vestir todos os dias',
    ],
    cta: 'Ver meu Diagnóstico Personalizado →',
  },

  desempate: {
    title: 'Ficamos entre 2 estilos pra você. Qual desses te representa mais?',
    titleHighlight: '2 estilos',
  },

  loading: {
    title: '⚙️ Gerando seu Diagnóstico de Estilo...',
    titleHighlight: 'Diagnóstico',
    steps: [
      { label: 'Analisando suas respostas...' },
      { label: 'Identificando seu estilo predominante...' },
      { label: 'Selecionando as peças-coringa ideais pra você...' },
      { label: 'Montando suas +150 combinações exclusivas...' },
    ],
    imageLabel: 'antes/depois de look, SUBSTITUIR',
    verifiedLabel: 'Resultado Verificado ✅',
  },

  diagnostico: {
    eyebrow: 'Com base no seu perfil...',
    title: '[Nome], seu estilo é: [ESTILO_RESULTADO]!',
    profileChartTitle: '📊 Seu Perfil de Estilo',
    profileSummaryTitle: '👗 Seu Perfil de Estilo',
    table: {
      headers: ['❌ Sem o guia', '✅ Com o guia'],
      rows: [
        ['Guarda-roupa cheio, nada pra vestir', 'Looks prontos'],
        ['Tempo perdido decidindo', 'Peças que sempre combinam'],
        ['Compras que não combinam', 'Confiança pra se vestir'],
        ['Poucas combinações', '+150 combinações reais'],
      ],
    },
    projectionTitle: '🗓️ Sua projeção personalizada',
    projectionText: 'Com base em perfis parecidos com o seu: você pode ter looks completamente novos em [prazo escolhido na Etapa 19].',
    cta: 'Ver meu Guia Personalizado →',
  },

  oferta: {
    title: '[Nome], seu guia +150 Looks com Apenas 20 Peças está pronto!',
    titleHighlight: 'pronto',
    subtitle: 'Escolha o acesso que faz mais sentido pra você:',
    badges: ['🏆 Mais escolhido', '⭐ Melhor custo-benefício'],
    offerTitle: 'Super Oferta',
    offerSubtitle: 'O caminho mais rápido pra multiplicar seus looks com poucas peças',
    includedTitle: '✅ O que está incluso:',
    includedItems: [
      { label: 'Guia +150 Looks com Apenas 20 Peças', highlightSuffix: 'baseado no seu estilo [ESTILO_RESULTADO]' },
      { label: 'Guia de Cores Que Combinam com Seu Tom de Pele', value: 'R$97' },
      { label: 'Consultoria: Como Ter um Guarda-Roupa Inteligente', value: 'R$197' },
      { label: 'Guia: Como Adaptar Seus Looks Para Todas as Estações', value: 'R$87' },
      { label: 'Mapa de Combinações de Cores Para Multiplicar Seus Looks', value: 'R$87' },
      { label: 'Guia dos Sapatos: Para Nunca Mais Errar na Escolha do Calçado', value: 'R$97' },
    ],
    priceOld: 'R$594,90',
    priceNew: 'R$29,90',
    priceFootnote: '🔒 Pagamento único · Acesso vitalício · Atualizações inclusas',
    cta1: '✅ Quero meu guia completo com todos os bônus →',
    payNote: '📌 Pague uma vez e tenha acesso pra sempre',
    guaranteeTitle: 'Garantia: 90 dias incondicionais',
    guaranteeText:
      'Risco ZERO. Se você não gostar do guia, por qualquer motivo, dentro de 90 dias após a compra, basta pedir seu dinheiro de volta.',
    recapTitle: '📋 Resumindo...',
    recapParagraphs: [
      'Pode ser a última vez que você acessa esta página, então sugiro que garanta seu acesso agora.',
      'A proposta é simples e clara: você vai aprender na prática como montar mais de 150 looks usando apenas 20 peças-chave, alinhadas ao seu estilo [ESTILO_RESULTADO].',
    ],
    notNeedTitle: 'Você não precisa:',
    notNeedItems: [
      'Comprar um guarda-roupa novo',
      'Gastar rios de dinheiro em roupa',
      'Abrir mão do seu jeito de se vestir',
    ],
    recapClosing: [
      'Acho justo você ver por dentro e, se não gostar, é só pedir reembolso dentro de 90 dias.',
      'Tudo que você precisa fazer agora é clicar no botão abaixo.',
    ],
    cta2: '✅ Quero garantir meu acesso agora →',
    aboutTitle: '👋 Quem sou eu?',
    aboutClosing: 'Você está a um clique de descobrir seu estilo e nunca mais sentir que não tem nada pra vestir.',
    cta3: '✅ Quero garantir meu acesso agora →',
  },
};
