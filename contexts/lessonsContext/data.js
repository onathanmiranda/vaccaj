const voiceTypes = [
  {
    id: 1,
    title: "Baixo",
  },
  {
    id: 2,
    title: "Barítono",
  },
  {
    id: 3,
    title: "Tenor",
  },
  {
    id: 4,
    title: "Contralto",
  },
  {
    id: 5,
    title: "Mezzo-Soprano",
  },
  {
    id: 6,
    title: "Soprano",
  },
];

const voiceTypeOrderById = [6, 5, 4, 3, 2, 1];

const speeds = [
  {
    id: 1,
    title: "Normal",
  },
  {
    id: 2,
    title: "Rápido",
  },
];

const recordings = [
  {
    id: 1,
    type: "audio/mpeg",
    filePath: "/recordings/1a_altto.mp3",
    voiceType: 4,
    speedId: 1,
  },
  {
    id: 2,
    type: "audio/mpeg",
    filePath: "/recordings/1a_baritoni1.mp3",
    voiceType: 2,
    speedId: 1,
  },
  {
    id: 3,
    type: "audio/mpeg",
    filePath: "/recordings/1a_baritoni2.mp3",
    voiceType: 1,
    speedId: 1,
  },
  {
    id: 4,
    type: "audio/mpeg",
    filePath: "/recordings/1a_mezzo.mp3",
    voiceType: 5,
    speedId: 1,
  },
  {
    id: 5,
    type: "audio/mpeg",
    filePath: "/recordings/1a_sopraano.mp3",
    voiceType: 6,
    speedId: 1,
  },
  {
    id: 6,
    type: "audio/mpeg",
    filePath: "/recordings/1b_altto.mp3",
    voiceType: 4,
    speedId: 1,
  },
  {
    id: 7,
    type: "audio/mpeg",
    filePath: "/recordings/1b_baritoni.mp3",
    voiceType: 2,
    speedId: 1,
  },
  {
    id: 8,
    type: "audio/mpeg",
    filePath: "/recordings/1b_mezzo.mp3",
    voiceType: 5,
    speedId: 1,
  },
  {
    id: 9,
    type: "audio/mpeg",
    filePath: "/recordings/1b_sopraano.mp3",
    voiceType: 6,
    speedId: 1,
  },
  {
    id: 10,
    type: "audio/mpeg",
    filePath: "/recordings/2a_baritoni.mp3",
    voiceType: 2,
    speedId: 1,
  },
  {
    id: 11,
    type: "audio/mpeg",
    filePath: "/recordings/2a_mezzo.mp3",
    voiceType: 5,
    speedId: 1,
  },
  {
    id: 12,
    type: "audio/mpeg",
    filePath: "/recordings/2b_baritoni.mp3",
    voiceType: 2,
    speedId: 1,
  },
  {
    id: 13,
    type: "audio/mpeg",
    filePath: "/recordings/2b_mezzo.mp3",
    voiceType: 5,
    speedId: 1,
  },
  {
    id: 14,
    type: "audio/mpeg",
    filePath: "/recordings/2b_sopraano.mp3",
    voiceType: 6,
    speedId: 1,
  },
  {
    id: 15,
    type: "audio/mpeg",
    filePath: "/recordings/3_baritoni.mp3",
    voiceType: 2,
    speedId: 1,
  },
  {
    id: 16,
    type: "audio/mpeg",
    filePath: "/recordings/3_mezzo.mp3",
    voiceType: 5,
    speedId: 1,
  },
  {
    id: 17,
    type: "audio/mpeg",
    filePath: "/recordings/4a_baritoni.mp3",
    voiceType: 2,
    speedId: 1,
  },
  {
    id: 18,
    type: "audio/mpeg",
    filePath: "/recordings/4a_mezzo.mp3",
    voiceType: 5,
    speedId: 1,
  },
  {
    id: 19,
    type: "audio/mpeg",
    filePath: "/recordings/4b_baritoni.mp3",
    voiceType: 2,
    speedId: 1,
  },
  {
    id: 20,
    type: "audio/mpeg",
    filePath: "/recordings/4b_mezzo.mp3",
    voiceType: 5,
    speedId: 1,
  },
  {
    id: 21,
    type: "audio/mpeg",
    filePath: "/recordings/5_altto.mp3",
    voiceType: 4,
    speedId: 1,
  },
  {
    id: 22,
    type: "audio/mpeg",
    filePath: "/recordings/5_baritoni.mp3",
    voiceType: 2,
    speedId: 1,
  },
  {
    id: 23,
    type: "audio/mpeg",
    filePath: "/recordings/5_mezzo.mp3",
    voiceType: 5,
    speedId: 1,
  },
  {
    id: 24,
    type: "audio/mpeg",
    filePath: "/recordings/5_sopraano.mp3",
    voiceType: 6,
    speedId: 1,
  },
  {
    id: 25,
    type: "audio/mpeg",
    filePath: "/recordings/6_baritoni.mp3",
    voiceType: 2,
    speedId: 1,
  },
  {
    id: 26,
    type: "audio/mpeg",
    filePath: "/recordings/6_mezzo.mp3",
    voiceType: 5,
    speedId: 1,
  },
  {
    id: 27,
    type: "audio/mpeg",
    filePath: "/recordings/7hidas_altto.mp3",
    voiceType: 4,
    speedId: 1,
  },
  {
    id: 28,
    type: "audio/mpeg",
    filePath: "/recordings/7hidas_baritoni1.mp3",
    voiceType: 2,
    speedId: 1,
  },
  {
    id: 29,
    type: "audio/mpeg",
    filePath: "/recordings/7hidas_baritoni2.mp3",
    voiceType: 1,
    speedId: 1,
  },
  {
    id: 30,
    type: "audio/mpeg",
    filePath: "/recordings/7hidas_mezzo.mp3",
    voiceType: 5,
    speedId: 1,
  },
  {
    id: 31,
    type: "audio/mpeg",
    filePath: "/recordings/7hidas_sopraano.mp3",
    voiceType: 6,
    speedId: 1,
  },
  {
    id: 32,
    type: "audio/mpeg",
    filePath: "/recordings/7nopea_altto.mp3",
    voiceType: 4,
    speedId: 2,
  },
  {
    id: 33,
    type: "audio/mpeg",
    filePath: "/recordings/7nopea_baritoni1.mp3",
    voiceType: 2,
    speedId: 2,
  },
  {
    id: 34,
    type: "audio/mpeg",
    filePath: "/recordings/7nopea_baritoni2.mp3",
    voiceType: 1,
    speedId: 2,
  },
  {
    id: 35,
    type: "audio/mpeg",
    filePath: "/recordings/7nopea_mezzo.mp3",
    voiceType: 5,
    speedId: 2,
  },
  {
    id: 36,
    type: "audio/mpeg",
    filePath: "/recordings/7nopea_sopraano.mp3",
    voiceType: 6,
    speedId: 2,
  },
  {
    id: 37,
    type: "audio/mpeg",
    filePath: "/recordings/8a_altto.mp3",
    voiceType: 4,
    speedId: 1,
  },
  {
    id: 38,
    type: "audio/mpeg",
    filePath: "/recordings/8a_baritoni.mp3",
    voiceType: 2,
    speedId: 1,
  },
  {
    id: 39,
    type: "audio/mpeg",
    filePath: "/recordings/8a_mezzo.mp3",
    voiceType: 5,
    speedId: 1,
  },
  {
    id: 40,
    type: "audio/mpeg",
    filePath: "/recordings/8a_sopraano.mp3",
    voiceType: 6,
    speedId: 1,
  },
  {
    id: 41,
    type: "audio/mpeg",
    filePath: "/recordings/8a_tenori.mp3",
    voiceType: 3,
    speedId: 1,
  },
  {
    id: 42,
    type: "audio/mpeg",
    filePath: "/recordings/8b_altto.mp3",
    voiceType: 4,
    speedId: 1,
  },
  {
    id: 43,
    type: "audio/mpeg",
    filePath: "/recordings/8b_baritoni.mp3",
    voiceType: 2,
    speedId: 1,
  },
  {
    id: 44,
    type: "audio/mpeg",
    filePath: "/recordings/8b_mezzo.mp3",
    voiceType: 5,
    speedId: 1,
  },
  {
    id: 45,
    type: "audio/mpeg",
    filePath: "/recordings/8b_sopraano.mp3",
    voiceType: 6,
    speedId: 1,
  },
  {
    id: 46,
    type: "audio/mpeg",
    filePath: "/recordings/8b_tenori.mp3",
    voiceType: 3,
    speedId: 1,
  },
  {
    id: 47,
    type: "audio/mpeg",
    filePath: "/recordings/9a_altto.mp3",
    voiceType: 4,
    speedId: 1,
  },
  {
    id: 48,
    type: "audio/mpeg",
    filePath: "/recordings/9a_baritoni.mp3",
    voiceType: 2,
    speedId: 1,
  },
  {
    id: 49,
    type: "audio/mpeg",
    filePath: "/recordings/9a_mezzo.mp3",
    voiceType: 5,
    speedId: 1,
  },
  {
    id: 50,
    type: "audio/mpeg",
    filePath: "/recordings/9a_sopraano.mp3",
    voiceType: 6,
    speedId: 1,
  },
  {
    id: 51,
    type: "audio/mpeg",
    filePath: "/recordings/9b_altto.mp3",
    voiceType: 4,
    speedId: 1,
  },
  {
    id: 52,
    type: "audio/mpeg",
    filePath: "/recordings/9b_baritoni.mp3",
    voiceType: 2,
    speedId: 1,
  },
  {
    id: 53,
    type: "audio/mpeg",
    filePath: "/recordings/9b_mezzo.mp3",
    voiceType: 5,
    speedId: 1,
  },
  {
    id: 54,
    type: "audio/mpeg",
    filePath: "/recordings/9b_sopraano.mp3",
    voiceType: 6,
    speedId: 1,
  },
  {
    id: 55,
    type: "audio/mpeg",
    filePath: "/recordings/10a_mezzo.mp3",
    voiceType: 5,
    speedId: 1,
  },
  {
    id: 56,
    type: "audio/mpeg",
    filePath: "/recordings/10a_tenori.mp3",
    voiceType: 3,
    speedId: 1,
  },
  {
    id: 57,
    type: "audio/mpeg",
    filePath: "/recordings/10b_mezzo.mp3",
    voiceType: 5,
    speedId: 1,
  },
  {
    id: 58,
    type: "audio/mpeg",
    filePath: "/recordings/10b_tenori.mp3",
    voiceType: 3,
    speedId: 1,
  },
  {
    id: 59,
    type: "audio/mpeg",
    filePath: "/recordings/11_altto.mp3",
    voiceType: 4,
    speedId: 1,
  },
  {
    id: 60,
    type: "audio/mpeg",
    filePath: "/recordings/11_mezzo.mp3",
    voiceType: 5,
    speedId: 1,
  },
  {
    id: 61,
    type: "audio/mpeg",
    filePath: "/recordings/11_sopraano.mp3",
    voiceType: 6,
    speedId: 1,
  },
  {
    id: 62,
    type: "audio/mpeg",
    filePath: "/recordings/11_tenori.mp3",
    voiceType: 3,
    speedId: 1,
  },
  {
    id: 63,
    type: "audio/mpeg",
    filePath: "/recordings/12_mezzo.mp3",
    voiceType: 5,
    speedId: 1,
  },
  {
    id: 64,
    type: "audio/mpeg",
    filePath: "/recordings/12_sopraano.mp3",
    voiceType: 6,
    speedId: 1,
  },
  {
    id: 65,
    type: "audio/mpeg",
    filePath: "/recordings/12_tenori.mp3",
    voiceType: 3,
    speedId: 1,
  },
  {
    id: 66,
    type: "audio/mpeg",
    filePath: "/recordings/13a_altto.mp3",
    voiceType: 4,
    speedId: 1,
  },
  {
    id: 67,
    type: "audio/mpeg",
    filePath: "/recordings/13a_baritoni.mp3",
    voiceType: 2,
    speedId: 1,
  },
  {
    id: 68,
    type: "audio/mpeg",
    filePath: "/recordings/13a_mezzo.mp3",
    voiceType: 5,
    speedId: 1,
  },
  {
    id: 69,
    type: "audio/mpeg",
    filePath: "/recordings/13b_altto.mp3",
    voiceType: 4,
    speedId: 1,
  },
  {
    id: 70,
    type: "audio/mpeg",
    filePath: "/recordings/13b_baritoni.mp3",
    voiceType: 2,
    speedId: 1,
  },
  {
    id: 71,
    type: "audio/mpeg",
    filePath: "/recordings/13b_mezzo.mp3",
    voiceType: 5,
    speedId: 1,
  },
  {
    id: 72,
    type: "audio/mpeg",
    filePath: "/recordings/14_baritoni.mp3",
    voiceType: 2,
    speedId: 1,
  },
  {
    id: 73,
    type: "audio/mpeg",
    filePath: "/recordings/14_mezzo.mp3",
    voiceType: 5,
    speedId: 1,
  },
  {
    id: 74,
    type: "audio/mpeg",
    filePath: "/recordings/14_sopraano.mp3",
    voiceType: 6,
    speedId: 1,
  },
  {
    id: 75,
    type: "audio/mpeg",
    filePath: "/recordings/15_altto.mp3",
    voiceType: 4,
    speedId: 1,
  },
  {
    id: 76,
    type: "audio/mpeg",
    filePath: "/recordings/15_baritoni.mp3",
    voiceType: 2,
    speedId: 1,
  },
  {
    id: 77,
    type: "audio/mpeg",
    filePath: "/recordings/15_mezzo.mp3",
    voiceType: 5,
    speedId: 1,
  },
  {
    id: 78,
    type: "audio/mpeg",
    filePath: "/recordings/15_sopraano.mp3",
    voiceType: 6,
    speedId: 1,
  },
  {
    id: 79,
    type: "audio/mpeg",
    filePath: "recordings/warm_up_01.mp3",
    voiceType: null,
    speedId: 1,
  },
  {
    id: 80,
    type: "audio/mpeg",
    filePath: "recordings/warm_up_02.mp3",
    voiceType: null,
    speedId: 1,
  },
  {
    id: 81,
    type: "audio/mpeg",
    filePath: "recordings/warm_up_03.mp3",
    voiceType: null,
    speedId: 1,
  },
];

