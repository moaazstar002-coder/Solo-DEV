"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Swords, 
  Target, 
  Trophy, 
  Zap, 
  Code2,
  BookOpen,
  Users,
  ShoppingBag,
  ArrowRight,
  Clock,
  CheckCircle2,
  TrendingUp,
  Flame,
  Star,
  Calendar
} from "lucide-react";

export default function DashboardPage() {
  const [stats] = useState({
    level: 5,
    xp: 750,
    maxXp: 1000,
    strength: 24,
    intelligence: 31,
    agility: 19,
    coins: 1250,
    gems: 45
  });

  const [activeQuests] = useState([
    { id: 1, title: "Master Array Methods", progress: 75, xp: 150, difficulty: "Easy" },
    { id: 2, title: "Build a REST API", progress: 40, xp: 300, difficulty: "Medium" },
    { id: 3, title: "Implement Binary Search", progress: 90, xp: 200, difficulty: "Medium" }
  ]);

  const [recentAchievements] = useState([
    { title: "First Blood", description: "Completed your first quest", time: "2 hours ago" },
    { title: "Code Streak", description: "5 days coding streak!", time: "1 day ago" }
  ]);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-2">
                System <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Dashboard</span>
              </h1>
              <p className="text-slate-400">Welcome back, Ready to level up? 🍓</p>
            </div>
            
            {/* Quick Stats Pills */}
            <div className="hidden md:flex items-center gap-3">
              <div className="px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 flex items-center gap-2">
                <span className="text-yellow-400 font-bold">{stats.coins}</span>
                <span className="text-yellow-400 text-xs">Coins</span>
              </div>
              <div className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center gap-2">
                <Star className="w-4 h-4 text-purple-400" />
                <span className="text-purple-400 font-bold">{stats.gems}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column - Stats & Progress */}
          <div className="lg:col-span-4 space-y-6">
            {/* Player Stats Card */}
            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Zap className="w-5 h-5 text-blue-400" />
                  Player Stats
                </h2>
                <div className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-sm font-bold">
                  LVL {stats.level}
                </div>
              </div>

              {/* XP Progress */}
              <div className="mb-6 p-4 bg-slate-800/50 rounded-lg">
                <div className="flex justify-between text-xs text-slate-400 mb-2">
                  <span className="font-bold">EXPERIENCE</span>
                  <span className="font-mono">{stats.xp} / {stats.maxXp} XP</span>
                </div>
                <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-400 relative"
                    style={{ width: `${(stats.xp / stats.maxXp) * 100}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-2">{stats.maxXp - stats.xp} XP to next level</p>
              </div>

              {/* Attributes */}
              <div className="space-y-3">
                <AttributeBar label="STR" value={stats.strength} max={50} color="from-red-500 to-orange-500" />
                <AttributeBar label="INT" value={stats.intelligence} max={50} color="from-blue-500 to-cyan-500" />
                <AttributeBar label="AGI" value={stats.agility} max={50} color="from-green-500 to-emerald-500" />
              </div>
            </div>

            {/* Streak Card */}
            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-xl border border-orange-500/30 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <Flame className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">5 Days</h3>
                  <p className="text-xs text-orange-300">Coding Streak</p>
                </div>
              </div>
              <p className="text-xs text-slate-400">Keep it up! Complete daily quests to maintain your streak.</p>
            </div>
          </div>

          {/* Right Column - Quests & Actions */}
          <div className="lg:col-span-8 space-y-6">
            {/* Active Quests */}
            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Target className="w-5 h-5 text-purple-400" />
                  Active Quests
                </h2>
                <Link href="/daily-quest" className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1">
                  View All
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="space-y-4">
                {activeQuests.map((quest) => (
                  <QuestCard key={quest.id} quest={quest} />
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <QuickActionCard icon={<Swords />} label="Dungeons" href="/dungeon" color="purple" />
                <QuickActionCard icon={<Trophy />} label="Boss Fight" href="/boss" color="red" />
                <QuickActionCard icon={<Users />} label="Leaderboard" href="/leaderboard" color="yellow" />
                <QuickActionCard icon={<ShoppingBag />} label="Shop" href="/shop" color="cyan" />
              </div>
            </div>

            {/* Recent Achievements */}
            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  Recent Achievements
                </h2>
              </div>

              <div className="space-y-3">
                {recentAchievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-800/50 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center shrink-0">
                      <Trophy className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-white">{achievement.title}</h4>
                      <p className="text-xs text-slate-400">{achievement.description}</p>
                      <p className="text-xs text-slate-500 mt-1">{achievement.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AttributeBar({ label, value, max, color }) {
  const percentage = (value / max) * 100;
  return (
    <div>
      <div className="flex justify-between text-xs mb-1.5">
        <span className="font-bold text-slate-300 font-mono">{label}</span>
        <span className="font-mono text-slate-400">{value}/{max}</span>
      </div>
      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
        <div 
          className={`h-full bg-gradient-to-r ${color} transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

function QuestCard({ quest }) {
  const difficultyColors = {
    Easy: "text-green-400 bg-green-500/10 border-green-500/30",
    Medium: "text-yellow-400 bg-yellow-500/10 border-yellow-500/30",
    Hard: "text-red-400 bg-red-500/10 border-red-500/30"
  };

  return (
    <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-slate-600 transition-all group cursor-pointer">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h4 className="text-sm font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
            {quest.title}
          </h4>
          <div className="flex items-center gap-2">
            <span className={`text-xs px-2 py-0.5 rounded border ${difficultyColors[quest.difficulty]} font-bold`}>
              {quest.difficulty}
            </span>
            <span className="text-xs text-slate-400">+{quest.xp} XP</span>
          </div>
        </div>
        <CheckCircle2 className={`w-5 h-5 ${quest.progress === 100 ? 'text-green-400' : 'text-slate-600'}`} />
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between text-xs text-slate-400">
          <span>Progress</span>
          <span className="font-mono font-bold">{quest.progress}%</span>
        </div>
        <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-500"
            style={{ width: `${quest.progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

function QuickActionCard({ icon, label, href, color }) {
  const colors = {
    purple: "border-purple-500/30 hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]",
    red: "border-red-500/30 hover:border-red-500 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]",
    yellow: "border-yellow-500/30 hover:border-yellow-500 hover:shadow-[0_0_20px_rgba(234,179,8,0.3)]",
    cyan: "border-cyan-500/30 hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
  };

  return (
    <Link href={href}>
      <div className={`group bg-slate-900/50 backdrop-blur-xl border ${colors[color]} rounded-lg p-4 cursor-pointer transition-all hover:scale-105`}>
        <div className="text-slate-400 group-hover:text-white transition-colors mb-2">
          {React.cloneElement(icon, { className: "w-6 h-6 mx-auto" })}
        </div>
        <p className="text-xs text-center font-bold text-slate-300">{label}</p>
      </div>
    </Link>
  );
}