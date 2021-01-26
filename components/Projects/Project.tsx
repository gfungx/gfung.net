import type { FunctionalComponent } from 'preact';
import type { Project as ProjectProps } from 'types/projects';

const Project: FunctionalComponent<ProjectProps> = ({
  name,
  full_name,
  language,
  stargazers_count,
  watchers_count,
  description
}) => (
  <a href={`https://github.com/${full_name}`} target="_blank">
    <div className="h-44 rounded-lg border border-gray-200 shadow-lg transform hover:scale-105 hover:border-gray-500 hover:shadow-2xl transition duration-200 cursor-pointer pt-6 p-8">
      <div className="flex justify-between">
        <h1 className="font-bold text-2xl">{name}</h1>
        <h1 className="pt-1">
          {stargazers_count} ⭐ | {watchers_count} 👀
        </h1>
      </div>
      <p className="uppercase text-gray-300 text-xs mt-1">
        {full_name} | {language}
      </p>
      <p className="pt-2">{description}</p>
    </div>
  </a>
);

export default Project;
