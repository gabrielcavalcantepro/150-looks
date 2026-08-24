// Todos os placeholders de conteúdo pendente ([SUBSTITUIR] / [EM ABERTO]),
// centralizados aqui para edição fácil sem tocar em lógica ou nos templates
// das etapas. Fonte: quiz-estilo-textos-etapas.md.

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
export const LANDING_MOCKUP_IMAGE = null; // '[IMAGEM: mockup do guia — celular/tablet/PDF]'

// ---- Etapa 3 — Visual (looks) ----
export const LOOK_IMAGES = {
  look1: null, // '[IMAGEM 1: look casual/confortável]'
  look2: null, // '[IMAGEM 2: look clássico/alfaiataria discreta]'
  look3: null, // '[IMAGEM 3: look ousado/misturado/estampado]'
  look4: null, // '[IMAGEM 4: look justo/sensual]'
  look5: null, // '[IMAGEM 5: look romântico/fluido — vestido leve, tecido fluido, detalhes delicados]'
};
export const LOOK_IMAGE_LABELS = {
  look1: 'look casual/confortável',
  look2: 'look clássico/alfaiataria discreta',
  look3: 'look ousado/misturado/estampado',
  look4: 'look justo/sensual',
  look5: 'look romântico/fluido — vestido leve, tecido fluido, detalhes delicados',
};

// ---- Etapa 7 — Prova social #1 ----
// Valor decidido (não é mais placeholder) — editável aqui.
export const SOCIAL_PROOF_COUNT_STEP7 = '20.000';
export const BEFORE_AFTER_IMAGE_STEP7 = null; // '[IMAGEM: antes/depois de look — SUBSTITUIR]'
export const BEFORE_AFTER_IMAGE_STEP7_2 = null; // '[IMAGEM: antes/depois de look 2 — SUBSTITUIR]'
export const BEFORE_AFTER_IMAGE_STEP7_3 = null; // '[IMAGEM: antes/depois de look 3 — SUBSTITUIR]'

// ---- Etapa 13 — Educativo #1 ----
export const EMBEDDED_TESTIMONIAL_STEP13 = '[Depoimento embutido: print de comentário/DM, SUBSTITUIR]';
export const TESTIMONIAL_IMAGE_STEP13_1 = null; // '[IMAGEM: depoimento 1 — SUBSTITUIR]'
export const TESTIMONIAL_IMAGE_STEP13_2 = null; // '[IMAGEM: depoimento 2 — SUBSTITUIR]'

// ---- Etapa 14 — Educativo #2 ----
export const BEFORE_AFTER_IMAGE_STEP14 = null; // '[IMAGEM: antes/depois de guarda-roupa/look — SUBSTITUIR]'

// ---- Etapa 20 — Projeção personalizada (2 imagens comparativas) ----
export const PROJECTION_IMAGE_BEFORE = null; // '[IMAGEM: hoje, poucas combinações — SUBSTITUIR]'
export const PROJECTION_IMAGE_AFTER = null; // '[IMAGEM: com o guia, 150+ combinações — SUBSTITUIR]'

// ---- Etapa 21 — Mais prova social ----
export const TESTIMONIAL_IMAGE_STEP21_1 = null; // '[IMAGEM: depoimento 1 — SUBSTITUIR]'
export const TESTIMONIAL_IMAGE_STEP21_2 = null; // '[IMAGEM: depoimento 2 — SUBSTITUIR]'
export const TESTIMONIAL_IMAGE_STEP21_3 = null; // '[IMAGEM: depoimento 3 — SUBSTITUIR]'

// ---- Etapa 22 — Loading ----
export const BEFORE_AFTER_IMAGE_STEP22 = null; // '[IMAGEM: antes/depois de look — SUBSTITUIR]'
export const TESTIMONIAL_QUOTE_STEP22 = '[SUBSTITUIR: depoimento]';
export const SOCIAL_PROOF_COUNT_STEP22 = '[SUBSTITUIR: nº]';

// ---- Etapa 24 — Oferta ----
export const SOCIAL_PROOF_COUNT_OFFER = '[SUBSTITUIR: nº]';
export const AUTHOR_NAME = '[nome da autora]';
export const AUTHOR_BIO = '[EM ABERTO: bio será enviada posteriormente ao Claude Code]';
export const AUTHOR_PHOTO = null; // '[EM ABERTO — foto de transformação da autora, se houver]'

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
