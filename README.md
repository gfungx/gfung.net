# gfung.net

Welcome to my personal website, my slice of the internet where I share my thoughts and experiences.

## Technologies

- [Next.js](https://nextjs.org/)
- [Preact](https://preactjs.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [MongoDB](https://www.mongodb.com/)

## Running Locally

To get started, clone the repo

```bash
$ git clone https://github.com/gfungx/gfung.net.git
$ cd gfung.net
```

Then, create an `.env.local` file and fill out these fields

```
BASE_URL={URL of website}
MONGODB_USER={MongoDB username}
MONGODB_PASSWORD={MongoDB password}
NEXTAUTH_URL={URL of website}
NEXTAUTH_SECRET={A series of randomized characters (the longer the better) - you can run 'openssl rand -base64 64'}
NEXTAUTH_JWT_SECRET={A series of randomized characters (the longer the better) - you can run 'openssl rand -base64 64'}
NEXTAUTH_JWT_SIGNING_KEY={Run 'npx node-jose-tools newkey -s 256 -t oct -a HS512'}
NEXTAUTH_JWT_ENCRYPTION_KEY={Run 'npx node-jose-tools newkey -s 256 -t oct -a A256GCM -u enc'}
GITHUB_CLIENT_ID={GitHub client ID}
GITHUB_CLIENT_SECRET={GitHub client secret}
TWITTER_CLIENT_ID={Twitter client ID}
TWITTER_CLIENT_SECRET={Twitter client secret}
```

Then, get the local server running

```bash
$ yarn
$ yarn dev
```
