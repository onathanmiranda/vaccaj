import { useLessonsContext } from "../../../contexts/lessonsContext";
import { useGuidesContext } from "../../../contexts/guidesContext";
import Markup from "./markup";

export default function SkillsList() {
  const { reducedData } = useLessonsContext();
  const { guidesContextState } = useGuidesContext();

  return (
    <Markup
      skills={reducedData}
      disablePointerEvents={guidesContextState.shown}
    />
  );
}
