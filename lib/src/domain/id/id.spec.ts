import { ObjectID } from 'bson';
import { Id } from './id';

describe('Id', () => {
  it('Generates id', () => {
    const id = Id.generate();

    expect(id).toBeDefined();
    expect(ObjectID.isValid(id.toString())).toBeTruthy();
  });
});
