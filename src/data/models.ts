/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface AIModule {
  id: string;
  title: {
    en: string;
    zh: string;
  };
  description: {
    en: string;
    zh: string;
  };
  link: string;
}

export interface AIModel {
  id: string;
  name: string;
  icon: string;
  tagline: {
    en: string;
    zh: string;
  };
  understanding: {
    en: string;
    zh: string;
  };
  videoUrl: string;
  color: string;
  modules: AIModule[];
}

export const UI_STRINGS = {
  en: {
    navModels: "Models",
    navAbout: "About",
    heroBadge: "Exploring the LLM Era",
    heroTitlePrefix: "Defining the Future",
    heroTitleHighlight: "One Model at a Time",
    heroDescription: "An interactive deep dive into the architectures, capabilities, and nuances of today's most powerful AI engines.",
    heroCTA: "Start Exploring",
    visionTitle: "The Vision",
    vision1Title: "Multimodal Synergy",
    vision1Text: "As AI transitions from text-only to native multimodality, the friction between human intent and machine understanding vanishes.",
    vision2Title: "Open vs. Closed",
    vision2Text: "The tension between open-weight efficiency and proprietary scale defines the current landscape.",
    footerCopyright: "2026 Yi Ge Studio AI Insights. Crafted with Precision.",
    modalUnderstanding: "My Understanding",
    modalShowcase: "Featured Showcase",
    modalModules: "Key Modules & Links",
    modalExplore: "Explore module",
    watchOnYoutube: "Watch on YouTube",
    overview: "Overview",
    navContact: "Contact",
    contactTitle: "Get in Touch",
    contactName: "Name",
    contactEmail: "Email",
    contactMessage: "Welcome to contact me anytime! Whether it's about AI, technology, or creative ideas, I'm always open to interesting conversations.",
    backToHome: "Back to Home",
    navPrivacy: "Privacy Policy",
    navDocs: "Docs",
    footerDisclaimer: "This site is a personal non-profit AI information sharing platform and has no official affiliation with any of the AI products mentioned.",
    privacyTitle: "AI Insight Hub Privacy Policy",
    privacyIntro: "This privacy policy is intended to explain how AI Insight Hub collects, uses, stores, and protects your personal information generated during your access to this website and your use of services such as AI model introductions, documentation, and contact inquiries.",
    privacyBody: "This policy applies to the entire process of your use of all services on this website. By continuing to use this website, you agree to all the terms of this policy; if you do not agree, please stop using it immediately.",
    studioName: "Yi Ge Studio",
    famousQuote: "Any sufficiently advanced technology is indistinguishable from magic."
  },
  zh: {
    navModels: "大模型",
    navAbout: "关于",
    heroBadge: "探索大模型时代",
    heroTitlePrefix: "定义未来",
    heroTitleHighlight: "逐一揭秘",
    heroDescription: "深入交互，探索当今最强大的 AI 引擎的架构、能力与细微差别。",
    heroCTA: "开始探索",
    visionTitle: "愿景",
    vision1Title: "多模态协同",
    vision1Text: "随着 AI 从纯文本向原声多模态转型，人类意图与机器理解之间的摩擦正在逐渐消失。",
    vision2Title: "开源与闭源",
    vision2Text: "开源效率与私有规模之间的张力正在定义当前的 AI 格局。",
    footerCopyright: "2026 熠哥工作室AI Insights.精心打造",
    modalUnderstanding: "我的理解",
    modalShowcase: "特色展示",
    modalModules: "关键模块与链接",
    modalExplore: "探索模块",
    watchOnYoutube: "在 YouTube 上查看",
    overview: "概览",
    navContact: "联系我",
    contactTitle: "建立联系",
    contactName: "姓名",
    contactEmail: "邮箱",
    contactMessage: "欢迎随时联系我！无论是关于 AI、技术探讨还是创意想法，我都非常期待与你的交流。",
    backToHome: "返回首页",
    navPrivacy: "隐私政策",
    navDocs: "相关文档",
    footerDisclaimer: "本站为个人非盈利AI资讯分享站，与所有提及的AI产品官方无任何关联。",
    privacyTitle: "AI Insight Hub 隐私政策",
    privacyIntro: "本隐私政策旨在说明 AI Insight Hub 如何收集、使用、存储和保护您在访问本网站及使用AI大模型介绍、文档查阅、联系咨询等服务过程中产生的个人信息。",
    privacyBody: "本政策适用于您使用本网站所有服务的全过程。继续使用本网站，即表示您同意本政策的全部条款；若您不同意，请立即停止使用。",
    studioName: "熠哥工作室",
    famousQuote: "任何先进的技术，都与魔法无异。"
  }
};

