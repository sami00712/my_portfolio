import { motion } from "motion/react";
import { Github, ArrowRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Button, Badge } from "./UI";

const projects = [
  {
    title: "AI Employee System",
    description: "An autonomous digital agent that handles customer support, lead qualification, and scheduling. Integrated with CRM and messaging apps.",
    tech: ["Next.js", "n8n", "OpenAI", "Supabase"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    demo: "https://github.com/sami00712/ai-employee-silver-teir",
    github: "https://github.com/sami00712/ai-employee-silver-teir",
    type: "AI Product"
  },
  {
    title: "AI Travel Designer Agent",
    description: "A specialized agent that crafts highly personalized 30-day travel itineraries based on budget, mood, and past preferences.",
    tech: ["React", "Gemini API", "Tailwind", "Firebase"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800",
    demo: "https://github.com/sami00712/travel-designer-agent",
    github: "https://github.com/sami00712/travel-designer-agent",
    type: "AI Agent"
  },
  {
    title: "Nexus Platform",
    description: "A professional networking hub connecting elite investors with visionary entrepreneurs via direct, real-time messaging.",
    tech: ["React", "Firebase", "Realtime DB", "Tailwind"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
    demo: "https://nexus-kq3f.vercel.app/",
    github: "https://github.com/sami00712/nexus",
    type: "Networking"
  },
  {
    title: "Hackathon E-commerce",
    description: "A high-performance, responsive e-commerce application built with Next.js, featuring a clean user interface and seamless shopping experience.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Sanity"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    demo: "https://hackathon3-nextjs.vercel.app/",
    github: "https://github.com/sami00712/hackathon3-nextjs",
    type: "E-commerce"
  },
  {
    title: "Smart CV Builder AI",
    description: "AI-powered resume builder that generates professional, ATS-optimized CVs with intelligent content suggestions and formatting.",
    tech: ["Next.js", "Gemini AI", "Tailwind", "PDF.js"],
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=800",
    demo: "https://smartcvbuilder-ai.vercel.app/",
    github: "https://github.com/sami00712/AI-CV-Builder",
    type: "AI Utility"
  },
  {
    title: "AutoFlow AI",
    description: "Automate your workflows with AI. Get personalized automation plans in seconds with our step-by-step automation guide.",
    tech: ["Next.js", "Gemini AI", "Tailwind", "Automation"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    demo: "https://autoflow-ai-peach.vercel.app/",
    github: "https://github.com/sami00712/autoflow-ai",
    type: "AI Automation"
  }
];

export function Projects() {
  return (
    <section id="projects" className="section-padding relative overflow-hidden bg-slate-900/40">
      <div className="container-custom relative z-10">
        <SectionHeader 
          center 
          badge="PORTFOLIO" 
          title="Digital Architecture"
          subtitle="A selection of autonomous systems and high-converting web experiences built with precision."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 md:mt-24">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: "easeOut" }}
              className="group relative h-[520px] rounded-[2.5rem] overflow-hidden border border-white/[0.05] glass-card"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 opacity-50 contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 flex flex-col justify-end">
                <div className="flex items-center gap-4 mb-6">
                  <Badge className="bg-sky-500/10 text-sky-400 border-sky-500/20 text-[10px] font-bold tracking-[0.1em] uppercase rounded-lg px-4 py-1.5">
                    {project.type}
                  </Badge>
                  <div className="h-[1px] flex-1 bg-white/[0.08]" />
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-5 group-hover:text-sky-400 transition-colors duration-500 tracking-tight">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 text-base md:text-lg mb-10 max-w-xl group-hover:text-slate-200 transition-colors duration-500 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2.5 mb-10">
                  {project.tech.map(t => (
                    <span key={t} className="px-3.5 py-1.5 bg-white/[0.03] border border-white/[0.05] rounded-xl text-[10px] font-bold text-slate-400 uppercase tracking-widest group-hover:border-sky-500/20 group-hover:text-sky-300/70 transition-all duration-300">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-5">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <Button className="h-14 px-8 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold shadow-xl shadow-sky-500/10 group/btn transition-all active:scale-95">
                      VIEW PROJECT <ArrowRight size={18} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="h-14 w-14 rounded-xl border-white/10 bg-white/5 hover:bg-white/10 text-white p-0 active:scale-95">
                      <Github size={22} />
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
