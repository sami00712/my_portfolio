import { motion } from "motion/react";
import { Button } from "./UI";
import { ArrowRight, Sparkles, Zap, ShieldCheck, Bot } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-900/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-sky-900/10 rounded-full blur-[120px] animate-pulse-slow" />
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="flex-1 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/5 border border-sky-500/10 text-[10px] font-bold tracking-[0.2em] text-sky-400 mb-8 uppercase"
            >
              <Sparkles size={14} className="text-sky-400" />
              <span>THE FUTURE OF WORK IS AI-POWERED</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-extrabold leading-[1.05] mb-8 tracking-[-0.03em]"
            >
              Building <span className="text-gradient">AI Employees</span> <br className="hidden md:block" /> & High-Converting Experiences
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-description max-w-2xl mb-12"
            >
              AI Engineer specializing in autonomous agents, intelligent workflow systems, 
              and premium SaaS applications that transform businesses through automation.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center gap-5"
            >
              <a href="#projects">
                <Button size="lg" className="rounded-xl px-10 h-14 bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold transition-all shadow-xl shadow-sky-500/20 active:scale-95">
                  VIEW PROJECTS <ArrowRight className="ml-2" size={18} />
                </Button>
              </a>
              <a href="#contact">
                <Button size="lg" variant="outline" className="rounded-xl px-10 h-14 border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold transition-all active:scale-95">
                  HIRE ME
                </Button>
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-6"
            >
              <div className="flex items-center gap-3 text-xs font-bold text-slate-400 uppercase tracking-widest"><Zap size={16} className="text-amber-400" /> High Performance</div>
              <div className="flex items-center gap-3 text-xs font-bold text-slate-400 uppercase tracking-widest"><ShieldCheck size={16} className="text-emerald-400" /> Scalable Systems</div>
              <div className="flex items-center gap-3 text-xs font-bold text-slate-400 uppercase tracking-widest"><Bot size={16} className="text-sky-400" /> Agentic AI</div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            className="flex-1 relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-[520px] mx-auto p-4">
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-sky-500/10 rounded-full blur-[100px] animate-pulse-slow" />
              
              {/* Image Container with Border Beam */}
              <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-white/[0.08] shadow-2xl group">
                <img 
                  src="https://i.ibb.co/hJLtZP2j/profile.jpg" 
                  alt="Muhammad Sami" 
                  className="w-full h-full object-cover filter contrast-[1.05] brightness-90 group-hover:scale-105 transition-transform duration-[1.5s]"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=Muhammad+Sami&background=020617&color=38bdf8&size=512";
                  }}
                />
                
                {/* Overlay Dashboard */}
                <div className="absolute bottom-6 left-6 right-6 glass-card p-5 rounded-2xl border-white/10">
                   <div className="flex items-center gap-3 mb-4">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em]">SAMI • SYSTEM ONLINE</span>
                   </div>
                   <div className="grid grid-cols-3 gap-3">
                      <div className="bg-slate-950/60 rounded-xl p-3 border border-white/5">
                         <div className="text-[8px] text-slate-500 uppercase font-bold tracking-wider mb-1">Efficiency</div>
                         <div className="text-sm font-bold text-sky-400">99.2%</div>
                      </div>
                      <div className="bg-slate-950/60 rounded-xl p-3 border border-white/5">
                         <div className="text-[8px] text-slate-500 uppercase font-bold tracking-wider mb-1">Uptime</div>
                         <div className="text-sm font-bold text-blue-400">24/7</div>
                      </div>
                      <div className="bg-slate-950/60 rounded-xl p-3 border border-white/5">
                         <div className="text-[8px] text-slate-500 uppercase font-bold tracking-wider mb-1">Status</div>
                         <div className="text-sm font-bold text-indigo-400">ACTIVE</div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
