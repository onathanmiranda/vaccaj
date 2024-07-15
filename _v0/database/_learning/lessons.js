const lessons = [
  {
    id: "1",
    title: "lição 1",
    skillId: "1",
    songIds: ["1", "2"],
  },
  {
    id: "2",
    title: "lição 2",
    skillId: "1",
    songIds: ["3", "4"],
  },
  {
    id: "3",
    title: "lição 3",
    skillId: "1",
    songIds: ["5"],
  },
  {
    id: "4",
    title: "lição 4",
    skillId: "1",
    songIds: ["6", "7"],
  },
  {
    id: "5",
    title: "lição 5",
    skillId: "2",
    songIds: ["8"],
  },
  {
    id: "6",
    title: "lição 6",
    skillId: "2",
    songIds: ["9"],
  },
  {
    id: "7",
    title: "lição 7",
    skillId: "2",
    songIds: ["10"],
  },
  {
    id: "8",
    title: "lição 8",
    skillId: "2",
    songIds: ["11", "12"],
  },
  {
    id: "9",
    title: "lição 9",
    skillId: "2",
    songIds: ["13", "14"],
  },
  {
    id: "10",
    title: "lição 10",
    skillId: "2",
    songIds: ["15", "16"],
  },
  {
    id: "11",
    title: "lição 11",
    skillId: "2",
    songIds: ["17"],
  },
  {
    id: "12",
    title: "lição 12",
    skillId: "2",
    songIds: ["18"],
  },
  {
    id: "13",
    title: "lição 13",
    skillId: "2",
    songIds: ["19", "20"],
  },
  {
    id: "14",
    title: "lição 14",
    skillId: "3",
    songIds: ["21"],
  },
  {
    id: "15",
    title: "lição 15",
    skillId: "3",
    songIds: ["22"],
  },
  {
    id: "16",
    title: "Staccatos",
    skillId: "4",
    songIds: ["23"],
  },
  {
    id: "17",
    title: "Arpejos",
    skillId: "5",
    songIds: ["24", "25"],
  },
  {
    id: "18",
    title: "",
    skillId: "6",
    songIds: ["26", "27", "28", "29", "30", "31"],
  },
  {
    id: "19",
    title: "",
    skillId: "7",
    songIds: ["32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "54", "57", "47", "48", "49", "55", "50", "51", "52", "53"],
  },
  /* {
    id: "20",
    title: "",
    skillId: "8",
    songIds: [],
  }, */
  {
    id: "21",
    title: "Aplicação e Controle do Ar",
    skillId: "4",
    songIds: ["56"],
  },
];

let lessons_csv = 'id,title,skill_id';
let lessons_songs_csv = 'lesson_id,song_id';

lessons.forEach((lesson, index) => {
  lessons_csv += `\n${index+1},${lesson.title},${lesson.skillId}`;
  lesson.songIds.forEach((songId) => {
    lessons_songs_csv += `\n${index+1},${songId}`
  });
});

const fs = require('fs');
fs.writeFileSync('lessons.csv', lessons_csv);
fs.writeFileSync('lessons_songs.csv', lessons_songs_csv);

module.exports = lessons;
/* export default lessons; */