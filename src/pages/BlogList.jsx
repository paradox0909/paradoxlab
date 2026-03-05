import { Link } from 'react-router-dom';
import { CalendarDays, Tag, ArrowRight } from 'lucide-react';
import Layout from '../components/Layout';
import { getAllPosts } from '../blog/postsIndex';

const BlogList = () => {
  const posts = getAllPosts();

  return (
    <Layout>
      <header className="mb-10">
        <p className="text-xs tracking-[0.3em] text-emerald-500 font-bold uppercase mb-3">
          Paradox Lab / Log
        </p>
        <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-3">
          Research Notes & Exploits
        </h1>
        <p className="text-sm text-slate-400 max-w-2xl">
          실전 환경에서 얻은 인사이트, 취약점 분석, 버그바운티 취약점 발굴법 등 여러가지 보안 관련 실험들을 정리합니다.
        </p>
      </header>

      <div className="space-y-5">
        {posts.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="block rounded-xl border border-slate-800 bg-slate-950/40 hover:border-emerald-500/40 hover:bg-slate-900/60 transition-all p-4 group"
          >
            <div className="flex items-center justify-between gap-3 mb-2">
              <h2 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors">
                {post.title}
              </h2>
              <ArrowRight
                size={16}
                className="text-slate-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-transform"
              />
            </div>
            <div className="flex items-center gap-4 text-[11px] text-slate-500 mb-2">
              {post.date && (
                <span className="inline-flex items-center gap-1">
                  <CalendarDays size={12} />
                  {post.date}
                </span>
              )}
              {post.tags?.length > 0 && (
                <span className="inline-flex items-center gap-1">
                  <Tag size={12} />
                  {post.tags.join(', ')}
                </span>
              )}
            </div>
            {post.summary && (
              <p className="text-xs text-slate-400 line-clamp-2">{post.summary}</p>
            )}
          </Link>
        ))}

        {posts.length === 0 && (
          <p className="text-sm text-slate-500">
            아직 게시된 포스트가 없습니다. <span className="text-emerald-400">/src/posts</span>에 마크다운 파일을
            추가하면 자동으로 이곳에 나타납니다.
          </p>
        )}
      </div>
    </Layout>
  );
};

export default BlogList;

