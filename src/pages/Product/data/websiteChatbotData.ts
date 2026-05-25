import { MessageSquare, DollarSign, Clock, Zap, MousePointerClick, Sparkles, Settings, Save, Target, Brain, FileUp, Upload, Database, Bot, Rocket } from "lucide-react";


export interface HeroData
  {
        badge: string;
        titleStart: string;
        titleHighlight: string;
        titleEnd: string;
        description: string;
        poweredBy: string;
        primaryCta: string;
        secondaryCta: string;
        heroImageUrl?: string;
    }

export interface WhyBuildData {
    title: string;
    description: string;
    features: {
        icon: React.ComponentType;
        title: string;
        description: string;
    }[];
}

export interface AddOnData {
    title: string;
    description: string;
    cta: string;
}

export interface FeatureSplitData {
    title: string;
    description: string;
    imageAlt: string;
}

export interface HowItWorksSteps {
    number: string;
    title: string;
    description: string;
    cta?: string;
    icon: React.ComponentType;
}
export interface WebsiteChatbotData {
    heroData: HeroData; 
    whyBuildData: WhyBuildData;
    addOnData: AddOnData;
    featureSplitData: FeatureSplitData[];
    howItWorksSteps: HowItWorksSteps[];
}


export const websiteChatbotData:WebsiteChatbotData = {
  heroData: {
  badge: "Powered by AI Conversations",
  titleStart: "Build No-code Website",
  titleHighlight: "Chatbots",
  titleEnd: "in Minutes",
  description:
    "Build smart website chatbot with a drag-and-drop flow builder. Capture leads, qualify prospects, and support customers 24×7 — without writing a single line of code.",
  poweredBy: "Powered by AI Lead Intelligence",
  primaryCta: "Start for FREE",
  secondaryCta: "Book a Demo",
  heroImageUrl: "/website-chatbot-hero.jpg",
},
whyBuildData :{
  title: "Why Build Smart Website Chatbots with Kyra",
  description:
    "Stop losing leads to slow response times. Kyra's website chatbot builder lets any team — not just developers — automate support, qualify leads, and drive sales around the clock.",
  features: [
    {
      icon: MessageSquare,
      title: "Automate 80% of Support Instantly",
      description: "Effortlessly automate common visitor queries with an AI website chatbot.",
    },
    {
      icon: DollarSign,
      title: "Qualify Leads Without Lifting a Finger",
      description: "Automate 3x sales on your website with Smart AI Chatbot.",
    },
    {
      icon: Clock,
      title: "Stay Active 24×7",
      description: "Website chatbot works 24/7, responds to user queries, and drives sales.",
    },
  ],
},
addOnData: {
  title: "Add-on Feature",
  description:
    "Unlock our advanced drag-and-drop Flow Builder and start automating support, lead qualification, and product guidance instantly.",
  cta: "Explore Plans And Pricing",
},
featureSplitData : [
  {
    title: "Turn Leads into Customers Effortlessly",
    description:
      "Let your chatbot do the heavy lifting by qualifying leads easily, driving conversions without human intervention.",
    imageAlt: "Lead conversion illustration",
  },
  {
    title: "A Chatbot Builder for Non-techies",
    description:
      "Build multiple Website Chatbots easily, thanks to a drag-and-drop interface that requires zero coding expertise.",
    imageAlt: "Chatbot builder interface",
  },
],
 howItWorksSteps: [
  {
    number: "#1",
    title: "Unlock the Flow Builder",
    description: "Create your Kyra account and subscribe to the add-on to access the Flow Builder.",
    cta: "Explore Plans And Prices",
    icon: Zap,
  },
  {
    number: "#2",
    title: "Create a New Chatbot Flow",
    description: 'Click "Create Flow" inside your dashboard and give your flow a name.',
    icon: MousePointerClick,
  },
  {
    number: "#3",
    title: "Design Your Chatbot",
    description:
      "Drag and drop elements from the Content block to design your chatbot. Use elements like Quick Replies, Lists, Product Cards, and API calls to build your flow.",
    cta: "Learn More",
    icon: Sparkles,
  },
  {
    number: "#4",
    title: "Set Triggers and Conditions",
    description:
      "Add keywords, regex triggers, or connect the bot to page events, exit-intent popups, or paid ad landing pages.",
    cta: "About Page Triggers",
    icon: Target,
  },
  {
    number: "#5",
    title: "Save and Enable Your Chatbot",
    description:
      "Once your flow is complete, save your changes, and then enable the chatbot to make it go live. Your website chatbot is now ready to engage with users!",
    cta: "Learn More",
    icon: Save,
  },
]
}


