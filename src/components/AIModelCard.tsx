/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import * as Icons from "lucide-react";
import { ColorfulBrandIcon } from "./ColorfulBrandIcon";
import { AIModel, UI_STRINGS } from "../data/models";

interface AIModelCardProps {
  model: AIModel;
  lang: "en" | "zh";
  onClick: (model: AIModel) => void;
}

export default function AIModelCard({ model, lang, onClick }: AIModelCardProps) {
  const IconComponent = (Icons as any)[model.icon] || Icons.HelpCircle;
  const strings = UI_STRINGS[lang];

  return (
    <motion.div
      layoutId={model.id}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(model)}
      className="group relative h-[400px] w-full rounded-[2.5rem] overflow-hidden cursor-pointer bg-zinc-900 border border-zinc-800"
      id={`card-${model.id}`}
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${model.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
      
      {/* Large Background Icon (Minimalist) */}
      <div className="absolute -right-8 -bottom-8 opacity-10 group-hover:opacity-15 transition-all duration-700 group-hover:scale-110 group-hover:-rotate-12 pointer-events-none">
        <ColorfulBrandIcon id={model.id} size={280} />
      </div>

      {/* Content */}
      <div className="relative h-full p-8 flex flex-col justify-between z-10">
        <div className="flex justify-between items-start">
          <div className={`p-4 rounded-2xl bg-white/10 backdrop-blur-md shadow-inner`}>
            <IconComponent size={28} className="text-white" />
          </div>
          <span className="text-xs font-bold text-white/40 tracking-widest uppercase">{strings.overview}</span>
        </div>

        <div className="space-y-2">
          <h3 className="text-3xl font-bold text-white leading-tight">
            {model.name}
          </h3>
          <p className="text-white/60 text-lg leading-relaxed line-clamp-3">
            {model.tagline[lang]}
          </p>
        </div>
      </div>

      {/* Hover Highlight Overlay */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}
