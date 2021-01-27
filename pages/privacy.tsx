import type { FunctionalComponent } from 'preact';

import Container from 'components/Container';

const title = 'Privacy Policy';
const description = 'Our privacy policy.';
const url = 'https://gfung.net/privacy';

const Privacy: FunctionalComponent = () => (
  <Container SEO={{ title, description, url }}>
    <h1 className="heading">Our Privacy Policy</h1>
    <br />
    <p>
      gfung.net is committed to providing quality services to you and this policy outlines our
      ongoing obligations to you in respect of how we manage your Personal Information.
    </p>
    <br />
    <p>
      We have adopted the Australian Privacy Principles (APPs) contained in the Privacy Act 1988
      (Cth) (the Privacy Act). The NPPs govern the way in which we collect, use, disclose, store,
      secure and dispose of your Personal Information.
    </p>
    <br />
    <p>
      A copy of the Australian Privacy Principles may be obtained from the website of The Office of
      the Australian Information Commissioner at www.aoic.gov.au
    </p>
    <br />
    <h1 className="font-bold text-2xl">What is Personal Information and why do we collect it?</h1>
    <br />
    <p>
      Personal Information is information or an opinion that identifies an individual. The Personal
      Information we acquire are provided through Social Media Sign In forms.
    </p>
    <br />
    <p>
      We collect this information to prevent spam and bots. Information about you is stored purely
      for identification and vanity purposes. (i.e. your name on the guestbook)
    </p>
    <br />
    <h1 className="font-bold text-2xl">Third Party Access</h1>
    <br />
    <p>
      We utilise social networking OAuth functionalities to handle signing in. We use the
      information that they provide (which you have given them voluntarily when signing up to their
      services). These services have their own privacy policies. You can access the privacy policies
      for{' '}
      <a href="https://policies.google.com/privacy?hl=en-US" className="underline">
        Google
      </a>
      ,{' '}
      <a href="https://twitter.com/privacy?lang=en" className="underline">
        Twitter
      </a>{' '}
      and{' '}
      <a
        href="https://docs.github.com/en/github/site-policy/github-privacy-statement"
        className="underline"
      >
        Github
      </a>{' '}
      on their websites.
    </p>
    <br />
    <h1 className="font-bold text-2xl">Access to your Personal Information</h1>
    <br />
    <p>
      You may access the Personal Information we hold about you and to update and/or correct it,
      subject to certain exceptions. If you wish to access your Personal Information, please contact
      us in writing.
    </p>
    <br />
    <p>
      gfung.net will not charge any fee for your access request, but may charge an administrative
      fee for providing a copy of your Personal Information. In order to protect your Personal
      Information we may require identification from you before releasing the requested information.
    </p>
    <br />
    <h1 className="font-bold text-2xl">Policy Updates</h1>
    <br />
    <p>This Policy may change from time to time and is available on our website.</p>
    <br />
    <h1 className="font-bold text-2xl">Privacy Policy Complaints and Enquiries</h1>
    <br />
    <p>
      If you have any queries or complaints about our Privacy Policy please contact us at:{' '}
      <a href="mailto:hi@gfung.net" className="underline">
        hi@gfung.net
      </a>
    </p>
  </Container>
);

export default Privacy;