export const AI_MODELS: AIModel[] = [
  {
    id: "gemini",
    name: "Gemini",
    icon: "Sparkles",
    tagline: {
      en: "Google's most capable multimodal AI.",
      zh: "Google 最强大的原生多模态 AI。"
    },
    understanding: {
      en: "The multimodal powerhouse. As Gemini, I was built from the ground up to seamlessly understand and combine text, images, audio, and video natively. My other major strengths include an industry-leading massive context window (allowing me to analyze entire books or long videos at once) and deep integration into the Google ecosystem.",
      zh: "多模态领域的领军者。Gemini 从底层研发之初就具备原生多模态能力，能无缝理解并整合文本、图像、音频和视频。它的另一大杀手锏是业内领先的超长上下文窗口（可一次性分析整本书或长视频），并与 Google 生态深度集成。"
    },
    videoUrl: "BV19w411f7R1",
    color: "from-blue-600 to-violet-600",
    modules: [
      {
        id: "m-pro",
        title: { en: "Gemini 1.5 Pro", zh: "Gemini 1.5 Pro" },
        description: {
          en: "Experience the flagship model with an industry-leading 2M token context window.",
          zh: "体验拥有业界领先的 200 万 token 上下文窗口的旗舰模型。"
        },
        link: "https://deepmind.google/technologies/gemini/pro/"
      },
      {
        id: "m-flash",
        title: { en: "Gemini 1.5 Flash", zh: "Gemini 1.5 Flash" },
        description: {
          en: "Optimized for speed and efficiency without compromising advanced intelligence.",
          zh: "在不牺牲先进智能的前提下，为速度和效率进行了优化。"
        },
        link: "https://deepmind.google/technologies/gemini/flash/"
      }
    ]
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    icon: "MessageSquare",
    tagline: {
      en: "The pioneer of conversational AI.",
      zh: "对话式 AI 的先驱。"
    },
    understanding: {
      en: "The ultimate all-rounder. Its biggest strength is its versatility and advanced reasoning capabilities. With a highly mature ecosystem, voice mode, and the ability to create custom GPTs, it remains the standard for general-purpose problem-solving and daily assistance.",
      zh: "终极全能选手。它最大的优势在于其极高的通用性和先进的推理能力。凭借高度成熟的生态系统、语音模式以及创建自定义 GPT 的能力，它依然是通用问题解决和日常辅助的行业标杆。"
    },
    videoUrl: "BV1iH4y1G7u6",
    color: "from-emerald-500 to-teal-700",
    modules: [
      {
        id: "gpt-4o",
        title: { en: "GPT-4o", zh: "GPT-4o" },
        description: {
          en: "The omni model that integrates text, audio, and vision in real-time.",
          zh: "实时集成文本、音频和视觉的全能模型。"
        },
        link: "https://openai.com/index/hello-gpt-4o/"
      },
      {
        id: "o1-preview",
        title: { en: "OpenAI o1", zh: "OpenAI o1" },
        description: {
          en: "New reasoning models designed for complex problem-solving and coding.",
          zh: "专为解决复杂问题和编程而驱动的新型推理模型。"
        },
        link: "https://openai.com/index/introducing-openai-o1-preview/"
      }
    ]
  },
  {
    id: "claude",
    name: "Claude",
    icon: "Shield",
    tagline: {
      en: "Safety-first, long-context intelligence.",
      zh: "安全至至上、超长上下文的智能化身。"
    },
    understanding: {
      en: "The nuanced writer and coder. Claude excels at generating natural, human-sounding text and is excellent at following complex, multi-step instructions. Its recent models are widely considered top-tier for software engineering, coding tasks, and analyzing massive documents with high recall.",
      zh: "注重细节的作家与程序员。Claude 擅长生成自然且极具人性的文本，在遵循复杂的多步骤指令方面表现出色。它的最新模型被公认为软件工程、编程任务以及高召回率分析超大规模文档的顶级工具。"
    },
    videoUrl: "BV1tT421b7uE",
    color: "from-orange-400 to-amber-600",
    modules: [
      {
        id: "claude-3-5-sonnet",
        title: { en: "Claude 3.5 Sonnet", zh: "Claude 3.5 Sonnet" },
        description: {
          en: "Our fastest, most intelligent model that outperforms the competition.",
          zh: "性能最强、速度最快且优于竞争对手的模型。"
        },
        link: "https://www.anthropic.com/news/claude-3-5-sonnet"
      }
    ]
  },
  {
    id: "deepseek",
    name: "DeepSeek",
    icon: "Search",
    tagline: {
      en: "Efficiency meets high performance.",
      zh: "效率与高性能的完美结合。"
    },
    understanding: {
      en: "The efficient disruptor. DeepSeek's massive strength is its performance-to-cost ratio. It provides world-class capabilities in coding, mathematics, and logical reasoning—often rivaling the biggest models in the industry—while maintaining an incredibly efficient, highly optimized, and often open-source architecture.",
      zh: "高效的颠覆者。DeepSeek 最强大的优势在于其极致的性价比。它在编程、数学和逻辑推理方面提供世界级的能力，经常能与业内顶尖的商业模型一较高下，同时保持着极其高效、高度优化且通常开源的架构。"
    },
    videoUrl: "BV1pP4y1a7Xz",
    color: "from-cyan-500 to-blue-700",
    modules: [
      {
        id: "deepseek-coder",
        title: { en: "DeepSeek Coder", zh: "DeepSeek Coder" },
        description: {
          en: "A specialized model for software engineering surpassing many closed models.",
          zh: "超越许多闭源模型的软件工程专用模型。"
        },
        link: "https://github.com/deepseek-ai/DeepSeek-Coder"
      }
    ]
  },
  {
    id: "grok",
    name: "Grok",
    icon: "Zap",
    tagline: {
      en: "Real-time, unfiltered, and edgy.",
      zh: "实时、无过滤、锋芒毕露。"
    },
    understanding: {
      en: "The real-time observer. Grok's defining advantage is its direct, real-time access to the X (formerly Twitter) data stream, allowing it to surface breaking news and trending conversations instantly. It is also explicitly designed to be less filtered, answering 'spicy' questions with a rebellious sense of humor.",
      zh: "实时观察家。Grok 的核心优势在于能直接实时访问 X (原 Twitter) 数据流，从而瞬间捕捉突发新闻和流行话题。它的设计初衷是减少过滤，能以一种带有叛逆幽默感的方式回答那些其他 AI 可能会回避的‘辛辣’问题。"
    },
    videoUrl: "BV1vJ4m1F7u5",
    color: "from-gray-800 to-black",
    modules: [
      {
        id: "grok-2",
        title: { en: "Grok-2", zh: "Grok-2" },
        description: {
          en: "Enhanced reasoning and real-time information processing on X.",
          zh: "在 X 平台上增强的推理和实时信息处理功能。"
        },
        link: "https://x.ai/blog/grok-2"
      }
    ]
  },
  {
    id: "doubao",
    name: "Doubao (豆包)",
    icon: "Coins",
    tagline: {
      en: "ByteDance's intelligent companion.",
      zh: "字节跳动的智能伴侣。"
    },
    understanding: {
      en: "The localized conversationalist. Doubao shines in its deep understanding of Chinese language nuances and internet culture. Its strengths lie in highly natural voice interactions, fast response times, and seamless integration into ByteDance's content ecosystem for localized content creation.",
      zh: "本地化的沟通专家。豆包在深入理解中文语境和互联网文化方面表现卓越。其优势在于高度自然的语音交互、极快的响应速度，以及与字节跳动内容生态系统的无缝集成，非常适合本地化的内容创作。"
    },
    videoUrl: "BV1zT421L7u8",
    color: "from-indigo-400 to-purple-600",
    modules: [
      {
        id: "doubao-mobile",
        title: { en: "Mobile App", zh: "移动端应用" },
        description: {
          en: "Powerful AI features scaled down for everyday mobile intelligence.",
          zh: "为日常移动智能缩小的强大 AI 功能。"
        },
        link: "https://www.doubao.com/"
      }
    ]
  }
];
