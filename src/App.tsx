/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { Sparkles, ArrowRight, Github, Languages, Quote } from "lucide-react";
import { AI_MODELS, UI_STRINGS, AIModel } from "./data/models";
import AIModelCard from "./components/AIModelCard";
import AIModelDetail from "./components/AIModelDetail";
import ContactView from "./components/ContactView";
import PrivacyView from "./components/PrivacyView";
import DocsView from "./components/DocsView";
import Logo from "./components/Logo";

export default function App() {
  const [selectedModel, setSelectedModel] = useState<AIModel | null>(null);
  const [lang, setLang] = useState<"en" | "zh">("zh");
  const [view, setView] = useState<"home" | "contact" | "privacy" | "docs">("home");
  const { scrollYProgress } = useScroll();
  
  const strings = UI_STRINGS[lang];

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedModel(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const toggleLang = () => setLang(prev => prev === "en" ? "zh" : "en");

  if (view === "contact") {
    return (
      <div className="dark:bg-black min-h-screen">
        <nav className="fixed top-0 w-full z-40 backdrop-blur-xl bg-white/70 dark:bg-black/70 border-b border-zinc-200 dark:border-zinc-800">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView("home")}>
              <Logo />
              <div className="flex flex-col -space-y-1">
                <span className="font-bold text-lg tracking-tight">AI Insights</span>
                <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">{strings.studioName}</span>
              </div>
            </div>
            <button 
              onClick={toggleLang}
              className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest hover:text-blue-500 transition-colors"
            >
              <Languages size={16} />
              {lang === "en" ? "中文" : "EN"}
            </button>
          </div>
        </nav>
        <AnimatePresence mode="wait">
          <ContactView lang={lang} onBack={() => setView("home")} />
        </AnimatePresence>
      </div>
    );
  }

  if (view === "privacy") {
    return (
      <div className="dark:bg-black min-h-screen">
        <nav className="fixed top-0 w-full z-40 backdrop-blur-xl bg-white/70 dark:bg-black/70 border-b border-zinc-200 dark:border-zinc-800">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView("home")}>
              <Logo />
              <div className="flex flex-col -space-y-1">
                <span className="font-bold text-lg tracking-tight">AI Insights</span>
                <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">{strings.studioName}</span>
              </div>
            </div>
            <button 
              onClick={toggleLang}
              className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest hover:text-blue-500 transition-colors"
            >
              <Languages size={16} />
              {lang === "en" ? "中文" : "EN"}
            </button>
          </div>
        </nav>
        <AnimatePresence mode="wait">
          <PrivacyView lang={lang} onBack={() => setView("home")} />
        </AnimatePresence>
      </div>
    );
  }

  if (view === "docs") {
    return (
      <div className="dark:bg-black min-h-screen">
        <nav className="fixed top-0 w-full z-40 backdrop-blur-xl bg-white/70 dark:bg-black/70 border-b border-zinc-200 dark:border-zinc-800">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView("home")}>
              <Logo />
              <div className="flex flex-col -space-y-1">
                <span className="font-bold text-lg tracking-tight">AI Insights</span>
                <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">{strings.studioName}</span>
              </div>
            </div>
            <button 
              onClick={toggleLang}
              className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest hover:text-blue-500 transition-colors"
            >
              <Languages size={16} />
              {lang === "en" ? "中文" : "EN"}
            </button>
          </div>
        </nav>
        <AnimatePresence mode="wait">
          <DocsView lang={lang} onBack={() => setView("home")} />
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-white font-sans selection:bg-blue-500 selection:text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 backdrop-blur-xl bg-white/70 dark:bg-black/70 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView("home")}>
            <Logo />
            <div className="flex flex-col -space-y-1">
              <span className="font-bold text-lg tracking-tight">AI Insights</span>
              <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">{strings.studioName}</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-8 text-sm font-medium opacity-60">
              <a href="#models" className="hover:opacity-100 transition-opacity">{strings.navModels}</a>
              <button 
                onClick={() => setView("docs")}
                className="hover:opacity-100 transition-opacity"
              >
                {strings.navDocs}
              </button>
              <a href="#about" className="hover:opacity-100 transition-opacity">{strings.navAbout}</a>
            </div>
            <div className="h-4 w-[1px] bg-zinc-200 dark:bg-zinc-800 hidden md:block" />
            <div className="flex items-center gap-4">
              <button 
                onClick={toggleLang}
                className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest hover:text-blue-500 transition-colors"
              >
                <Languages size={16} />
                {lang === "en" ? "中文" : "EN"}
              </button>
              <a href="https://github.com" target="_blank" className="opacity-60 hover:opacity-100 transition-opacity">
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-40 pb-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-8 z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-widest uppercase mb-4">
              {strings.heroBadge}
            </span>
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[1.1]">
              {strings.heroTitlePrefix} <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                {strings.heroTitleHighlight}
              </span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="max-w-2xl mx-auto text-xl text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed"
          >
            {strings.heroDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-8 flex flex-col items-center gap-8"
          >
            <a 
              href="#models"
              className="px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-transform inline-flex items-center gap-2 group"
            >
              {strings.heroCTA} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Famous Quote */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="max-w-xl flex flex-col items-center gap-4 py-8 border-y border-zinc-100 dark:border-zinc-800/50"
            >
              <Quote className="text-blue-500 opacity-20" size={32} />
              <p className="text-lg md:text-xl italic font-serif text-zinc-400 leading-relaxed">
                "{strings.famousQuote}"
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl -z-10 pointer-events-none">
          <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-400/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute top-1/3 right-0 w-64 h-64 bg-purple-400/20 rounded-full blur-[120px] animate-pulse delay-1000" />
        </div>
      </header>

      {/* Grid Section */}
      <main id="models" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AI_MODELS.map((model, index) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <AIModelCard model={model} lang={lang} onClick={setSelectedModel} />
            </motion.div>
          ))}
        </div>
      </main>

      {/* About / Insight Section */}
      <section id="about" className="bg-zinc-50 dark:bg-zinc-900/50 py-32 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-4xl font-bold tracking-tight">{strings.visionTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">{strings.vision1Title}</h3>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {strings.vision1Text}
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">{strings.vision2Title}</h3>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {strings.vision2Text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="flex items-center gap-4 opacity-70 group hover:opacity-100 transition-opacity">
            <Logo size="sm" />
            <span className="text-sm font-medium tracking-tight">{strings.footerCopyright}</span>
          </div>
          <div className="flex gap-8 text-sm font-medium opacity-50">
            <button 
              onClick={() => setView("privacy")}
              className="hover:opacity-100 transition-opacity"
            >
              {strings.navPrivacy}
            </button>
            <button 
              onClick={() => setView("contact")}
              className="hover:opacity-100 transition-opacity"
            >
              {strings.navContact}
            </button>
            <button 
              onClick={() => setView("docs")}
              className="hover:opacity-100 transition-opacity"
            >
              {strings.navDocs}
            </button>
          </div>
        </div>
      </footer>

      {/* Model Detail Modal */}
      <AIModelDetail 
        model={selectedModel} 
        lang={lang}
        onClose={() => setSelectedModel(null)} 
      />
    </div>
  );
}
