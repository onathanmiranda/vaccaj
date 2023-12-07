const baseUrl = process.env.SITE_URL;

const configs = {
  env: {
    baseUrl
  },
  metadata: { 
    title: "Vaccaj",
    id: "vaccaj",
    description: "Os melhores vocalizes, exercícios e métodos de canto, na palma da sua mão.",
    generator: "Next.js",
    referrer: "origin-when-crossorigin",
    keywords: ["vaccaj", "panofka", "belting", "vocalizes", "canto", "aquecimentos", "técnica"],
    author: { name: "Nathan Miranda", url: "https://www.linkedin.com/in/nathan-miranda-464973122/" },
    manifest: "/manifest.json",
    locale: "pt_BR",
    type: "website",
    themeColor: "#FEFDFD",
    colorScheme: "light",
    url: baseUrl,
  },
  cookies: {
    cookieConsentKey: "cookies-consent",
    installBannerDismissKey: "install-banner-dismiss",
    cookiesAllowedValue: "allowed",
    cookiesNotAllowedValue: "not-allowed",
    preferredRecordingsKey: "preferredRecording",
  },
  installBanner: {
    displayDaysInterval: 30,
  }
};

export default configs;