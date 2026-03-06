import { Construction } from 'lucide-react';
import Layout from '../components/Layout';

const Webhook = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800 mb-6">
          <Construction size={48} className="text-slate-500" />
        </div>
        <p className="text-xs tracking-[0.3em] text-emerald-500 font-bold uppercase mb-2">
          Paradox Lab / Webhook
        </p>
        <h1 className="text-2xl font-black text-white tracking-tight mb-3">
          공사중
        </h1>
        <p className="text-sm text-slate-500 max-w-md">
          XSS / SSRF 테스트용 웹훅 로그 기능은 준비 중입니다.
        </p>
      </div>
    </Layout>
  );
};

export default Webhook;
