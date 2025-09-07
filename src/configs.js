const description = "Os melhores vocalizes, exercícios e métodos de canto, na palma da sua mão.";
const title = "Vaccaj";
const authorName = "Nathan Miranda";

const configs = {
  metadata: {
    title: {
      default: title,
      absolute: title,
      template: `%s | ${title}`
    },
    id: title.toLowerCase(),
    description: description,
    generator: "Next.js",
    applicationName: title,
    referrer: "origin-when-crossorigin",
    keywords: [
      "vaccaj",
      "panofka",
      "belting",
      "vocalizes",
      "canto",
      "aquecimentos",
      "técnica",
      "vocal"
    ],
    authors: [{
      name: authorName,
      url: "https://www.linkedin.com/in/onathamiranda/"
    }],
    creator: authorName,
    publisher: authorName,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    manifest: "/manifest.json",
    locale: "pt_BR",
    type: "website",
    url: process.env.NODE_ENV === "development" ? "http://localhost:3000" : process.env.SITE_URL,
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      creator: authorName,
      //images: ['https://vaccaj.app/images/og.png'], // Must be an absolute URL
    },
    openGraph: {
      title: 'Vaccaj',
      description: 'Os melhores vocalizes, exercícios e métodos de canto, na palma da sua mão.',
      url: 'https://vaccaj.app',
      siteName: 'Vaccaj',
      images: [
        {
          url: 'https://vaccaj.app/images/icon-512.png', // Must be an absolute URL
          width: 512,
          height: 512,
        }
      ],
      /* audio: [
        {
          url: 'https://nextjs.org/audio.mp3', // Must be an absolute URL
        },
      ], */
      locale: 'en_US',
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true
      },
    },
    appleWebApp: {
      title: title,
      statusBarStyle: 'black-translucent',
      startupImage: [
        '/images/apple-touch-startup-image-320.png',
        {
          "url": "/images/apple-touch-startup-image-320.png",
          "media": "(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 1)"
        },
        {
          "url": "/images/apple-touch-startup-image-640.png",
          "media": "(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2)"
        },
        {
          "url": "/images/apple-touch-startup-image-750.png",
          "media": "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
        },
        {
          "url": "/images/apple-touch-startup-image-768.png",
          "media": "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 1)"
        },
        {
          "url": "/images/apple-touch-startup-image-1242.png",
          "media": "(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3)"
        },
        {
          "url": "/images/apple-touch-startup-image-1536.png",
          "media": "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)"
        }
      ],
    },
    appLinks: {
      web: {
        url: 'https://vaccaj.app',
        should_fallback: true,
      }
    },
    category: 'Music, Education, Singing Practice, Vocal Training',
    /* verification: {
      google: 'google',
      yandex: 'yandex',
      yahoo: 'yahoo',
      other: {
        me: ['my-email', 'my-link'],
      },
    }, */
    /* itunes: {
      appId: 'myAppStoreID',
      appArgument: 'myAppArgument',
    }, */
  },
  viewport: {
    themeColor: "#09090b",
    colorScheme: 'dark',
  }
};

export default configs;
