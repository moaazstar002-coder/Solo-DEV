"use client";

import { Grid3x3 } from "lucide-react";

export default function StatusWindow() {
  const stats = [
    { label: "STR (Syntax)", value: 245 },
    { label: "VIT (Uptime)", value: 180 },
    { label: "AGI (Typing)", value: 310 },
    { label: "INT (Algo)", value: 420 },
    { label: "SEN (Debug)", value: 195 },
  ];

  return (
    <div className="relative">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-blue-500/20 blur-[60px] rounded-full z-0"></div>

      {/* Main Status Window */}
      <div className="relative z-10 bg-gradient-to-b from-slate-900/90 to-slate-950/95 backdrop-blur-xl border border-blue-500/40 rounded shadow-[0_0_50px_-10px_rgba(37,99,235,0.3)] animate-float">
        {/* Header */}
        <div className="bg-blue-950/50 border-b border-blue-500/30 px-5 py-3 flex justify-between items-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50"></div>

          <span className="text-blue-400 font-bold tracking-[0.2em] text-xs uppercase flex items-center gap-2">
            <Grid3x3 className="w-4 h-4" />
            Status Window
          </span>

          <div className="flex gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Player Info */}
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                PLAYER
                <span className="px-1.5 py-0.5 rounded bg-yellow-500/20 text-yellow-500 text-[10px] border border-yellow-500/30">
                  AWAKENED
                </span>
              </h3>
              <div className="mt-2 space-y-1">
                <p className="text-slate-400 font-mono text-xs uppercase tracking-wider">
                  Job:{" "}
                  <span className="text-blue-400 font-bold ml-2">
                    Shadow Developer
                  </span>
                </p>
                <p className="text-slate-400 font-mono text-xs uppercase tracking-wider">
                  Title:{" "}
                  <span className="text-purple-400 font-bold ml-2">
                    One Who Deploys on Friday
                  </span>
                </p>
              </div>
            </div>

            <div className="text-right flex flex-col items-end">
              <span className="text-blue-500 text-[10px] font-bold uppercase tracking-[0.2em]">
                Level
              </span>
              <div className="text-6xl font-black text-white leading-none tracking-tighter drop-shadow-xl">
                42
              </div>
            </div>
          </div>

          {/* HP & MP Bars */}
          <div className="space-y-4 pt-2">
            {/* HP Bar */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-[10px] uppercase font-bold tracking-wider text-slate-400">
                <span>HP (Caffeine)</span>
                <span className="text-red-400">85%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-900/80 rounded-sm overflow-hidden border border-white/5">
                <div
                  className="h-full bg-gradient-to-r from-red-600 to-red-500 shadow-[0_0_10px_rgba(239,68,68,0.6)] transition-all duration-500"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>

            {/* MP Bar */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-[10px] uppercase font-bold tracking-wider text-slate-400">
                <span>MP (Focus)</span>
                <span className="text-blue-400">98%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-900/80 rounded-sm overflow-hidden border border-white/5">
                <div
                  className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 shadow-[0_0_10px_rgba(59,130,246,0.6)] transition-all duration-500"
                  style={{ width: "98%" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-3 border-t border-white/10 pt-5 relative">
            <div className="absolute top-[-1px] left-0 w-8 h-[1px] bg-blue-500"></div>
            <div className="absolute top-[-1px] right-0 w-8 h-[1px] bg-blue-500"></div>

            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex justify-between items-center group cursor-pointer border-b border-transparent hover:border-blue-500/30 pb-1 transition-all"
              >
                <span className="text-slate-500 font-mono text-xs group-hover:text-blue-400 transition-colors uppercase">
                  {stat.label}
                </span>
                <span className="text-white font-bold font-mono">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quest Notification */}
      <div className="absolute -right-8 lg:-right-16 top-[40%] translate-y-[-50%] z-20 w-64 bg-gradient-to-b from-slate-900/90 to-slate-950/95 backdrop-blur-xl border border-amber-500/50 shadow-[0_0_30px_-5px_rgba(245,158,11,0.2)] rounded-sm p-0 animate-bounce hidden sm:block">
        <div className="bg-gradient-to-r from-amber-600/20 to-transparent p-3 border-b border-amber-500/20 flex items-center gap-2">
          <span className="text-amber-500 text-sm animate-pulse">⚠</span>
          <span className="text-amber-500 text-[10px] font-bold uppercase tracking-widest">
            Quest Arrived
          </span>
        </div>

        <div className="p-4">
          <div className="text-white font-bold text-sm leading-tight mb-2">
            Refactor the Legacy Core
          </div>
          <div className="text-[10px] text-slate-400 mb-3 leading-relaxed">
            The spaghetti code monster has appeared. Optimize the database
            queries to proceed.
          </div>
          <div className="flex justify-center">
            <div className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-bold uppercase tracking-wider rounded-sm shadow-[0_0_10px_rgba(245,158,11,0.1)]">
              Reward: SSR Badge
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