const sheets = [
  {
    id: 1,
    filePaths: ["/images/vaccaj_1a_contralto_baritono.jpg"],
    voiceTypes: [1, 2, 4],
  },
  { id: 2, filePaths: ["/images/vaccaj_1a_mezzo.jpg"], voiceTypes: [5] },
  {
    id: 3,
    filePaths: ["/images/vaccaj_1a_soprano_tenor.jpg"],
    voiceTypes: [3, 6],
  },
  {
    id: 4,
    filePaths: ["/images/vaccaj_1b_contralto_baritono.jpg"],
    voiceTypes: [1, 2, 4],
  },
  { id: 5, filePaths: ["/images/vaccaj_1b_mezzo.jpg"], voiceTypes: [5] },
  {
    id: 6,
    filePaths: ["/images/vaccaj_1b_soprano_tenor.jpg"],
    voiceTypes: [3, 6],
  },
  {
    id: 7,
    filePaths: ["/images/vaccaj_2a_contralto_baritono.jpg"],
    voiceTypes: [1, 2, 4],
  },
  { id: 8, filePaths: ["/images/vaccaj_2a_mezzo.jpg"], voiceTypes: [5] },
  {
    id: 9,
    filePaths: ["/images/vaccaj_2a_soprano_tenor.jpg"],
    voiceTypes: [3, 6],
  },
  {
    id: 10,
    filePaths: ["/images/vaccaj_2b_contralto_baritono.jpg"],
    voiceTypes: [1, 2, 4],
  },
  { id: 11, filePaths: ["/images/vaccaj_2b_mezzo.jpg"], voiceTypes: [5] },
  {
    id: 12,
    filePaths: ["/images/vaccaj_2b_soprano_tenor.jpg"],
    voiceTypes: [3, 6],
  },
  {
    id: 13,
    filePaths: ["/images/vaccaj_3_contralto_baritono.jpg"],
    voiceTypes: [1, 2, 4],
  },
  { id: 14, filePaths: ["/images/vaccaj_3_mezzo.jpg"], voiceTypes: [5] },
  {
    id: 15,
    filePaths: ["/images/vaccaj_3_soprano_tenor.jpg"],
    voiceTypes: [3, 6],
  },
  {
    id: 16,
    filePaths: ["/images/vaccaj_4a_contralto_baritono.jpg"],
    voiceTypes: [1, 2, 4],
  },
  { id: 17, filePaths: ["/images/vaccaj_4a_mezzo.jpg"], voiceTypes: [5] },
  {
    id: 18,
    filePaths: ["/images/vaccaj_4a_soprano_tenor.jpg"],
    voiceTypes: [3, 6],
  },
  {
    id: 19,
    filePaths: ["/images/vaccaj_4b_contralto_baritono.jpg"],
    voiceTypes: [1, 2, 4],
  },
  { id: 20, filePaths: ["/images/vaccaj_4b_mezzo.jpg"], voiceTypes: [5] },
  {
    id: 21,
    filePaths: ["/images/vaccaj_4b_soprano_tenor.jpg"],
    voiceTypes: [3, 6],
  },
  {
    id: 22,
    filePaths: [
      "/images/vaccaj_5_1_contralto_baritono.jpg",
      "/images/vaccaj_5_2_contralto_baritono.jpg",
    ],
    voiceTypes: [1, 2, 4],
  },
  {
    id: 23,
    filePaths: [
      "/images/vaccaj_5_1_soprano_tenor.jpg",
      "/images/vaccaj_5_2_soprano_tenor.jpg",
    ],
    voiceTypes: [3, 5, 6],
  },
  {
    id: 24,
    filePaths: ["/images/vaccaj_6_contralto_baritono.jpg"],
    voiceTypes: [1, 2, 4],
  },
  {
    id: 25,
    filePaths: ["/images/vaccaj_6_soprano_tenor.jpg"],
    voiceTypes: [3, 5, 6],
  },
  {
    id: 26,
    filePaths: ["/images/vaccaj_7_contralto_baritono.jpg"],
    voiceTypes: [1, 2, 4],
  },
  {
    id: 27,
    filePaths: ["/images/vaccaj_7_soprano_tenor.jpg"],
    voiceTypes: [3, 5, 6],
  },
  {
    id: 28,
    filePaths: [
      "/images/vaccaj_8a_1_contralto_baritono.jpg",
      "/images/vaccaj_8a_2_contralto_baritono.jpg",
    ],
    voiceTypes: [1, 2, 4],
  },
  {
    id: 29,
    filePaths: [
      "/images/vaccaj_8a_1_soprano_tenor.jpg",
      "/images/vaccaj_8a_2_soprano_tenor.jpg",
    ],
    voiceTypes: [3, 5, 6],
  },
  {
    id: 30,
    filePaths: [
      "/images/vaccaj_8b_1_contralto_baritono.jpg",
      "/images/vaccaj_8b_2_contralto_baritono.jpg",
    ],
    voiceTypes: [1, 2, 4],
  },
  {
    id: 31,
    filePaths: [
      "/images/vaccaj_8b_1_soprano_tenor.jpg",
      "/images/vaccaj_8b_2_soprano_tenor.jpg",
    ],
    voiceTypes: [3, 5, 6],
  },
  {
    id: 32,
    filePaths: [
      "/images/vaccaj_9a_1_contralto_baritono.jpg",
      "/images/vaccaj_9a_2_contralto_baritono.jpg",
    ],
    voiceTypes: [1, 2, 4],
  },
  {
    id: 33,
    filePaths: ["/images/vaccaj_9a_1_soprano_tenor.jpg"],
    voiceTypes: [3, 5, 6],
  },
  {
    id: 34,
    filePaths: [
      "/images/vaccaj_9b_1_soprano_tenor.jpg",
      "/images/vaccaj_9b_2_soprano_tenor.jpg",
      "/images/vaccaj_9b_3_soprano_tenor.jpg",
    ],
    voiceTypes: [3, 5, 6],
  },
  {
    id: 35,
    filePaths: [
      "/images/vaccaj_9b_1_contralto_baritono.jpg",
      "/images/vaccaj_9b_2_contralto_baritono.jpg",
    ],
    voiceTypes: [1, 2, 4],
  },
  {
    id: 36,
    filePaths: [
      "/images/vaccaj_10a_1_contralto_baritono.jpg",
      "/images/vaccaj_10a_2_contralto_baritono.jpg",
    ],
    voiceTypes: [1, 2, 4],
  },
  {
    id: 37,
    filePaths: [
      "/images/vaccaj_10a_1_soprano_tenor.jpg",
      "/images/vaccaj_10a_2_soprano_tenor.jpg",
    ],
    voiceTypes: [3, 5, 6],
  },
  {
    id: 38,
    filePaths: [
      "/images/vaccaj_10b_1_contralto_baritono.jpg",
      "/images/vaccaj_10b_2_contralto_baritono.jpg",
    ],
    voiceTypes: [1, 2, 4],
  },
  {
    id: 39,
    filePaths: [
      "/images/vaccaj_10b_1_soprano_tenor.jpg",
      "/images/vaccaj_10b_2_soprano_tenor.jpg",
    ],
    voiceTypes: [3, 5, 6],
  },
  {
    id: 40,
    filePaths: [
      "/images/vaccaj_11_1_contralto_baritono.jpg",
      "/images/vaccaj_11_2_contralto_baritono.jpg",
    ],
    voiceTypes: [1, 2, 4],
  },
  {
    id: 41,
    filePaths: [
      "/images/vaccaj_11_1_soprano_tenor.jpg",
      "/images/vaccaj_11_2_soprano_tenor.jpg",
    ],
    voiceTypes: [3, 5, 6],
  },
  {
    id: 42,
    filePaths: [
      "/images/vaccaj_12_1_contralto_baritono.jpg",
      "/images/vaccaj_12_2_contralto_baritono.jpg",
    ],
    voiceTypes: [1, 2, 4],
  },
  {
    id: 43,
    filePaths: [
      "/images/vaccaj_12_1_soprano_tenor.jpg",
      "/images/vaccaj_12_2_soprano_tenor.jpg",
    ],
    voiceTypes: [3, 5, 6],
  },
  {
    id: 44,
    filePaths: [
      "/images/vaccaj_13a_1_contralto_baritono.jpg",
      "/images/vaccaj_13a_2_contralto_baritono.jpg",
      "/images/vaccaj_13a_3_contralto_baritono.jpg",
    ],
    voiceTypes: [1, 2, 4],
  },
  {
    id: 45,
    filePaths: [
      "/images/vaccaj_13a_1_soprano_tenor.jpg",
      "/images/vaccaj_13a_2_soprano_tenor.jpg",
      "/images/vaccaj_13a_3_soprano_tenor.jpg",
    ],
    voiceTypes: [3, 5, 6],
  },
  {
    id: 46,
    filePaths: ["/images/vaccaj_13b_contralto_baritono.jpg"],
    voiceTypes: [1, 2, 4],
  },
  {
    id: 47,
    filePaths: ["/images/vaccaj_13b_soprano_tenor.jpg"],
    voiceTypes: [3, 5, 6],
  },
  {
    id: 48,
    filePaths: [
      "/images/vaccaj_14_1_contralto_baritono.jpg",
      "/images/vaccaj_14_2_contralto_baritono.jpg",
      "/images/vaccaj_14_3_contralto_baritono.jpg",
    ],
    voiceTypes: [1, 2, 4],
  },
  {
    id: 49,
    filePaths: [
      "/images/vaccaj_14_1_soprano_tenor.jpg",
      "/images/vaccaj_14_2_soprano_tenor.jpg",
      "/images/vaccaj_14_3_soprano_tenor.jpg",
    ],
    voiceTypes: [3, 5, 6],
  },
  {
    id: 50,
    filePaths: [
      "/images/vaccaj_15_1_contralto_baritono.jpg",
      "/images/vaccaj_15_2_contralto_baritono.jpg",
      "/images/vaccaj_15_3_contralto_baritono.jpg",
      "/images/vaccaj_15_4_contralto_baritono.jpg",
    ],
    voiceTypes: [1, 2, 4],
  },
  {
    id: 51,
    filePaths: [
      "/images/vaccaj_15_1_soprano_tenor.jpg",
      "/images/vaccaj_15_2_soprano_tenor.jpg",
      "/images/vaccaj_15_3_soprano_tenor.jpg",
      "/images/vaccaj_15_4_soprano_tenor.jpg",
    ],
    voiceTypes: [3, 5, 6],
  },
];

