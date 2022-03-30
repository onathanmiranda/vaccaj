import { useLessonsContext } from "../../../contexts/lessonsContext";
import Markup from "./markup";

export default function LessonsList() {
  const { reducedData } = useLessonsContext();
  return <Markup lessons={reducedData} />;
}
