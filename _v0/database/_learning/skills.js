const skills = [
  { id: "1", title: "Intervalos" },
  { id: "2", title: "Ornamentos" },
  { id: "3", title: "Recitativos e Arias" },
  { id: "4", title: "Diafragma" },
  { id: "5", title: "Aquecimentos" },
  { id: "6", title: "Belting" },
  { id: "7", title: "Panofka Op.81" }
];

let skillCSV = 'title';
skills.forEach((skill) => {
  skillCSV += `\n${skill.title}`
});
const fs = require('fs');
fs.writeFileSync('skills.csv', skillCSV);

/* 
export default skills; */