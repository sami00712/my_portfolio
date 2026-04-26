import { motion } from "motion/react";
import { MessageSquare, Mail, ArrowUpRight, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Button, Input, Textarea } from "./UI";
import { SectionHeader } from "./SectionHeader";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setResponseMessage(data.message || "Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setResponseMessage(data.error || "Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setResponseMessage("Failed to connect to the server.");
    }
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="flex-1">
            <SectionHeader 
              badge="CONTACT" 
              title="Ready to Scale?"
              subtitle="Whether you need an AI employee, a custom SaaS, or complex automation, I'm here to help."
            />
            
            <div className="space-y-6 mt-12">
              <motion.a 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                href="mailto:samiqaimkhani43@gmail.com" 
                className="flex items-center gap-6 group cursor-pointer p-8 rounded-3xl transition-all glass-card border-white/[0.05] hover:bg-white/[0.04]"
              >
                <div className="w-14 h-14 rounded-2xl bg-sky-500/10 flex items-center justify-center text-sky-400 group-hover:bg-sky-500 group-hover:text-slate-900 transition-all duration-500 shadow-lg shadow-sky-500/5">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1">Direct Email</div>
                  <div className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors duration-300">samiqaimkhani43@gmail.com</div>
                </div>
                <ArrowUpRight className="ml-auto opacity-0 group-hover:opacity-100 transition-all duration-500 text-sky-400 transform translate-x-4 group-hover:translate-x-0" size={24} />
              </motion.a>

              <motion.a 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                href="https://wa.me/923333739199" 
                className="flex items-center gap-6 group cursor-pointer p-8 rounded-3xl transition-all glass-card border-white/[0.05] hover:bg-white/[0.04]"
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-900 transition-all duration-500 shadow-lg shadow-emerald-500/5">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1">WhatsApp Business</div>
                  <div className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">92 333 3739199</div>
                </div>
                <ArrowUpRight className="ml-auto opacity-0 group-hover:opacity-100 transition-all duration-500 text-emerald-400 transform translate-x-4 group-hover:translate-x-0" size={24} />
              </motion.a>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 glass-card p-10 md:p-12 rounded-[2.5rem] relative overflow-hidden"
          >
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500 mb-2">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                <p className="text-slate-400 max-w-sm mx-auto">{responseMessage}</p>
                <Button 
                  onClick={() => setStatus("idle")} 
                  variant="outline" 
                  className="mt-6 border-white/10 hover:bg-white/5"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-2.5">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 ml-1">Full Name</label>
                    <Input 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Muhammad Sami" 
                      className="bg-slate-950/40 border-white/5 h-14 rounded-xl" 
                    />
                  </div>
                  <div className="space-y-2.5">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 ml-1">Work Email</label>
                    <Input 
                      required
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sami@example.com" 
                      className="bg-slate-950/40 border-white/5 h-14 rounded-xl" 
                    />
                  </div>
                </div>
                <div className="space-y-2.5">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 ml-1">Message</label>
                  <Textarea 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can I help automate your workflow?" 
                    className="bg-slate-950/40 border-white/5 rounded-xl min-h-[160px] p-4" 
                  />
                </div>
                
                {status === "error" && (
                  <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm">
                    <AlertCircle size={18} />
                    {responseMessage}
                  </div>
                )}

                <Button 
                  type="submit"
                  disabled={status === "loading"}
                  size="lg" 
                  className="w-full h-14 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded-xl shadow-xl shadow-sky-500/10 active:scale-95 transition-all disabled:opacity-50"
                >
                  {status === "loading" ? (
                    <span className="flex items-center gap-2">
                      <Loader2 size={18} className="animate-spin" /> SENDING...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      SEND MESSAGE <Send size={18} className="ml-1" />
                    </span>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function LeadGen() {
  return (
    <section className="section-padding pt-0">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-950 rounded-[2.5rem] p-12 md:p-24 overflow-hidden text-center border border-white/5 shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8 tracking-tight text-white leading-tight">
              Get Your Free AI <br /> Automation Audit
            </h2>
            <p className="text-slate-300 mb-12 text-lg md:text-xl font-medium">
              I'll analyze your current workflows and provide a tailored roadmap to implement 
              AI agents that can save you 20+ hours every week.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <Input 
                placeholder="Work Email" 
                className="bg-white/10 border-white/10 text-white placeholder:text-white/40 h-14 rounded-xl focus-visible:ring-sky-400/30"
              />
              <Button size="lg" className="px-10 h-14 bg-white text-slate-950 hover:bg-sky-50 font-bold rounded-xl active:scale-95">
                CLAIM AUDIT
              </Button>
            </form>
            <p className="mt-10 text-xs text-slate-500 font-bold uppercase tracking-[0.2em]">Limited spots available • No commitment required</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
