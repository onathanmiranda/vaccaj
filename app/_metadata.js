import configs from '../configs';

const { title, description, generator, referrer, keywords, author, manifest, locale, type, url } = configs.metadata;

const metadataBase = new URL(url);

const applicationName = title;
const titleTemplateObject = {
  template: `%s | ${title}`,
  default: title,
};
const authors = [author];
const creator = author.name;
const publisher = author.name;

const alternates = {
  canonical: url
}

const robots = {
  index: true,
  follow: true,
  nocache: false,
  googleBot: {
    index: true,
    follow: true,
    noimageindex: false,
    'max-video-preview': -1,
    'max-image-preview': 'large',
    'max-snippet': -1,
  }
};

const icons = {
  icon: '/icon.png',
  shortcut: '/shortcut-icon.png',
  apple: '/apple-icon.png',
  // TO-DO
  // https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons#image-files-ico-jpg-png
};

const openGraph = {
  title,
  siteName: title,
  description,
  url,
  locale,
  type
  // TO-DO
  // https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image#image-files-jpg-png-gif
};

const twitter = {
  card: type,
  title,
  description,
  creator: '@onathanmiranda',
  //siteId: '1467726470533754880',
  //creatorId: '1467726470533754880',
  /* images: {
    url: 'https://nextjs.org/og.png',
    alt: 'Next.js Logo',
  }, */
  /* app: {
    name: 'twitter_app',
    id: {
      iphone: 'twitter_app://iphone',
      ipad: 'twitter_app://ipad',
      googleplay: 'twitter_app://googleplay',
    },
    url: {
      iphone: 'https://iphone_url',
      ipad: 'https://ipad_url',
    },
  }, */
};

const appleWebApp = {
  title,
  statusBarStyle: 'default',
  /* startupImage: [
    '/assets/startup/apple-touch-startup-image-768x1004.png',
    {
      url: '/assets/startup/apple-touch-startup-image-1536x2008.png',
      media: '(device-width: 768px) and (device-height: 1024px)',
    },
  ], */
}

const metadata = {
  metadataBase,
  title: titleTemplateObject,
  alternates,
  description,
  applicationName,
  keywords,
  authors,
  creator,
  publisher,
  generator,
  referrer,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph,
  robots,
  icons,
  manifest,
  twitter,
  appleWebApp
};

export default metadata;