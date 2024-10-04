import Image from "next/image";
import P from "@/components/atoms/p";
import { H2, H3 } from "@/components/atoms/headings";

const ComponentForContentType = {
  paragraph: ({ text }) => {
    return <P className="mt-8 normal-case">{text}</P>;
  },
  title: ({ text }) => {
    return <H3 className="mt-8 normal-case">{text}</H3>;
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
      <P className="normal-case">{modulo.about.intro}</P>
      {modulo.about.sections &&
        modulo.about.sections.map((section) => {
          return (
            <section key={section.title} className="mt-8">
              <H2 className="normal-case">{section.title}</H2>
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
