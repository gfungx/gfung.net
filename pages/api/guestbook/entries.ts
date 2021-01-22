import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = new MongoClient(process.env.MONGODB_URI!, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

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