const songs = [
  {
    id: 1,
    title: "A Escala (Intervalos de Segunda)",
    beginning: "Manca solecitta",
    recordingIds: [1, 2, 3, 4, 5],
    sheetsList: [1, 2, 3],
    lyrics:
      "Manca sollecita \n più dell´usato, \n ancor che s`agiti \n con lieve fiato, \n face che palpita \n presso al morir.",
  },
  {
    id: 2,
    title: "Intervalos de Terça",
    beginning: "Semplicetta tortorella",
    recordingIds: [6, 7, 8, 9],
    sheetsList: [4, 5, 6],
    lyrics:
      "Semplicetta tortorella, \n che non vede il suo periglio, \n per fuggir dal crudo artiglio \n vola in grembo al cacciator.",
  },
  {
    id: 3,
    title: "Intervalos de Quarta",
    beginning: "Lascia il lido",
    recordingIds: [10, 11],
    sheetsList: [7, 8, 9],
    lyrics:
      "Lascia il lido, e il mare infido \n a solcar torna il nocchiero, \n e pur sa che menzognero \n altre volte l'ingannò.",
  },
  {
    id: 4,
    title: "Intervalos de Quinta",
    beginning: "Avvezzo a vivere",
    recordingIds: [12, 13, 14],
    sheetsList: [10, 11, 12],
    lyrics:
      "Avvezzo a vivere \n senza conforto, \n in mezzo al porto \n pavento il mar.",
  },
  {
    id: 5,
    title: "Intervalos de Sexta",
    beginning: "Bella prova é d'alma forte",
    recordingIds: [15, 16],
    sheetsList: [13, 14, 15],
    lyrics:
      "Bella prova è d'alma forte \n l'esser placida e serena \n nel soffrir l'ingiusta pena \n d'una colpa, che non ha.",
  },
  {
    id: 6,
    title: "Intervalos de Sétima",
    beginning: "Fra l'ombre un lampo solo",
    recordingIds: [17, 18],
    sheetsList: [16, 17, 18],
    lyrics:
      "Fra l'ombre un lampo solo \n basta al nocchier sagace \n che già ritrova il polo, \n che riconosce il mar.",
  },
  {
    id: 7,
    title: "Intervalos de Oitava",
    beginning: "Quell' onda che ruina",
    recordingIds: [19, 20],
    sheetsList: [19, 20, 21],
    lyrics:
      "Quell' onda che ruina, \n balza, si frange e mormora, \n ma limpida si fa.",
  },
  {
    id: 8,
    title: "Semitons",
    beginning: "Delira dubbiosa",
    recordingIds: [21, 22, 23, 24],
    sheetsList: [22, 23],
    lyrics:
      "Delira dubbiosa, \n incerta, vaneggia \n ogni almache ondeggia. \n fra i moti del cor.",
  },
  {
    id: 9,
    title: "Síncope",
    beginning: "Nel contrasto amor accende",
    recordingIds: [25, 26],
    sheetsList: [24, 25],
    lyrics:
      "Nel contrasto amor s'accende: \n con chi cede, o chi s'arrende \n mai sì barbaro non è.",
  },
  {
    id: 10,
    title: "Introdução à Coloratura* (Introduzione alle volate)",
    beginning: "Come il candore",
    recordingIds: [27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
    sheetsList: [26, 27],
    lyrics:
      "Come il candore \n d'intatta neve \n è d'un bel core \n la fedeltà. \n Un' orma sola \n che in sé riceve, \n tutta ne invola \n la sua beltà.",
  },
  {
    id: 11,
    title: "Apogiaturas",
    beginning: "Senza l'amabile",
    recordingIds: [37, 38, 39, 40, 41],
    sheetsList: [28, 29],
    lyrics:
      "Senza l'amabile \n Dio di Citera \n i dì non tornano \n di primavera, \n non spira un zeffiro, \n non spunta un fior.\n L´erbe sul margine \n del fonte amico, \n le piante vedove \n sul colle aprico \n per lui rivestono \n l´antico onor.",
  },
  {
    id: 12,
    title: "Accacciaturas",
    beginning: "Benchè di senso privo",
    recordingIds: [42, 43, 44, 45, 46],
    sheetsList: [30, 31],
    lyrics:
      "Benchè di senso privo, \n fin l`arboscello è grato \n a quell'amico rivo, \n da cui riceve umor. \n per lui di fronde ornato \n bella mercè gli rende, \n dal sol quando difende \n il suo benefattor.",
  },
  {
    id: 13,
    title: "Introdução aos Mordentes",
    beginning: "La gioia verace",
    recordingIds: [47, 48, 49, 50],
    sheetsList: [32, 33],
    lyrics:
      "la gioja verace \n per farsi palese, \n d´un labbro loquace \n bisogno non ha.",
  },
  {
    id: 14,
    title: "Mordentes Variados",
    beginning: "L'augelletto in lacci stretto",
    recordingIds: [51, 52, 53, 54],
    sheetsList: [34, 35],
    lyrics:
      "L´augelletto in lacci stretto \n perchè mai cantar s´ascolta? \n Perchè spera un´ altra volta \n di tornare in libertà.",
  },
  {
    id: 15,
    title: "Introdução aos Grupetos",
    beginning: "Quando accende un nobil petto",
    recordingIds: [55, 56],
    sheetsList: [36, 37],
    lyrics:
      "Quando accende un nobil petto \n è innocente, è puro affetto, \n debolezza amor non è.",
  },
  {
    id: 16,
    title: "Grupetos",
    beginning: "Più non si trovano",
    recordingIds: [57, 58],
    sheetsList: [38, 39],
    lyrics:
      "Più non si trovano \n tra mille amanti \n sol due bell' anime \n che sian costanti, \n e tutti parlano \n di fedeltà.",
  },
  {
    id: 17,
    title: "Introdução aos Trinados* (Introduzione al trillo)",
    beginning: "Se povero il ruscello",
    recordingIds: [59, 60, 61, 62],
    sheetsList: [40, 41],
    lyrics:
      "Se povero il ruscello \n mormora lento e basso; \n un ramoscello, un sasso \n quasi arrestar lo fa.",
  },
  {
    id: 18,
    title: "Coloraturas* (Le volate)",
    beginning: "Siam navi all' onde algenti",
    recordingIds: [63, 64, 65],
    sheetsList: [42, 43],
    lyrics:
      "Siam navi all' onde algenti \n lasciate in abbandono: \n impetuosi venti \n i nostri affetti sono: \n ogni diletto è scoglio: \n tutta la vita è un mar.",
  },
  {
    id: 19,
    title: "Portamento I",
    beginning: "Vorrei spiegar l'affanno",
    recordingIds: [66, 67, 68],
    sheetsList: [44, 45],
    lyrics:
      "Vorrei spiegar l´affanno, \n nasconderlo vorrei; \n e mentre i dubbi miei \n così crescendo vanno, \n tutto spiegar non oso, \n tutto non so tacer. \n Sollecito, dubbioso, \n penso, rammento e vedo; \n e agli occhi miei non credo, \n non credo al mio pensier.",
  },
  {
    id: 20,
    title: "Portamento II",
    beginning: "O placido il mare",
    recordingIds: [69, 70, 71],
    sheetsList: [46, 47],
    lyrics:
      "O placido il mare \n lusinghi la sponda, \n o porti con l´onda \n terrore e spavento, \n è colpa del vento, \n sua colpa non è.",
  },
  {
    id: 21,
    title: "Recitativo",
    beginning: "La patria è un tutto",
    recordingIds: [72, 73, 74],
    sheetsList: [48, 49],
    lyrics:
      "La patria è un tutto \n di cui siam parti \n al cittadino è fallo \n considerar sè stesso \n separato da lei. \n L´utile, o il danno, \n ch'ei conoscer dee solo \n è ciò che giova \n o nuoce alla sua patria, \n a cui di tutto è debitor. \n Quando i sudori, \n e il sangue sparge per lei, \n nulla del proprio ei dona: \n rende sol ciò che n'ebbe. \n Essa il produsse, \n l'educò, lo nudrì. \n Con le sue leggi \n dagl'insulti domestici il difende, \n dagli esterni con l'armi. \n Ella gli presta nome, \n grado, ed onor; \n ne premia il merto; \n ne vendica le offese, \n e madre amante \n a fabbricar s'affanna \n la sua felicità, \n per quanto lice \n al destin de' mortali \n esser felice.",
  },
  {
    id: 22,
    title: "Recapitulação",
    beginning: "Alla stagion de' fiori",
    recordingIds: [75, 76, 77, 78],
    sheetsList: [50, 51],
    lyrics:
      "Alla stagion de' fiori \n e de' novelli amori \n è grato il molle fiato \n d'un zeffiro legger. \n O gema fra le fronde \n o lento increspi l'onde: \n zeffiro in ogni lato \n compagno è del piacer.",
  },
  {
    id: 23,
    title: "Staccato",
    beginning: "Hi Hi Hi",
    recordingIds: [79],
    sheetsList: [],
    lyrics: null,
  },
  {
    id: 24,
    title: "Legato",
    beginning: "OOO / III",
    recordingIds: [80],
    sheetsList: [],
    lyrics: null,
  },
  {
    id: 25,
    title: "Legato + Staccato",
    beginning: "AAAOOO / IIIOOO",
    recordingIds: [81],
    sheetsList: [],
    lyrics: null,
  },
];

const skills = [
  { id: 1, title: "Intervalos" },
  { id: 2, title: "Ornamentos" },
  { id: 3, title: "Recitativos e Arias" },
  { id: 4, title: "Diafragma / Respiração" },
  { id: 5, title: "Vocalizes Voz de Cabeça" },
];

const lessons = [
  {
    id: 1,
    title: "lição I",
    skillId: 1,
    songIds: [1, 2],
  },
  {
    id: 2,
    title: "lição II",
    skillId: 1,
    songIds: [3, 4],
  },
  {
    id: 3,
    title: "lição III",
    skillId: 1,
    songIds: [5],
  },
  {
    id: 4,
    title: "lição IV",
    skillId: 1,
    songIds: [6, 7],
  },
  {
    id: 5,
    title: "lição V",
    skillId: 2,
    songIds: [8],
  },
  {
    id: 6,
    title: "lição VI",
    skillId: 2,
    songIds: [9],
  },
  {
    id: 7,
    title: "lição VII",
    skillId: 2,
    songIds: [10],
  },
  {
    id: 8,
    title: "lição VIII",
    skillId: 2,
    songIds: [11, 12],
  },
  {
    id: 9,
    title: "lição IX",
    skillId: 2,
    songIds: [13, 14],
  },
  {
    id: 10,
    title: "lição X",
    skillId: 2,
    songIds: [15, 16],
  },
  {
    id: 11,
    title: "lição XI",
    skillId: 2,
    songIds: [17],
  },
  {
    id: 12,
    title: "lição XII",
    skillId: 2,
    songIds: [18],
  },
  {
    id: 13,
    title: "lição XIII",
    skillId: 2,
    songIds: [19, 20],
  },
  {
    id: 14,
    title: "lição XIV",
    skillId: 3,
    songIds: [21],
  },
  {
    id: 15,
    title: "lição XV",
    skillId: 3,
    songIds: [22],
  },
  {
    id: 16,
    title: "",
    skillId: 4,
    songIds: [23],
  },
  {
    id: 17,
    title: "",
    skillId: 5,
    songIds: [24, 25],
  },
];

const modules = [
  {
    id: 1,
    title: "Aquecimentos",
    lessonsIds: [16, 17],
  },
  {
    id: 2,
    title: "lição",
    lessonsIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  },
];

export {
  voiceTypes,
  voiceTypeOrderById,
  speeds,
  recordings,
  songs,
  skills,
  lessons,
  sheets,
  modules,
};
