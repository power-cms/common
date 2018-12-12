import { ObjectID } from 'bson';
import { Id } from '../../domain/id/id';
import { ObjectIDFactory } from './objectid.factory';

describe('ObjectId factory', () => {
  it('Generates id from domain id', () => {
    const stringId = '5bc43a6a1c9d4410052516ec';

    const id: ObjectID = ObjectIDFactory.fromDomainId(Id.fromString(stringId));

    expect(id.toHexString()).toBe(stringId);
  });

  it('Generates id from string', () => {
    const stringId = '5bc43a6a1c9d4410052516ec';

    const id: ObjectID = ObjectIDFactory.fromString(stringId);

    expect(id.toHexString()).toBe(stringId);
  });
});
