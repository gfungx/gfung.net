import type { FunctionalComponent } from 'preact';
import type { Project as ProjectProps } from 'types/projects';

const Project: FunctionalComponent<ProjectProps> = ({
  name,
  full_name,
  language,
  stargazers_count,
  watchers_count,
  description,
  html_url,
  homepage
}) => (
  <div className="h-48 rounded-lg border border-gray-200 dark:border-gray-600 shadow-lg transform hover:scale-105 hover:border-gray-500 dark:hover:border-gray-100 hover:shadow-2xl transition duration-200 pt-6 p-8">
    <div className="flex justify-between">
      <h1 className="font-bold text-2xl">{name}</h1>
      <h1 className="pt-1">
        {stargazers_count} ⭐ | {watchers_count} 👀
      </h1>
    </div>
    <p className="uppercase text-gray-300 text-xs mt-1">
      {full_name} | {language}
    </p>
    <p className="pt-1">{description}</p>
    <p className="font-bold text-blue-500 absolute bottom-4">
      <a href={html_url} target="_blank">
        GitHub{' '}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="inline-block -mt-1"
        >
          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
        </svg>
      </a>{' '}
      {homepage ? (
        <>
          <p className="inline-block">|</p>{' '}
          <a href={homepage} target="_blank" className="inline-block">
            Homepage{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="inline-block -mt-1"
            >
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </a>
        </>
      ) : null}
    </p>
  </div>
);

export default Project;
