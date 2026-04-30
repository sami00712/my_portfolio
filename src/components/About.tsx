import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { User, Target, BarChart, Rocket } from "lucide-react";

export function About() {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-transparent to-sky-950/10">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1"
          >
            <div className="relative mb-10">
              <SectionHeader 
                badge="ABOUT ME" 
                title="Engineering the Future of Intelligence"
              />
            </div>
            
            <div className="space-y-8 mb-12">
              <p className="text-description">
                I am <span className="text-white font-bold">Muhammad Sami</span>, an AI Engineer 
                and Web Developer dedicated to building systems that go beyond standard code. 
                I create autonomous digital workers that handle complex tasks, allowing businesses 
                to scale exponentially without increasing overhead.
              </p>
              <p className="text-description">
                My core expertise lies in <span className="text-sky-400 font-semibold italic">Autonomous Agent Architectures </span> 
                and multi-modal AI applications. I specialize in reducing operational costs while 
                maintaining human-level quality in output.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
               {[
                 { label: "AI Experience", value: "3+ Years", icon: Rocket },
                 { label: "Cost Efficiency", value: "70% Save", icon: BarChart },
                 { label: "Success Rate", value: "98%", icon: Target },
                 { label: "Specialization", value: "Agents", icon: User }
               ].map((item, idx) => (
                 <motion.div 
                   key={item.label} 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.2 + (idx * 0.1) }}
                   className="flex items-center gap-4 group"
                 >
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center group-hover:bg-sky-500/10 transition-colors">
                      <item.icon className="text-sky-400" size={22} />
                    </div>
                    <div>
                      <div className="text-[9px] text-slate-500 uppercase tracking-widest font-bold mb-1">{item.label}</div>
                      <div className="text-base font-bold text-white group-hover:text-sky-400 transition-colors">{item.value}</div>
                    </div>
                 </motion.div>
               ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex-1 relative"
          >
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden glass-card p-3">
              <img 
                src="https://i.ibb.co/hJLtZP2j/profile.jpg" 
                alt="Muhammad Sami Portrait" 
                className="w-full h-full object-cover rounded-[2rem] grayscale contrast-125 brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=Muhammad+Sami&background=020617&color=38bdf8&size=512";
                }}
              />
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-8 -left-8 glass-card p-6 rounded-2xl border-white/10 shadow-2xl">
               <div className="text-3xl font-bold text-sky-400 mb-1">100+</div>
               <div className="text-[10px] text-slate-500 uppercase font-black tracking-widest leading-none">Automations</div>
            </div>
            <div className="absolute -top-8 -right-8 glass-card p-6 rounded-2xl border-white/10 shadow-2xl">
               <div className="text-3xl font-bold text-blue-500 mb-1">20+</div>
               <div className="text-[10px] text-slate-500 uppercase font-black tracking-widest leading-none">AI Products</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
