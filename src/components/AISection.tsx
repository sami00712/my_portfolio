import { motion } from "motion/react";
import { Brain, Cpu, Workflow, MessageSquareText, Layers, Rocket } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const capabilities = [
  {
    title: "AI Agents Development",
    description: "Building autonomous agents that can plan, execute, and reason over multi-step tasks independently.",
    icon: Brain,
    color: "text-sky-400",
    bg: "bg-sky-400/10",
  },
  {
    title: "AI Employee Systems",
    description: "Creating full digital workers that handle high-volume business processes without human intervention.",
    icon: Cpu,
    color: "text-sky-400",
    bg: "bg-sky-400/10",
  },
  {
    title: "Workflow Automation",
    description: "Connecting n8n, Zapier, and custom APIs to create seamless high-efficiency data pipelines.",
    icon: Workflow,
    color: "text-sky-400",
    bg: "bg-sky-400/10",
  },
  {
    title: "Chatbots & Assistants",
    description: "Next-gen conversational UIs with context awareness, personality, and knowledge base integration.",
    icon: MessageSquareText,
    color: "text-sky-400",
    bg: "bg-sky-400/10",
  },
  {
    title: "AI SaaS Tools",
    description: "Full-stack development of AI-powered subscription products with secure logic and premium UI.",
    icon: Layers,
    color: "text-sky-400",
    bg: "bg-sky-400/10",
  },
  {
    title: "RAG Systems",
    description: "Retrieval Augmented Generation systems that let AI chat with your private documents securely.",
    icon: Rocket,
    color: "text-sky-400",
    bg: "bg-sky-400/10",
  },
];

export function AISection() {
  return (
    <section id="capabilities" className="section-padding relative">
      <div className="container-custom">
        <SectionHeader 
          center 
          badge="CAPABILITIES" 
          title="Beyond Traditional Code"
          subtitle="I architect systems that don't just process data—they think, learn, and act on your behalf."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 md:mt-24">
          {capabilities.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
              className="group glass-card p-10 rounded-[2rem] hover:bg-white/[0.04] hover:-translate-y-2 transition-all duration-500 border border-white/[0.05]"
            >
              <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-sky-500/5 transition-transform duration-500 group-hover:scale-110`}>
                <item.icon className={item.color} size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-sky-400 transition-colors duration-300">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-200 transition-colors duration-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
