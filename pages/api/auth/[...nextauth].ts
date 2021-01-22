import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorizationUrl:
        'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code'
    }),
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      scope: 'user:email'
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: { jwt: true },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
    encryption: true,
    signingKey: process.env.NEXTAUTH_JWT_SIGNING_KEY,
    encryptionKey: process.env.NEXTAUTH_JWT_ENCRYPTION_KEY
  }
};

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);
