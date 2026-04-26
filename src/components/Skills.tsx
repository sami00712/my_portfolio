import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { Bot, Globe, Database } from "lucide-react";

const skillGroups = [
  {
    category: "AI & Automation",
    icon: Bot,
    description: "Architecting autonomous behaviors and intelligent workflows.",
    skills: ["AI Agents", "n8n Automation", "OpenRouter", "Gemini Pro", "RAG Systems"],
    color: "from-sky-400 to-blue-600"
  },
  {
    category: "Modern Hub",
    icon: Globe,
    description: "High-performance interfaces for complex SaaS products.",
    skills: ["Next.js 14", "TypeScript", "Tailwind v4", "React 19", "Motion"],
    color: "from-sky-500 to-sky-700"
  },
  {
    category: "Core Engine",
    icon: Database,
    description: "Robust backends and scalable data architectures.",
    skills: ["Node.js", "Python", "PostgreSQL", "Supabase", "Cloud Funct."],
    color: "from-blue-600 to-sky-600"
  }
];

export function Skills() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="container-custom relative z-10">
        <SectionHeader 
          center 
          badge="TECH STACK" 
          title="The Technical Arsenal"
          subtitle="Precision-engineered toolsets for building scalable, intelligent digital ecosystems."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 md:mt-24">
          {skillGroups.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: groupIdx * 0.1, duration: 0.8 }}
              className="group glass-card p-10 rounded-[2.5rem] transition-all duration-500 hover:bg-white/[0.04] hover:-translate-y-2 border border-white/[0.05]"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${group.color} p-[1px] mb-8 shadow-xl shadow-sky-500/10`}>
                <div className="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center">
                  <group.icon size={28} className="text-sky-400 group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-sky-400 transition-colors duration-300">
                {group.category}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-10">
                {group.description}
              </p>

              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.05] text-slate-300 text-[10px] font-bold uppercase tracking-widest group-hover:border-sky-500/20 group-hover:text-sky-400 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
