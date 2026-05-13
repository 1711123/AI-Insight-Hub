/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Mail, ArrowLeft, User } from "lucide-react";
import { UI_STRINGS } from "../data/models";

interface ContactViewProps {
  lang: "en" | "zh";
  onBack: () => void;
}

export default function ContactView({ lang, onBack }: ContactViewProps) {
  const strings = UI_STRINGS[lang];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="min-h-screen bg-white dark:bg-black pt-32 px-6"
      id="contact-view"
    >
      <div className="max-w-3xl mx-auto space-y-16">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors font-medium"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          {strings.backToHome}
        </button>

        <div className="space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl font-extrabold tracking-tight"
          >
            {strings.contactTitle}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium"
          >
            {strings.contactMessage}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-8 rounded-[2.5rem] bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 space-y-4"
          >
            <div className="flex items-center gap-3 text-blue-500 font-bold text-xs uppercase tracking-widest">
              <User size={16} />
              {strings.contactName}
            </div>
            <p className="text-3xl font-bold">shiqiyi</p>
          </motion.div>

          <motion.a 
            href="mailto:3698120470@qq.com"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="group p-8 rounded-[2.5rem] bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 space-y-4 hover:border-blue-500/50 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 transition-all"
          >
            <div className="flex items-center gap-3 text-blue-500 font-bold text-xs uppercase tracking-widest">
              <Mail size={16} />
              {strings.contactEmail}
            </div>
            <p className="text-2xl lg:text-3xl font-bold group-hover:text-blue-500 transition-colors">3698120470@qq.com</p>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
