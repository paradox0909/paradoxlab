import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ArrowLeft, CalendarDays, Tag } from 'lucide-react';
import Layout from '../components/Layout';
import { getPostBySlug } from '../blog/postsIndex';

const components = {
  code({ inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '');
    if (inline || !match) {
      return (
        <code className="px-1.5 py-0.5 rounded bg-slate-900 text-emerald-300 text-[11px]" {...props}>
          {children}
        </code>
      );
    }
    return (
      <SyntaxHighlighter
        {...props}
        style={dracula}
        language={match[1]}
        PreTag="div"
        customStyle={{ background: '#020617', fontSize: '12px', borderRadius: '0.75rem' }}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    );
  },
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <Layout>
        <div className="mb-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft size={14} /> Back to blog
          </Link>
        </div>
        <p className="text-sm text-slate-400">해당 포스트를 찾을 수 없습니다.</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="mb-6">
        <Link
          to="/blog"
          className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-emerald-400 transition-colors"
        >
          <ArrowLeft size={14} /> Back to blog
        </Link>
      </div>

      <article>
        <header className="mb-8">
          <p className="text-xs tracking-[0.3em] text-emerald-500 font-bold uppercase mb-3">
            Paradox Lab / Entry
          </p>
          <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-3">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-500">
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
        </header>

        <div className="prose prose-invert max-w-none prose-pre:bg-transparent prose-pre:p-0 prose-code:font-mono prose-headings:text-emerald-400 prose-a:text-emerald-400">
          <ReactMarkdown components={components}>{post.content}</ReactMarkdown>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;

