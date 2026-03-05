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
          Security Researcher at <span className="text-white border-b border-emerald-500/50">ENKI Whitehat</span>.{' '}
          Vulnerability Assessment & Offensive Research에 집중하고 있습니다.
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
                Full-Stack Develop (NestJS, NodeJS, Python, AWS)
                <br />
                Security Education
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Core Expertise */}
      <section className="mb-20">
        <h2 className="text-sm uppercase tracking-[0.2em] text-emerald-500 font-bold mb-8">Specialized in</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Vulnerability Research', 'Pentesting', 'Full-stack Dev', 'Security Consulting'].map((tech) => (
            <div
              key={tech}
              className="py-4 px-2 rounded-xl bg-gradient-to-b from-slate-900 to-black border border-slate-800 text-center group hover:border-emerald-500/30 transition-all"
            >
              <span className="text-xs text-slate-500 group-hover:text-emerald-400 transition-colors uppercase font-bold">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Credentials */}
      <section className="mb-20">
        <h2 className="text-sm uppercase tracking-[0.2em] text-emerald-500 font-bold mb-6 flex items-center gap-2">
          <Award size={18} /> Credentials
        </h2>
        <p className="text-xs text-slate-500 mb-4">
          국내 주요 보안 양성 프로그램과 실전 무대에서 검증된 이력들입니다.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/40">
            <p className="text-[11px] uppercase tracking-[0.2em] text-emerald-400 mb-1">BoB 12</p>
            <p className="text-sm text-emerald-100 font-semibold mb-1">BoB 12기 보안제품개발</p>
            <p className="text-xs text-emerald-200/80 leading-relaxed">
              보안 제품 개발 트랙에서 실서비스 연계 보안 솔루션의 설계·구현 경험을 쌓았습니다.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/40">
            <p className="text-[11px] uppercase tracking-[0.2em] text-emerald-400 mb-1">BoB 14</p>
            <p className="text-sm text-emerald-100 font-semibold mb-1">
              BoB 14기 Project Leader (Team SAPIENS)
            </p>
            <p className="text-xs text-emerald-200/80 leading-relaxed">
              Web3 Auditing via AI 프로젝트를 리딩하며, Rutile 보안 플랫폼을 설계·운영했습니다.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/40">
            <p className="text-[11px] uppercase tracking-[0.2em] text-emerald-400 mb-1">K-SHIELD JR</p>
            <p className="text-sm text-emerald-100 font-semibold mb-1">K-Shield Jr. 12기</p>
            <p className="text-xs text-emerald-200/80 leading-relaxed">
              실무 중심 사이버 보안 역량 강화를 목표로 한 공인 교육 과정을 수료했습니다.
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
            <p className="text-sm text-emerald-100 font-semibold mb-1">H1/BC Bugbounty Contributor</p>
            <p className="text-xs text-emerald-200/80 leading-relaxed">
              HackerOne / Bugcrowd 프로그램에서 실제 서비스 취약점을 발굴·제보하며, 실전 환경에서의 공격 벡터를
              다뤄왔습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Lab Status */}
      <section className="mb-20">
        <h2 className="text-sm uppercase tracking-[0.2em] text-emerald-500 font-bold mb-6 flex items-center gap-2">
          <Code size={18} /> Lab Status
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-gradient-to-b from-emerald-500/10 to-black border border-emerald-500/30">
            <p className="text-[11px] uppercase tracking-[0.25em] text-emerald-400 mb-2">Team</p>
            <h3 className="text-white font-bold text-lg mb-2">
              Team <span className="text-emerald-400">SAPIENS</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              현재 BoB 14기 프로젝트 리더로서 SAPIENS 팀을 이끌고 있으며,
              <br />
              실전형 Offensive Security 프로젝트를 주도하고 있습니다.
            </p>
            <a
              href="https://sapiens.red/"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1 text-[11px] text-emerald-300 mt-4 hover:underline"
            >
              Visit SAPIENS.RED <ExternalLink size={11} />
            </a>
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-b from-slate-900 to-black border border-slate-800">
            <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500 mb-2">Lab</p>
            <h3 className="text-white font-bold text-lg mb-2">Paradox Lab</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Paradox Lab은 개인 연구와 팀 프로젝트의 기술적 고도화를 위한 샌드박스로,
              취약점 연구, PoC 제작, 내부 서비스 보안 강화 아이디어를 실험하는 공간입니다.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;

