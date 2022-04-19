import { usePlayerContext } from "../../../contexts/playerContext";

import Markup from "./markup";

export default function SkillsList({ skills }) {
  const { playerContextState } = usePlayerContext();
  const { showGuides } = playerContextState;

  return <Markup skills={skills} disablePointerEvents={showGuides} />;
}
