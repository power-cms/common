import { ObjectID } from 'bson';
import { generate } from './id.generator';

describe('Id generator', () => {
  it('Generates id', () => {
    const id = generate();

    expect(id).toBeDefined();
    expect(ObjectID.isValid(id)).toBeTruthy();
  });
});
