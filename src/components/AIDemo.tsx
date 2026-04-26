import { useState } from "react";
import { motion } from "motion/react";
import { Send, Bot, Sparkles, Loader2, BrainCircuit } from "lucide-react";
import { Button, Input } from "./UI";
import { GoogleGenAI } from "@google/genai";
import ReactMarkdown from "react-markdown";

export function AIDemo() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input || isLoading) return;

    setIsLoading(true);
    setResult("");

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });
      
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `You are a high-level business strategist and AI consultant. Provide a detailed AI automation strategy for the following business context: "${input}". 
            Explain:
            1. Which AI agents should be used.
            2. Estimated time & cost savings.
            3. A quick roadmap.
            Keep it structured but enthusiastic and professional.`,
      });

      setResult(response.text || "I couldn't generate a strategy right now. Please try again.");
    } catch (err) {
      console.error(err);
      setResult("Error connecting to the AI brain. Please check your connectivity.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="section-padding relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-sky-500/50 to-transparent opacity-30" />
      
      <div className="container-custom">
        <div className="max-w-4xl mx-auto glass-card rounded-[2.5rem] p-8 md:p-14 overflow-hidden relative border border-white/[0.05]">
          {/* Decorative Sparkles */}
          <div className="absolute -top-10 -right-10 opacity-10 hidden md:block">
            <BrainCircuit size={240} className="text-sky-500 animate-pulse-slow" />
          </div>

          <div className="relative z-10 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/5 text-sky-400 text-[10px] font-bold tracking-[0.2em] mb-8 border border-sky-500/10 uppercase"
            >
              <Sparkles size={14} />
              <span>INTERACTIVE EXPERIENCE</span>
            </motion.div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8 tracking-tight leading-tight">
              Test My <span className="text-gradient">AI Brain</span>
            </h2>
            <p className="text-description mb-12 max-w-xl">
              Describe your business or a challenge you're facing, and I'll architect a custom 
              high-impact AI automation strategy instantly.
            </p>

            <form onSubmit={handleGenerate} className="relative mb-12 group">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="e.g. My logistics firm needs autonomous dispatching..."
                className="h-16 pl-6 pr-44 bg-slate-950/40 border-white/5 rounded-2xl group-focus-within:border-sky-500/30 transition-all font-medium"
              />
              <Button 
                type="submit" 
                disabled={isLoading}
                className="absolute right-2 top-2 h-12 px-8 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold active:scale-95 transition-all"
              >
                {isLoading ? <Loader2 className="animate-spin" /> : <><Send size={18} className="mr-2" /> GENERATE</>}
              </Button>
            </form>

            {result && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="prose prose-invert max-w-none bg-slate-950/60 border border-white/[0.05] rounded-[2rem] p-8 md:p-12"
              >
                <div className="flex items-center gap-4 mb-8 pb-8 border-b border-white/[0.05]">
                   <div className="w-12 h-12 rounded-2xl bg-sky-500/10 flex items-center justify-center text-sky-400 border border-sky-500/10">
                      <Bot size={24} />
                   </div>
                   <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky-400">STRATEGY REPORT GENERATED</div>
                </div>
                <div className="text-slate-300 leading-loose space-y-6 prose-p:mb-6 prose-headings:text-white prose-strong:text-sky-400 prose-ul:list-disc prose-li:mb-2">
                  <ReactMarkdown>{result}</ReactMarkdown>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
