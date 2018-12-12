import { createDatabaseConnection } from "./mongo.database";
import { MongoClient } from 'mongodb';

const fakeDb = {fakeDbObject: true};
const db = jest.fn(() => fakeDb);

jest.mock('mongodb', () => ({
  MongoClient: {
    connect: jest.fn(() => ({db}))
  }
}));

describe('Mongo database', () => {
  it('Initialize mongodb connection', async () => {
    const db = await createDatabaseConnection();

    expect(MongoClient.connect).toBeCalled();
    expect(db).toEqual(fakeDb);
  });
});
