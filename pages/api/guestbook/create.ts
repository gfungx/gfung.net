import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/client';
import { MongoClient } from 'mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });
  const client = new MongoClient(
    `mongodb+srv://${process.env.MONGODB_USER!}:${process.env
      .MONGODB_PASSWORD!}@gfung.cwn09.mongodb.net?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );

  if (req.method === 'POST' && session) {
    try {
      await client.connect();

      const collection = client.db('guestbook').collection('entries');

      await collection.insertOne({
        name: req.body.name,
        comment: req.body.comment,
        createdAt: req.body.createdAt
      });
    } finally {
      await client.close();
    }
  } else {
    res.status(404);
  }

  res.end();
}
