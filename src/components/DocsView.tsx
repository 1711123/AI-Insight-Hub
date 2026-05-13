/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { ArrowLeft, BookOpen, Rocket, Lock, Unlock, HelpCircle, User, Clock, Navigation } from "lucide-react";

interface DocsViewProps {
  lang: "en" | "zh";
  onBack: () => void;
}

const DocsView: React.FC<DocsViewProps> = ({ lang, onBack }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto px-6 pt-32 pb-24"
    >
      <button 
        onClick={onBack}
        className="group flex items-center gap-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors mb-8"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        <span className="font-medium">{lang === "en" ? "Back to Hub" : "返回首页"}</span>
      </button>

      <div className="space-y-16">
        {/* Header */}
        <header className="border-b border-zinc-200 dark:border-zinc-800 pb-8">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4 flex items-center gap-3">
            <BookOpen className="text-blue-500" />
            {lang === "en" ? "Documentation" : "相关文档"}
          </h1>
          <p className="text-xl text-zinc-500 dark:text-zinc-400">
            {lang === "en" 
              ? "Comprehensive guides and insights into the world of Big AI Models."
              : "关于 AI 大模型的全面指南与深度解析。"}
          </p>
        </header>

        {/* Section: Quick Start */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/30">
              <Rocket className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
            <h2 className="text-2xl font-bold tracking-tight">🚀 快速入门</h2>
          </div>

          <div className="bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl p-8 border border-zinc-100 dark:border-zinc-800">
            <h3 className="text-lg font-bold mb-4">关于 AI Insight Hub</h3>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
              AI Insight Hub 是一个中立、客观、非盈利的AI大模型科普与资讯网站，由AI爱好者独立维护。
              我们致力于用通俗易懂的语言，拆解复杂的AI技术，整理主流大模型信息，追踪行业最新动态，帮助普通人快速入门AI，找到适合自己的AI工具。
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <Clock className="text-zinc-400" size={18} />
                <span className="text-sm font-medium">更新频率：每周更新1-2次，重大模型发布当日更新</span>
              </div>
              <div className="flex items-center gap-3">
                <User className="text-zinc-400" size={18} />
                <span className="text-sm font-medium">维护者：熠哥 (Yi Ge)</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <Navigation size={18} className="text-blue-500" />
              网站导航指南
            </h3>
            <ul className="space-y-2 text-zinc-600 dark:text-zinc-400 ml-6 list-disc">
              <li><strong>首页：</strong>最新AI资讯、热门模型推荐、核心专题入口</li>
              <li><strong>愿景：</strong>我们对AI行业未来的思考与判断（多模态协同、开源与闭源）</li>
              <li><strong>模型库：</strong>按厂商、类型分类的主流大模型完整图鉴</li>
              <li><strong>Docs：</strong>你正在浏览的文档中心，包含AI基础知识与使用指南</li>
              <li><strong>联系我：</strong>提交反馈、纠错、合作或交流</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <HelpCircle size={18} className="text-blue-500" />
              常见问题 FAQ
            </h3>
            <div className="grid gap-4">
              {[
                { q: "1. 使用本站需要注册或付费吗？", a: "不需要。本站所有内容完全免费，无需注册即可访问全部功能。" },
                { q: "2. 模型信息来源可靠吗？", a: "所有模型参数、功能信息均来自厂商官方公告、技术白皮书及权威第三方评测。如有错误，欢迎通过「联系我」页面指正。" },
                { q: "3. 本站提供AI模型调用服务吗？", a: "不提供。本站仅做AI大模型的介绍与科普，所有模型链接均跳转至官方网站。" },
                { q: "4. 可以转载本站内容吗？", a: "非商业用途转载请注明来源「AI Insight Hub」并附上原文链接。商业用途请提前联系授权。" }
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-black/20">
                  <h4 className="font-bold text-zinc-800 dark:text-zinc-200 mb-2">{item.q}</h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: AI Basics */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-900/30">
              <BookOpen className="text-emerald-600 dark:text-emerald-400" size={24} />
            </div>
            <h2 className="text-2xl font-bold tracking-tight">📚 AI 基础</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "大语言模型（LLM）", d: "基于海量文本数据训练的人工智能模型，能理解和生成人类语言，是当前大多数AI应用的基础。" },
              { t: "多模态大模型", d: "能同时处理文本、图像、音频、视频等多种类型数据的AI模型，实现了跨模态的理解与生成。" },
              { t: "预训练", d: "模型在大规模通用数据集上进行的初步训练，让模型掌握通用的语言和知识能力。" },
              { t: "微调", d: "在预训练模型的基础上，用特定领域的小数据集进一步训练，让模型适配特定任务。" },
              { t: "上下文窗口", d: "模型在一次对话中能记住和处理的最大文本长度，单位为Token。" },
              { t: "Token", d: "AI模型处理文本的基本单位，1个Token约等于0.7个汉字。" },
              { t: "幻觉", d: "AI模型生成的看似合理但与事实不符的内容，是当前大模型的主要局限性之一。" },
              { t: "对齐", d: "让AI模型的行为与人类的价值观和意图保持一致的过程。" }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-100 dark:border-zinc-800/60">
                <h4 className="font-bold text-emerald-600 dark:text-emerald-400 mb-2">• {item.t}</h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Closed Source */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-50 dark:bg-amber-900/30">
              <Lock className="text-amber-600 dark:text-amber-400" size={24} />
            </div>
            <h2 className="text-2xl font-bold tracking-tight">🔒 闭源阵营 (Closed Source)</h2>
          </div>

          <div className="space-y-6">
            {[
              { 
                n: "1. ChatGPT (OpenAI)", 
                h: "2022年11月发布，凭借 GPT-3.5 真正引爆了全球大模型浪潮。2023年推出具有跨时代意义的 GPT-4。2024年，OpenAI 带来了主打极速多模态交互的 GPT-4o、强化逻辑的 o1 推理模型，并上线了 ChatGPT Search 搜索引擎。进入 2025-2026 年，ChatGPT 进一步推出了具备自主执行任务能力的“智能体模式 (Agentic Mode)”，模型也逐步迭代至包含深度思考 (Thinking) 能力的 GPT-5 时代（如最新的 GPT-5.5）。" 
              },
              { 
                n: "2. Gemini (Google)", 
                h: "Google 整合了 DeepMind 和 Google Brain 的力量，经历了从早期 Bard 到 Gemini 的 brand 重塑。2023年12月发布 Gemini 1.0，主打原生多模态（底层直接融合文本、图像、音视频）。2024年发布的 1.5 版本引入了破纪录的超大上下文窗口。截至 2026 年，旗舰模型已迭代至 Gemini 3.1 Pro，不仅加入了“Deep Think”深度推理模式，还推出了“Personal Intelligence”，能无需手动设置便深度读取并处理 Gmail、Drive 等 Google 生态数据的个人智能管家功能。" 
              },
              { 
                n: "3. Claude (Anthropic)", 
                h: "由 OpenAI 前核心安全团队成员出走创立，主打“宪法 AI (Constitutional AI)”。2023年先后发布 Claude 1 与 Claude 2。2024年发布的 Claude 3 系列（Opus/Sonnet/Haiku）在多项基准测试中登顶，随后推出的 Artifacts（代码实时渲染窗口）和 Computer Use（允许 AI 操控电脑鼠标和键盘）引领了行业的交互革命。截至 2026 年，Claude 已迭代至 Claude 4 系列（如 Claude 4.7），持续在高级编程和复杂长文本分析领域保持极高的行业口碑。" 
              },
              { 
                n: "4. 豆包 / Doubao (字节跳动)", 
                h: "基于字节跳动的云雀大模型（Skylark），于 2023 年 8 月正式上线。豆包并未一味卷超大参数，而是利用字节在算法推荐和用户体验上的优势，主打自然流畅的语音交互和本土化服务。2024年底，豆包已成为中国月活跃用户数最高（约6000万）的 AI 助手。进入 2026 年，豆包正向原生多模态（VLA）迈进，并开始针对复杂数据分析、PPT 生成和视频制作等高级生产力需求探索付费订阅模式。" 
              }
            ].map((item, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-amber-500/30 transition-colors shadow-sm">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {item.n}
                </h4>
                <div className="flex gap-4">
                  <div className="w-1 h-auto bg-amber-100 dark:bg-amber-900/30 rounded-full shrink-0" />
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                    <span className="font-bold text-zinc-900 dark:text-zinc-100 mr-2">发展简史：</span>
                    {item.h}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Open Source */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-900/30">
              <Unlock className="text-indigo-600 dark:text-indigo-400" size={24} />
            </div>
            <h2 className="text-2xl font-bold tracking-tight">🔓 开源 / 开源权重阵营 (Open Source / Open Weights)</h2>
          </div>

          <div className="space-y-6">
            {[
              { 
                n: "5. DeepSeek (深度求索)", 
                h: "成立于 2023 年，是全球开源社区公认的“效率黑马”。2023 年底推出 DeepSeek LLM 和 Coder 模型。2024 年，DeepSeek-V2 和 V3 相继发布，凭借其极低训练成本和高效的 MoE（混合专家）架构震撼业界。最引人瞩目的是在 2025 年 1 月，DeepSeek 以 MIT 协议开源了顶尖的推理模型 DeepSeek-R1，在数学和代码能力上追平甚至超越了西方的闭源前沿模型。截至 2026 年 4 月，官方已上线 DeepSeek-V4 Preview 版，继续坚持将核心架构向开源社区开放。" 
              },
              { 
                n: "6. Grok (xAI)", 
                h: "埃隆·马斯克 (Elon Musk) 离开 OpenAI 后，于 2023 年 7 月成立 xAI。同年 11 月发布了拥有 3140 亿参数的初代模型 Grok-1，并于 2024 年初将其开源（开源权重）。Grok 最大的护城河是直接深度接入 X（前 Twitter）平台，拥有无可比拟的实时新闻和互联网动态感知能力，且回答风格被设定为少受限制、带点幽默和“叛逆”。截至 2025-2026 年，Grok 已经迭代至包含强大图像和视频生成能力的 Grok-4（估计达 1.7 万亿参数），虽然最新模型暂未完全开源，但其初代模型开源对社区贡献巨大。" 
              }
            ].map((item, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500/30 transition-colors shadow-sm">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {item.n}
                </h4>
                <div className="flex gap-4">
                  <div className="w-1 h-auto bg-indigo-100 dark:bg-indigo-900/30 rounded-full shrink-0" />
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                    <span className="font-bold text-zinc-900 dark:text-zinc-100 mr-2">发展简史：</span>
                    {item.h}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default DocsView;
