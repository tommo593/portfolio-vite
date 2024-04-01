import {
  VitejsOriginal,
  ReactOriginal,
  TailwindcssOriginal,
  NextjsOriginal,
  NodejsOriginal,
  TypescriptOriginal,
  GitOriginal,
  JiraOriginal,
} from 'devicons-react';

const TechStack = () => {
  return (
    <div className="tech-icons flex flex-row justify-between px-20 py-8">
      <ReactOriginal className="animate-spin" />
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
