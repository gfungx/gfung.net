import type { NextApiRequest, NextApiResponse } from 'next';

import { getSession } from 'next-auth/client';
import { MongoClient, ObjectId } from 'mongodb';

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

  await client.connect();
  const collection = client.db('guestbook').collection('entries');

  const alreadyCommented = await collection.findOne({ email: req.body.email });

  if (req.method === 'POST' && session && !alreadyCommented) {
    try {
      await collection.insertOne({
        name: req.body.name,
        comment: req.body.comment,
        email: req.body.email,
        createdAt: req.body.createdAt
      });
      res.send('Complete');
    } finally {
      await client.close();
    }
  } else {
    res.status(404).send('fail');
  }

  res.end();
}
