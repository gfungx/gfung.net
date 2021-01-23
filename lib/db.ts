import { MongoClient } from 'mongodb';

const client = new MongoClient(
  `mongodb+srv://${process.env.MONGODB_USER!}:${process.env
    .MONGODB_PASSWORD!}@gfung.cwn09.mongodb.net?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

export default client;
