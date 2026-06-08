import { readFileSync, writeFileSync } from 'node:fs';

const FILE = 'DDD_GLOSSARY.md';
const content = readFileSync(FILE, 'utf-8');
const lines = content.split('\n');

const headerIdx = lines.findIndex(l => l.startsWith('|'));
const header = lines.slice(headerIdx, headerIdx + 2);
const dataRows = lines.slice(headerIdx + 2).filter(l => l.startsWith('|'));

const sorted = [...dataRows].sort((a, b) => {
  const termA = a.split('|')[1].trim();
  const termB = b.split('|')[1].trim();
  return termA.localeCompare(termB, 'de');
});

writeFileSync(FILE, [...lines.slice(0, headerIdx), ...header, ...sorted, ''].join('\n'));
console.log(`Sorted ${sorted.length} entries alphabetically.`);
