import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { NotebookPen, Webhook as WebhookIcon } from 'lucide-react';
import Home from './pages/Home';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import Webhook from './pages/Webhook';

const App = () => {
  const location = useLocation();

  return (
    <>
      {/* Top nav */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-40">
        <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-black/60 border border-sky-500/20 backdrop-blur">
          <Link
            to="/"
            className={`text-xs uppercase tracking-[0.25em] ${
              location.pathname === '/' ? 'text-sky-400' : 'text-slate-400 hover:text-sky-300'
            }`}
          >
            Paradox Lab
          </Link>
          <span className="w-px h-4 bg-slate-800" />
          <Link
            to="/blog"
            className={`inline-flex items-center gap-1 text-xs ${
              location.pathname.startsWith('/blog')
                ? 'text-sky-400'
                : 'text-slate-400 hover:text-sky-300'
            }`}
          >
            <NotebookPen size={14} />
            <span className="tracking-[0.25em] uppercase">Blog</span>
          </Link>
          <span className="w-px h-4 bg-slate-800" />
          <Link
            to="/webhook"
            className={`inline-flex items-center gap-1 text-xs ${
              location.pathname.startsWith('/webhook')
                ? 'text-sky-400'
                : 'text-slate-400 hover:text-sky-300'
            }`}
          >
            <WebhookIcon size={14} />
            <span className="tracking-[0.25em] uppercase">Webhook</span>
          </Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/webhook" element={<Webhook />} />
      </Routes>
    </>
  );
};

export default App;

