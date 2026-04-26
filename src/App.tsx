/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AISection } from "./components/AISection";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { AIDemo } from "./components/AIDemo";
import { Contact, LeadGen } from "./components/Contact";
import { Footer } from "./components/Footer";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative min-h-screen bg-background selection:bg-sky-500/30 overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-sky-500 origin-left z-[60] shadow-[0_0_10px_rgba(56,189,248,0.5)]"
        style={{ scaleX }}
      />

      <Navbar />
      
      <div className="relative">
        {/* Background Mesh Gradient */}
        <div className="fixed inset-0 bg-gradient-mesh opacity-20 pointer-events-none z-0" />
        
        <div className="relative z-10">
          <Hero />
          <Services />
          <AISection />
          <AIDemo />
          <Projects />
          <Skills />
          <About />
          <Contact />
          <LeadGen />
          <Footer />
        </div>
      </div>

      {/* Cursor Effect Placeholder (can be enhanced with Framer Motion) */}
      <div className="hidden lg:block fixed inset-0 pointer-events-none z-[100]">
         {/* Custom cursor can be added here if needed */}
      </div>
    </main>
  );
}

