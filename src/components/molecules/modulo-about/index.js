import Image from "next/image";
import P from "@/components/atoms/p";

const ComponentForContentType = {
  paragraph: ({ text }) => {
    return <P className="mt-8">{text}</P>;
  },
  title: ({ text }) => {
    return <h3 className="text-xl mt-8">{text}</h3>;
  },
  image: ({ sourceUrl }) => {
    return (
      <Image
        className="mt-8"
        width={488}
        height={51}
        src={sourceUrl}
        alt="image"
      />
    );
  },
  "ordered-list": ({ items }) => {
    return (
      <ol className="mt-8 pl-8">
        {items.map((item) => {
          return (
            <li className="mt-2" key={item}>
              {item}
            </li>
          );
        })}
      </ol>
    );
  }
};

export default function ModuloAbout({ modulo, className }) {
  return (
    <div className={`${className} text-sm`}>
      <P>{modulo.about.intro}</P>
      {modulo.about.sections &&
        modulo.about.sections.map((section) => {
          return (
            <section key={section.title} className="mt-8">
              <h2 className="text-2xl">{section.title}</h2>
              {section.content.map((content) => {
                const ContentComponent = ComponentForContentType[content.type];
                if (!ContentComponent) return null;
                return (
                  <ContentComponent
                    key={JSON.stringify(content)}
                    {...content}
                  />
                );
              })}
            </section>
          );
        })}
    </div>
  );
}
