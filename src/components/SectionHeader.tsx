import { motion } from "motion/react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  center?: boolean;
}

export function SectionHeader({ title, subtitle, badge, center = false }: SectionHeaderProps) {
  return (
    <div className={`mb-16 md:mb-20 ${center ? "text-center mx-auto" : ""}`}>
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 rounded-full bg-sky-500/5 text-sky-400 text-[10px] font-bold mb-6 border border-sky-500/10 uppercase tracking-[0.2em]"
        >
          {badge}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-white leading-[1.1]"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-400 max-w-2xl text-base md:text-lg leading-relaxed mx-auto font-medium"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
