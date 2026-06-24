import { posts } from './src/data/blogPosts';

for (const p of posts) {
  const allText: string[] = [];
  for (const section of p.content) {
    if (section.heading) allText.push(section.heading);
    for (const seg of section.segments) {
      if (typeof seg === 'string') allText.push(seg);
      else allText.push(seg.text);
    }
  }
  const full = allText.join(' ');
  const words = full.split(/\s+/).filter((w) => w.length > 0).length;
  const status = words >= 1500 ? 'OK' : 'LOW';
  console.log(p.slug.padEnd(55), '->', String(words).padStart(4), 'words', status);
}
