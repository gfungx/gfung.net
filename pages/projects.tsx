import type { FunctionalComponent } from 'preact';
import type { GetStaticProps } from 'next';
import type { Projects as ProjectsType } from 'types/projects';

import fetcher from 'lib/externalFetcher';
import Container from 'components/Container';
import Project from 'components/Projects/Project';

type ProjectsProps = {
  projects: ProjectsType;
};

const title = 'Projects';
const description = `See what I'm working on now and what I've done!`;
const url = 'https://gfung.net/projects';

export const getStaticProps: GetStaticProps = async () => {
  const projects = await fetcher('https://api.github.com/users/gfungx/repos');

  return {
    props: {
      projects
    },
    revalidate: 60 * 60 * 20
  };
};

const Projects: FunctionalComponent<ProjectsProps> = ({ projects }) => (
  <Container SEO={{ title, description, url }}>
    <h1 className="font-bold text-5xl">Projects</h1>
    <p className="my-4">
      Although I'm a busy student most days, I've found some time to work on some projects. I mainly
      focus on building web apps with{' '}
      <a href="https://reactjs.org/" target="_blank" className="underline">
        React
      </a>{' '}
      and{' '}
      <a href="https://nextjs.org" target="_blank" className="underline">
        Next.js
      </a>
      . I'm always looking to learn something new, especially delving into machine learning and{' '}
      <a href="https://graphql.org/" target="_blank" className="underline">
        GraphQL
      </a>
      . Anyways, here some of my projects that you can find on my{' '}
      <a href="https://github.com/gfungx" target="_blank" className="underline">
        GitHub
      </a>{' '}
      page!
    </p>
    <div className="grid gap-4 lg:grid-cols-2 mt-6">
      {projects.map(project => (
        <Project {...project} />
      ))}
    </div>
  </Container>
);

export default Projects;
