import { H1 } from "@/components/atoms/headings";
import ModuloAbout from "./modulo-about";
import ModuloLessons from "./modulo-lessons";

export default function ModuloPage({ modulo }) {
  return (
    <section className="pb-36 h-full overflow-y-scroll">
      <div className="px-6 mt-8 max-w-screen-sm mx-auto">
        <H1 className>{modulo.title}</H1>
        <ModuloLessons lessons={modulo.lessons} className={`mt-8`} />
        <ModuloAbout modulo={modulo} className={`mt-8`} />
      </div>
    </section>
  );
}
