/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { X, Play, ExternalLink, Sparkles } from "lucide-react";
import { AIModel, UI_STRINGS } from "../data/models";

interface AIModelDetailProps {
  model: AIModel | null;
  lang: "en" | "zh";
  onClose: () => void;
}

export default function AIModelDetail({ model, lang, onClose }: AIModelDetailProps) {
  if (!model) return null;
  const strings = UI_STRINGS[lang];

  return (
    <AnimatePresence>
      {model && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
          id="modal-overlay"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl overflow-hidden bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl max-h-[90vh] flex flex-col"
            id="modal-container"
          >
            {/* Header / Hero Area */}
            <div className={`relative h-64 bg-gradient-to-br ${model.color} flex flex-col justify-end p-8 text-white`}>
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
              >
                <X size={24} />
              </button>
              <div className="space-y-2">
                <motion.h2 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="text-5xl font-bold tracking-tight"
                >
                  {model.name}
                </motion.h2>
                <p className="text-xl text-white/80">{model.tagline[lang]}</p>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-8 space-y-12">
              {/* Understanding Section */}
              <section id="understanding">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-4">{strings.modalUnderstanding}</h3>
                <p className="text-xl leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {model.understanding[lang]}
                </p>
              </section>

              {/* Video Section */}
              <section id="video">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-400">{strings.modalShowcase}</h3>
                  <div className="h-[1px] flex-1 bg-zinc-100 dark:bg-zinc-800" />
                  <Sparkles size={14} className="text-blue-500 animate-pulse" />
                </div>
                
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 shadow-lg border border-zinc-200/50 dark:border-zinc-700/50">
                  <iframe 
                    src={`//player.bilibili.com/player.html?bvid=${model.videoUrl}&page=1&high_quality=1&danmaku=0&autoplay=0`}
                    scrolling="no" 
                    border="0" 
                    frameBorder="no" 
                    framespacing="0" 
                    allowFullScreen={true}
                    sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                
                <div className="mt-4 flex flex-col gap-4">
                  <div className="p-3 rounded-xl bg-orange-50 dark:bg-orange-950/20 border border-orange-100 dark:border-orange-900/30 flex items-start gap-3">
                    <Sparkles size={16} className="text-orange-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-orange-800 dark:text-orange-300 leading-relaxed font-medium">
                      {lang === "en" 
                        ? "This video may have expired. To learn more, please visit the link below." 
                        : "此视频可能已经失效，如想深入了解，请访问下方的链接"}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-zinc-500 italic">
                      {lang === "en" ? "“Indistinguishable from magic”" : "“与魔法无异”"}
                    </p>
                    <a 
                      href={`https://www.bilibili.com/video/${model.videoUrl}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors bg-blue-500/5 px-3 py-1.5 rounded-full"
                    >
                      <ExternalLink size={14} />
                      {lang === "en" ? "Open in Bilibili" : "在哔哩哔哩打开"}
                    </a>
                  </div>
                </div>
              </section>

              {/* Modules Section */}
              <section id="modules">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-4">{strings.modalModules}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {model.modules.map((module) => (
                    <a 
                      key={module.id}
                      href={module.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-lg">{module.title[lang]}</h4>
                          <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-sm text-zinc-500 line-clamp-2">{module.description[lang]}</p>
                      </div>
                      <span className="mt-4 text-xs font-medium text-zinc-400 group-hover:text-blue-500 transition-colors">{strings.modalExplore} →</span>
                    </a>
                  ))}
                </div>
              </section>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
