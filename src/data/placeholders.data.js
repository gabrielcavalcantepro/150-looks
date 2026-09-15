// Todos os placeholders de conteúdo pendente ([SUBSTITUIR] / [EM ABERTO]),
// centralizados aqui para edição fácil sem tocar em lógica ou nos templates
// das etapas. Fonte: quiz-estilo-textos-etapas.md.
//
// Imagens reais ficam em etapa-N/ na raiz do projeto (arquivos M.webp),
// geradas a partir de arquivos soltos na raiz via `npm run images:convert`.
// Propositalmente NÃO ficam em public/: o helper asset() monta o caminho
// absoluto a partir da raiz, mesmo padrão que index.html já usa pra
// /src/main.js, e não depende de import.meta.env (que só existe quando o
// app passa pelo Vite) — assim funciona igual rodando `npm run dev` ou
// abrindo o projeto direto com uma extensão tipo Live Server.
function asset(path) {
  return `/${path}`;
}

// ---- Etapa 1 — Landing ----
// Contador sorteado em runtime (não é mais um placeholder fixo) — faixa
// facilmente editável. Depois de exibido, o número segue subindo sozinho
// em intervalos e incrementos aleatórios, simulando um contador ao vivo.
export const LANDING_COUNT_MIN = 140;
export const LANDING_COUNT_MAX = 160;
export const LANDING_COUNT_INCREMENT_MIN = 1;
export const LANDING_COUNT_INCREMENT_MAX = 2;
export const LANDING_COUNT_INTERVAL_MIN_MS = 2500;
export const LANDING_COUNT_INTERVAL_MAX_MS = 6000;
export const LANDING_MOCKUP_IMAGE = asset('etapa-1/1.webp');

// ---- Etapa 3 — Visual (looks) ----
// As mesmas 7 imagens são reaproveitadas na Etapa 21B (desempate) e na
// Etapa 23 (Diagnóstico) — não é preciso produzir imagens extras pra isso.
export const LOOK_IMAGES = {
  look1: asset('etapa-3/1.webp'), // look casual/confortável: jeans, tênis, peças descomplicadas
  look2: asset('etapa-3/2.webp'), // look elegante/sofisticado: vestido tubinho ou alfaiataria com caimento impecável
  look3: asset('etapa-3/3.webp'), // look ousado/estampado/mix
  look4: asset('etapa-3/4.webp'), // look justo/sensual
  look5: asset('etapa-3/5.webp'), // look romântico/fluido: vestido leve, tecido fluido, detalhes delicados
  look6: asset('etapa-3/6.webp'), // look clássico atemporal: calça alfaiataria, camisa branca, blazer estruturado, cores neutras
  look7: asset('etapa-3/7.webp'), // look estruturado urbano: peças statement, cores fortes/pretas, silhueta marcante
};
export const LOOK_IMAGE_LABELS = {
  look1: 'look casual/confortável: jeans, tênis, peças descomplicadas',
  look2: 'look elegante/sofisticado: vestido tubinho ou alfaiataria com caimento impecável',
  look3: 'look ousado/estampado/mix',
  look4: 'look justo/sensual',
  look5: 'look romântico/fluido: vestido leve, tecido fluido, detalhes delicados',
  look6: 'look clássico atemporal: calça alfaiataria, camisa branca, blazer estruturado, cores neutras',
  look7: 'look estruturado urbano: peças statement, cores fortes/pretas, silhueta marcante',
};

// ---- Etapa 7 — Prova social #1 ----
// Valor decidido (não é mais placeholder) — editável aqui.
export const SOCIAL_PROOF_COUNT_STEP7 = '20.000';
export const BEFORE_AFTER_IMAGE_STEP7 = asset('etapa-7/1.webp');
export const BEFORE_AFTER_IMAGE_STEP7_2 = asset('etapa-7/2.webp');
export const BEFORE_AFTER_IMAGE_STEP7_3 = asset('etapa-7/3.webp');

// ---- Etapa 13 — Educativo #1 ----
export const TESTIMONIAL_IMAGE_STEP13_1 = asset('etapa-13/1.webp');
export const TESTIMONIAL_IMAGE_STEP13_2 = asset('etapa-13/2.webp');

// ---- Etapa 14 — Educativo #2 ----
export const BEFORE_AFTER_IMAGE_STEP14 = asset('etapa-14/1.webp');

