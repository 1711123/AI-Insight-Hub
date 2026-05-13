/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowLeft, Shield } from "lucide-react";
import { UI_STRINGS } from "../data/models";

interface PrivacyViewProps {
  lang: "en" | "zh";
  onBack: () => void;
}

export default function PrivacyView({ lang, onBack }: PrivacyViewProps) {
  const strings = UI_STRINGS[lang];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="min-h-screen bg-white dark:bg-black pt-32 px-6 pb-20"
      id="privacy-view"
    >
      <div className="max-w-3xl mx-auto space-y-12">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors font-medium"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          {strings.backToHome}
        </button>

        <div className="space-y-8">
          <div className="flex items-center gap-4 text-blue-500">
            <Shield size={32} />
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold tracking-tight"
            >
              {strings.privacyTitle}
            </motion.h1>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-zinc dark:prose-invert max-w-none space-y-6"
          >
            <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {strings.privacyIntro}
            </p>
            <div className="h-[1px] w-full bg-zinc-200 dark:bg-zinc-800" />
            <p className="text-lg text-zinc-500 dark:text-zinc-500 leading-relaxed italic">
              {strings.privacyBody}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
