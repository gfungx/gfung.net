import type { FunctionalComponent } from 'preact';

import Link from 'next/link';

import Container from 'components/Container';

const title = '404';
const description = 'Oh no! Something went wrong.';
const url = 'https://gfung.net/404';

const Projects: FunctionalComponent = () => (
  <Container SEO={{ title, description, url }}>
    <h1 className="font-bold text-5xl">Oh no!</h1>
    <p className="text-lg my-4">
      Something went wrong! It looks like the page you were looking for couldn't be found 😞 Don't
      worry though, make sure you've typed the correct link. Return{' '}
      <span className="underline">
        <Link href="/">Home</Link>
      </span>
      .
    </p>
  </Container>
);

export default Projects;
