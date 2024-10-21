export default function manifest(){
  return {
    "short_name": "Vaccaj",
    "name": "Vaccaj - Método Prático de Canto",
    "description": "Estude vocalizes e vaccajs de forma simplificada.",
    "id": "vaccaj.app",
    "background_color": "#09090b",
    "theme_color": "#09090b",
    "display": "fullscreen",
    "scope": "/",
    "start_url": "/modulos/vocalizes",
    "prefer_related_applications": true,
    "orientation": "portrait",
    "categories": ["education", "music", "entertainment"],
    "lang": "pt-BR",
    "dir": "ltr",
    "related_applications": [
      {
        "platform": "webapp",
        "url": "https://vaccaj.app/manifest.json",
        "id": "vaccaj.app"
      }
    ],
    "shortcuts": [
      {
        "name": "Vocalizes",
        "short_name": "Vocalizes",
        "description": "Fazer vocalizes",
        "url": "/modulos/vocalizes",
      },
      {
        "name": "Método Vaccaj",
        "short_name": "Vaccaj",
        "description": "Estude o método Vaccaj",
        "url": "/modulos/vaccaj"
      }
    ],
    "icons": [
      {
        "src": "/icon.svg",
        "type": "image/svg+xml",
        "sizes": "any"
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
    ]
  }
}