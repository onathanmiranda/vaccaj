export const title = 'Vaccaj';
export const author = "Nathan Miranda";
export const authorURL = 'https://www.linkedin.com/in/nathan-miranda-464973122/';
export const description = 'Os melhores vocalizes, exercícios e métodos de canto, na palma da sua mão.';

const robots = {
  index: true,
  follow: true,
  nocache: false,
  googleBot: {
    index: true,
    follow: true,
    noimageindex: true,
    'max-video-preview': -1,
    'max-image-preview': 'large',
    'max-snippet': -1,
  }
};

const icons = {
  icon: '/icon.png',
  shortcut: '/shortcut-icon.png',
  apple: '/apple-icon.png',
  other: {
    rel: 'apple-touch-icon-precomposed',
    url: '/apple-touch-icon-precomposed.png',
  },
};

const openGraph = {
  title: title,
  siteName: title,
  description: description,
  url: process.env.SITE_URL,
  locale: 'pt_BR',
  type: 'website',
  /*  https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image#image-files-jpg-png-gif */
};

export default metadata = {
  title: {
    template: `%s | ${title}`,
    default: title,
  },
  description: description,
  applicationName: title,
  referrer: "origin-when-crossorigin",
  keywords: ['vaccaj', 'panofka', 'belting', 'vocalize', 'canto', 'aquecimentos', 'vocais'],
  authors: [{ name: author, url: authorURL }],
  creator: author,
  publisher: author,
  colorScheme: 'light',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph,
  robots
};
