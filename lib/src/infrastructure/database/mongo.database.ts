import { Db, MongoClient } from 'mongodb';

export type MongoConnection = Promise<Db>;

export const createDatabaseConnection = async (dbName?: string): MongoConnection => {
  const mongoClient: MongoClient = await MongoClient.connect(
    `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}`,
    {useNewUrlParser: true}
  );

  return mongoClient.db(dbName || process.env.DB_DATABASE);
};
