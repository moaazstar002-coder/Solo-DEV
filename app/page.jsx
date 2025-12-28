import Link from "next/link";
import { Swords, Eye } from "lucide-react";
import StatusWindow from "@/components/system/StatusWindow";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute -top-[20%] right-0 w-[800px] h-[800px] rounded-full bg-blue-600/20 blur-[120px] mix-blend-screen animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[100px]"></div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Left Side - Hero Section */}
          <div className="flex-1 flex flex-col gap-8 text-center lg:text-left z-20">
            {/* System Online Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-500/10 border border-blue-500/30 w-fit mx-auto lg:mx-0 shadow-[0_0_10px_rgba(59,130,246,0.2)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-xs font-bold text-blue-400 tracking-wider uppercase">
                System Online v1.0
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.0] tracking-tight">
              Level Up Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
                Programming Skills
              </span>
            </h1>

            {/* Description */}
            <p className="text-slate-600 dark:text-slate-400 text-lg sm:text-xl font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 border-l-2 border-blue-500/30 pl-4 lg:pl-6 text-left">
              The system invites you to master algorithms and conquer bugs.
              Complete daily quests, earn XP, and awaken your true potential as
              a developer.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <Link
                href="/awakening"
                className="relative group overflow-hidden flex h-14 items-center justify-center gap-3 rounded bg-blue-600 px-8 text-white font-bold text-lg hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                <span>Accept Quest</span>
                <Swords className="w-6 h-6" />
              </Link>

              <button className="flex h-14 items-center justify-center gap-2 rounded border border-slate-300 dark:border-white/20 bg-transparent px-8 text-slate-700 dark:text-white font-bold text-lg hover:bg-white/5 transition-colors">
                <Eye className="w-6 h-6" />
                <span>Inspect Demo</span>
              </button>
            </div>

            {/* Stats Footer */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 opacity-80">
              <div className="flex items-center gap-2 text-slate-400 text-sm font-mono">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span>2,405 Players Online</span>
              </div>
              <span className="text-slate-600 dark:text-slate-600">|</span>
              <div className="flex items-center gap-2 text-slate-400 text-sm font-mono">
                <span className="text-yellow-500">🏆</span>
                <span>Season 1 Ranking</span>
              </div>
            </div>
          </div>

          {/* Right Side - Status Window */}
          <div className="flex-1 w-full max-w-[500px] lg:mt-0 mt-8 relative">
            <StatusWindow />
          </div>
        </div>
      </div>

      {/* Skill Badges Footer */}
      <div className="w-full border-t border-slate-200 dark:border-white/5 bg-background-light dark:bg-[#020617] py-8 relative z-10">
        <div className="mx-auto max-w-7xl px-4 flex justify-center flex-wrap gap-8 md:gap-16 opacity-40 hover:opacity-100 transition-opacity duration-500">
          <span className="text-lg font-bold font-mono text-slate-400 hover:text-blue-400 cursor-default transition-colors">
            PYTHON_MASTERY
          </span>
          <span className="text-lg font-bold font-mono text-slate-400 hover:text-yellow-400 cursor-default transition-colors">
            JS_ES6+
          </span>
          <span className="text-lg font-bold font-mono text-slate-400 hover:text-orange-400 cursor-default transition-colors">
            RUST_LANG
          </span>
          <span className="text-lg font-bold font-mono text-slate-400 hover:text-cyan-400 cursor-default transition-colors">
            GO_ROUTINES
          </span>
          <span className="text-lg font-bold font-mono text-slate-400 hover:text-blue-500 cursor-default transition-colors">
            REACT_HOOKSs
          </span>
        </div>
      </div>
    </main>
  );
}
