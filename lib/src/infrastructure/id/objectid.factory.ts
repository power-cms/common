import { ObjectID } from 'mongodb';
import { Id } from '../../domain/id/id';

export const ObjectIDFactory = {
  fromDomainId: (id: Id): ObjectID => {
    return new ObjectID(id.toString());
  },
  fromString: (id: string): ObjectID => {
    return new ObjectID(id);
  },
};
