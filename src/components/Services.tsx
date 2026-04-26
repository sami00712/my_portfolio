import { motion } from "motion/react";
import { Bot, UserPlus, Globe, Database, Settings, Terminal } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const services = [
  {
    title: "AI Employee Development",
    description: "Hire a digital worker that never sleeps. I build agents that handle email, support, and sales autonomously.",
    icon: Bot,
    color: "text-sky-400"
  },
  {
    title: "AI Agent Systems",
    description: "Multi-agent workflows where specialized AI entities collaborate to solve complex business goals.",
    icon: UserPlus,
    color: "text-sky-400"
  },
  {
    title: "Full-Stack Web Development",
    description: "Premium, high-performance web applications built with Next.js, TypeScript, and modern design principles.",
    icon: Globe,
    color: "text-sky-400"
  },
  {
    title: "AI SaaS Development",
    description: "Turning AI concepts into profitable subscription products with secure backends and beautiful UIs.",
    icon: Database,
    color: "text-sky-400"
  },
  {
    title: "Automation Solutions",
    description: "Streamlining operations by connecting your existing tools via custom APIs and automation platforms.",
    icon: Settings,
    color: "text-sky-400"
  },
  {
    title: "Custom AI Fine-tuning",
    description: "Optimizing LLMs on your specific niche data to create expert knowledge systems for your brand.",
    icon: Terminal,
    color: "text-sky-400"
  }
];

export function Services() {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="container-custom">
        <SectionHeader 
          center 
          badge="SOLUTIONS" 
          title="Precision-Engineered Intelligence"
          subtitle="I design and implement autonomous systems that redefine operational efficiency for forward-thinking brands."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 md:mt-24">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
              className="group p-8 md:p-10 rounded-[2rem] glass-card hover:bg-white/[0.04] hover:-translate-y-2 transition-all duration-500 border border-white/[0.05]"
            >
              <div className="mb-10 flex items-center justify-between">
                <div className={`p-4 rounded-2xl bg-white/5 group-hover:bg-sky-500/10 transition-all duration-300`}>
                  <service.icon className="text-sky-400 group-hover:scale-110 transition-transform duration-500" size={32} />
                </div>
                <span className="text-5xl font-extrabold text-white/5 transition-colors duration-500 group-hover:text-white/10 select-none">
                  0{idx + 1}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-sky-400 transition-colors duration-300">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed text-[15px] group-hover:text-slate-200 transition-colors duration-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
