import {
  VitejsOriginal,
  ReactOriginal,
  TailwindcssOriginal,
  NextjsOriginal,
  NodejsOriginal,
  TypescriptOriginal,
  GitOriginal,
  JiraOriginal,
} from "devicons-react";

const TechStack = () => {
  return (
    <div className="flex flex-row justify-between py-8 px-20">
      <ReactOriginal className="animate-spin h-28" />
      <VitejsOriginal />
      <NextjsOriginal />
      <TypescriptOriginal />
      <TailwindcssOriginal />
      <NodejsOriginal />
      <GitOriginal />
      <JiraOriginal />
    </div>
  );
};

export default TechStack;
