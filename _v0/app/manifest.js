import configs from '../../src/configs';

const { title, description, id, themeColor, locale } = configs.metadata;

export default function manifest(){
  return {
    name: title,
    short_name: title,
    description,
    dir: 'ltr',
    lang: locale,
    id: id,
    background_color: themeColor,
    themeColor,
    display: "fullscreen",
    scope: '/',
    start_url: "/",
    /* prefer_related_applications: true,
    related_applications: [
      {
        "platform": "webapp",
        "url": `${url}/manifest.json`
      }
    ],
    "icons": [
      {
        "src": "/images/icon.svg",
        "type": "image/svg+xml",
        "sizes": "150x150"
      },
      {
        "src": "/images/icon-16.png",
        "type": "image/png",
        "sizes": "16x16"
      },
      {
        "src": "/images/icon-32.png",
        "type": "image/png",
        "sizes": "32x32"
      },
      {
        "src": "/images/icon-180.png",
        "type": "image/png",
        "sizes": "180x180"
      },
      {
        "src": "/images/icon-192.png",
        "type": "image/png",
        "sizes": "192x192"
      },
      {
        "src": "/images/icon-512.png",
        "type": "image/png",
        "sizes": "512x512"
      }
    ],
    "screenshots": [
      {
        "src": "/images/screenshot_1.png",
        "type": "image/png",
        "sizes": "2880x1354"
      },
      {
        "src": "/images/screenshot_2.png",
        "type": "image/png",
        "sizes": "2880x1362"
      }
    ] */
  }
};