export const aiChatbotData = {
  heroData:{
  badge: "Powered by Generative AI",
  titleStart: "Build AI-Powered",
  titleHighlight: "Smart Chatbots",
  titleEnd: "Trained on Your Docs",
  description:
    "No flows. No scripts. Just upload your PDFs, docs, and knowledge files — Kyra's AI instantly learns your business and resolves customer queries in seconds, with zero human intervention.",
  poweredBy: "Trained on Your Knowledge Base — Answers in Real Time",
  primaryCta: "Start for FREE",
  secondaryCta: "Book a Demo",
  heroImageUrl: "/product/ai-chatbot-hero.jpg",
},
whyBuildData :{
title: "Why Build AI Chatbots with Kyra",
  description:
    "Skip the drag-and-drop flow building. Just feed Kyra your documents and let AI handle every conversation — instant, accurate, and always on-brand.",
  features: [
    {
      icon: Brain,
      title: "Instant Answers, Zero Setup",
      description: "AI reads your knowledge base and responds to any question — no flows or rules required.",
    },
    {
      icon: FileUp,
      title: "Upload & Train in Minutes",
      description: "Drop PDFs, Word docs, FAQs, or website URLs. Kyra trains automatically on your content.",
    },
    {
      icon: Zap,
      title: "Resolve 95% of Queries Without Humans",
      description: "AI understands intent, context, and nuance — handing off only when truly needed.",
    },
  ],
},
addOnData: {
  title: "AI Knowledge Engine",
  description:
    "Unlock our advanced AI Knowledge Engine and turn any document into a 24×7 conversational expert that scales with your business.",
  cta: "Explore Plans And Pricing",
},

featureSplitData : [
  {
    title: "Turn Documents into Conversations",
    description:
      "Your PDFs, manuals, and FAQs become a living, breathing assistant. Kyra's AI extracts meaning — not just keywords — to give precise, contextual answers.",
    imageAlt: "AI knowledge base illustration",
  },
  {
    title: "An AI Chatbot for Non-techies",
    description:
      "No prompts, no flows, no code. Just upload your files, hit train, and your AI chatbot is ready to talk to customers.",
    imageAlt: "AI training dashboard",
  },
],
  howItWorksSteps: [
    {
    number: "#1",
    title: "Unlock the AI Knowledge Engine",
    description: "Create your Kyra account and subscribe to the AI add-on to access the AI Knowledge Engine.",
    cta: "Explore Plans And Prices",
    icon: Sparkles,
  },
  {
    number: "#2",
    title: "Upload Your Documents",
    description:
      'Drag and drop PDFs, Word docs, spreadsheets, or paste website URLs. Kyra ingests everything in seconds.',
    icon: Upload,
  },
  {
    number: "#3",
    title: "Train Your AI Brain",
    description:
      "Kyra automatically chunks, embeds, and indexes your content into a private vector knowledge base — tuned to your business voice.",
    cta: "Learn More",
    icon: Database,
  },
  {
    number: "#4",
    title: "Customize Your AI Persona",
    description:
      "Set tone, language, fallback behavior, and lead-capture rules. Decide when AI should hand off to a human.",
    cta: "About AI Persona",
    icon: Bot,
  },
  {
    number: "#5",
    title: "Go Live and Start Resolving",
    description:
      "Embed the AI chatbot on your website with one snippet. Watch it resolve queries instantly, capture leads, and learn over time.",
    cta: "Learn More",
    icon: Rocket,
  },
  ]

}