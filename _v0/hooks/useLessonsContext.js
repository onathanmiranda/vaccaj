import { useContext } from "react";
import { LessonsContext } from "../contexts/lessonsContext";

export default function useLessonsContext(){
  const [lessonsContextState] = useContext(LessonsContext);
  return lessonsContextState;
};