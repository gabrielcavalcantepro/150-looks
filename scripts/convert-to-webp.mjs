#!/usr/bin/env node
// Converte imagens soltas na raiz do projeto (padrão "etapa-N.png" ou
// "etapa-N.M.png"/"etapa-N-M.png") para WebP e move cada uma para a pasta
// etapa-N/ correspondente (também na raiz), renomeada como "M.webp" (ou
// "1.webp" quando não há sufixo).
//
// As pastas etapa-N/ ficam na raiz do projeto (não em public/) de propósito:
// assim as imagens carregam certinho tanto rodando `npm run dev` quanto
// abrindo o projeto com uma extensão tipo Live Server, sem depender do Vite.
//
// Reutilizável: sempre que novas imagens forem soltas direto na raiz
// seguindo esse padrão de nome, rode `npm run images:convert`.

import { readdir, unlink, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '..');

const PATTERN_SUB = /^etapa-(\d+)[.-](\d+)\.(png|jpe?g|webp)$/i;
const PATTERN_SINGLE = /^etapa-(\d+)\.(png|jpe?g|webp)$/i;

async function run() {
  const entries = await readdir(ROOT_DIR, { withFileTypes: true });
  const files = entries
    .filter((e) => e.isFile())
    .map((e) => e.name)
    .sort();

  const claimed = new Set();
  function nextAvailable(step, desired) {
    let n = desired;
    while (claimed.has(`${step}:${n}`)) n += 1;
    claimed.add(`${step}:${n}`);
    return n;
  }

  const converted = [];
  const warnings = [];

  for (const file of files) {
    let step;
    let sub;
    let matched = file.match(PATTERN_SUB);
    if (matched) {
      step = matched[1];
      sub = Number(matched[2]);
    } else {
      matched = file.match(PATTERN_SINGLE);
      if (matched) {
        step = matched[1];
        sub = 1;
      } else {
        continue; // não segue o padrão etapa-N(.M) — ignora
      }
    }

    const destDir = path.join(ROOT_DIR, `etapa-${step}`);
    await mkdir(destDir, { recursive: true });

    const finalSub = nextAvailable(step, sub);
    if (finalSub !== sub) {
      warnings.push(
        `AVISO: ${file} colidiu com outro arquivo do mesmo número em etapa-${step} — salvo como ${finalSub}.webp em vez de ${sub}.webp. Confira a ordem.`
      );
    }

    const destFile = path.join(destDir, `${finalSub}.webp`);
    const srcFile = path.join(ROOT_DIR, file);

    await sharp(srcFile).webp({ quality: 82 }).toFile(destFile);
    await unlink(srcFile);
    converted.push(`${file} -> etapa-${step}/${finalSub}.webp`);
  }

  console.log('Convertidas:');
  converted.forEach((line) => console.log('  ' + line));
  if (warnings.length) {
    console.log('\nAvisos:');
    warnings.forEach((line) => console.log('  ' + line));
  }
  if (!converted.length && !warnings.length) {
    console.log('  (nenhum arquivo etapa-N.png solto na raiz do projeto encontrado)');
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
