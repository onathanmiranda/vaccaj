import H1 from "@/components/atoms/h1";
import ModuloAbout from "@/components/molecules/modulo-about";
import ModuloLessons from "@/components/molecules/modulos-lessons";

export default function ModuloSection({ modulo }) {
  return (
    <section className="pb-36 max-w-screen-sm mx-auto">
      <div className="px-6 mt-8">
        <H1 className>{modulo.title}</H1>
        <ModuloLessons lessons={modulo.lessons} className={`mt-8`} />
        <ModuloAbout modulo={modulo} className={`mt-8`} />
      </div>
    </section>
  );
}
