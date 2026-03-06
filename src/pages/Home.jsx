import { Github, Mail, ExternalLink, Terminal, Code, Award, BookOpen } from 'lucide-react';
import Layout from '../components/Layout';

const socialLinks = [
  { icon: <Mail size={20} />, href: 'mailto:junwoo@paradoxlab.io', label: 'Email' },
  { icon: <Github size={20} />, href: 'https://github.com/paradoxmyung', label: 'Github' },
  { icon: <ExternalLink size={20} />, href: 'https://www.linkedin.com/in/paradoxmyung/', label: 'LinkedIn' },
  { icon: <BookOpen size={20} />, href: 'https://blog.naver.com/dokingkns0909', label: 'Blog' },
];

const Home = () => {
  return (
    <Layout>
      {/* Header */}
      <header className="mb-20">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs tracking-[0.3em] text-emerald-500 font-bold uppercase">
            Myung JunWoo
          </span>
        </div>
        <h1 className="text-5xl font-black text-white mb-4 tracking-tighter">PARADOX</h1>
        <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
          Security Researcher @ <span className="text-white border-b border-emerald-500/50">ENKI Whitehat</span>.{' '}
        </p>

        <div className="flex gap-5 mt-8">
          {socialLinks.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={item.label}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500/50 hover:text-emerald-400 transition-all"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </header>

      {/* Experience */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <section>
          <h2 className="text-sm uppercase tracking-[0.2em] text-emerald-500 font-bold mb-6 flex items-center gap-2">
            <Terminal size={18} /> Career
          </h2>
          <div className="space-y-6 border-l border-slate-800 pl-4">
            <div className="relative">
              <div className="absolute -left-[21px] top-1 w-2 h-2 rounded-full bg-emerald-500" />
              <h3 className="text-white font-bold">ENKI Whitehat</h3>
              <p className="text-xs text-emerald-500/70 mb-1">2026.02 - Present · Seoul, KR</p>
              <p className="text-sm text-slate-400">
                Web/App/IoT Penetration Testing
                <br />
                Security Consulting
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-[21px] top-1 w-2 h-2 rounded-full bg-slate-700" />
              <h3 className="font-bold text-slate-300">Find the Gap</h3>
              <p className="text-xs text-slate-500 mb-1">2024.10 - 2026.02 · Seoul, KR</p>
              <p className="text-sm text-slate-500 leading-relaxed">
                Internal Service Vulnerability Assessment
                <br />
                Offensive Security Research
                <br />
                Bugbounty Evaluation
                <br />
                Security Consulting
                <br />
                Full-Stack Develop
                <br />
                Security Education
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Credentials */}
      <section className="mb-20">
        <h2 className="text-sm uppercase tracking-[0.2em] text-emerald-500 font-bold mb-6 flex items-center gap-2">
          <Award size={18} /> Credentials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/40">
            <p className="text-[11px] uppercase tracking-[0.2em] text-emerald-400 mb-1">BoB 12</p>
            <p className="text-sm text-emerald-100 font-semibold mb-1">BoB 12기 보안제품개발</p>
            <p className="text-xs text-emerald-200/80 leading-relaxed">
              보안제품개발 트랙 수료
            </p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/40">
            <p className="text-[11px] uppercase tracking-[0.2em] text-emerald-400 mb-1">BoB 14</p>
            <p className="text-sm text-emerald-100 font-semibold mb-1">
              BoB 14기 Project Leader (Team SAPIENS)
            </p>
            <p className="text-xs text-emerald-200/80 leading-relaxed">
              Web3 Auditing via AI PL 수행 
            </p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/40">
            <p className="text-[11px] uppercase tracking-[0.2em] text-emerald-400 mb-1">K-SHIELD JR</p>
            <p className="text-sm text-emerald-100 font-semibold mb-1">K-Shield Jr. 12기</p>
            <p className="text-xs text-emerald-200/80 leading-relaxed">
              취약점 분석 트랙 수료
            </p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/40">
            <p className="text-[11px] uppercase tracking-[0.2em] text-emerald-400 mb-1">COMMUNITY</p>
            <p className="text-sm text-emerald-100 font-semibold mb-1">BISC for 14기 Conference Speaker</p>
            <p className="text-xs text-emerald-200/80 leading-relaxed">
              Real-World Bug Bounty 관련 실전 패턴과 평가자 관점의 인사이트를 공유하는 세션을 진행했습니다.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/40 md:col-span-2">
            <p className="text-[11px] uppercase tracking-[0.2em] text-emerald-400 mb-1">BUG BOUNTY</p>
            <p className="text-sm text-emerald-100 font-semibold mb-1">Bugbounty Contributor</p>
            <p className="text-xs text-emerald-200/80 leading-relaxed">
              HackerOne / Bugcrowd 프로그램에서 실제 서비스 취약점을 발굴·제보하며, 실전 환경에서의 공격 벡터를
              다뤄왔습니다.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;

