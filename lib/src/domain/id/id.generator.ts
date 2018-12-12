import { ObjectID } from 'bson';

export const generate = (): string => {
  return new ObjectID().toHexString()
};
