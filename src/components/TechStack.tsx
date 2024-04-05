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
    <div className="flex flex-row flex-wrap justify-center gap-8 py-8">
      <div className="w-10">
        <ReactOriginal size={40} className="animate-spin" />
      </div>
      <div className="w-10">
        <VitejsOriginal size={40} />
      </div>
      <div className="w-10">
        <NextjsOriginal size={40} />
      </div>
      <div className="w-10">
        <TypescriptOriginal size={40} />
      </div>
      <div className="w-10">
        <TailwindcssOriginal size={40} />
      </div>
      <div className="w-10">
        <NodejsOriginal size={40} />
      </div>
      <div className="w-10">
        <GitOriginal size={40} />
      </div>
      <div className="w-10">
        <JiraOriginal size={40} />
      </div>
    </div>
  );
};

export default TechStack;
