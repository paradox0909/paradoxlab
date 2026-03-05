// 간단한 frontmatter 파서 (Buffer 없이 동작)
function parseFrontMatter(raw) {
  if (!raw.startsWith('---')) {
    return { data: {}, content: raw };
  }

  const [, fm, ...rest] = raw.split('---');
  const body = rest.join('---').trimStart();
  const lines = fm.split('\n').map((l) => l.trim()).filter(Boolean);

  const data = {};
  let currentArrayKey = null;

  for (const line of lines) {
    if (line.startsWith('- ') && currentArrayKey) {
      data[currentArrayKey].push(line.slice(2).trim());
      continue;
    }

    const [key, ...valueParts] = line.split(':');
    if (!key) continue;
    const rawValue = valueParts.join(':').trim();

    if (!rawValue) {
      // tags: 처럼 배열 시작
      currentArrayKey = key.trim();
      data[currentArrayKey] = [];
    } else {
      currentArrayKey = null;
      data[key.trim()] = rawValue;
    }
  }

  return { data, content: body };
}

// Vite will bundle all markdown files under /src/posts
const postFiles = import.meta.glob('/src/posts/**/*.{md,mdx}', {
  as: 'raw',
  eager: true,
});

export function getAllPosts() {
  const posts = Object.entries(postFiles).map(([path, raw]) => {
    const { data, content } = parseFrontMatter(raw);

    const slugMatch = path.match(/\/posts\/(.+)\.mdx?$/);
    const slug = slugMatch ? slugMatch[1] : path;

    return {
      slug,
      title: data.title ?? slug,
      date: data.date ?? null,
      tags: data.tags ?? [],
      summary: data.summary ?? '',
      content,
    };
  });

  // 최신 글이 위로 오도록 정렬
  return posts.sort((a, b) => {
    if (!a.date || !b.date) return 0;
    return new Date(b.date) - new Date(a.date);
  });
}

export function getPostBySlug(slug) {
  return getAllPosts().find((post) => post.slug === slug) ?? null;
}

