import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const [englishTerm, germanTerm] = process.argv.slice(2);

if (!englishTerm || !germanTerm) {
  console.error('Usage: npx tsx replace-term.ts <EnglishTerm> <GermanTerm>');
  process.exit(1);
}

const CODE_EXTENSIONS = new Set(['.cs', '.ts', '.js', '.py', '.java', '.kt']);
const SKIP_DIRS = new Set(['node_modules', '.git', '.venv', 'bin', 'obj']);

function walk(dir: string): string[] {
  return readdirSync(dir).flatMap(name => {
    if (SKIP_DIRS.has(name)) return [];
    const full = join(dir, name);
    return statSync(full).isDirectory() ? walk(full) : [full];
  });
}

const pattern = new RegExp(`\\b${englishTerm}\\b`, 'g');
let totalReplacements = 0;

for (const file of walk('.')) {
  if (!CODE_EXTENSIONS.has(extname(file))) continue;
  const content = readFileSync(file, 'utf-8');
  const updated = content.replace(pattern, germanTerm);
  if (updated !== content) {
    const count = (content.match(pattern) ?? []).length;
    writeFileSync(file, updated);
    console.log(`${file}: ${count} replacement(s)`);
    totalReplacements += count;
  }
}

console.log(`\nTotal: ${totalReplacements} replacement(s) across the codebase.`);
