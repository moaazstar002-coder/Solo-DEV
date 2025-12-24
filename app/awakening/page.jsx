"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, Zap, Crown, Terminal, Cpu, Box, Layout, Code2 } from "lucide-react";

const CLASSES = [
  {
    id: "Mage",
    name: "The Mage",
    icon: <Sparkles className="w-8 h-8 text-purple-400" />,
    description: "Focus-driven. Minimizes distractions.",
    lore: '"The system is a puzzle, and you are the key. While others plan or meditate, you execute."',
    perks: ["Deep Work", "Clean Code", "Peaceful Mind"],
    stats: { speed: 60, focus: 95, management: 40 },
    theme: "bg-purple-500",
    border: "border-purple-500/30",
    text: "text-purple-400"
  },
  {
    id: "Hunter",
    name: "The Hunter",
    icon: <Zap className="w-8 h-8 text-blue-400" />,
    description: "High Speed. Technical Mastery.",
    lore: '"Efficiency is everything. Why walk when you can teleport through the code? Your logic is your weapon."',
    stats: { speed: 95, focus: 80, management: 30 },
    perks: ["Rapid Prototyping", "Shortcut Mastery", "Night Owl"],
    theme: "bg-blue-500",
    border: "border-blue-500/30",
    text: "text-blue-400"
  },
  {
    id: "founder",
    name: "The Founder",
    icon: <Crown className="w-8 h-8 text-yellow-400" />,
    description: "Visionary. Resource Management.",
    lore: '"Architecture matters more than syntax. You build systems that outlast the developer who wrote them."',
    stats: { speed: 50, focus: 60, management: 95 },
    perks: ["System Design", "Team Synergy", "Scalability"],
    theme: "bg-yellow-500",
    border: "border-yellow-500/30",
    text: "text-yellow-400"
  },
];

export default function AwakeningPage() {
  const [selectedClass, setSelectedClass] = useState(CLASSES[1]);

  return (
    <div className="relative min-h-screen flex flex-col bg-[#020617] font-sans text-slate-200 selection:bg-blue-600 overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]"></div>
      </div>

      <main className="relative z-10 flex-grow max-w-7xl mx-auto w-full py-12 px-4 flex flex-col gap-12">
        {/* Heading Section */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-500/10 border border-blue-500/30 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-[10px] font-bold text-blue-400 tracking-widest uppercase">Awaiting Selection</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] uppercase">
            Initialize <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
              Protocol
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto border-l-2 border-blue-500/30 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
            Designate your path. Each class provides unique initial attributes and mastery perks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Class Selection Cards */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mb-6">Available_Designations</h3>
            
            {CLASSES.map((cls) => (
              <div
                key={cls.id}
                onClick={() => setSelectedClass(cls)}
                className={`group relative p-[1px] rounded transition-all duration-300 cursor-pointer ${
                  selectedClass.id === cls.id
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                    : "bg-slate-800 hover:bg-slate-700"
                }`}
              >
                <div className="bg-[#0f172a] p-5 flex flex-col sm:flex-row gap-5 items-center rounded">
                  {/* Icon Box Instead of Image */}
                  <div className={`w-16 h-16 shrink-0 rounded flex items-center justify-center bg-slate-900 border ${selectedClass.id === cls.id ? cls.border : 'border-slate-800'} transition-colors duration-500`}>
                    {cls.icon}
                  </div>

                  <div className="flex-grow text-center sm:text-left">
                    <h4 className={`text-xl font-black uppercase tracking-tight ${selectedClass.id === cls.id ? cls.text : "text-white"}`}>
                      {cls.name}
                    </h4>
                    <p className="text-slate-500 text-sm font-medium">{cls.description}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    {selectedClass.id === cls.id ? (
                      <div className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/50 text-blue-400 text-[10px] font-black tracking-widest uppercase animate-pulse">
                        Active
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center text-slate-700 group-hover:border-slate-500 group-hover:text-slate-500 transition-colors">
                        <Code2 className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Detailed Analysis Report */}
          <div className="lg:col-span-5 sticky top-8">
            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-lg p-8 relative overflow-hidden">
              {/* Decorative Background Icon */}
              <div className="absolute -top-10 -right-10 opacity-[0.03] rotate-12 pointer-events-none">
                {React.cloneElement(selectedClass.icon, { size: 200 })}
              </div>

              <div className="relative z-10 space-y-8">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-8 h-[1px] bg-blue-500"></span>
                    <span className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.4em] font-bold">Analysis_Report</span>
                  </div>
                  <h2 className="text-4xl font-black text-white uppercase italic tracking-tighter">
                    {selectedClass.name}
                  </h2>
                </div>

                <div className="p-4 bg-slate-950/80 rounded border-l-2 border-blue-500 font-mono">
                  <p className="text-slate-400 italic text-xs leading-relaxed">
                    {selectedClass.lore}
                  </p>
                </div>

                {/* Stats Section */}
                <div className="space-y-5">
                  <StatBar label="CODING_SPEED" value={selectedClass.stats.speed} color={selectedClass.theme} />
                  <StatBar label="FOCUS_DEPTH" value={selectedClass.stats.focus} color={selectedClass.theme} />
                  <StatBar label="SYSTEM_LOGIC" value={selectedClass.stats.management} color="bg-slate-600" />
                </div>

                {/* Perks Section */}
                <div className="pt-6 border-t border-slate-800">
                  <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Initial_Buffs</h4>
                  <div className="grid grid-cols-1 gap-3">
                    {selectedClass.perks.map((perk) => (
                      <div key={perk} className="flex items-center gap-3 text-[11px] text-slate-300 font-mono group">
                        <div className={`w-1.5 h-1.5 rounded-full ${selectedClass.theme} shadow-[0_0_8px_rgba(255,255,255,0.2)]`}></div>
                        {perk.toUpperCase()}
                      </div>
                    ))}
                  </div>
                </div>

                <Link href="/system" className="block">
                  <button className="w-full mt-4 py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded transition-all shadow-lg shadow-blue-900/20 active:scale-[0.98] uppercase tracking-[0.2em] text-sm">
                    Initialize Sequence
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function StatBar({ label, value, color }) {
  return (
    <div className="group">
      <div className="flex justify-between text-[9px] font-black tracking-[0.1em] mb-1.5 text-slate-500 group-hover:text-slate-300 transition-colors">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
        <div
          className={`h-full ${color} transition-all duration-700 ease-out shadow-[0_0_10px_rgba(0,0,0,0.5)]`}
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
}