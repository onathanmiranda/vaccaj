import Markup from "./markup";

export default function SkillsList({ skills, module, horizontal = false }) {
  return <Markup skills={skills} module={module} horizontal={horizontal} />;
}
