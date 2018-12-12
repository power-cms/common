import { Db, MongoClient } from 'mongodb';

export const createDatabaseConnection = async (): Promise<Db> => {
  const mongoClient: MongoClient = await MongoClient.connect(
    `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}`,
    {useNewUrlParser: true}
  );

  return mongoClient.db(process.env.DB_DATABASE);
};
