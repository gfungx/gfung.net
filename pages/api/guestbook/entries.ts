import type { NextApiRequest, NextApiResponse } from 'next';

import { MongoClient } from 'mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = new MongoClient(
    `mongodb+srv://${process.env.MONGODB_USER!}:${process.env
      .MONGODB_PASSWORD!}@gfung.cwn09.mongodb.net?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );

  if (req.method === 'GET') {
    try {
      await client.connect();

      const entries = await client
        .db('guestbook')
        .collection('entries')
        .find({})
        .sort({ createdAt: -1 })
        .toArray();

      res.send(entries);
    } finally {
      await client.close();
    }
  } else {
    res.status(404);
  }

  res.end();
}
