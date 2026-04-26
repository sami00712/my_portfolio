import { motion } from "motion/react";
import { Github, Linkedin, Mail, Bot, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 bg-slate-950 border-t border-white/[0.05]">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
              <Bot className="text-sky-500" size={24} />
            </div>
            <span className="text-lg font-bold tracking-tighter uppercase">SAMI</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://www.linkedin.com/in/muhammad-sami-359601281/" target="_blank" rel="noopener noreferrer" className="p-3.5 rounded-2xl bg-white/5 border border-white/[0.05] text-slate-400 hover:text-sky-400 hover:border-sky-500/30 transition-all duration-300">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/sami00712" target="_blank" rel="noopener noreferrer" className="p-3.5 rounded-2xl bg-white/5 border border-white/[0.05] text-slate-400 hover:text-sky-400 hover:border-sky-500/30 transition-all duration-300">
              <Github size={20} />
            </a>
            <a href="mailto:samiqaimkhani43@gmail.com" className="p-3.5 rounded-2xl bg-white/5 border border-white/[0.05] text-slate-400 hover:text-sky-400 hover:border-sky-500/30 transition-all duration-300">
              <Mail size={20} />
            </a>
          </div>

          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2.5 text-[10px] text-slate-500 hover:text-white transition-colors group font-bold uppercase tracking-[0.2em]"
          >
            BACK TO TOP <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="h-[1px] w-full bg-white/[0.05] mb-10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] text-slate-500 font-bold uppercase tracking-widest">
          <p>© 2026 MUHAMMAD SAMI. BUILT WITH PRECISION.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">PRIVACY</a>
            <a href="#" className="hover:text-white transition-colors">TERMS</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
