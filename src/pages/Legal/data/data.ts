export interface CookieSection {
    id: string;
    title: string;
    description?: string;
    paragraphs?: string[];
    bullets?: string[];
    table?: {
        headers: string[];
        rows: string[][];
    };
}

export interface CookiePolicy {
    title: string;
    description: string;
    lastUpdated: string;
    sections: CookieSection[];
}
export const cookiePolicy: CookiePolicy = {
  title: "Cookie Policy",
  description:
    "This Cookie Policy explains how Kyra AI CRM uses cookies and similar technologies to recognize you when you visit our website and platform.",

  lastUpdated: "July 4, 2026",

  sections: [
    {
      id: "what-are-cookies",
      title: "What are Cookies?",
      paragraphs: [
        "Cookies are small text files stored on your device that help websites remember information about your visit."
      ]
    },

    {
      id: "how-we-use",
      title: "How We Use Cookies",

      bullets: [
        "Authentication",
        "Security",
        "Remember preferences",
        "Analytics",
        "Performance monitoring"
      ]
    },

    {
      id: "cookie-types",

      title: "Types of Cookies",

      table: {
        headers: [
          "Cookie",
          "Purpose",
          "Duration"
        ],

        rows: [
          [
            "Essential",
            "Login & Security",
            "Session"
          ],

          [
            "Preference",
            "Language & Theme",
            "1 Year"
          ],

          [
            "Analytics",
            "Improve Website",
            "2 Years"
          ]
        ]
      }
    },

    {
      id: "manage",

      title: "Managing Cookies",

      paragraphs: [
        "Most browsers allow you to control cookies through browser settings. Disabling some cookies may affect platform functionality."
      ]
    }
  ]
};