// ---- Etapa 20 — Projeção personalizada (2 imagens comparativas) ----
export const PROJECTION_IMAGE_BEFORE = asset('etapa-20/1.webp');
export const PROJECTION_IMAGE_AFTER = asset('etapa-20/2.webp');

// ---- Etapa 21 — Mais prova social ----
// Decidido: só 2 imagens de depoimento nessa etapa (não 3).
export const TESTIMONIAL_IMAGE_STEP21_1 = asset('etapa-21/1.webp');
export const TESTIMONIAL_IMAGE_STEP21_2 = asset('etapa-21/2.webp');

// ---- Etapa 22 — Loading ----
export const BEFORE_AFTER_IMAGE_STEP22 = asset('etapa-22/1.webp');

// ---- Etapa 24 — Oferta ----
export const AUTHOR_NAME = 'Camila Duarte';
// Um parágrafo por item — a frase de fechamento ("Você está a um clique...")
// já vive em CONTENT.oferta.aboutClosing, não repetir aqui.
export const AUTHOR_BIO = [
  'Prazer, sou Camila Duarte, consultora de imagem há mais de 8 anos.',
  'Comecei exatamente como você: com um guarda-roupa cheio e a sensação constante de que não tinha nada pra vestir. Foi tentando resolver isso pra mim mesma que descobri que o problema nunca foi falta de roupa, era falta de método.',
  'Essa descoberta mudou minha vida de um jeito que eu não esperava. Passei a estudar moda e consultoria de imagem a fundo, me especializei em identificar estilos pessoais e, aos poucos, transformei essa paixão em profissão. Hoje trabalho todos os dias ajudando mulheres a enxergarem o próprio potencial através das roupas que já têm.',
  'Já ajudei mais de 3.200 mulheres a descobrirem seu estilo e montarem guarda-roupas que realmente funcionam, com peças que conversam entre si. O guia +150 Looks nasceu desse mesmo método que uso com minhas clientes particulares, só que acessível pra qualquer mulher, sem precisar de consultoria individual.',
];
export const AUTHOR_PHOTO = asset('etapa-24/1.webp');

// Link de checkout para onde os 3 CTAs da Etapa 24 devem apontar.
// Enquanto não for um link http(s) válido, os botões não navegam.
export const CHECKOUT_URL = '[SUBSTITUIR: link de checkout]';

// ---- Pop-up de prova social rotativo (elemento global, seção 10 do spec) ----
// Cada notificação combina um nome (sempre feminino) e uma cidade+UF
// sorteados aleatoriamente destas listas (ver ui/socialProofToast.js) —
// nunca repete a mesma mulher/cidade da notificação anterior. Arrays
// fáceis de editar/trocar por qualquer nome ou cidade.
export const SOCIAL_PROOF_NAMES = [
  'Ana', 'Beatriz', 'Camila', 'Daniela', 'Fernanda', 'Gabriela', 'Isabela',
  'Juliana', 'Larissa', 'Mariana', 'Natália', 'Patrícia', 'Rafaela',
  'Sabrina', 'Tatiane', 'Bruna', 'Carla', 'Débora', 'Eduarda', 'Priscila',
];

export const SOCIAL_PROOF_CITIES = [
  { city: 'São Paulo', uf: 'SP' },
  { city: 'Campinas', uf: 'SP' },
  { city: 'Rio de Janeiro', uf: 'RJ' },
  { city: 'Belo Horizonte', uf: 'MG' },
  { city: 'Uberlândia', uf: 'MG' },
  { city: 'Curitiba', uf: 'PR' },
  { city: 'Londrina', uf: 'PR' },
  { city: 'Porto Alegre', uf: 'RS' },
  { city: 'Salvador', uf: 'BA' },
  { city: 'Recife', uf: 'PE' },
  { city: 'Fortaleza', uf: 'CE' },
  { city: 'Brasília', uf: 'DF' },
  { city: 'Goiânia', uf: 'GO' },
  { city: 'Florianópolis', uf: 'SC' },
  { city: 'Manaus', uf: 'AM' },
  { city: 'Belém', uf: 'PA' },
  { city: 'Vitória', uf: 'ES' },
  { city: 'João Pessoa', uf: 'PB' },
  { city: 'Natal', uf: 'RN' },
  { city: 'Maceió', uf: 'AL' },
];
