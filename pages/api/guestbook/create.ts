import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/client';
import { MongoClient } from 'mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });
  const client = new MongoClient(process.env.MONGODB_URI!, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  if (req.method === 'POST' && session) {
    try {
      await client.connect();

      const collection = client.db('guestbook').collection('comments');

      await collection.insertOne({
        name: req.body.name,
        comment: req.body.comment,
        createdAt: new Date()
      });
    } finally {
      await client.close();
    }
  } else {
    res.status(404);
  }

  res.end();
}
