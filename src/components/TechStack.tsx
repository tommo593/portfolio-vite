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
    <div className="flex flex-row flex-wrap justify-center gap-2 py-8">
      <div className="w-10">
        <ReactOriginal size={40} className="duration-300 hover:scale-150" />
      </div>
      <div className="w-10 duration-300 hover:scale-150">
        <VitejsOriginal size={40} />
      </div>
      <div className="w-10 duration-300 hover:scale-150">
        <NextjsOriginal size={40} />
      </div>
      <div className="w-10 duration-300 hover:scale-150">
        <TypescriptOriginal size={40} />
      </div>
      <div className="w-10 duration-300 hover:scale-150">
        <TailwindcssOriginal size={40} />
      </div>
      <div className="w-10 duration-300 hover:scale-150">
        <NodejsOriginal size={40} />
      </div>
      <div className="w-10 duration-300 hover:scale-150">
        <GitOriginal size={40} />
      </div>
      <div className="w-10 duration-300 hover:scale-150">
        <JiraOriginal size={40} />
      </div>
    </div>
  );
};

export default TechStack;
