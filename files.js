const testFolder = "./public/images/";
const fs = require("fs");

const cu = [
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
    voiceTypes: [3, 6],
  },
  {
    id: 26,
    filePaths: ["/images/vaccaj_6_contralto_baritono.jpg"],
    voiceTypes: [1, 2, 4],
  },
  {
    id: 27,
    filePaths: ["/images/vaccaj_6_soprano_tenor.jpg"],
    voiceTypes: [3, 6],
  },
  {
    id: 28,
    filePaths: ["/images/vaccaj_7_contralto_baritono.jpg"],
    voiceTypes: [1, 2, 4],
  },
  {
    id: 29,
    filePaths: ["/images/vaccaj_7_soprano_tenor.jpg"],
    voiceTypes: [3, 6],
  },
  {
    id: 30,
    filePaths: [
      "/images/vaccaj_8a_1_contralto_baritono.jpg",
      "/images/vaccaj_8a_2_contralto_baritono.jpg",
    ],
    voiceTypes: [1, 2, 4],
  },
  {
    id: 31,
    filePaths: [
      "/images/vaccaj_8a_1_soprano_tenor.jpg",
      "/images/vaccaj_8a_2_soprano_tenor.jpg",
    ],
    voiceTypes: [3, 6],
  },
  {
    id: 34,
    filePaths: [
      "/images/vaccaj_8b_1_contralto_baritono.jpg",
      "/images/vaccaj_8b_2_contralto_baritono.jpg",
    ],
    voiceTypes: [1, 2, 4],
  },
  {
    id: 35,
    filePaths: [
      "/images/vaccaj_8b_1_soprano_tenor.jpg",
      "/images/vaccaj_8b_2_soprano_tenor.jpg",
    ],
    voiceTypes: [3, 6],
  },
  {
    id: 38,
    filePaths: [
      "/images/vaccaj_9a_1_contralto_baritono.jpg",
      "/images/vaccaj_9a_2_contralto_baritono.jpg",
    ],
    voiceTypes: [1, 2, 4],
  },
  {
    id: 39,
    filePaths: ["/images/vaccaj_9a_1_soprano_tenor.jpg"],
    voiceTypes: [3, 6],
  },
  {
    id: 42,
    filePaths: [
      "/images/vaccaj_9b_1_soprano_tenor.jpg",
      "/images/vaccaj_9b_2_soprano_tenor.jpg",
      "/images/vaccaj_9b_3_soprano_tenor.jpg",
    ],
    voiceTypes: [3, 6],
  },
  {
    id: 43,
    filePaths: [
      "/images/vaccaj_9b_1_contralto_baritono.jpg",
      "/images/vaccaj_9b_2_contralto_baritono.jpg",
    ],
    voiceTypes: [1, 2, 4],
  },
  {
    id: 46,
    filePaths: [
      "/images/vaccaj_10a_1_contralto_baritono.jpg",
      "/images/vaccaj_10a_2_contralto_baritono.jpg",
    ],
    voiceTypes: [1, 2, 4],
  },
  {
    id: 47,
    filePaths: [
      "/images/vaccaj_10a_1_soprano_tenor.jpg",
      "/images/vaccaj_10a_2_soprano_tenor.jpg",
    ],
    voiceTypes: [3, 6],
  },
  {
    id: 50,
    filePaths: [
      "/images/vaccaj_10b_1_contralto_baritono.jpg",
      "/images/vaccaj_10b_2_contralto_baritono.jpg",
    ],
    voiceTypes: [1, 2, 4],
  },
  {
    id: 51,
    filePaths: [
      "/images/vaccaj_10b_1_soprano_tenor.jpg",
      "/images/vaccaj_10b_2_soprano_tenor.jpg",
    ],
    voiceTypes: [3, 6],
  },
  {
    id: 54,
    filePaths: [
      "/images/vaccaj_11_1_contralto_baritono.jpg",
      "/images/vaccaj_11_2_contralto_baritono.jpg",
    ],
    voiceTypes: [1, 2, 4],
  },
  {
    id: 55,
    filePaths: [
      "/images/vaccaj_11_1_soprano_tenor.jpg",
      "/images/vaccaj_11_2_soprano_tenor.jpg",
    ],
    voiceTypes: [3, 6],
  },
  {
    id: 58,
    filePaths: [
      "/images/vaccaj_12_1_contralto_baritono.jpg",
      "/images/vaccaj_12_2_contralto_baritono.jpg",
    ],
    voiceTypes: [1, 2, 4],
  },
  {
    id: 59,
    filePaths: [
      "/images/vaccaj_12_1_soprano_tenor.jpg",
      "/images/vaccaj_12_2_soprano_tenor.jpg",
    ],
    voiceTypes: [3, 6],
  },
  {
    id: 62,
    filePaths: [
      "/images/vaccaj_13_1_contralto_baritono.jpg",
      "/images/vaccaj_13_2_contralto_baritono.jpg",
      "/images/vaccaj_13_3_contralto_baritono.jpg",
      "/images/vaccaj_13_4_contralto_baritono.jpg",
    ],
    voiceTypes: [1, 2, 4],
  },
  {
    id: 63,
    filePaths: [
      "/images/vaccaj_13_1_soprano_tenor.jpg",
      "/images/vaccaj_13_2_soprano_tenor.jpg",
      "/images/vaccaj_13_3_soprano_tenor.jpg",
      "/images/vaccaj_13_4_soprano_tenor.jpg",
    ],
    voiceTypes: [3, 6],
  },
  {
    id: 70,
    filePaths: [
      "/images/vaccaj_14_1_contralto_baritono.jpg",
      "/images/vaccaj_14_2_contralto_baritono.jpg",
      "/images/vaccaj_14_3_contralto_baritono.jpg",
    ],
    voiceTypes: [1, 2, 4],
  },
  {
    id: 71,
    filePaths: [
      "/images/vaccaj_14_1_soprano_tenor.jpg",
      "/images/vaccaj_14_2_soprano_tenor.jpg",
      "/images/vaccaj_14_3_soprano_tenor.jpg",
    ],
    voiceTypes: [3, 6],
  },
  {
    id: 76,
    filePaths: [
      "/images/vaccaj_15_1_contralto_baritono.jpg",
      "/images/vaccaj_15_2_contralto_baritono.jpg",
      "/images/vaccaj_15_3_contralto_baritono.jpg",
      "/images/vaccaj_15_4_contralto_baritono.jpg",
    ],
    voiceTypes: [1, 2, 4],
  },
  {
    id: 77,
    filePaths: [
      "/images/vaccaj_15_1_soprano_tenor.jpg",
      "/images/vaccaj_15_2_soprano_tenor.jpg",
      "/images/vaccaj_15_3_soprano_tenor.jpg",
      "/images/vaccaj_15_4_soprano_tenor.jpg",
    ],
    voiceTypes: [3, 6],
  },
];

cu.forEach((c, i) => {
  const filePaths = c.filePaths.reduce((acc, next) => {});
  console.log(
    `{id: ${i + 1}, filePaths:["${c.filePaths.join(
      `","`
    )}"], voiceTypes: [${c.voiceTypes.join(",")}]},`
  );
});
/* fs.readdir(testFolder, (err, files) => {
  const reduced = files
    .sort((a, b) => {
      const _a = parseInt(a.replace(/^.*?(\d+)., "$1"));
      const _b = parseInt(b.replace(/^.*?(\d+)., "$1"));
      return _a - _b;
    })
    .reduce((acc, curr) => {
      let next = [...acc];
    }, []);

  reduced.forEach((file, i) => {
    console.log(`{ id: ${i}, filePaths: ["/images/${file}"] },`);
  });
}); */
