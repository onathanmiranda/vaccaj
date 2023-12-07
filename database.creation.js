import ModuleModel from "./data/models/Module";
import Database from "./data/database";
import VoiceTypeModel from "././data/models/VoiceType";
import RecordingModel from "././data/models/Recording";
import SheetModel from "././data/models/Sheet";
import SongModel from "././data/models/Song";
import SkillModel from "././data/models/Skill";
import LessonModel from "././data/models/Lesson";

VoiceTypeModel.hasMany(RecordingModel)
RecordingModel.belongsTo(VoiceTypeModel);

VoiceTypeModel.belongsToMany(SheetModel, { through: 'sheets:voice_types' });
SheetModel.belongsToMany(VoiceTypeModel, { through: 'sheets:voice_types' });

SongModel.hasMany(SheetModel);
SongModel.hasMany(RecordingModel);
SheetModel.belongsTo(SongModel);
RecordingModel.belongsTo(SongModel);

SkillModel.hasMany(LessonModel)
LessonModel.belongsTo(SkillModel);
LessonModel.belongsToMany(SongModel, { through: "lessons:songs" });
SongModel.belongsToMany(LessonModel, { through: "lessons:songs" });

ModuleModel.hasMany(LessonModel);
LessonModel.belongsTo(ModuleModel);

import { recordings, voiceTypes, sheets, songs, skills, lessons, modules } from "./data/learning";

await Database.sync({ force: true });

voiceTypes.forEach(({ title }) => {
  VoiceTypeModel.create({
    title
  });
});

recordings.forEach(async ({ id, type, filePath, voiceType, accompaniment, vocals }) => {
  const VoiceType = await VoiceTypeModel.findByPk(Number(voiceType) + 1);
  
  const recording = await RecordingModel.create({
    id: Number(id),
    mime: type,
    url: filePath,
    accompaniment,
    vocals
  });

  recording.setVoice_type(VoiceType);
});

sheets.forEach(async ({ filePaths, voiceTypes }) => {
  const sheet = await SheetModel.create({
    pages: filePaths
  });

  voiceTypes.forEach(async (id) => {
    id = Number(id) + 1;
    const voiceType = await VoiceTypeModel.findByPk(id);
    await sheet.addVoice_type(voiceType)
  });
});

songs.forEach(async ({ recordingIds, sheetsList, title, slug, beginning, instructions, lyrics }) => {
  const song = await SongModel.create({
    title,
    slug,
    summary: beginning,
    instructions,
    lyrics
  });

  recordingIds.forEach(async (id) => {
    const recording = await RecordingModel.findByPk(Number(id));
    await recording.setSong(song);
  });
  sheetsList.forEach(async (id) => {
    const sheet = await SheetModel.findByPk(Number(id));
    await sheet.setSong(song);
  });
});

skills.forEach(async ({ title }) => {
  await SkillModel.create({ title });
});

lessons.forEach(async ({ title, skillId, songIds }) => {
  const skill = await SkillModel.findByPk(Number(skillId));
  const lesson = await LessonModel.create({
    title
  });
  await lesson.setSkill(skill);
  songIds.forEach(async(id) => {
    const song = await SongModel.findByPk(Number(id));
    await lesson.addSong(song);
  });
});

modules.forEach(async ({ title, slug, about, lessonsIds }) => {
  const modul = await ModuleModel.create({
    title,
    slug,
    about
  });

  lessonsIds.forEach(async (id) => {
    if(id === "21") id = 20
    const lesson = await LessonModel.findByPk(Number(id));
    lesson.setModule(modul);
  });
});