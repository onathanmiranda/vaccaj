import { useLessonsContext } from "../../../contexts/lessonsContext";
import Markup from "./markup";

export default function SkillsList() {
  const { reducedData } = useLessonsContext();
  return <Markup skills={reducedData} />;
}
