const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#050505] text-slate-300 font-mono selection:bg-emerald-500/30">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(16,185,129,0.08),transparent)] pointer-events-none" />
      <main className="relative max-w-4xl mx-auto pt-24 px-6 pb-32">{children}</main>
    </div>
  );
};

export default Layout;

