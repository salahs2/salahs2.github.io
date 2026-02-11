import React, { useState, useEffect } from "react";
import {
  Palette,
  MessageSquare,
  MapPin,
  GitCommit,
  ScrollText,
  ExternalLink,
  Info,
} from "lucide-react";
import { motion } from "motion/react";

const THEMES = ["Latte", "Frappe", "Macchiato", "Mocha"];

const COLORS = [
  "#f5e0dc", "#f2cdcd", "#f5c2e7", "#cba6f7", "#f38ba8", "#eba0ac",
  "#fab387", "#f9e2af", "#a6e3a1", "#94e2d5", "#89dceb", "#74c7ec",
  "#89b4fa", "#b4befe", "#313244", "#45475a", "#585b70", "#ff9e64",
];

const COMMITS = [
  { repo: "nyx", msg: "feat: integrate latest commits fetching and d..", add: "+305", sub: "-23" },
  { repo: "Katib", msg: "Merge pull request #4 from JasonLovesDoggo/fe..", add: "+41", sub: "-8" },
  { repo: "Katib", msg: "Add author filtering to GetMostRecentCommit f..", add: "+41", sub: "-8" },
];

const POSTS = [
  { title: "AWS Lambda InvalidEntrypoint Debugging", date: "Nov 28, 2025" },
  { title: "AWS CDK Credentials Hell", date: "Nov 26, 2025" },
  { title: "Hello World", date: "Oct 19, 2025" },
  { title: "Stop Burning CPU on Dead FastAPI Streams", date: "Jul 06, 2025" },
];

