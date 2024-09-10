import Models from "@/models";

export default async function Page(props) {
  const externalTools = await Models.ExternalLinks.getAll();
  return <></>;
}