export const Dashboard = () => {
  const [clickCount, setClickCount] = useState(778704);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) =>
    date.toLocaleTimeString("en-GB", { hour12: false });

  return (
    <section className="px-6 py-12 md:px-12 lg:px-24 max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-mono">
      
      {/* Theme Card */}
      <div className="bg-[#24283b]/50 border border-[#414868]/30 rounded-xl p-6">
        <div className="flex items-center gap-2 text-sm text-[#c0caf5]/60 mb-6">
          <Palette size={16} /> Theme
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex gap-1 bg-[#1a1b26] p-1 rounded-lg text-[10px] text-center">
            {THEMES.map((theme) => (
              <div
                key={theme}
                className={`flex-1 py-1 rounded ${
                  theme === "Mocha"
                    ? "bg-[#414868]/50 text-[#c0caf5]"
                    : "text-[#c0caf5]/40"
                }`}
              >
                {theme}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-6 gap-2">
            {COLORS.map((color, i) => (
              <div
                key={i}
                className={`w-full aspect-square rounded-md border border-[#414868]/30 ${
                  i === 17 ? "ring-2 ring-[#ff9e64]" : ""
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>

          <div className="flex items-center gap-2 mt-2">
            <div className="w-8 h-4 bg-[#c0caf5] rounded-full relative">
              <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-[#1a1b26] rounded-full" />
            </div>
            <span className="text-xs text-[#c0caf5]/60">
              Background effect: <span className="text-[#c0caf5]">off</span>
            </span>
          </div>
        </div>
      </div>

      {/* Connect Card */}
      <div className="bg-[#24283b]/50 border border-[#414868]/30 rounded-xl p-6">
        <div className="flex items-center gap-2 text-sm text-[#c0caf5]/60 mb-6">
          <MessageSquare size={16} /> Let's Connect
        </div>
        <p className="text-sm text-[#c0caf5]/60 mb-8 leading-relaxed">
          Always open to interesting projects and conversations.
        </p>
        <button className="w-full bg-[#ff9e64]/20 hover:bg-[#ff9e64]/30 text-[#ff9e64] py-3 rounded-lg border border-[#ff9e64]/30 transition-all flex items-center justify-center gap-2">
          <MessageSquare size={16} /> Book a Chat
        </button>
      </div>

      {/* Map Card */}
      <div className="bg-[#24283b]/50 border border-[#414868]/30 rounded-xl p-6 overflow-hidden relative">
        <div className="flex items-center gap-2 text-sm text-[#c0caf5]/60 mb-4">
          <MapPin size={16} /> Currently Based In 📍
        </div>

        <div className="absolute inset-x-0 top-14 bottom-14 overflow-hidden opacity-40 grayscale contrast-125">
          <div className="w-full h-full bg-[#1a1b26] flex items-center justify-center text-[#c0caf5]/10 text-4xl font-bold">
            TORONTO
          </div>
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle, #c0caf5 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
        </div>

        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-[10px] text-[#c0caf5]/60">
          <span>Toronto, ON</span>
          <span>☀️ {formatTime(currentTime)}</span>
        </div>
      </div>

      {/* Clicker Card */}
      <div className="bg-[#24283b]/50 border border-[#414868]/30 rounded-xl p-6 flex flex-col items-center justify-center relative">
        <div className="absolute top-6 right-6 text-[#c0caf5]/30">
          <Info size={16} />
        </div>

        <motion.div
          key={clickCount}
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          className="text-4xl font-bold text-[#c0caf5] mb-6"
        >
          {clickCount.toLocaleString()}
        </motion.div>

        <button
          onClick={() => setClickCount((prev) => prev + 1)}
          className="bg-[#ff9e64] hover:bg-[#ff9e64]/90 text-[#1a1b26] px-8 py-2 rounded-lg font-bold transition-transform active:scale-95 mb-4"
        >
          CLICK ME
        </button>

        <p className="text-[10px] text-[#c0caf5]/40 italic">
          you've clicked 0 times
        </p>
      </div>

      {/* Commits Card */}
      <div className="lg:col-span-2 bg-[#24283b]/50 border border-[#414868]/30 rounded-xl p-6">
        <div className="flex items-center justify-between text-sm text-[#c0caf5]/60 mb-6">
          <div className="flex items-center gap-2">
            <GitCommit size={16} /> Recent Commits
          </div>
          <span className="text-[10px] opacity-40">[info]</span>
        </div>

        <div className="space-y-3 mb-6">
          {COMMITS.map((commit, i) => (
            <div key={i} className="flex items-center justify-between gap-4 text-xs">
              <div className="flex-grow truncate">
                <span className="text-[#c0caf5]">{commit.repo}:</span>
                <span className="text-[#c0caf5]/60 ml-2">{commit.msg}</span>
              </div>
              <div className="flex gap-2 font-bold shrink-0">
                <span className="text-[#9ece6a]">{commit.add}</span>
                <span className="text-[#c0caf5]/20">/</span>
                <span className="text-[#f7768e]">{commit.sub}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-[#414868]/20">
          <a href="#" className="text-[#ff9e64]/60 hover:text-[#ff9e64] text-[10px] flex items-center gap-1">
            View on GitHub <ExternalLink size={10} />
          </a>

          <div className="flex gap-1 h-1.5 w-48 rounded-full overflow-hidden">
            <div className="w-[40%] bg-[#7aa2f7]" />
            <div className="w-[20%] bg-[#ff9e64]" />
            <div className="w-[15%] bg-[#bb9af7]" />
            <div className="w-[10%] bg-[#9ece6a]" />
            <div className="w-[5%] bg-[#f7768e]" />
            <div className="w-[5%] bg-[#e0af68]" />
            <div className="w-[5%] bg-[#c0caf5]/20" />
          </div>
        </div>
      </div>

      {/* Posts Card */}
      <div className="lg:col-span-2 bg-[#24283b]/50 border border-[#414868]/30 rounded-xl p-6">
        <div className="flex items-center justify-between text-sm text-[#c0caf5]/60 mb-6">
          <div className="flex items-center gap-2">
            <ScrollText size={16} /> Latest Posts
          </div>
          <a href="#" className="hover:text-[#ff9e64]">
            <ExternalLink size={16} />
          </a>
        </div>

        <div className="space-y-4">
          {POSTS.map((post, i) => (
            <div key={i} className="flex items-center justify-between gap-4 text-xs group cursor-pointer">
              <span className="text-[#c0caf5]/80 group-hover:text-[#ff9e64] transition-colors truncate">
                {post.title}
              </span>
              <div className="flex items-center gap-4 shrink-0">
                <span className="w-12 h-[1px] bg-[#414868]/30" />
                <span className="text-[#c0caf5]/30">{post.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
